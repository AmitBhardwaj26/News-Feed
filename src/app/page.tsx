"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Showimgaes from "../components/Showimages";
import Navbar from "../components/Navbar";


export default function Mainpage() {
  const [imagess, setimagess] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const ImagesData = await axios.get(
        `https://api.unsplash.com/search/photos?query=wanderlust&page=${page}&client_id=OVC5HTXvmHs_4iDzfElRQ2fhRfD4Tn18m9eNZ1ob3KA`
      );
      const data = ImagesData.data.results;
      setimagess((prevImages) => [...prevImages, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      <InfiniteScroll
        next={fetchImages}
        dataLength={imagess.length}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
  
        {imagess.length &&
          imagess.map((image) => {
            return <Showimgaes image={image} />;
          })}
      </InfiniteScroll>
    </>
  );
}
