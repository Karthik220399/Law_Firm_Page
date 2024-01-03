import React from "react";
import styles from "./AreaofPractice.module.css"
import Grid from '@mui/material/Grid';
import Practice6p from "../../assets/practice6p.png"
import Practice5p from "../../assets/practice5p.png"
import Practice4p from "../../assets/practice4p.png"
import Practice3p from "../../assets/practice3p.png"
import Practice2p from "../../assets/practice2p.png"
import Practice1p from "../../assets/practice1p.png"

export default function AreaofPractice (){
    return (
        <div className={styles.wrapper}>
           <div className={styles.header}>
           Area of Practices
           </div>
           <div>
           <Grid container spacing={4}>
                    <Grid item>
                        <div className={styles.imageC}>
                        <img src={Practice1p}/>
                        <div className={styles.title}>BUSINESS LAW</div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={styles.imageC}>
                        <img src={Practice2p}/>
                        <div className={styles.title}>Partnership LAW</div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={styles.imageC}>
                        <img src={Practice4p}/>
                        <div className={styles.title}>REAL ESTATE LAW</div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={styles.imageC}>
                        <img src={Practice3p}/>
                        <div className={styles.title}>BUSINESS LAW</div>
                        </div>
                    </Grid>
                    <Grid item >
                        <div className={styles.imageC}>
                        <img src={Practice5p}/>
                        <div className={styles.title}>LANDLORD DISPUTES</div>
                        </div>
                    </Grid>
                    <Grid item >
                        <div className={styles.imageC}>
                        <img src={Practice6p}/>
                        <div className={styles.title}>ELDER ABUSE</div>
                        </div>
                    </Grid>
                </Grid>
           </div>
        </div>
    )
}