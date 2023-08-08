// Import necessary dependencies and components
import Image from "next/image"; // Import the next/image component for optimized image rendering
import styles from "../styles/gridview.module.css"; // Import the CSS module for styling

// Define the Showimgaes component which displays individual images
export default function Showimgaes({ image }: any) {
  // Check if the user's Instagram username is available, if not, return null (don't render anything)
  if (!image.user.instagram_username) return null;

  // Render the image card
  return (
    <>
      {/* Create a card to display the image */}
      <div className={styles.card}>
        {/* Use the next/image component to render the image */}
        <Image
          src={image.urls.regular} // Image source URL
          alt={image.alt_description} // Alternative text for accessibility
          width={300} // Width of the rendered image
          height={200} // Height of the rendered image
        />
        {/* Create a section for additional image information */}
        <div className={styles.cardinfo}>
          {/* Display the number of likes for the image */}
          <h3 className={styles.cardlikes}>{image.likes} likes</h3>
          {/* Display the image description */}
          <h3 className={styles.carddescription}>
            <strong>Description -</strong> {image.description}
          </h3>
        </div>
      </div>
    </>
  );
}
