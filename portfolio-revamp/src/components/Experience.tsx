import google from "../assets/google.png";
import barclays from "../assets/barclays.png";
import dgi from "../assets/dgi.png";
import styles from "./Experience.module.css";

function Experience(){
    return (
        <div className={styles.experience} id="experience">
        <h1>Experience</h1>
        <div className={styles.experienceContainer}>
        
            <div className={styles.experienceItem}>
            
            <img src={barclays} alt="Barclays" className={styles.experienceImg}/>
            
            
            <h2 className={styles.place}>Barclays Investment Bank</h2>
            <p className={styles.jobTitle}>Data Engineer Intern<br />2023</p>
            </div>

            <div className={styles.experienceItem}>
            <img src={google} alt="Google" className={styles.experienceImg} />
            <h2 className={styles.place}>Google</h2>
            <p className={styles.jobTitle}>SWE Fellow<br />2023</p>
            </div>

            <div className={styles.experienceItem}>
            <img src={dgi} alt="Digital Girl, Inc." className={styles.experienceImg}/>
            <h2 className={styles.place}>Digital Girl, Inc.</h2>
            <p className={styles.jobTitle}>Program Administrator & Lead Instructor <br />2018-2024</p>
            </div>
        
        </div>
        <div className="blueButtons"> <a href="Tasmia_Chowdhury_Resume.pdf" target="_blank"><button>Resume</button> </a></div>
        </div>

    )
}

export default Experience;