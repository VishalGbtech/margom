import React from "react";
import {Button} from "react-bootstrap";

export default function HiredModel(props) {
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
            <div className="container-fluid rubicFont " id='HiredModel' style={{ display:props.display}}>
                <div className=" row">

                    <div className="col-md-6 text-start" >
                        <div className=" pt-4">
                            <h1 className='CoFounderModel '>Hired Model</h1>
                            <p className='latoFont '><b>For Entrepreneurs Saying : </b> I have an MVP, capital, and market to grow but I need help with refining the product, with connections, with technology,  with marketing, raising capital, and with growth/ scale objectives.</p>

                            <p className='latoFont'>This model sits at the intersection of the Builder Outsourced Studio Model and the
                                Co-founder of Studio Model hence we take a Risk-Free Hired Mandate that brings together its resources, infrastructure, network, and experience to help entrepreneurs take their ideas from conception to scale, maturity and exit. This shared ecosystem works to improve speed and likelihood of success. It differs from the classic venture capital model, where investors simply distribute capital among ideas and teams, hoping one in five or ten might make it big.
                            </p>

                            <p className='latoFont'>and it’s best if these startups have a specific “ask” from the Studio such as “our team needs help
                                building the full prototype” or “our startup needs beta testers and we don’t have the funds to
                                promote and scale, hence- we need help with this.”

                            </p>
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