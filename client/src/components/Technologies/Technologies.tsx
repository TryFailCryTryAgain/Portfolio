import style from './Technologies.module.css';
import astro from '../../assets/tabler_brand-astro.png';
import vite from '../../assets/tabler_brand-vite.png';
import vercel from '../../assets/tabler_brand-vercel.png';
import typescript from '../../assets/tabler_brand-typescript.png';
import netlify from '../../assets/Netlify.png';

type TechItem = {
    name: string;
    icon: React.ReactNode;
};

type TechGroup = {
    label: string;
    items: TechItem[];
};

const techGroups: TechGroup[] = [
    {
        label: 'languages',
        items: [
            { name: 'JavaScript', icon: <i className="fab fa-js"></i> },
            { name: 'TypeScript', icon: <img src={typescript} alt="TypeScript logo" /> },
            { name: 'HTML', icon: <i className="fab fa-html5"></i> },
            { name: 'CSS', icon: <i className="fab fa-css3-alt"></i> },
            { name: 'Sass', icon: <i className="fab fa-sass"></i> },
        ],
    },
    {
        label: 'frameworks',
        items: [
            { name: 'React', icon: <i className="fab fa-react"></i> },
            { name: 'Angular', icon: <i className="fab fa-angular"></i> },
            { name: 'Astro.js', icon: <img src={astro} alt="Astro.js logo" /> },
        ],
    },
    {
        label: 'backend & infra',
        items: [
            { name: 'Node.js', icon: <i className="fab fa-node-js"></i> },
            { name: 'Docker', icon: <i className="fab fa-docker"></i> },
            { name: 'AWS', icon: <i className="fab fa-aws"></i> },
        ],
    },
    {
        label: 'build & deploy',
        items: [
            { name: 'Vite', icon: <img src={vite} alt="Vite logo" /> },
            { name: 'Vercel', icon: <img src={vercel} alt="Vercel logo" /> },
            { name: 'Netlify', icon: <img src={netlify} alt="Netlify logo" /> },
        ],
    },
];

function Technologies() {
    return (
        <section className={style.Technologies}>

            <p className={style.title}>Technologies</p>

            <div className={style.groups}>
                {techGroups.map((group) => (
                    <div className={style.group} key={group.label}>
                        <p className={style.group_label}>{group.label}</p>
                        <div className={style.tech_wrapper}>
                            {group.items.map((item) => (
                                <div className={style.tech} key={item.name}>
                                    {item.icon}
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
};

export default Technologies;