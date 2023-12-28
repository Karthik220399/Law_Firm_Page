import React from "react";
import styles from "./TeamCard.module.css"
import Card from '@mui/material/Card';

export default function TeamCard({isMain,image,name,cases}){
    return (
        <div>
           <Card sx={{ width: 344, height:109,backgroundColor: isMain?"rgba(227, 183, 72, 1)":"rgba(29, 29, 29,.1)" ,color:"white", 
             borderRadius:"14px"}}>
               <div className={styles.imgDiv}>
                  <img src={image}/>
                  <div className={styles.details}>
                    <div className={isMain?styles.name : styles.nameb}>{name}</div>
                    <div className={isMain?styles.content:styles.contentb}>{cases} Cases</div>
                  </div>
               </div>
                
            </Card>
        </div>
    )
}