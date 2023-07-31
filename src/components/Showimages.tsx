"use client"
import Image from 'next/image'
import styles from '../styles/mainpage.module.css'

export default function Showimages({ image }: any) {
  if (!image.user.instagram_username) return null;
  var description = styles.description;
  if(description.length>50) description=description.slice(0, 50);

  return (
    <div className={styles.container}>
        <div className={styles.postheader}>
          <div >
            <a href={`/profile/${image.user.instagram_username}`}>
            <Image
                src={image.user.profile_image.large}
                alt={image.alt_description}
                width={300}
                height={200}
                className={styles.profilepic}
            /> 
              {/* <img className={styles.profilepic} src={image.user.profile_image.large} alt={image.alt_description} /> */}
            </a>
          </div>
          <div>
          <a href={`/profile/${image.user.instagram_username}`}>
            <h2 className={styles.username}>{image.user.instagram_username}</h2>
            </a>
          </div>  
        </div>
      <div>
      <Image
                src={image.urls.regular}
                alt={image.alt_description}
                width={300}
                height={200}
                className={styles.postpic}
            /> 
        {/* <img  src={image.urls.regular} alt={image.alt_description} /> */}
          
      </div>
      <div>
        <h3 className={styles.likes}>{image.likes} likes</h3>
        <h3 className={description}><strong>Description -</strong> {image.description}</h3>
      </div>
    </div>
  );
}
