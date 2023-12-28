import React from "react";
import styles from "./ClientReviewSection.module.css"
import { ReactComponent as Right } from "../../assets/Right.svg";
import { ReactComponent as Left } from "../../assets/Left.svg";
import ReviewCard from "../ReviewCard/ReviewCard";
import Grid from '@mui/material/Grid';
import Client1 from "../../assets/Clint1.png"
import Client2 from "../../assets/Clint2.png"
import Client3 from "../../assets/Clint3.png"



export default function ClientReviewSection(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
               <div className={styles.header}>
                    What says our
                    happy Clients
               </div>
               <div className={styles.buttonsection}>
                     <button className={styles.leftrightbutton}><Left/></button>
                     <button className={styles.leftrightbutton}><Right/></button>
               </div>
            </div>
            <div>
                  <Grid container spacing={2}>
                    <Grid item lg={4}>
                      <ReviewCard image={Client1} name="Jane Cooper"/>
                    </Grid>
                    <Grid item lg={4}>
                      <ReviewCard image={Client2} name="Devon Lane" isMain/>
                    </Grid>
                    <Grid item lg={4}>
                      <ReviewCard image={Client3} name="Robert Fox"/>
                    </Grid>
                 </Grid>
            </div>
        </div>
    )
}