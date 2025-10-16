import GlassCard from "../components/GlassCard.jsx";

// All images 
import Odin from "../assets/odin.png";
import CTP from '../assets/fellowship/ctp-logo.png';



function Project(){
    return(
        <div className="projectSection">
            <h1> Projects </h1> 

            <div className="slider">

            </div>

            <div className="openSource">
                <h3> Open Source Contributions </h3>
                <div className = "oscImgs">
                   <img src = {Odin} />
                   <img src = {CTP} />

                </div>
            </div>
        </div>
    );
}

export default Project; 