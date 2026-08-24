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
    steve: { 
        hyperlink: "work/steve", 
        picture: hero, 
        title: "Steve",
        desc: "Steve",
        techs: ["TypeScript", "React"],
    },
    philip: { 
        hyperlink: "work/philip", 
        picture: hero, 
        title: "Philip",
        desc: "Philip",
        techs: ["TypeScript", "React"],
    },
    margret: { 
        hyperlink: "work/margret", 
        picture: hero, 
        title: "Margret",
        desc: "Margret",
        techs: ["TypeScript", "React"],
    }
}