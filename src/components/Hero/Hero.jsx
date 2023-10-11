import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pulak Mahata</h1>
        <p className={styles.description}>
          I'm a Full-Stack Developer from Kolkata
        </p>
        <div className={styles.extra}>
        <a href="mailto:pulakmahata@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <span></span>
<<<<<<< HEAD
        <a href="images/Pulak.pdf" download className={styles.contactBtn}
=======
{/*         <a href="images/Pulak-Resume.pdf" download className={styles.contactBtn} */}
          <a href={getImageUrl("hero/Pulak-Resume.pdf")} download className={styles.contactBtn}
>>>>>>> e8b3812ed1afb7075868d9e718da1702d1b21e3e
          >Download CV</a>
        </div>
       
        
      </div>
      <div>
     
      </div>
      <img
        src={getImageUrl("hero/g.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
