import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { homeBannerImg, aboutBannerImg } from "../constants/images";
// import aboutArticlesData from "../constants/aboutArticlesData";

import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import AboutArticles from "./AboutArticles";
import PageError from "./pages/PageError";
import Single from "./pages/Single";

import homeBannerImg from "../assets/images/photos/homeBannerImg.jpeg";
import aboutBannerImg from "../assets/images/photos/aboutBannerImg.jpeg";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="mainContainer">
                <Header />
                <Banner image={homeBannerImg} showText={true} />
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
            {
                path: "logement",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <div>Logement</div>,
                    },
                    {
                        path: ":id",
                        element: <Single />,
                    },
                ],
            },
        ],
    },
    {
        path: "/apropos",
        element: (
            <>
                <div className="mainContainerAbout">
                    <Header />
                    <Banner image={aboutBannerImg} showText={false} />
                    <div>
                        <AboutArticles />
                    </div>
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

