import React from "react";
import styles from "./ReviewCard.module.css"
import Card from '@mui/material/Card';

export default function ReviewCard({isMain, name,image}){
    return(
        <div className={styles.wrapper}>
             <Card sx={{ width: 359, height:377,backgroundColor: isMain?"rgba(255, 255, 255,.1)":"rgba(29, 29, 29,.1)" ,color:"white", paddingLeft: "20px",
             paddingTop: "30px", paddingRight: "30px", borderRadius:"20px", border: isMain? null:"1px solid rgba(255, 255, 255,.1)"}}>
               <div className={styles.imgDiv}>
                 <img src={image}/>
               </div>
               <div className={styles.name}>{name}</div>
                <div className={styles.ceo}>Ceo of Hunt</div>
                <div className={styles.content}>
                Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia
                consequatduis enim velit mollit Exer. sit
                aliqua dolor do amet sint. Velit officia
                </div>
                </Card>
        </div>
    )
}