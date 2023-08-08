"use client"
// Import necessary dependencies and components
import Image from "next/image"; // Import the next/image component for optimized image rendering
import styles from "../styles/profilepage.module.css"; // Import the CSS module for styling

// Define the Profilepage component which displays user profile information
export default function Profilepage({ image }: any) {
  return (
    <>
      {/* Create a container to display user profile information */}
      <div className={styles.container}>
        {/* Display the user's profile picture */}
        <div>
          <Image
            src={image.user.profile_image.large} // Profile image source URL
            alt={image.alt_description} // Alternative text for accessibility
            width={300} // Width of the profile picture
            height={200} // Height of the profile picture
            className={styles.profilepic} // Apply CSS styling to the profile picture
          />
          {/* Alternative approach using a regular image tag */}
          {/* <img className={styles.profilepic} src={image.user.profile_image.large} alt={image.alt_description} /> */}
        </div>
        {/* Display the user's username and name */}
        <div>
          <div>
            <h2 className={styles.username}>{image.user.instagram_username}</h2>
          </div>
          <div>
            <h2 className={styles.name}>{image.user.name}</h2>
          </div>
        </div>
        {/* Display the number of posts by the user */}
        <div>
          <h2 className={styles.posts}>
            <span>{image.user.total_photos}</span> posts
          </h2>
        </div>
      </div>
    </>
  );
}
