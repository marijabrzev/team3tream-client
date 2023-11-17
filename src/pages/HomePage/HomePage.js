import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Theater from "../../components/Theater/Theater";
import Footer from "../../components/Footer/Footer";
import Watch from "../../components/Watch/Watch";
import MainVideos from "../../components/MainVideos/MainVideos";


function HomePage() {
   
    return (
        <>
           <Header />
           <Hero />
           <Watch/>
           <Theater />
           <MainVideos />
           <Footer />
        </>
    );
}

export default HomePage;
