import React from 'react'
import { FaClock } from "react-icons/fa";
import { IoCall } from 'react-icons/io5';
import '../../App.css'
export default function HomeContact() {
    return (
        <section
            id="contacts"
            className="ds columns_margin_0 columns_padding_0 table_section table_section_lg overflow-hidden"
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 text-center custom-col-contact" data-animation="fadeInLeft">
                        <div className="with_icon_bg with_padding_small with_skew_bg skew_right main_bg_color cs">
                            <div className="background-icon-wrap">
                                <i className="towyicon-clock background-icon" />
                            </div>
                            <div style={{display:'flex'}} className="teaser media small-teaser topmargin_0 inline-block">
                                <div className="media-left media-middle">
                                    <div style={{justifyContent:'center', display:'flex', alignItems:'center'}} className="teaser_icon main_bg_color with_shadow round size_small">
                                    <FaClock />
                                    </div>
                                </div>
                                <div className="media-body media-middle">
                                    <h3 className="text-uppercase grey margin_0">
                                        less than
                                        <strong>30 min</strong> arrival
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center custom-col-contact">
                        <div className="with_padding_small">
                            <div className="teaser">
                                <h3 className="text-uppercase highlight big margin_0">
                                    0 (800)
                                    <strong>490 45 45</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center custom-col-contact" data-animation="fadeInRight">
                        <div  className="with_icon_bg with_padding_small with_skew_bg skew_left main_bg_color cs">
                            <div className="background-icon-wrap">
                                <i className="towyicon-phone background-icon" />
                            </div>
                            <div  style={{display:'flex'}} className="teaser media small-teaser topmargin_0 inline-block">
                                <div className="media-left media-middle">
                                    <div className="teaser_icon main_bg_color with_shadow round size_small">
                                    <div style={{justifyContent:'center', display:'flex', alignItems:'center'}} className="teaser_icon main_bg_color with_shadow round size_small">
                                    <IoCall />
                                    </div>                                    </div>
                                </div>
                                <div className="media-body media-middle">
                                    <h3 className="text-uppercase grey margin_0">
                                        <strong>Live 24/7</strong> Towing Service
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
