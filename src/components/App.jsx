import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import homeBannerImg from "../assets/images/photos/homeBannerImg.jpeg";
// import aboutBannerImg from "../assets/images/photos/aboutBannerImg.jpeg";

import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
// import Banner from "./Banner";
import Footer from "./Footer";
// import AboutArticles from "./AboutArticles";
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

        children: [
            // {
            //     path: "logement",
            //     element: <Outlet />,
            //     children: [
            //         {
            //             path: "",
            //             element: <div>Logement</div>,
            //         },
            //         {
            //             path: ":id",
            //             element: <Single />,
            //         },
            //     ],
            // },
            // {
            //     path: "/apropos",
            //     element: (
            //         <>
            //             <About />
            //         </>
            //     ),
            // },
        ],
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
            // {
            //     path: "",
            //     element: <div>Logement</div>,
            // },
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
