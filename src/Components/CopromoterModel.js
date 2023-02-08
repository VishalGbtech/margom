import React from "react";
import {Button} from "react-bootstrap";

export default function CoPromoterModel(props) {
    const AllParteners = (AllPartenersPageId) => {
        const CoPromoterModelId = document.getElementById('CoPromoterModel');

        let a = document.getElementById(`${AllPartenersPageId}`);
        console.log(a);
        CoPromoterModelId.style.display = 'none';
        a.style.display = 'flex';


    }

    let PartenersArray = localStorage.getItem('Parteners');
    let PartenersArr = JSON.parse(PartenersArray);
    console.log(PartenersArr);

    const Parteners = PartenersArr.map((value, index) => {
        if (value.redirectPageId !== 'CoPromoterModel') {
            const PageHandel = (SelectedPageId) => {
                console.log(` this is page ${SelectedPageId}`)
                if ( value.redirectPageId === SelectedPageId ){
                    document.getElementById(SelectedPageId).style.display = 'block';
                    document.getElementById('CoPromoterModel').style.display = 'none';
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
        // if (value.redirectPageId !== 'CoPromoterModel') {
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

    return (
        <>
            <div className="container-fluid rubicFont " id='CoPromoterModel'
                 style={{ display: props.display, background: '#bbbbbba3'}}>
                <div className=" row">

                    <div className="col-md-7 text-start CoPromoterModelCol" style={{padding: '2rem'}}>
                        <div className="p-2">
                            <h1 className='CoFounderModel '>Co-Promoter Model</h1>
                            <p className='latoFont'><b>For Entrepreneurs Saying :</b>It Differs from the Classic Co-Founder Model where they take significant equity at early stage once the proof of concept is established, they provide funds at early stage and connections controlling day to day working of founder using governance models.  </p>
                            <p className='latoFont'>A typical ask from the studio is “our team has developed a prototype and we are good at core business but need help with all the aspects of business from Governance, Finance, Marketing to Strategy” or “what is the best way for us to scale our existing proof of concept, where we are sure of Markets and our Consumers.”</p>

                            <div className="mt-4">
                                <Button variant="dark" className="text-white mb-3" id='CoPromoterModelBackToAll'
                                        onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <img src={props.coPromoterModel} className='w-100 me-3 my-3' alt=""/>
                    </div>
                </div>
                <div className="row py-3 justify-content-around">
                    {Parteners}

                </div>
            </div>
        </>
    )
}