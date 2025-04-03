import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./memes.module.css";
import HeroSection from "../components/herosection";
import MemeCard from "../components/memeCard";
import InteractionBar from "../components/interactionBar";
import CategoriesSection from "../components/categoriesSection";
import Feed from "../feed";

export default function memes() {
    return (
        <div className={styles.container}>
        <Header />
        <div className={styles.mainContent}></div>
        <div className={styles.contentArea}></div>
        <HeroSection />
        <CategoriesSection />
        <Feed />
        <MemeCard meme={meme}/>
        <InteractionBar meme={meme} />
        <Footer />
        /</div>
    )
}

