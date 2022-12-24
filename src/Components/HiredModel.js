import React from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

                    <div className="col-md-6 text-start" style={{ padding:'2rem 3rem'}}>
                        <div className="mt-5 pt-4">
                            <h1 className='CoFounderModel '>Hired Model</h1>
                            <p className='latoFont'>For Entrepreneurs Saying: “I have an
                                idea, but mindful it takes different
                                sets of skill to grow and scale.</p>
                            <div className="">
                                <Button variant="dark" className="text-white ms-3" id='HiredModelIdBackToAll' onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={props.HiredModelImage} className='w-100' alt=""/>
                    </div>
                </div>
                <div className="row py-3">
                    {Parteners}
                </div>
            </div>
        </>
    )
}