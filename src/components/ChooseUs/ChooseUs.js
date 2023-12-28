import React from "react";
import styles from "./ChooseUs.module.css"
import Grid from '@mui/material/Grid';
import SuccessCard from "../SuccessCard/SuccessCard";

export default function ChooseUs (){
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
               Why Choose us?
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                       <SuccessCard percent="100"/>
                    </Grid>
                    <Grid item lg={4}>
                    <SuccessCard isMain percent="100"/>
                    </Grid>
                    <Grid item lg={4}>
                    <SuccessCard percent="100"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}