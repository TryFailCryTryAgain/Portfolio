import hero from '../assets/hero.png';
import img2 from '../assets/react.svg';
import img3 from '../assets/vite.svg';

export interface LinkCells {
    hyperlink: string;
    picture?: string; 
    title: string;
    desc: string;
    techs: string[];
}

export const CELL_REGISTRY: Record<string, LinkCells> = {
    os: { 
        hyperlink: "work/OperativeSystem", 
        picture: hero, 
        title: "Operative System Simulator",
        desc: "A self-contained, browser-based enviroment built with React and Typescript and is fully client-side. It features a draggable window manager, a from-scratch virtual file system with a working terminal shell you can type commands into.",
        techs: ["Typescript", "React", "Vite"],
        // techs: ["TypeScript", "React"],
    },
    paper: {
        hyperlink: 'work/Paper',
        picture: hero,
        title: 'Data collection as a basis for decision-making',
        desc: 'A paper researching how data collection can be used for a decision-making regarding the development of a website. It touches on active / passive data collection. Qualitative / Quantitaive collection. The legal scope that a collection needs to abide by as well as a stick stample and End-To-End tests for a self-developed analytics program. ',
        techs: [],
    }
}

