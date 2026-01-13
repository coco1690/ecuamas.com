import { RouterProvider } from 'react-router-dom';
import { useAppStore } from './store/appStore';
import { SplashScreen } from './components/SplashScreen';
import { appRouter } from './router';


function App() {
  const { showSplash, setShowSplash } = useAppStore();

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return <RouterProvider router={appRouter} />;
}

export default App;