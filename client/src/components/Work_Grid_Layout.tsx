import style from './Work_Grid_Layout.module.css';
import { Link } from 'react-router';
import { CELL_REGISTRY } from './LinkCells';

function WorkGridLayout() {
    return (
        <>
            <section className={style.grid_layout}>
            
                {Object.entries(CELL_REGISTRY).map(([key, cell]) => (
                    <Link 
                        key={key} 
                        className={style.cell} 
                        to={cell.hyperlink}
                        style={{ 
                            backgroundImage: `url(${cell.picture})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <div>
                            <div>{cell.title}</div>
                            <div className={style.muted}>{cell.desc}</div>
                        </div>
                        
                        <div className={style.tech_wrapper}>
                            {cell.techs.map((tech, i) => (
                                <span className={style.tech} key={i}>{tech}</span>
                            ))}
                        </div>                      


                        {/* {cell.picture && (
                            <img src={cell.picture} alt={key} />
                        )} */}
                        

                        
                    </Link>
                ))}


            </section>   

        </>
    )
};

export default WorkGridLayout;