// Import necessary dependencies and components
"use client";
import Image from 'next/image'; // Import the next/image component for optimized image rendering
import styles from '../styles/mainpage.module.css'; // Import the CSS module for styling

// Define the Showimages component which displays individual images
export default function Showimages({ image }: any) {
  // Check if the user's Instagram username is available, if not, return null (don't render anything)
  if (!image.user.instagram_username) return null;

  // Initialize a variable to store a truncated description
  var description = styles.description;
  // Truncate the description if it's longer than 50 characters
  if (description.length > 50) description = description.slice(0, 50);

  // Render the image and associated information
  return (
    <div className={styles.container}>
      {/* Display the user profile picture and username */}
      <div className={styles.postheader}>
        <div>
          {/* Link to the user's profile */}
          <a href={`/profile/${image.user.instagram_username}`}>
            {/* Render the user's profile image */}
            <Image
              src={image.user.profile_image.large} // Profile image source URL
              alt={image.alt_description} // Alternative text for accessibility
              width={300} // Width of the profile picture
              height={200} // Height of the profile picture
              className={styles.profilepic} // Apply CSS styling to the profile picture
            />
            {/* Alternative approach using a regular image tag */}
            {/* <img className={styles.profilepic} src={image.user.profile_image.large} alt={image.alt_description} /> */}
          </a>
        </div>
        <div>
          <a href={`/profile/${image.user.instagram_username}`}>
            {/* Display the user's Instagram username */}
            <h2 className={styles.username}>{image.user.instagram_username}</h2>
          </a>
        </div>
      </div>

      {/* Display the image */}
      <div>
        <Image
          src={image.urls.regular} // Image source URL
          alt={image.alt_description} // Alternative text for accessibility
          width={300} // Width of the image
          height={200} // Height of the image
          className={styles.postpic} // Apply CSS styling to the image
        />
        {/* Alternative approach using a regular image tag */}
        {/* <img src={image.urls.regular} alt={image.alt_description} /> */}
      </div>

      {/* Display the number of likes and image description */}
      <div>
        <h3 className={styles.likes}>{image.likes} likes</h3>
        <h3 className={description}><strong>Description -</strong> {image.description}</h3>
      </div>
    </div>
  );
}

