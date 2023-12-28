import React from "react";
import styles from "./TeamSection.module.css"
import Photo2 from "../../assets/Photo2.png"
import Photo1 from "../../assets/Photo1.png"
import Photo3 from "../../assets/Photo3.png"
import Photo4 from "../../assets/Photo4.png"
import Photo5 from "../../assets/Phtot5.png"
import Photo6 from "../../assets/Photo6.png"
import Grid from '@mui/material/Grid';
import TeamCard from "../TeamCard/TeamCard";

export default function TeamSection(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
               Our Team
            </div>
            <div>
            <Grid container spacing={2}>
                    <Grid item lg={4}>
                       <TeamCard image={Photo2} name="Danial Def" cases="301"/>
                    </Grid>
                    <Grid item lg={4}>
                       <TeamCard isMain image={Photo2} name="Sanfole" cases="850"/>
                    </Grid>
                    <Grid item lg={4}>
                      <TeamCard image={Photo3} name="Cesforila" cases="470"/>
                    </Grid>
                    <Grid item lg={4}>
                       <TeamCard image={Photo4} name="Colleen" cases="180"/>
                    </Grid>
                    <Grid item lg={4}>
                       <TeamCard image={Photo5} name="Haldone" cases="212"/>
                    </Grid>
                    <Grid item lg={4}>
                      <TeamCard image={Photo6} name="Nik Jeo" cases="350"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}