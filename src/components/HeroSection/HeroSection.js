import React from "react";
import styles from "./HeroSection.module.css"
import { ReactComponent as Mailicon } from "../../assets/mailIcon.svg";
import Heroimage from "../../assets/heroimage.svg"



export default function HeroSection (){

    const onSubmit =(e)=>{
      e.preventDefault();
    }


  return (
    <div className={styles.herowrapper}>
       <div className={styles.heading}>
            <p className={styles.first}>You don’t have to</p>
            <p className={styles.second}>Fight them Alone.</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
             curabitur sodales conubia ut inceptos faucibus himenaeos tortor
             eget, hac massa gravida arcu interdum proin curae.</p>
            <div className={styles.emailSection}>
                <input className={styles.input}  placeholder="Enter your eamil address" />
                <button className={styles.talk}> Let's Talk</button>
            </div>
        </div>
        <div className={styles.imgConatiner}>
           <img className={styles.img} src={Heroimage}/>
        </div>
    </div>
  )
}