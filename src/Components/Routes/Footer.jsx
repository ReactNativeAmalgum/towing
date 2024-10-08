import React from 'react'
import { FaClock, FaFacebook, FaFacebookF, FaInstagramSquare, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'
import { MdEmail, MdKeyboardArrowRight } from 'react-icons/md'
import { FaLocationPin } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import galleryData from '../Assets/galleryData'
export default function Footer() {
    return (
        <footer className="page_footer ds section_padding_top_65 section_padding_bottom_50 columns_margin_bottom_40">
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-3 col-sm-6 to_animate animated fadeInUp"
                        data-animation="fadeInUp"
                    >
                        <a href="./" className="logo">
                            <div style={{ width: 80 }}>
                                <img src={galleryData.LOGO} alt="" />

                            </div>

                        </a>
                        <p>
                            Shank duis pancetta kevin ullamco tempor short loin pig lorem officia
                            ut ham hock incididunt irure drumstick sage ball tip tri-tip.
                        </p>
                        <p>
                            <div className='social-cont'>
                                <FaInstagramSquare className="social-icon theme-color-icon soc-twitter" />
                                <FaFacebook className="social-icon theme-color-icon soc-twitter" />

                                <FaWhatsapp className="social-icon theme-color-icon soc-twitter" />
                            </div>
                        </p>
                    </div>
                    <div
                        className="col-md-3 col-sm-6 to_animate animated fadeInUp"
                        data-animation="fadeInUp"
                    >
                        <div className="topmargin_15 columns_margin_0">
                            <div className="widget widget_pages">
                                <h3 className="widget-title">
                                    Useful
                                    <strong> Links</strong>
                                </h3>
                                <hr className="divider_30_3 zebra_bg divider_left" />
                                <div className="row columns_padding_0 columns_margin_0">
                                    <div className="col-xs-6">
                                        <ul className="greylinks">
                                            <li>
                                                <MdKeyboardArrowRight style={{ color: '#ff0000' }} />
                                                <a href="about">About</a>
                                            </li>
                                            <li>
                                                <MdKeyboardArrowRight style={{ color: '#ff0000' }} />

                                                <a href="/service/closedcartowing">Services</a>
                                            </li>
                                            <li>
                                                <MdKeyboardArrowRight style={{ color: '#ff0000' }} />

                                                <a href="/gallery">Gallery</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-6">
                                        <ul className="greylinks">


                                            <li>
                                                <MdKeyboardArrowRight style={{ color: '#ff0000' }} />

                                                <a href="/contact">Contacts</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-3 col-sm-6 to_animate animated fadeInUp"
                        data-animation="fadeInUp"
                    >
                        <div className="widget widget_text topmargin_15">
                            <h3 className="widget-title">
                                Get in
                                <strong> Touch</strong>
                            </h3>
                            <hr className="divider_30_3 zebra_bg divider_left" />
                            <div  className="media small-teaser custom-small-teaser">
                                <i  className="fa fa-map-marker highlight fontsize_18" />
                                <IoLocationSharp
                                    style={{ color: '#ff0000', marginRight: 20, fontSize:42}} />
                                <div className="media-body">Shop no 2 om sai darshan building C D Barfiwala road juhu cross lane andheri west mumbai 400058</div>
                            </div>
                            <div className="media small-teaser custom-small-teaser">
                                <i className="fa fa-envelope highlight fontsize_18" />
                                <div className="media-body greylinks">
                                    <MdEmail style={{ color: '#ff0000', marginRight: 20, }} />
                                    <a href="mailto:your@mail.com">info@moderntowing.in</a>
                                </div>
                            </div>
                            <div className="media small-teaser custom-small-teaser">
                                <i className="fa fa-phone highlight fontsize_18" />
                                <FaPhone style={{ color: '#ff0000', marginRight: 20, }} />
                                <div className="media-body">9820849090</div>
                            </div>
                            <div className="media small-teaser custom-small-teaser">
                                <i className="fa fa-clock-o highlight fontsize_18" />
                                <FaClock style={{ color: '#ff0000', marginRight: 20, }} />
                                <div className="media-body">24 hours a day, 7 days a week</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-3 col-sm-12 to_animate animated fadeInUp"
                        data-animation="fadeInUp"
                    >
                        {/* <div className="topmargin_15">
                            <div className="widget widget_twitter">
                                <h3 className="widget-title">
                                    Latest
                                    <strong>Tweets</strong>
                                </h3>
                                <hr className="divider_30_3 zebra_bg divider_left" />
                                <div className="twitter">
                                    <ul className="tweet_list" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>

    )
}
