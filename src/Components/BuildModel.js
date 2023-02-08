import React from "react";
import {Button} from "react-bootstrap";

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
            return <div className='col-md-4 mb-3' >
                <div className="PartnerWith border px-3 py-2 rounded" key={index}>
                    <h4>{value.PT}</h4>
                    <h6 className='EntrepreneursSaying'>{value.EntrepreneursSaying}</h6>
                    <div className="text-end">
                        <Button variant="dark" className='' size='sm'
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
            <div className="container-fluid rubicFont " id='BuildModel' style={{ display:props.display, background: '#bbbbbbd9'}}>
                <div className=" row">
                    <div className="col-md-5">
                        <img src={props.promotpr} className=' my-4 w-100' alt=""/>
                    </div>
                    <div className="BuildModelCol col-md-7 mt-md-0 mt-sm-3 text-start"  style={{padding: '2rem'}} >
                        <div className="p-2" >
                            <h1 className='CoFounderModel '>Build Model</h1>
                            <p className='latoFont'><b>For Entrepreneurs Saying :</b>It differs from the classic venture capital model, where investors simply distribute capital among ideas and teams, hoping one in five or ten might make it big.</p>

                            <p className='latoFont'>A typical ask from the studio is “our team needs help building the full prototype” or “our startup needs beta testers and we don’t have the funds to promote and scale, hence- we need help with this.”</p>
                            <div className="">
                                {/*<Button variant="dark" className="text-white" >Learn More <FontAwesomeIcon className='ms-2' icon={props.arrowIcon} /></Button>*/}
                                <Button variant="dark" className="text-white" id='BuildModelBackToAll' onClick={() => {AllParteners(props.AllParteners)}}>Back To View All </Button>

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