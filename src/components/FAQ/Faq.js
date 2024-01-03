import React from "react";
import styles from "./Faq.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as ExpandIcon } from "../../assets/ExpandIcon.svg";



export default function Faq (){
    return (
        <div className={styles.wrapper}>
              <div className={styles.title}>
                    FAQ
                </div>
            <div className={styles.container}>
                <div  className={styles.content}>
                    Amet minim mollit non deserunt ullamco est sit <br/>
                    aliqua dolor do amet sint. 
                </div>
                <div className={styles.accordianConatiner}>
                  <div className={styles.accordian1}>
                    Do I need a personal injury report?
                  </div>
                  <div className={styles.accordian1content}>
                     Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequatduis
                    enim velit mollit Exer. Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                  </div>
                <Accordion 
                    sx={{backgroundColor: " #1D1D1D", 
                    borderTop:"1px solid  rgba(255, 255, 255, 0.3)",
                    color:"white",
                    margin: 0}}>
                        <AccordionSummary
                        sx={{padding:0, margin: "20px 0px"}}
                        expandIcon={<ExpandIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={styles.accheader}>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails  sx={{padding:0, textAlign: "start", margin:0}}>
                        <Typography className={styles.accontent} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion 
                       sx={{backgroundColor: " #1D1D1D", 
                       borderTop:"1px solid  rgba(255, 255, 255, 0.3)",
                       color:"white",
                       margin: 0}}>
                        <AccordionSummary
                        sx={{padding:0, margin: "20px 0px"}}
                        expandIcon={<ExpandIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className={styles.accheader}>What should I do right after car accidect</Typography>
                        </AccordionSummary>
                        <AccordionDetails  sx={{padding:0, textAlign: "start",margin:0}}>
                        <Typography className={styles.accontent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                      sx={{backgroundColor: " #1D1D1D", 
                      borderTop:"1px solid  rgba(255, 255, 255, 0.3)",
                      color:"white",
                      margin: 0}}>
                        <AccordionSummary
                        sx={{padding:0, margin: "20px 0px"}}
                        expandIcon={<ExpandIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className={styles.accheader}>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails  sx={{padding:0, textAlign: "start", margin: 0}}>
                        <Typography className={styles.accontent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}