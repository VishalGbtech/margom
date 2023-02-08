import React from "react";
import {Button} from "react-bootstrap";

export default function MandateModel(props) {
    const AllParteners = (AllPartenersPageId)=>{
        const HiredModelId = document.getElementById('HiredModel');
        const b = document.getElementById(`${AllPartenersPageId}`);
        b.style.display = 'flex';
        HiredModelId.style.display = 'none';
    }

    let PartenersArray = localStorage.getItem('Parteners');
    let PartenersArr = JSON.parse(PartenersArray);
    console.log(PartenersArr);

    const Parteners = PartenersArr.map((value, index) => {
        if (value.redirectPageId !== 'HiredModel') {
            const PageHandel = (SelectedPageId) => {
                console.log(` this is page ${SelectedPageId}`)
                if ( value.redirectPageId === SelectedPageId ){
                    document.getElementById(SelectedPageId).style.display = 'block';
                    document.getElementById('HiredModel').style.display = 'none';
                }

            }
            return <div className='col-md-4 mb-3'>
                <div className="PartnerWith border px-3 py-2 rounded" key={index}>
                    <h4>{value.PT}</h4>
                    <h6 className='EntrepreneursSaying'>{value.EntrepreneursSaying}</h6>
                    <div className="text-end">
                        <Button variant="dark" size='sm'
                                onClick={() => PageHandel(value.redirectPageId)}>{value.more}</Button>
                    </div>
                </div>
            </div>
        }
        // if (value.redirectPageId !== 'HiredModel') {
        //     return <div className='col-md-4'>
        //         <div className="border pt-2 px-3 mb-3 rounded PartnerWith" key={index}>
        //             <h4>{value.PT}</h4>
        //             <div className="text-end">
        //                 <Button variant="dark" className='btn-link' size='sm'>{value.more}</Button>
        //             </div>
        //         </div>
        //     </div>
        // }
    });


    return(
        <>
            <div className="container-fluid rubicFont " id='HiredModel' style={{ display:props.display, background: '#bbbbbbd9'}}>
                <div className=" row">

                    <div className="col-md-6 text-start" >
                        <div className=" pt-4 px-2">
                            <h1 className='CoFounderModel '>Mandate Model</h1>
                            <p className='latoFont '><b>For Entrepreneurs Saying : </b> I have an MVP, capital, and market to grow but I need help with repurpose my Business redefining the business  and take the company to exponential growth and raise money.</p>

                            <p className='latoFont'>The intersection of the Builder  Studio Model and the Outsources  Studio Model hence we take a Risk-Free Mandate that brings together its resources, infrastructure, network, and experience to help entrepreneurs take their ideas from viable to scale, maturity and exit. The shared ecosystem works to improve speed and likelihood of success.</p>

                            <p className='latoFont'>It Differs from the Classic Merchant Banking Advisor where they create RHP, co-ordinate with various professionals and promote the Project with sources of funds. </p>
                            <p className='latoFont'>A typical ask from the studio is “our team needs help exponentially growing the business with right capital” or “what is the best way for us to raise capital while protecting our equity of extremely scalable business.”</p>
                            <div className="">
                                <Button variant="dark" className="text-white mb-3" id='HiredModelIdBackToAll' onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={props.HiredModelImage} className='w-100 mt-3' alt=""/>
                    </div>
                </div>
                <div className="row py-3 justify-content-around">
                    {Parteners}
                    {/*<div className="col-10 ">*/}
                    {/*    <div className="row">*/}
                    {/*       */}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}