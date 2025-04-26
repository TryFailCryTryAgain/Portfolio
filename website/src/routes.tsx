import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/Contactpage";
import Workpage from "./pages/Workpage";
import TestingSite from "./pages/TestingSite";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<Workpage />} />
            <Route path="/test" element={<TestingSite />} />
        </Routes>
    );
};

export default AppRoutes;