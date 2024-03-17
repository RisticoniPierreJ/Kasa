import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Footer from "../layout/Footer";
import PageError from "../../pages/PageError";
import Housing from "../../pages/Housing";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="homeContainer">
                <Header />
                <Home />
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

export default router;
