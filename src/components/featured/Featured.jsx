import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, majida here!</b> Discover my scribes.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            repellat sequi nobis expedita exercitationem voluptates sunt eaque!
            Quasi et quisquam nihil adipisci quod minima officia! Voluptas iure
            ipsa minus fugit!
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, numquam! Eveniet sequi enim, sint in illum eligendi
            commodi exercitationem soluta placeat tempora, nulla ex natus,
            assumenda tenetur iusto corporis voluptates!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
