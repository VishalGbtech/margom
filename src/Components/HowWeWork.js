import React from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
};

export default function HowWeWork(props) {
    const workImageArray = [props.w1, props.w2, props.w3];
    const imagesMobile = workImageArray.map((value, index) => {
        return <div className='item mt-3' key={index}>
            <div className="col-md-4 mb-4">
                <div className='rounded' style={{boxShadow: '1px -1px 5px 0px lightgrey'}}>
                    <img src={value} className='w-100 rounded' alt=""/>
                </div>
            </div>
        </div>
    })
    const imagesDesktop = workImageArray.map((value, index) => {
        return <div className="col-md-4 mb-4 mt-3" key={index}>
                <div className='rounded' style={{boxShadow: '1px -1px 5px 0px lightgrey'}}>
                    <img src={value} className='w-100 rounded' alt=""/>
                </div>
            </div>
    })
    return (
        <>
            <div className="container-fluid rubicFont EmergingBg " style={{paddingBottom: '4.5rem'}}>
                <div className="row border-top border-light px-3 text-start">
                    <div className="col-12  px-md-5 pt-5 pb-4 text-white">
                        <h1 className='hww'>How we work?</h1>
                        <p className='latoFont w-75 HowWeWorkDetails'>after initial screening actually shortlist companies and engage with them for 90 days to evaluate them thoroughly.
                        </p><p className='latoFont w-75 HowWeWorkDetails'>Our mentors are investors in our accelerator and will work closely with our portfolio companies.  We will engage with these companies for a period of one year working with companies in terms of techonology marketing branding strategy finance hr etc to evolve to next level.
                    </p>
                    </div>
                    <OwlCarousel {...options} className='owl-theme d-block d-md-none' autoplay='true' items='2' loop margin={10} nav>
                    {imagesMobile}
                    </OwlCarousel>
                    <div className="d-none d-md-block">
                        <div className=" row ">
                            {imagesDesktop}
                        </div>

                    </div>

                    {/*<div className="">*/}
                    {/*    <h2 className='text-warning mt-2'>Co-Founder Model</h2>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}