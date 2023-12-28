import React from "react";
import styles from "./IntroSection.module.css"
import { ReactComponent as Line } from "../../assets/Line.svg";

export default function IntroSection (){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
               Let’s Introduce Ourself
            </div>
            <div className={styles.line}>
                <Line/>
            </div>
            <div className={styles.criminal}>
               <div className={styles.heading}>
                 Criminal Lawyer
               </div>
               <div className={styles.content}>
                Amet minim mollit non deserunt ullamco est<br/>
                sit aliqua dolor do amet sint. Velit officia consequatduis<br/>
                enim velit mollit Exercitation.
               </div>
            </div>
        </div>
    )
}