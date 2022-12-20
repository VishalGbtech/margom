import React from "react";
import {Button} from "react-bootstrap";

export default function CoPromoterModel(props) {
    const AllParteners = (AllPartenersPageId) => {
        const CoPromoterModelId = document.getElementById('CoPromoterModel');

        let a =document.getElementById(`${AllPartenersPageId}`);
        console.log(a);
        CoPromoterModelId.style.display = 'none';
        a.style.display='flex';
    }
    return (
        <>
            <div className="container-fluid rubicFont border " id='CoPromoterModel'
                 style={{height: '100vh', overflow: 'hidden', display: props.display}}>
                <div className=" row">

                    <div className="col-md-6 text-start" style={{padding: '2rem 3rem'}}>
                        <div className="mt-5 pt-4">
                            <h1 className='CoFounderModel '>Co-Promoter Model</h1>
                            <p className='latoFont'>For Entrepreneur's Saying, I have an MVP, but I need help to refine
                                the product with connections, technology, marketing, raising capital, and growth/ scale
                                objectives.”</p>

                            <div className="mt-4">
                                {/*<FontAwesomeIcon className='ms-2' icon={props.arrowIcon} />*/}
                                <Button variant="dark" className="text-white me-3">Learn More </Button>
                                <Button variant="dark" className="text-white ms-3" id='CoPromoterModelBackToAll'
                                        onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <img src={props.promotpr} className='w-100' alt=""/>
                    </div>
                </div>

            </div>
        </>
    )
}