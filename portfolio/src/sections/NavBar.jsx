import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/NavBar.module.css';

function NavBar(){
    
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <nav className={styles.nav}>
             <div className={styles.resume}><a href="" target = "_blank">Resume</a>
            </div>
            <button
                className={styles.menuBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <MenuIcon sx={{ color: "rgba(255,255,255)" }} />
            </button>
            <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        </nav>
    )
};

export default NavBar;