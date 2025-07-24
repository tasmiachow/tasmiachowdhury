import google from "../assets/google.png";
import barclays from "../assets/barclays.png";
import dgi from "../assets/dgi.png";

function Experience(){
    return (
        <div className="experience" id="experience">
        <h1>Experience</h1>
        <div className="experience-container">
        
            <div className="experience-item">
            
            <img src={barclays} alt="Barclays" />
            
            
            <h2>Barclays Investment Bank</h2>
            <p>Data Engineer Intern<br />2023</p>
            </div>

            <div className="experience-item">
            <img src={google} alt="Google" />
            <h2>Google</h2>
            <p>SWE Fellow<br />2023</p>
            </div>

            <div className="experience-item">
            <img src={dgi} alt="Digital Girl, Inc." />
            <h2>Digital Girl, Inc.</h2>
            <p>Program Administrator & Lead Instructor <br /> Part-Time | 2018-2024</p>
            </div>
        
        </div>
        <div className="blueButtons"> <a href="Tasmia_Chowdhury_Resume.pdf" target="_blank"><button>Resume</button> </a></div>
        </div>

    )
}

export default Experience;