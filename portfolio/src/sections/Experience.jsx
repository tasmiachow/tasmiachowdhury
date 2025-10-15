import styles from '../styles/Experience.module.css';

//{/* Images */}
import Barclays from '../assets/barclays.png';
import DGI from '../assets/dgi.png';
import Google from '../assets/google.png';
import CTP from '../assets/ctp-logo.png';
import CodePath from '../assets/CodePath.jpeg';

function Experience(){
    return(
        <div className={styles.experience}>
            <h1>Experience</h1>

            <h3>Professional Work Experience</h3>
            {/* <!-- Experience content container --> */}
            <div className={styles.experienceContainer}>
            {/* <!-- Experience Items
                Feel free to delete or add more experiences --> */}
            
            
             <div className={styles.experienceItem}>
            <img src="images/google.png" alt="Halcyon Finance" />
            <h2>Halcyon Finance</h2>
            <p>Frontend Web Developer<br />2025</p>
            </div>
            
            {/* <!-- Experience image --> */}
            
            <div className={styles.experienceItem}>
            <img src={Barclays} alt="Barclays" />
            {/* <!-- Company --> */}
            <h2>Barclays Investment Bank</h2>
            {/* <!-- Role and date employed --> */}
            <p>Data Engineer Intern<br />2023</p>
            </div>

            <div className={styles.experienceItem}>
            <img src={DGI} alt="Digital Girl, Inc." />
            <h2>Digital Girl, Inc.</h2>
            <p>Program Administrator & Lead Instructor <br /> 2018-2024</p>
            </div>
            </div>

            <div className={styles.experienceContainer}>
            <div className="fellowships">
                <h3>Fellowships</h3>
                <div class={styles.experienceItem}>
                    <img src={CTP} alt="Cuny Tech Prep" />
                    <h2>CUNY Tech Prep</h2>
                    <p>Open Source & Data Science Fellow<br />2025</p>
                </div>

                <div class={styles.experienceItem}>
                    <img src={CodePath} alt="code path" />
                    <h2>CodePath</h2>
                    <p>Intermediate Technical Interview Prep<br />2025</p>
                </div>
                
                <div class={styles.experienceItem}>
                    <img src={Google} alt="Google" />
                    <h2>Google</h2>
                    <p>SWE Fellow<br />2023</p>
                </div>
            </div>
            </div>

            <h3>Education</h3>
                <div className="education">
                    <span>Hunter College</span> <br></br>
                    <span>Major: Computer Science</span> <br></br>
                    <span>Minor: Applied Mathematics</span> <br></br>
                    <span>Grad Date: Jan 2025</span> <br></br>
                </div>



        {/* <!-- Add other experiences here using the same structure --> */}
       
        <div className={styles.blueButton}> <a href="/Tasmia_Chowdhury_Resume.pdf" target="_blank" rel="noopener noreferrer"><button>Resume</button> </a></div>
    </div>


    )
}

export default Experience;