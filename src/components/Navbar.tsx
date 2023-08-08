// Import necessary dependencies and components
"use client"
import styles from "../styles/navbar.module.css"; // Import the CSS module for styling

// Define the Navbar component
export default function Navbar() {
    // Render the navbar component
    return (
        <>
            {/* Create the navigation bar */}
            <nav className={styles.navbar}>
                {/* Create an unordered list for navigation items */}
                <ul className={styles.navbarul}>
                    {/* Create a navigation item for the "Home" link */}
                    <li className={styles.navbaritem}>
                        <a className={styles.navbarancher} href="/">Home</a>
                    </li>
                    {/* Create a navigation item for the "About" link (commented out) */}
                    {/* <li className={styles.navbaritem}>
                        <a className={styles.navbarancher} href="/">About</a>
                    </li> */}
                </ul>
                
                {/* Create a section for the top-right part of the navbar */}
                <div className={styles.topright}> 
                    {/* Create a link to the user's profile */}
                    <a className={styles.toprighta} href="/profile/withluke">MyProfile</a>
                </div>
            </nav>
        </>
    );
}
