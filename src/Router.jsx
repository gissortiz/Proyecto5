import { createBrowserRouter, Router } from "react-router-dom";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import PlantDetail from "./pages/PlantDetail";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: "/", element: <Home />},
            { path: "/catalogo", element: <Catalog />},
            { path: "/favoritos", element: <Favorites />},
            { path: "/plantas/:nombre", element: <PlantDetail /> }

        ]
    }
])

export default router;
