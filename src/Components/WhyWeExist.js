import React from "react";
import {Button} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function WhyWeExist(props) {

    const workImageArray = [{TLName:'Dheeraj Rathi', owner:'Koa & Sons', image:props.DR, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."},
        {TLName:'Sudarshan Bajoria', owner:'Randelo Co.', image:props.DR, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."},
        {TLName:'Devendra Jain', owner:'Anissa & Tam', image:props.DR, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."}];
    const images = workImageArray.map((value, index)=>{
        return <div className='item mt-3' key={index}>
            <div className="" >
                <div className='rounded px-3 py-3' style={{ boxShadow: '1px -1px 5px 0px lightgrey', backgroundColor:"#4240407a"}}>
                    <h5 className='mb-1'>{value.TLName}</h5>
                    <p className='mb-2'>{value.owner}</p>
                    <div className=" mb-3">
                        <img src={value.image} className='w-75 mx-auto rounded' alt=""/>
                    </div>
                    <p className='latoFont w-100'>{value.Details}</p>
                </div>
            </div>
        </div>
    })

    return(
        <>
            <div className="container-fluid rubicFont text-white">
                <div className="row speechImage">
                    <div className="col-md-5 text-start">
                        {/*<img src={props.om} style={{width:'40%'}} alt=""/>*/}
                        {/*<h1 className='d-flex text-white py-3'>MARG <img src={props.om} style={{width:'45px'}} alt=""/></h1>*/}
                    </div>
                    <div className="col-md-7 text-start" style={{background:'#d74237a3', padding:'2rem 3rem'}}>
                        <h1 className='WE_EXIST border-bottom pb-2 mb-3 border-dark'>WHY WE EXIST</h1>
                        <h2> Marg'om Accelerator Studio helps scale companies in a variety of ways using our</h2>
                        <p className='latoFont'>connections, enablers of Clarity, Capacity building, and Capital raising with experience in
                            leveraging the Spirit of Entrepreneurial Indians.</p>
                        <p className='latoFont'>We Invest in the Co-creation of a sustained value proposition for holistic growth. With an
                            entrepreneurial mindset.</p>
                        {/*<Button variant="dark" className="text-white" >Know the Facts</Button>*/}
                        {/*{images}*/}
                        <OwlCarousel className='owl-theme' items='2' loop margin={10} nav>
                            {images}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}