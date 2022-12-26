import React from "react";

export default function HowWeWork(props) {
    const workImageArray = [props.w1, props.w2, props.w3];
    const images = workImageArray.map((value, index)=>{
        return <div className="col-md-4 mb-4" key={index}>
            <div className='rounded' style={{ boxShadow: '1px -1px 5px 0px lightgrey'}}>
                <img src={value} className='w-100 rounded' alt=""/>
            </div>
        </div>
    })
    return(
        <>
            <div className="container-fluid rubicFont EmergingBg " style={{paddingBottom:'4.5rem'}}>
                <div className="row px-3 text-start">
                    <div className="col-12  px-md-5 pt-5 pb-4 text-white">
                        <h1 className=''>Our patrons</h1>
                        <p className='latoFont w-75 OurPatronsDetails'>Last 50 years, entrepreneurs who have been our guides role models and pillars for our Association
                        </p>
                    </div>
                    {images}
                    {/*<div className="">*/}
                    {/*    <h2 className='text-warning mt-2'>Co-Founder Model</h2>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}