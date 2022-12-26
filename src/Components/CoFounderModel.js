import React from "react";
import {Button} from "react-bootstrap";

export default function CoFounderModel(props) {


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
           if ( value.redirectPageId === SelectedPageId ){
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
            <div className="container-fluid rubicFont " id='CoFounderModel' style={{display: props.display, background: '#bbbbbba3'}}>
                <div className=" row">
                    <div className="col-md-5">
                        <img src={props.coFoundermodel} className='w-100 my-3' alt=""/>
                    </div>
                    <div className="col-md-7 text-start" style={{padding: '1rem 1rem'}}>
                        <div className="">
                            <h1 className='CoFounderModel '>Co-Founder Model</h1>
                            <p className='latoFont'><b>For Entrepreneurs Saying: </b> “I have an idea, but be mindful it takes different skills to grow and scale.</p>
                            <p className='latoFont'><b>Our Approach: </b>  Developing great ideas, needs great Minds, we scan the capability and universe we
                                exist in, and using technology and funding we ensure we build MVPs, and put it
                                through our rigid process of validating</p>
                            <p className='latoFont'>MVPs in the real world. If all goes well, the Studio “spins off” the new venture- meaning the Studio
                                recognizes this new company they’ve developed could be huge and now they along with the CoFounder find a team and resources to run it as an independent startup venture.
                            </p>
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