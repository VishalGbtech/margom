import React  from "react";

import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function GetInTouch(props) {
    const socialIcon = [{icon:props.fbicon, link: 'https://www.facebook.com/'}, {icon:props.instaIcon, link: 'https://www.instagram.com/'}, {icon:props.linkedInIcon, link: 'https://www.linkedin.com/'}, ];
    const Icons = socialIcon.map((value, index)=>{
        return  <div key={index} className="border border-warning centerFlex rounded-circle me-2 text-center " style={{width:'27px', height:'27px', cursor:"pointer"}}>
            <a href={value.link} target='_blank  '><FontAwesomeIcon icon={value.icon} className='text-warning' /></a>

        </div>
    })
    return (
        <>
            <div className="align-items-center text-white GITbgImage pb-5 container-fluid d-flex rubicFont">
                <div className="row mt-4 position-relative">
                    <h1 className='git ps-md-5 pt-3 text-start w-100'>Get in touch!</h1>
                    <div className="col-12 mt-4 pt-3 px-md-5 px-4" style={{textAlign: 'justify',textShadow: '2px 2px 2px #727272a6'}}>
                        <p className='w-75 getInToutchDetails '><b>Our Approach :</b> Developing great ideas needs great Minds. We scan the capability to our disposal. Using technology and funding, we ensure and build MVPs and put them through our rigorous process of validating MVPs in the real world. If all goes well, the Studio “spins off” the new venture- meaning the Studio recognizes this new company they’ve developed that could be huge. Now along with the Co-Founder, they find a team and resources to run it as an independent startup venture.</p>

                    </div>
                    <div className="col-md-7"></div>
                    <div className="col-md-5">

                        <Table responsive="sm" className='text-white border-0'>

                            <tbody>
                            <tr>
                                <td>Phone</td>
                                <td>(91+) 1234567890</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>user@margom.com</td>
                            </tr>
                            <tr>
                                <td>Social</td>
                                <td className='d-flex justify-content-center'>
                                    {Icons}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )

}