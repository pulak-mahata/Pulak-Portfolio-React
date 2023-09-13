import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Eduation</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
       
        <h3  className={styles.aboutImage}  style={{color:"white"}}>Enthusiastic full stack developer seeking to contribute fresh skills in front-end and back-end development. Eager to collaborate on impactful projects and learn from experienced teams.</h3>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            {/* <img src={getImageUrl("about/edu.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
            {/* <h2>Education</h2> */}
            {/* <h2 className={styles.title} style={{marginBottom:40}}>Education</h2> */}
              <br/>
              <h3>B.tech (2021-2024)</h3>
              <p>
               in Electronics & Communications
                From Ideal Institute Of Engineering, Kalyani
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Diploma (2018-2021)</h3>
              <p>
               in Electronics & Telecommunications
               From Birla Institute Of Technology, Kolkata
              </p>
            </div>
            
          </li>
         
        </ul>
      </div>
    </section>
  );
};
