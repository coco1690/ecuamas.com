import { createBrowserRouter, Navigate } from "react-router-dom";
import { SinglePageLayout } from "./single_page/layout/SinglePageLayout";
import { InicioPage } from "./single_page/pages/inicio/InicioPage";
import { QuienesSomosPage } from "./single_page/pages/QuienesSomosPage";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <SinglePageLayout />,
        children: [
             {
                index: true,
                element: <InicioPage />
            },
            {
                path: 'quienes-somos',
                element: <QuienesSomosPage />
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    },
]);