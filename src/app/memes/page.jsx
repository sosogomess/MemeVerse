import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./memes.module.css";
import HeroSection from "../components/herosection";

export default function memes() {
    return (
        <div className={styles.container}>
        <Header />
        <div className={styles.mainContent}></div>
        <div className={styles.contentArea}></div>
        <HeroSection />
        <Footer />
        /</div>
    )
}

