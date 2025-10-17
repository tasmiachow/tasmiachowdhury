import GlassCard from "../components/GlassCard.jsx";
import styles from "../styles/Project.module.css";
// All images 
import Creator from "../assets/projects/creatorverse_demo.gif";
import Blemish from "../assets/projects/BlemishBot.gif";
import Hands from "../assets/projects/hands2WordsSc.png";
import Split from "../assets/projects/split.gif";
import Odin from "../assets/odin.png";
import CTP from '../assets/fellowship/ctp-logo.png';
import Slider from "react-slick";


function Project(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2, 
        // nextArrow:true,
        // prevArrow: true, 

  };
    return(
        <div className="projectSection">
            <h1> Projects </h1> 

            <div className="slider">
                 <Slider {...settings}>
                    <GlassCard
                        img={Odin}
                        title="LinkUp"
                        des="A short description of the project goes here."
                        gitLink="https://github.com/tasmiachow/DivHacks"
                        liveLink="https://linkup-nyc-client.onrender.com/"
                    />
                     <GlassCard
                        img={Hands}
                        title="Hands2Words"
                        des="A computer vision powered ASL learning app with real-time gesture recognition and feedback."
                        gitLink="https://github.com/tasmiachow/Capstone"
                    />
                    <GlassCard
                        img={Blemish}
                        title="BlemishBot"
                        des="A short description of the project goes here."
                        gitLink="https://github.com/Dewiin/DTM_CTP2024"
                        liveLink="https://blemishbot.streamlit.app/"
                    />
                    <GlassCard
                        img={Odin}
                        title="JetGenie"
                        des="A short description of the project goes here."
                        gitLink="https://github.com/tasmiachow/JetGenie"
                        liveLink="https://example.com"
                    />
                      <GlassCard
                        img={CTP}
                        title="Zoom Attendance Monitor"
                        des="An open-source project, coded endpoints to track partipant's activity with zoom webhooks."
                        gitLink="https://github.com/username/project"
                    />
                     <GlassCard
                        img={Creator}
                        title="CreatorVerse"
                        des="Full CRUD application showcasing your favorite content creators!"
                        gitLink="https://github.com/tasmiachow/codepath-prework"
                        liveLink="https://codepath-prework.vercel.app/"
                    />
                     <GlassCard
                        img={Split}
                        title="Split Fiction Arcs"
                        des="Short page that dynamically displays all of Mio and Zoe's stories in the game Split Fiction."
                        gitLink="https://github.com/username/project"
                    />
                </Slider>

            </div>

            <div className={styles.openSource}>
                <h3> Open Source Contributions </h3>
                <div className = {styles.oscImgs}>
                   <img src = {Odin} />
                   <img src = {CTP} />

                </div>
            </div>
        </div>
    );
}

export default Project; 