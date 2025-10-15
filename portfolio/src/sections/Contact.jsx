import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';





function Contact(){
    return(
        <footer>
        <div className="contact" id="contact">
            {/* <!-- Contact content container--> */}
            <div className="content">
            <h1>Contact Me</h1>
            {/* <!-- Contact Section title -->
            <!-- Contact Section Description --> */}
            <h3 onclick="copyEmail(event)">chowtasmia@gmail.com</h3>
            <div class="social-icons">
                <a href="mailto:chowtasmia@gmail.com?subject=Hello%20Tasmia&body=Just%20wanted%20to%20reach%20out!"
                title="Click to email me. Email copied to clipboard!"
                onclick="copyEmail(event)" >
                {/* <img src="images/email.png" alt="Email icon" id="email-icon" style="cursor:pointer;" /> */}
            </a>
      
         
         {/* <!-- Copied Message --> */}
         <span id="copied-msg">Copied!</span>
            
          

          {/* <!-- Social Media Links 
          https://www.flaticon.com/ --> */}
          
            <a href="https://www.linkedin.com/in/tasmiachow/" target="_blank">
              {/* <img src="./SocialMedia/linkedin.png" alt="LinkedIn" /> */}
            </a>
            <a href="https://github.com/tasmiachow" target="_blank">
              {/* <img src="./SocialMedia/github.png" alt="GitHub" /> */}
            </a>
          </div>
        <br></br>
          <div className="box">
              {/* <img src="images/tas_studio_500.png" 
              alt="Tasmia studio ghibli" /> */}
          </div>
        </div>
      </div>
  </footer>
    );
}


export default Contact;