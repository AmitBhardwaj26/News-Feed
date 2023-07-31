"use client"

import styles from "../styles/navbar.module.css";

export default function Navbar() {
    
    return (
        <>
            <nav className={styles.navbar }>
                <ul className={styles.navbarul }>
                    <li className={styles.navbaritem }><a className={styles.navbarancher } href="/">Home</a></li>
                    {/* <li className={styles.navbaritem }><a className={styles.navbarancher}  href="/">About</a></li> */}
                </ul>
                <div className={styles.topright}> 
                    <a className={styles.toprighta} href="/profile/withluke">MyProfile</a>
                </div>
            </nav>
       
        </>
    );
}