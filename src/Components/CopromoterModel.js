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
                 style={{ display: props.display}}>
                <div className=" row">

                    <div className="col-md-7 text-start CoPromoterModelCol" style={{padding: '2rem'}}>
                        <div className="">
                            <h1 className='CoFounderModel '>Co-Promoter Model</h1>
                            <p className='latoFont'><b>For Entrepreneur's Saying : </b> I have an MVP, but I need help to refine
                                the product with connections, technology, marketing, raising capital, and growth/ scale
                                objectives.”</p>

                            <div className="mt-4">
                                <Button variant="dark" className="text-white mb-3" id='CoPromoterModelBackToAll'
                                        onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <img src={props.promotpr} className='w-100' alt=""/>
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