import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './HomeAbout.css'
export default function HomeAbout() {
    return (
        <section
            id="about"
            className="ls section_padding_top_150 section_padding_bottom_150 table_section table_section_md columns_padding_25 columns_margin_bottom_30"
        >
            <div className="container">
                <div className="row custom-homeabout-row">
                    <div className="col-lg-7 col-md-6 text-center text-md-right custom-col">
                        <img src="	https://html.modernwebtemplates.com/towy/images/truck.png" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-6 custom-col">
                        <h2 className="section_header numbered-header">
                            what
                            <strong> we offer</strong>
                        </h2>
                        <p className="small-text">effective flatbed transportation</p>
                        <hr className="divider_30_3 zebra_bg" />
                        <p>
                            We provide fast, courteous and inexpensive towing services in New
                            York. We are fully insured and been in business since 1986. We are
                            ready to respond to all your vehicle emergency needs 24 hours a day,
                            seven days a week.
                        </p>
                        <div className="inline-block topmargin_10">
                            <ul className="list1 checklist grey">
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />

                                        <div className='detail-padding'>
                                            More than
                                            <strong>30 years of experience</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />
                                        <div className='detail-padding'>
                                            Short arrival time of
                                            <strong>30 minutes or less</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />
                                        <div className='detail-padding'>  <span>Honest competitive prices -<strong>zero hidden fees</strong></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />

                                        <div className='detail-padding' >
                                            Friendly and
                                            <strong>professional</strong> service
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='checkList-icon-cont'>
                                        <FaCheck style={{ color: '#ff0000' }} />

                                        <div className='detail-padding'>
                                            Available
                                            <strong>24 hours</strong> a day,
                                            <strong>7 days</strong> a week
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
