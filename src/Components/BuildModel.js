import React from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BuildModel(props) {
    const AllParteners = (AllPartenersPageId)=>{
        const BuildModelId = document.getElementById('BuildModel');
        const b = document.getElementById(`${AllPartenersPageId}`);
        b.style.display = 'flex';
        BuildModelId.style.display = 'none';
    }
    let PartenersArray = localStorage.getItem('Parteners');
    let PartenersArr = JSON.parse(PartenersArray);
    console.log(PartenersArr);

    const Parteners = PartenersArr.map((value, index) => {
        if (value.redirectPageId !== 'BuildModel') {
            const PageHandel = (SelectedPageId) => {
                console.log(` this is page ${SelectedPageId}`)
                if ( value.redirectPageId === SelectedPageId ){
                    document.getElementById(SelectedPageId).style.display = 'block';
                    document.getElementById('BuildModel').style.display = 'none';
                }

            }
            return <div className='col-md-4'>
                <div className="PartnerWith border px-3 py-2 rounded" key={index}>
                    <h4>{value.PT}</h4>
                    <div className="text-end">
                        <Button variant="dark" size='sm'
                                onClick={() => PageHandel(value.redirectPageId)}>{value.more}</Button>
                    </div>
                </div>
            </div>
        }
        // if (value.redirectPageId !== 'BuildModel') {
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
            <div className="container-fluid rubicFont " id='BuildModel' style={{height:'100vh', overflow: 'hidden', display:props.display}}>
                <div className=" row">
                    <div className="col-md-6">
                        <img src={props.promotpr} className='w-100' alt=""/>
                    </div>
                    <div className="col-md-6 text-start" style={{ padding:'2rem 3rem'}}>
                        <div className="">
                            <h1 className='CoFounderModel '>Build Model</h1>
                            <p className='latoFont'><b>For Entrepreneurs Saying:</b> “ I have a great idea and worked on MVP, but lacked specific resources
                                and expertise to scale and grow.</p>

                            <p className='latoFont'>What founders in this position need is financial restructures, operational help, tech support, and
                            connection opportunities. These businesses are often not yet adequately funded or have faced an
                            adverse event or strategic choice. It’s common for Businesses in this situation to have a niche focus.</p>

                            <p className='latoFont'>and it’s best if these startups have a specific “ask” from the Studio such as “our team needs help
                            building the full prototype” or “our startup needs beta testers and we don’t have the funds to
                            promote and scale, hence- we need help with this.”

                        </p>
                            <div className="">
                                {/*<Button variant="dark" className="text-white" >Learn More <FontAwesomeIcon className='ms-2' icon={props.arrowIcon} /></Button>*/}
                                <Button variant="dark" className="text-white" id='BuildModelBackToAll' onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row py-3 justify-content-around">
                    <div className="col-10 ">
                        <div className="row">
                            {Parteners}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}