import React from "react";

export default function  EcosystemOfNetwork(props) {
    // const TlImages  = props.DR;
    const workImageArray = [{TLName:'Dheeraj Rathi', owner:'Koa & Sons', image:props.DR, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."},
        {TLName:'Sudarshan Bajoria', owner:'Randelo Co.', image:props.DR, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."},
        {TLName:'Devendra Jain', owner:'Anissa & Tam', image:props.DR, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."}];
    const images = workImageArray.map((value, index)=>{
        return <div className="col-md-4 text-white " key={index}>
            <div className='rounded px-3 py-3' style={{ boxShadow: '1px -1px 5px 0px lightgrey', backgroundColor:"#d4d4d44a"}}>
                <h5 className='mb-1'>{value.TLName}</h5>
                <p className='mb-2'>{value.owner}</p>
                <div className="text-center mb-3">
                    <img src={value.image} className='w-75 rounded' alt=""/>
                </div>
                <p className='latoFont w-100'>{value.Details}</p>
            </div>
        </div>
    })
    return(
        <>
            <div className="container-fluid rubicFont EmergingBg">
                <div className="row px-3 text-start">
                    <div className="col-12  px-5 pt-5 pb-4 text-white">
                        <h1 className='w-75 text-center mx-auto'>Team & Ecosystem of Network, Investments, and Associates</h1>
                    </div>
                    {images}
                    <div className="">
                        <a href="./">
                            <div className="col-12 mt-3">
                                <img src={props.om} style={{width:'20%'}} alt=""/>
                                {/*<h1 className='d-flex text-white py-3'>MARG <img src={props.om} style={{width:'45px'}} alt=""/></h1>*/}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}