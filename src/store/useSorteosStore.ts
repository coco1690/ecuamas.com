import { supabase } from '@/supabase/client';
import { create } from 'zustand';

type Sorteo = {
  id: string;
  titulo: string;
  subtitulo?: string;
  descripcion?: string;
  estado: 'creada' | 'activa' | 'finalizada' | 'cancelada';
  fecha_inicio: string;
  fecha_fin?: string;
  precio_boleta: number;
  imagenes?: string[];
  numero_ganador?: string;
  loteria?: string;
  created_at: string;
}

interface SorteosStore {
  sorteos: Sorteo[];
  loading: boolean;
  error: string | null;
  lastFetch: number | null;

  // Funciones
  fetchSorteos: (forceRefresh?: boolean) => Promise<void>;
  getSorteoById: (id: string) => Sorteo | undefined;
  getSorteosActivos: () => Sorteo[];
  clearCache: () => void;
}

export const useSorteosStore = create<SorteosStore>((set, get) => ({
  sorteos: [],
  loading: false,
  error: null,
  lastFetch: null,

  fetchSorteos: async (forceRefresh = false) => {
    const { sorteos, lastFetch } = get();
    const CACHE_KEY = 'sorteos_cache';
    const CACHE_TIME_KEY = 'sorteos_lastFetch';
    const CACHE_DURATION = 300000; // 5 minutos

    // Intentar cargar desde localStorage
    if (sorteos.length === 0 && !forceRefresh) {
      try {
        const cachedSorteos = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

        if (cachedSorteos && cachedTime) {
          const parsedSorteos = JSON.parse(cachedSorteos);
          const parsedTime = parseInt(cachedTime);

          if (Date.now() - parsedTime < CACHE_DURATION) {
            console.log('✅ Cargando sorteos desde localStorage');
            set({
              sorteos: parsedSorteos,
              lastFetch: parsedTime,
              loading: false
            });
            return;
          }
        }
      } catch (error) {
        console.error('Error al leer localStorage:', error);
      }
    }

    // Si hay cache reciente en memoria, no hacer fetch
    if (!forceRefresh && sorteos.length > 0 && lastFetch && Date.now() - lastFetch < CACHE_DURATION) {
      console.log('✅ Usando cache en memoria');
      return;
    }

    set({ loading: true, error: null });

    try {
      // Obtener solo sorteos activos o finalizados (no cancelados ni en creación)
      const { data, error } = await supabase
        .from('rifas')
        .select('id, titulo, subtitulo, descripcion, estado, fecha_inicio, fecha_fin, precio_boleta, imagenes, numero_ganador, loteria, created_at')
        .in('estado', ['activa', 'finalizada'])
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      const timestamp = Date.now();

      // Guardar en localStorage
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIME_KEY, timestamp.toString());
        console.log('💾 Sorteos guardados en localStorage');
      } catch (error) {
        console.error('Error al guardar en localStorage:', error);
      }

      set({
        sorteos: data as Sorteo[],
        loading: false,
        lastFetch: timestamp,
        error: null
      });

      console.log('✅ Sorteos actualizados desde BD');

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      set({ loading: false, error: errorMessage });
      console.error('❌ Error al cargar sorteos:', errorMessage);
    }
  },

  getSorteoById: (id: string) => {
    return get().sorteos.find(sorteo => sorteo.id === id);
  },

  getSorteosActivos: () => {
    return get().sorteos.filter(sorteo => sorteo.estado === 'activa');
  },

  clearCache: () => {
    console.log('🗑️ Cache de sorteos limpiado');
    localStorage.removeItem('sorteos_cache');
    localStorage.removeItem('sorteos_lastFetch');
    set({ sorteos: [], lastFetch: null });
  },
}));