import { createBrowserRouter, Router } from "react-router-dom";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import PlantDetail from "./pages/PlantDetail";
import About from "./pages/About";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: "/", element:(<ErrorBoundary> <Home /></ErrorBoundary>) },
            { path: "/catalogo", element: (<ErrorBoundary> <Catalog /></ErrorBoundary>)},
            { path: "/acerca.de.nosotros", element: (<ErrorBoundary> <About /> </ErrorBoundary>)},
            { path: "/plantas/:nombre", element: (<ErrorBoundary> <PlantDetail /> </ErrorBoundary>) }

        ]
    }
])

export default router;
