import React from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CoFounderModel(props) {
    const AllParteners = (AllPartenersPageId)=>{
        const CoFounderModelId = document.getElementById('CoFounderModel');
        const b = document.getElementById(`${AllPartenersPageId}`);
        b.style.display = 'flex';
        CoFounderModelId.style.display = 'none';
    }
    return(
        <>
            <div className="container-fluid rubicFont " id='CoFounderModel' style={{height:'100vh', overflow: 'hidden', display:props.display}}>
                <div className=" row">
                    <div className="col-md-6">
                        <img src={props.model} className='w-100' alt=""/>
                    </div>
                    <div className="col-md-6 text-start" style={{ padding:'2rem 3rem'}}>
                        <div className="mt-5 pt-4">
                            <h1 className='CoFounderModel '>Co-Founder Model</h1>
                            <p className='latoFont'>For Entrepreneurs Saying: “I have an
                                idea, but mindful it takes different
                                sets of skill to grow and scale.</p>
                            <div className="">
                                <Button variant="dark" className="text-white" >Learn More <FontAwesomeIcon className='ms-2' icon={props.arrowIcon} /></Button>
                                <Button variant="dark" className="text-white ms-3" id='CoPromoterModelBackToAll' onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}