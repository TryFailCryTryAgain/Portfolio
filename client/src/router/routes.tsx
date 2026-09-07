import { Routes, Route } from 'react-router';
import App from '../App';

const AppRoutes = () => {
    return (
        <Routes>

            <Route index element={<App />}/>
            {/* <Route path={RouterContainer.work} element={<Work_Window />}/> */}

        </Routes>
    )
};

export default AppRoutes;