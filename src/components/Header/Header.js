import React from "react";
import styles from "./Header.module.css"
import HeroSection from "../HeroSection/HeroSection";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Header(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
            <NavigationBar/>
            <HeroSection/>
            </div>
        </div>
    )
}