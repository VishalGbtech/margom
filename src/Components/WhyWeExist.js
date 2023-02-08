import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import images

// Why We Exist Section
import sudarsanSectionImage from '../images/BuildModel1.jpg'
import DevendraSectionImage from '../images/BuildModel2.jpg'
import DRSectionImage from '../images/DR.jpeg'

const options = {
    // margin: 30,
    // responsiveClass: true,
    // nav: true,
    // dots: false,
    // autoplay: false,
    // navText: ["Prev", "Next"],
    // smartSpeed: 1000,
    responsive: {
        // 0: {
        //     items: 1,
        // },
        // 400: {
        //     items: 1,
        // },
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 4,

        }
    },
};

export default function WhyWeExist(props) {

    const workImageArray = [{TLName:'Dheeraj Rathi', owner:'Koa & Sons', image:DRSectionImage, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."},
        {TLName:'Sudarshan Bajoria', owner:'Randelo Co.', image:sudarsanSectionImage, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."},
        {TLName:'Devendra Jain', owner:'Anissa & Tam', image:DevendraSectionImage, Details:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations which is why feedback from actual clients is invaluable."}];
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
                <div className="row ">

                    <div className="col-md-12 text-start WE_EXIST_MAIN" style={{background:'#a53f37ba', padding:'2rem 3rem'}}>
                        <h1 className='WE_EXIST border-bottom pb-2 mb-3 border-dark'>WHY WE EXIST ?</h1>
                        <h3> MARG'Om Accelerator Studio - </h3>
                        <p className='latoFont'> helps scale companies in a variety of ways using our connections, enablers of Clarity, Capacity building, and Capital raising with experience in
                            leveraging the Spirit of Entrepreneurial Indians.</p>
                        <p className='latoFont'>We Invest in the Co-creation of a sustained value proposition for holistic growth. With an
                            entrepreneurial mindset.</p>
                        <p className='latoFont'>We are super accelerator whitch enable to scale in any of our four models & uses our Connection.</p>
                        {/*<Button variant="dark" className="text-white" >Know the Facts</Button>*/}
                        {/*{images}*/}
                        <OwlCarousel {...options} className='owl-theme' items='2' autoPlay='true' loop margin={10} nav>
                            {images}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}