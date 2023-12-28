import React from "react";
import styles from "./SuccessCard.module.css"
import Card from '@mui/material/Card';
import { ReactComponent as SucessIcon } from "../../assets/SuccessIcon.svg";

export default function SuccessCard({isMain, percent}){
    return(
        <div className={styles.wrapper}>
             <Card sx={{ width: 359, height:377,backgroundColor: isMain?"rgba(255, 255, 255,.1)":"rgba(29, 29, 29,.1)" ,color:"white", paddingLeft: "20px",
             paddingTop: "30px", paddingRight: "30px", borderRadius:"20px",border: isMain? null:"1px solid rgba(255, 255, 255,.1)"}}>
               <div className={styles.imgDiv}>
                 <SucessIcon/>
               </div>
                <div className={styles.rate}>{percent}% Success Rate</div>
                <div className={styles.content}>Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer.</div>
                <button className={styles.readmore}>Read More</button>
                </Card>
        </div>
    )
}