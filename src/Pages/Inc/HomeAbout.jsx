import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './HomeAbout.css'
import galleryData from '../../Components/Assets/galleryData'
export default function HomeAbout() {
    return (
        <section
            id="about"
            className="ls section_padding_top_150 section_padding_bottom_150 table_section table_section_md columns_padding_25 columns_margin_bottom_30"
        >
            <div className="container">
                {/* <h1 className="specialh1">
                    Towing Services Mumbai
                </h1> */}
                <div className="row custom-homeabout-row">

                    <div className="col-lg-6 col-md-6 col-sm-6 text-center text-md-right custom-col">
                        <div className='homeAboutimgCont'>
                            <img className='homeabout-img' src={galleryData.UNDER1} alt="Towing Services Mumbai" />

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 custom-col">

                        <h2 className="section_header numbered-header">
                            what
                            <strong> we offer</strong>
                        </h2>
                        <p className="small-text">luxury and all car towing</p>
                        <hr className="divider_30_3 zebra_bg" />
                        <p>
                            Your Trusted Partner for Towing Services in Mumbai

                        </p>
                        <p>
                            Since our inception in 2004, Modern Towing has established itself as a reliable name in the towing industry. With over 400,000 vehicles towed and a commitment to exceptional service, we take pride in being one of the leading providers of Towing Services in Mumbai. Our extensive experience and dedication to customer satisfaction set us apart, ensuring that you receive the best assistance when you need it most.
                        </p>
                        <p>
                            At Modern Towing, we understand that vehicle breakdowns and accidents can be stressful. That’s why our team of over 50 skilled professionals is available around the clock to provide prompt and efficient towing services. We operate three offices worldwide, allowing us to serve our customers effectively and efficiently, no matter where they are located.

                        </p>
                        <p>
                            Our mission is to provide top-notch towing solutions that cater to your specific needs. Whether you’re dealing with a minor mishap or a major accident, we have the tools and expertise to assist you. Our services are designed to ensure that you are back on the road as quickly and safely as possible.
                        </p>
                        <div className="inline-block topmargin_10">
                            <ul className="list1 checklist grey">
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />

                                        <div className='detail-padding'>
                                            More than
                                            <strong> 30 years of experience</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />
                                        <div className='detail-padding'>
                                            Short arrival time of
                                            <strong> 30 minutes or less</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />
                                        <div className='detail-padding'>  <span>Honest competitive prices -<strong> zero hidden fees</strong></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />

                                        <div className='detail-padding' >
                                            Friendly and
                                            <strong> professional</strong> service
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />

                                        <div className='detail-padding'>
                                            Available
                                            <strong> 24 hours</strong> a day,
                                            <strong> 7 days</strong> a week
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
