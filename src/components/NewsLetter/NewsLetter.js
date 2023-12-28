import React from "react";
import styles from "./NewsLetter.module.css"


export default function NewsLetter(){
    return (
        <div className={styles.wrapper}>
           <div className={styles.title}>
              Subscribe Our Newsletter
           </div>
           <div className={styles.inputSection}>
            <input className={styles.name} placeholder="Name"/>
            <input className={styles.email} placeholder="Enter your Email"/>
            <button className={styles.sendButton}>SEND</button>
           </div>
        </div>
    )
}