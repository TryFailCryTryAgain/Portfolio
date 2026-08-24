import style from './Education_Intership.module.css';
import { EDUCATION_WORK_REGISTRY } from './Ed_Work_REGISTRY';

function Ed_Intership() {


    return (
        <>

            <div className={style.title}>Earlier work & Education</div>

            <div className={style.ed_wrapper}>
                {Object.entries(EDUCATION_WORK_REGISTRY).map(([key, row]) => (
                    <div
                        key={key}
                        className={style.row}
                    >
                        <div className={style.row_title_wrapper}>
                            <div className={style.row_title}>
                                <span className={style[row.tag]}>{row.tag}</span>
                                {row.title}
                            </div>
                            <div className={style.year}>
                                {row.year}
                            </div>
                        </div>
                        <div className={style.subtitle}>{row.place}</div>
                        <div className={style.desc}>{row.desc}</div>

                    </div>
                ))}
            </div>
        
        </>
    )


};

export default Ed_Intership;