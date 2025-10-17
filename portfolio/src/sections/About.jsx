import styles from "../styles/About.module.css";

const skills = [
  { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
  { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
  { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"},
  { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
  { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
];



function About(){
    return (
        <>
        

     
        
        <div className="readText">
            <h4>Who I Am</h4>
            <p>I'm a frontend/full-stack developer focused 
                on building visually engaging, accessible web experiences
                 that anyone can enjoy.</p>

            <h4>What Accessibility Means to Me</h4>
            <p>That word gets thrown around a lot, but 
                for me, it’s personal. 
                Back in 6th grade, my English teacher 
                required printed assignments—I 
                didn’t have Word, 
                so I hunted for something free and 
                stumbled on Google Docs, 
                right when it launched. 
                That small discovery saved 
                my grade and showed me how powerful 
                 accessible tools can be. Ever since, I’ve wanted to create 
                that kind of impact and make cool, useful applications for everyone.</p>

            <h4>My Journey</h4>
            <p>
                I started learning web development in high school, then moved on to teach at Digital Girl, Inc. for 6 years. 
                I taught and made curriculi, that reached over 700+ students in NYC area! 
                I simultaneously attended university, where I honed my full-stack and teamwork skills. 
                Currently, I’m a frontend dev for a web3 startup, and attending hackathons on the side! 
            </p>

            <h4>My Skills</h4>
            At this point, you're probably thinking “damn idrc.” Fair. So here’s the good stuff:
            <div className={styles.skillsBadges}>
            {skills.map((skill) => (
                <img key={skill.name} src={skill.badge} alt={skill.name} />
            ))}
            </div>


            <h4>Beyond Code</h4>
            <p>In my freetime, you’ll probably find me gaming on my pc I built 🎮, running, cooking up elaborate meals 🍳, or watching shows with my mom and little sister 🎥. 
            Oh, and I’m a huge anime fan, so if you ever want to talk about One Piece, I'm down 🏴‍☠️  </p>
        </div>
        </>
    )
}

export default About;