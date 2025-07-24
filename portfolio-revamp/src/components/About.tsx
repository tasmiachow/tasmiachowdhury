import styles from "./About.module.css";
import hackathon from "../assets/hackathon.jpg";

function About(){
    return(
        <div className={styles.about} id="about-me">
   
            <div className={styles.content}>
            

            
            <div className="text">
                <h1 className={styles.aboutTitle}>About Me</h1>

                <p>
                <span className={styles.school}>Hunter College</span> <br />
                <span className={styles.study}>Major: Computer Science | </span>
                <span className={styles.study}>Minor: Applied Mathematics </span><br />
                <span className={styles.gradDate}>Graduated: Jan 2025 </span>
                <br /><br />
                
                <div className={styles.tooltip}> <a href="https://github.com/tasmiachow/JetGenie" target="_blank"><img src={hackathon} alt="hackathon" className= {styles.funPic} /> </a>
                    <span className={styles.tooltiptext}> <a href="https://github.com/tasmiachow/JetGenie" target="_blank">Hackathon Project CLICK ME!</a> </span>
                </div>
                
                <p>Hey there! I’m passionate about making tech accessible! 
                    🌍 Whether it’s teaching coding classes at Digital Girl, Inc. 👩‍🏫✨ or building automation scripts for Barclays, I love bridging the gap between technology and people.🧑‍🤝‍🧑
                
                    Through my journey, I’ve developed a strong passion for building full-stack applications and exploring the world of data science.💻
                    
                    In my freetime, you’ll probably find me gaming 🎮, cooking up elaborate meals 🍳, or watching shows with my mom and little sister 🎥. 
                    Oh, and I’m a huge anime fan, so if you ever want to talk about One Piece, I'm down 🏴‍☠️ </p>
                </p>
                
            </div>
            </div>
        </div>
    
    );
}

export default About;