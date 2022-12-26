import React, {useRef} from "react";
import Button from 'react-bootstrap/Button';
// import Images
import header from '../images/newLogo.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Header(props) {
    const scollToRef = useRef();
    const MenuArray = ['Home', 'Services', 'Lawyers', 'Blog', 'About' ];
    const menu = MenuArray.map((item, index)=>{
        return <li className='me-1 menuItem' key={index} onClick={() => scollToRef.current.scrollIntoView()} style={{cursor:'pointer'}}>{item}</li>
    })
    return (
        <>
            <div className="container-fluid px-4 py-2" id='MainHeader' style={{background:"white", zIndex:2}}>
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-3 col-6">
                        <div className="logo rubicFont d-flex py-1 ">
                            {/*<FontAwesomeIcon className='text-warning me-1' icon={props.logoIcon} size='2xl'/>*/}
                            {/*<h3 className='mb-0'>Counsel</h3>*/}
                            <img src={header} className='w-75' style={{ maxWidth:'220px'}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-3 px-0 px-md-3 ">
                        <div className="d-none d-md-block">
                            <ul className='d-flex text-secondary justify-content-around latoFont list-unstyled mb-0 ps-4 w-100 '
                                style={{fontWeight: 600}}>
                                {menu}
                                <li> <Button variant="dark" size='sm'>Sign Up</Button></li>
                            </ul>
                        </div>
                        <div className="d-block d-md-none">
                            <div className=" d-flex justify-content-end pe-2">
                                <FontAwesomeIcon className='text-warning ' icon={props.mobileBar} size='2xl'/>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md-2 col-3 px-sm-0 ">*/}
                    {/*    <div className=" ms-auto py-3 w-75 signUpBtn">*/}
                    {/*        <Button variant="dark" size='sm'>Sign Up</Button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}