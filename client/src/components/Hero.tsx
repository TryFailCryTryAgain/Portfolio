import style from './Hero.module.css';


function Hero() {

    return (
        <>
            <section className={style.hero}>
                <p className={style.title}>David Segerbo</p>
                <p className={style.subtitle}>Fullstack Engineer</p>

                {/* Fill in with good about me text */}
                <p className={style.about}>
                    Newly graduated fullstack developer...
                </p>
            </section>

            
        </>
    )

}

export default Hero;