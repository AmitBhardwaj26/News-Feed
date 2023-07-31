"use client"

import Image from "next/image";
import styles from "../styles/gridview.module.css";

export default function Showimgaes({ image }: any) {
   if(!image.user.instagram_username) return null; //if !userusername print nothing
    
    return (
        <>
       
        <div className={styles.card}>
            <Image
                src={image.urls.regular}
                alt={image.alt_description}
                width={300}
                height={200}
            /> 
           <div className={styles.cardinfo}>
              <h3 className={styles.cardlikes}>{image.likes} likes</h3>
              <h3 className={styles.carddescription}><strong>Description - </strong> {image.description}</h3>

           </div>

        </div>
        </>
    );
}