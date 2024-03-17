import "./assets/css/main.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/route/Route";


function App() {
    return <RouterProvider router={router} />;
}

export default App;