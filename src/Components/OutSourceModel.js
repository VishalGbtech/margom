import React from "react";
import {Button} from "react-bootstrap";

export default function OutsourceModel(props) {


    const AllParteners = (AllPartenersPageId) => {
        const CoFounderModelId = document.getElementById('CoFounderModel');
        const b = document.getElementById(`${AllPartenersPageId}`);
        b.style.display = 'flex';
        CoFounderModelId.style.display = 'none';
    }

    let PartenersArray = localStorage.getItem('Parteners');
    let PartenersArr = JSON.parse(PartenersArray);
    console.log(PartenersArr);

    const Parteners = PartenersArr.map((value, index) => {
        if (value.redirectPageId !== 'CoFounderModel') {
            const PageHandel = (SelectedPageId) => {
                console.log(` this is page ${SelectedPageId}`)
                if (value.redirectPageId === SelectedPageId) {
                    document.getElementById(SelectedPageId).style.display = 'block';
                    document.getElementById('CoFounderModel').style.display = 'none';
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
    });
    return (
        <>
            <div className="container-fluid rubicFont " id='CoFounderModel'
                 style={{display: props.display, background: '#bbbbbba3'}}>
                <div className=" row">
                    <div className="col-md-5">
                        <img src={props.coFoundermodel} className='w-100 my-3' alt=""/>
                    </div>
                    <div className="col-md-7 text-start" style={{padding: '1rem 1rem'}}>
                        <div className="">
                            <h1 className='CoFounderModel '>Outsourced Model</h1>
                            <p className='latoFont'><b>For Entrepreneurs Saying :</b>It Differs from the Classic Consulting or a Buy Out Model where the
                                role of execution is left to the promoter and Investor or Consultant’s role is limited
                                to review once a Quarter.</p>
                            <p className='latoFont'>A typical ask from the studio is “our team has developed a
                                successful Business model and we are good at running the operations but need help with
                                strategy and execution of a particular aspect of business for demerge the operations of
                                a division into new business and need assistance in scaling to a particular size.”</p>
                            <div className="">
                                {/*<Button variant="dark" className="text-white" >Learn More <FontAwesomeIcon className='ms-2' icon={props.arrowIcon} /></Button>*/}
                                <Button variant="dark" className="text-white" id='CoPromoterModelBackToAll'
                                        onClick={() => {
                                            AllParteners(props.AllParteners)
                                        }}>Back To View All </Button>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row py-3 justify-content-around">
                    {Parteners}

                </div>
            </div>
        </>
    )
}