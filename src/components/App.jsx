import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import PageError from "./PageError";
import Single from "./pages/Single";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="mainContainer">
                <Header />,
                <Banner />,
                <Footer />
            </div>
        ),
        errorElement: <PageError />,

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
            {
                path: "apropos",
                element: <div>À Propos</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import PageError from "./PageError";
// import Single from "./pages/Single";

// function App() {
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<div>Home</div>} />
//                 <Route path="/logement/*" element={<Single />} />
//                 <Route path="/apropos" element={<div>À Propos</div>} />
//                 <Route path="*" element={<PageError />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;