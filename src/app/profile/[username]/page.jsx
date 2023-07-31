"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Showimages from "../../../components/Showimages";
import Profilepage from "../../../components/Profilepage";
import ProfileGridview from "../../../components/ProfileGridview";
import style1 from "../../../styles/gridview.module.css";
import style2 from "../../../styles/icons.module.css";

// import GridViewIcon from '@mui/icons-material/GridView';
// import TableRowsIcon from '@mui/icons-material/TableRows';

export default function Profile(props) {
  // const { router } = useRouter();
  const username = props.params.username;
  console.log(username);

  const [photos, setPhotos] = useState([]);
  const [view, setView] = useState("grid"); // 'grid' or 'list'
  const [Key, setKey] = useState(1);

  useEffect(() => {
    if (username) {
      const fetchUserPhotos = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/users/${username}/photos?client_id=OVC5HTXvmHs_4iDzfElRQ2fhRfD4Tn18m9eNZ1ob3KA`
          );

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

  return (
    <div>
      <Navbar />
      {/* <h1>{username ? username : "no username"}</h1> */}

      {photos.length > 0 && <Profilepage image={photos[0]} />}

      {/* Render user details using the 'user' state */}
      <div className={style2.container}>
        <button className={style2.button} onClick={() => setView("grid")}>
          Grid view
        </button>
        <button className={style2.button} onClick={() => setView("list")}>
          List View
        </button>
      </div>

      {view === "grid" ? (
        /* Render photos in grid view using the 'photos' state */
        <div className={style1.container}>
          {photos.length &&
            photos.map((photo) => {
              return <ProfileGridview key={photo.id} image={photo} />;
            })}

          {/* <Profilepage Photos={photos} /> */}
        </div>
      ) : (
        /* Render photos in list view using the 'photos' state */
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
