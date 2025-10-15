
import styles from '../styles/Hero.module.css';

function Hero(){
    return(
        <>
         <header>
            {/* use gsap  */}
            <div className={styles.nameBlinking}>
            <h1>Tasmia Chowdhury</h1>
            </div>
        </header>
        </>
    );
}

export default Hero;