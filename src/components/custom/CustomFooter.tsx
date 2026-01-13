import { CustomLogo } from "@/components/custom/CustomLogo"
import { SocialLinks } from "@/components/custom/SocialLinks"

export const CustomFooter = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-8 mt-16 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <CustomLogo />
            <p className="text-sm text-muted-foreground">
              Recuerda que el juego es para entretenimiento, disfrútalo con moderación.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Contactanos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:ecuamas@yahoo.com" className="hover:text-amber-400 transition-colors">
                  ecuamas@yahoo.com
                </a>
              </li>
              <li>
                <a href="tel:+593989536961" className="hover:text-amber-400 transition-colors">
                  (+593) 989536961
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  PQRS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Acerca de nosotros</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-amber-400">¿Quiénes somos?</a></li>
              <li><a href="#" className="hover:text-amber-400">Política de tratamiento de datos</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h5 className="font-medium mb-3 text-white text-sm">Síguenos</h5>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ecuamas.com Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}