import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";


function Navbar(){
     const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
                <ul className={styles.navList}> 
                    <li className={styles.navItem}>
                        <a className={styles.navLink} href = "/About.tsx"> About </a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.navLink} href = "/Experience.tsx"> Experience </a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.navLink} href = "/Projects.tsx"> Projects </a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.navLink} href = "/Contact.tsx"> Contact </a>
                    </li>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;