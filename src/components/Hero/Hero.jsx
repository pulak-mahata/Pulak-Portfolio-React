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
        <a href="images/Pulak.pdf" download className={styles.contactBtn}
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
