import style from './Hero.module.css';


function Hero() {

    return (
        <>
            <section className={style.hero}>
                <p className={style.title}>David Segerbo</p>
                <p className={style.subtitle}>Fullstack Engineer</p>

                <p className={style.location}>Uppsala, Sweden <span>| Open to remote, hybrid & onsite</span></p>
                <br />
                {/* Fill in with good about me text */}
                <p className={style.about}>
                    Newly graduated developer specialized in TypeScript, Node.js, and document-based databases like MongoDB and Firebase.
                    <br />
                    Most of my hands-on experience is regarding frontend when I built with Astro.js and React. 
                    Enjoy learning and looking for a position where I absorb as much as possible from all directions.

                </p>

                <div className={style.anchor_wrapper}>
                    <a href="https://github.com/TryFailCryTryAgain" className={style.anchor}>
                        <i className='fab fa-github'></i>
                        github.com/tryfailcrytryagain
                    </a>

                    <a href="https://www.linkedin.com/in/david-segerbo-296b47265/" className={style.anchor}>
                        <i className='fab fa-linkedin'></i>
                        in/DavidSegerbo
                    </a>

                    <a href="" className={style.anchor}>
                        <i className='fas fa-envelope'></i>
                        david.k.segerbo@gmail.com
                    </a>

                    <a href="" className={style.anchor}>
                        <i className='fas fa-phone'></i>
                        +46 727 03 2004
                    </a>
                </div>
            </section>

            
        </>
    )

}

export default Hero;