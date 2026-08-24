import { useParams } from 'react-router';
import { WORK_REGISTRY } from './Work/WORK_REGISTRY';

function Work_Window() {
    const { title } = useParams();
    const app = title ? WORK_REGISTRY[title] : undefined;

    if (!app) {
        return <>Not Found!</>;
    }

    const Component = app.component;


    return (
        <>
            <Component />
        </>
    )
};

export default Work_Window;