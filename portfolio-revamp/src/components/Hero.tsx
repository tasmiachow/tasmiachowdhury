import styles from "./Hero.module.css";
import headShot from "../assets/headShot.jpg";


function Hero(){
    return(
    <> 
    <header>
        {/* use gsap  */}
        <div className={styles.nameBlinking}>
        <h1>Tasmia Chowdhury</h1>
        </div>
    </header>
    <section className={styles.heroContainer}>
    <div className={styles.imageBox}>
      <img src={headShot}
      alt="Tasmia's Headshot" />
    </div>
  </section>
    <h2 className={styles.jobTitle}>Software Engineer</h2>
    <div className ={styles.blueButtons}>
    <a href="Tasmia_Chowdhury_Resume.pdf" target="_blank"><button>Resume</button></a>
  </div>
    </>
    );
}

export default Hero;