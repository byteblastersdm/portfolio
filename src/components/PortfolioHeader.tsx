import React, { useState } from 'react';
import styles from '../styles/PortfolioHeader.module.css';

const PortfolioHeader: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.portfolioHeader}>
            {/* <nav className={styles.navbar}>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    {menuOpen ? 'Close Menu' : 'Menu'}
                </button>
                <div className={styles.navMenuContainer}>
                    <ul  className={`${styles.navMenu} ${menuOpen ? styles.show : ''}`}>
                        <li ><a href="#about"></a>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav> */}
            <div className={styles.headerContent}>
                <div className={styles.textSection}>
                    <h1 className={styles.title}>Saddam Irake</h1>
                    <p className={styles.subtitle}>Full-Stack Software Engineer | Expertise in JavaScript,</p>
                    <p className={styles.subtitle}>Node.js, React, Angular, and Modern Web Technologies</p>
                    <div className={styles.buttons}>
                        <button className={`${styles.btn} ${styles.knowMore}`}>Know More</button>
                        <button className={`${styles.btn} ${styles.hireMe}`}>Hire Me</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.circle}></div>
                    <img
                        src="./saddam.jpg"
                        alt="Luis Oenrique"
                        className={styles.profileImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PortfolioHeader;
