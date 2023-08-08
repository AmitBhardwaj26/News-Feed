// Import necessary dependencies and components
"use client"; 
import { useEffect, useState } from "react"; // Import hooks from React
import axios from "axios"; // Import axios for making HTTP requests
import InfiniteScroll from "react-infinite-scroll-component"; // Import InfiniteScroll component
import Showimgaes from "../components/Showimages"; // Import custom component Showimages
import Navbar from "../components/Navbar"; // Import custom component Navbar

// Define the Mainpage component
export default function Mainpage() {
  // Initialize state variables using useState hook
  const [imagess, setimagess] = useState([]); // Holds the array of images
  const [page, setPage] = useState(1); // Keeps track of the current page

  // Function to fetch images from Unsplash API
  const fetchImages = async () => {
    try {
      // Send a GET request to Unsplash API using axios
      const ImagesData = await axios.get(
        `https://api.unsplash.com/search/photos?query=wanderlust&page=${page}&client_id=OVC5HTXvmHs_4iDzfElRQ2fhRfD4Tn18m9eNZ1ob3KA`
      );

      // Extract the image data from the API response
      const data = ImagesData.data.results;

      // Update the images state using the current images and the new data
      setimagess((prevImages) => [...prevImages, ...data]);

      // Increment the page number for the next API request
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images:", error); // Log an error if API request fails
    }
  };

  // useEffect hook to fetch images when the component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Render the Mainpage component
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Render InfiniteScroll component for scrolling and loading more images */}
      <InfiniteScroll
        next={fetchImages} // Callback function to fetch more images on scrolling
        dataLength={imagess.length} // Current number of images in the array
        hasMore={true} // Indicates if there are more images to be loaded
        loader={<h4>Loading...</h4>} // Loading indicator displayed while fetching
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        } // Message displayed when all images are loaded
      >
        {/* Render the images using the Showimages component */}
        {imagess.length &&
          imagess.map((image) => {
            return <Showimgaes key={image.id} image={image} />;
          })}
      </InfiniteScroll>
    </>
  );
}
