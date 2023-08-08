// Import necessary dependencies and components
"use client"; // Not a standard import statement, check if it's needed
import { useState, useEffect } from "react"; // Import hooks from React
import axios from "axios"; // Import axios for making HTTP requests
import Navbar from "../../../components/Navbar"; // Import custom component Navbar
import Showimages from "../../../components/Showimages"; // Import custom component Showimages
import Profilepage from "../../../components/Profilepage"; // Import custom component Profilepage
import ProfileGridview from "../../../components/ProfileGridview"; // Import custom component ProfileGridview
import style1 from "../../../styles/gridview.module.css"; // Import the CSS module for styling
import style2 from "../../../styles/icons.module.css"; // Import the CSS module for styling

// Define the Profile component
export default function Profile(props) {
  // Extract username from the props
  const username = props.params.username;
  console.log(username);

  // Initialize state variables using useState hook
  const [photos, setPhotos] = useState([]);
  const [view, setView] = useState("grid"); // 'grid' or 'list'
  const [Key, setKey] = useState(1); // Unused state variable

  // useEffect hook to fetch user photos when the component mounts
  useEffect(() => {
    if (username) {
      const fetchUserPhotos = async () => {
        try {
          // Send a GET request to fetch user photos from the Unsplash API
          const response = await axios.get(
            `https://api.unsplash.com/users/${username}/photos?client_id=OVC5HTXvmHs_4iDzfElRQ2fhRfD4Tn18m9eNZ1ob3KA`
          );

          // Extract data from the API response
          const data = await response.data;
          console.log(`data: ${data}`);
          setPhotos(data);
        } catch (error) {
          console.error("Error fetching user photos:", error);
        }
      };
      fetchUserPhotos();
    }
  }, [username]);

  // Conditional rendering if there are no photos available
  if (photos.length === 0) {
    setTimeout(() => {}, 2000); // Delay without any action
    return (
      <>
        <Navbar />
        <div className={style1.notfoundcontainer}>
          <h1 className={style1.notfoundcontainerh1}>User does not exist...</h1>
        </div>
      </>
    );
  }

  // Render the Profile component
  return (
    <div>
      <Navbar />

      {/* Conditional rendering if there are photos available */}
      {photos.length > 0 && <Profilepage image={photos[0]} />}

      {/* Render view buttons */}
      <div className={style2.container}>
        <button className={style2.button} onClick={() => setView("grid")}>
          Grid view
        </button>
        <button className={style2.button} onClick={() => setView("list")}>
          List View
        </button>
      </div>

      {/* Conditional rendering based on the selected view */}
      {view === "grid" ? (
        // Render photos in grid view using the 'photos' state
        <div className={style1.container}>
          {photos.length &&
            photos.map((photo) => {
              return <ProfileGridview key={photo.id} image={photo} />;
            })}
        </div>
      ) : (
        // Render photos in list view using the 'photos' state
        <div>
          {photos.length &&
            photos.map((photo) => {
              return <Showimages key={photo.id} image={photo} />;
            })}
        </div>
      )}
    </div>
  );
}
