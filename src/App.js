import React from "react";
import {DataProvider} from "./AppData";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Videography from "./sections/Videography";
import VideographyInfo from "./sections/VideographyInfo";
import VideographyFeatures from "./sections/VideographyFeatures";
//import VideographyWork from "./sections/VideographyWork";
import VideographyCTA from "./sections/VideographyCTA";
import LiveStream from "./sections/LiveStream";
import LiveStreamCTA from "./sections/LiveStreamCTA";
import AddonWebDesign from "./sections/AddonWebDesign";
import AddonPromo1 from "./sections/AddonPromo1";
import AddonPromo2 from "./sections/AddonPromo2";
import AddonCTA from "./sections/AddonCTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer"
import "./assets/css/main.css";

function App() {
    return (
        <DataProvider>
            <Navbar />
            <Hero />
            <About />
            <Videography />
            <VideographyInfo />
            <VideographyFeatures />
            <VideographyCTA />
            <LiveStream />
            <LiveStreamCTA />
            <AddonWebDesign />
            <AddonPromo1 />
            <AddonPromo2 />
            <AddonCTA />
            <Contact />
            <Footer />
        </DataProvider>
    );
}

export default App;