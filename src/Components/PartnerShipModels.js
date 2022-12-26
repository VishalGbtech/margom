import React from "react";
import {Button} from "react-bootstrap";

// import Components
import CoPromoterModel from "./CopromoterModel";
import CoFounderModel from "./CoFounderModel";

import HiredModel from './HiredModel';
import BuildModel from './BuildModel';
// import CoPromoterModel from "./CoPromoterModel";
// import CoFounderModel from "./CoFounderModel";

// import icons
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

// import  images
import coPromoterModel from '../images/coPromoter.png';
import coFoundermodel from "../images/coFounderModel.png";
import HiredModelImage from '../images/HiredModel.png';
import BuildModelImage from '../images/pat-BuildModel.png';

export default function PartnerShipModels(props) {

    const ToggleComponet = (pageId) => {
        const OurPartnershipPageId = document.getElementById('PartnershipModel');
        const partnersPageId = document.getElementById(pageId);
        if (partnersPageId.style.display === 'none') {
            partnersPageId.style.display = 'block';
            OurPartnershipPageId.style.display = 'none';
        } else {
            partnersPageId.style.display = 'none';
        }
    }

    const PartenersArray = [
        {PT: 'Co-Promoter Model',EntrepreneursSaying:'I have an MVP but I need help with refining the product, with connections, with technology,  with marketing, raising capital, and with growth/ scale objectives', more: 'Learn More', redirectPageId: 'CoPromoterModel'},
        {PT: 'Build Model',EntrepreneursSaying:'I have a great idea and worked on MVP, but lacked specific resources and expertise to scale and grow.', more: 'Learn More', redirectPageId: 'BuildModel'},
        {PT: 'Hired Model',EntrepreneursSaying:'I have an MVP, capital, and market to grow but I need help with refining the product, with connections, with technology,  with marketing, raising capital, and with growth/ scale objectives. ', more: 'Learn More', redirectPageId: 'HiredModel'},
        {PT: 'Co-Founder Model',EntrepreneursSaying:'I have an idea, but be mindful it takes different skills to grow and scale it takes different skills to grow and scale.', more: 'Learn More', redirectPageId: 'CoFounderModel'}
    ];
    localStorage.setItem("Parteners", JSON.stringify(PartenersArray));

    const Parteners = PartenersArray.map((value, index) => {
        let learnBtn = <Button variant="dark"  className='mb-2' onClick={() => ToggleComponet(value.redirectPageId)}
                               size='sm'>{value.more}</Button>;
        return <div className="border pt-2 px-3 mb-3 rounded PartnerWith" style={{background:' #9f9f9fcf'}} key={index}>
            <h2>{value.PT}</h2>
            <div className="text-end">{learnBtn}</div>
        </div>
    })


    return (
        <>
            <div className="container-fluid rubicFont bgdotImage" id='ourPartnership'
                 style={{padding: '2rem 3rem'}}>
                <div className="row " id='PartnershipModel'>
                    <div className=" col-md-6 text-start">
                        <h1 className='py-3 w-100 ourPartnershipHeading text-white' style={{fontSize:'2.5rem'}}>Our Partnership Models</h1>
                        {/*<img src={props.dotImage} className='w-25' alt=""/>*/}
                    </div>
                    <div className="col-md-6 text-start">
                        {Parteners}
                    </div>
                </div>
                <CoPromoterModel coPromoterModel={coPromoterModel} display='none' AllParteners='PartnershipModel'/>
                <BuildModel promotpr={BuildModelImage} display='none' AllParteners='PartnershipModel'/>
                <HiredModel HiredModelImage={HiredModelImage} display='none' AllParteners='PartnershipModel'/>
                <CoFounderModel coFoundermodel={coFoundermodel} arrowIcon={faChevronRight} display='none'
                                AllParteners='PartnershipModel'/>
            </div>

        </>
    )
}