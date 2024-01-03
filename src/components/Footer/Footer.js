import React from "react";
import styles from "./Footer.module.css"
import { ReactComponent as Insta } from "../../assets/Insta.svg";
import { ReactComponent as X } from "../../assets/X.svg";
import { ReactComponent as Facebook } from "../../assets/Facebook.svg";
import { ReactComponent as Pintest } from "../../assets/Pintrest.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";



export default function Footer(){
    return(
        <div className={styles.wrapper}>
          <div className={styles.footer}>
             <div className={styles.logo}>
              <Logo/>
            </div>
         
           <div className={styles.category}>
              <a href="#"><div>Home</div></a>
              <a href="#"><div>Attorneys</div></a>
              <a href="#"><div>Practice Areas</div></a>
              <a href="#"><div>About Us</div></a>
           </div>

           <div className={styles.socialMedia}>
             <a href="#"><div><Insta/></div></a>
             <a href="#"><div><Facebook/></div></a>
             <a href="#"><div><X/></div></a>
             <a href="#"><div><Pintest/></div></a>
             </div>

             </div>

           <div className={styles.rightswrapper}>
             <div className={styles.rights}>
                <p>© 2020 Acme. All right reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
             </div>
           </div>
        </div>
       
    )
}