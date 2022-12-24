import React from "react";
import './App.css';


// import components
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import HowWeWork from "./Components/HowWeWork";
import WhyWeExist from "./Components/WhyWeExist";
import GetInTouch from "./Components/GetInTouch";
import EmergingIndia from "./Components/EmergingIndia";
import PartnerShipModels from "./Components/PartnerShipModels";
import EcosystemOfNetwork from "./Components/EcoSystemOfNetwork";



// import images
import newLOGo from './images/newLogo.png';
import DR from './images/DR.jpg';
import dottedImage from './images/dottedImage.png';
import Promoter from './images/promoter.jpg';
import w1 from './images/w-1.jpg';
import w2 from './images/w-2.jpg';
import w3 from './images/w-3.jpg';
import GetinTouch from './images/getInTouch.jpg';

// import Icons
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function App() {
    return (
        <div className="App">
            <Header/>
            <Homepage/>
            <WhyWeExist om={newLOGo} DR={DR} />
            <EmergingIndia/>
            <PartnerShipModels dotImage={dottedImage} promotpr={Promoter} />
            <HowWeWork w1={w1} w2={w2} w3={w3} />
            <EcosystemOfNetwork DR={DR} om={newLOGo} />
            <GetInTouch bgImage={GetinTouch}  fbicon={faFacebook} instaIcon={faInstagram} linkedInIcon={faLinkedin} />

        </div>
    );
}

export default App;
