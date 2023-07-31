"use client"
import Image from "next/image";
import styles from "../styles/profilepage.module.css";

export default function Profilepage({ image }: any) {
  return (<>
    <div className={styles.container}>
      <div>
      <Image
                src={image.user.profile_image.large}
                alt={image.alt_description}
                width={300}
                height={200}
                className={styles.profilepic}
            /> 
        {/* <img className={styles.profilepic} src={image.user.profile_image.large} alt={image.alt_description} /> */}
      </div>
      <div>
        <div>
          <h2 className={styles.username}>{image.user.instagram_username}</h2>
        </div>
        <div>
          <h2 className={styles.name}>{image.user.name}</h2>
        </div>
      </div>
      <div>
        <h2 className={styles.posts}>
          <span>{image.user.total_photos}</span> posts
        </h2>
      </div>
    </div>
    
    </>
  );
}
