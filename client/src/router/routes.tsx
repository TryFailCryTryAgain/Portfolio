import { Routes, Route } from 'react-router';
import App from '../App';
import { RouterContainer } from './router_container';
import Work_Window from '../components/Work_Window';

const AppRoutes = () => {
    return (
        <Routes>

            <Route index element={<App />}/>
            <Route path={RouterContainer.work} element={<Work_Window />}/>

        </Routes>
    )
};

export default AppRoutes;