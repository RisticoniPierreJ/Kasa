import "../assets/css/main.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Footer";
import PageError from "./pages/PageError";
import Housing from "./pages/Housing";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="homeContainer">
                <Header />
                <Home />
                <Outlet />
                <Footer />
            </div>
        ),
        errorElement: (
            <div className="mainContainer">
                <Header />
                <PageError />
                <Footer />
            </div>
        ),
    },
    {
        path: "/logement",
        element: (
            <div className="housingContainer">
                <Header />
                <Outlet />
                <Footer />
            </div>
        ),
        children: [
            {
                path: ":id",
                element: <Housing />,
            },
        ],
    },
    {
        path: "/apropos",
        element: (
            <>
                <div className="aboutContainer">
                    <Header />
                    <About />
                    <Footer />
                </div>
            </>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
