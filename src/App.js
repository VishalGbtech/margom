import React from "react";
import './App.css';


// import components
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import HowWeWork from "./Components/HowWeWork";
import WhyWeExist from "./Components/WhyWeExist";
import GetInTouch from "./Components/GetInTouch";
import OurPatrons from "./Components/OurPatrons";
import EmergingIndia from "./Components/EmergingIndia";
import PartnerShipModels from "./Components/PartnerShipModels";
import EcosystemOfNetwork from "./Components/EcoSystemOfNetwork";



// import images
import newLOGo from './images/newLogo.png';
import DR from './images/DR.jpg';
import DRNew from './images/DR.jpeg';
import dottedImage from './images/dottedImage.png';
import coPromoterModel from './images/coPromoter.png';
import w1 from './images/w-1.jpg';
import w2 from './images/w-2.jpg';
import w3 from './images/w-3.jpg';
import OurPatrons1 from './images/BuildModel1.jpg';
import OurPatrons2 from './images/BuildModel2.jpg';
import OurPatrons3 from './images/DRwithclient.jpeg';
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
            <PartnerShipModels dotImage={dottedImage} coPromoterModel={coPromoterModel} />
            <OurPatrons w1={OurPatrons1} w2={OurPatrons2} w3={OurPatrons3}/>
            <HowWeWork w1={w1} w2={w2} w3={w3} />

            <EcosystemOfNetwork w1={OurPatrons1} w2={OurPatrons2} w3={OurPatrons3} DR={DRNew} />
            <GetInTouch bgImage={GetinTouch}  fbicon={faFacebook} instaIcon={faInstagram} linkedInIcon={faLinkedin} />

        </div>
    );
}

export default App;
