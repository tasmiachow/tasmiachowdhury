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
    <h2>Software Engineer</h2>
    <div className ={styles.blueButtons}>
    <a href="#about-me"><button>About</button></a>
    <a href="#experience"><button>Experience</button></a>
    <a href="#projects"><button>Projects</button></a>
    <a href="Tasmia_Chowdhury_Resume.pdf" target="_blank"><button>Resume</button></a>
  </div>
    </>
    );
}

export default Hero;