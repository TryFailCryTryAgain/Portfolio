import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/Contactpage";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
};

export default AppRoutes;