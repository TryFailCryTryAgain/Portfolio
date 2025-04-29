import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/Contactpage";
import Workpage from "./pages/Workpage";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<Workpage />} />
        </Routes>
    );
};

export default AppRoutes;