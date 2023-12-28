import React from "react";
import styles from "./NavigationBar.module.css"
import { ReactComponent as Logo } from "../../assets/logo.svg";



export default function NavigationBar(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Logo/>
            </div>
         
           <div className={styles.category}>
              <a href="#"><div>Home</div></a>
              <a href="#"><div>Attorneys</div></a>
              <a href="#"><div>Practice Areas</div></a>
              <a href="#"><div>About Us</div></a>
           </div>
            
           <button className={styles.contactButton}>Contact Now</button>

        </div>
    )
}