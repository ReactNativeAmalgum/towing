import React from 'react'
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import '../../Pages/Contact.css'
export default function ContactSection() {
    return (
        <section className="ls columns_padding_25 section_padding_top_75 section_padding_bottom_100 columns_margin_bottom_60">
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-8 to_animate animated scaleAppear"
                        data-animation="scaleAppear"
                    >
                        <h2 className="section_header">
                            Contact
                            <strong> Form</strong>
                        </h2>
                        <hr className="divider_30_3 bottommargin_30 divider_left zebra_bg" />
                        <form className="contact-form" method="post" action="./">
                            <div className="row columns_margin_bottom_15">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="name" className="sr-only">
                                            First Name
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder="First Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="last-name" className="sr-only">
                                            Last Name
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="last-name"
                                            id="last-name"
                                            className="form-control"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="sr-only">
                                            Your E-Mail
                                        </label>
                                        <input
                                            type="text"
                                            size={30}
                                            defaultValue=""
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Your E-Mail"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="phone" className="sr-only">
                                            Phone Number
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="phone"
                                            id="phone"
                                            className="form-control"
                                            placeholder="Your Phone"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="message" className="sr-only">
                                            Your Message
                                        </label>
                                        <textarea
                                            rows={10}
                                            cols={45}
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            placeholder="Your Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="form-submit">
                                <button
                                    type="submit"
                                    id="submit"
                                    name="submit"
                                    className="theme_button"
                                >
                                    Send message
                                </button>
                            </p>
                        </form>
                    </div>
                    {/*.col-* */}
                    <div
                        className="col-md-4 to_animate animated scaleAppear"
                        data-animation="scaleAppear"
                    >
                        <h2 className="section_header contact-header">
                            Contact
                            <strong> Info</strong>
                        </h2>
                        <hr className="divider_30_3 bottommargin_30 divider_left zebra_bg" />
                        <div className="small-teaser media">
                            <div className="media-left">
                                <FaMapMarkerAlt className="highlight fa fa-map-marker" />

                            </div>
                            <div className="media-body"> Shop no 2 om sai darshan building C D Barfiwala road juhu cross lane andheri west mumbai 400058</div>
                        </div>
                        <div className="small-teaser media">
                            <div className="media-left">
                                <MdEmail className="highlight fa fa-envelope" />
                            </div>
                            <div className="media-body"> info@moderntowing.in</div>
                        </div>
                        <div className="small-teaser media">
                            <div className="media-left">
                                <FaPhoneAlt className="highlight fa fa-phone" /> 
                            </div> 
                            <div className="media-body">9820849090</div>
                        </div>
                        <div className="small-teaser media">
                            <div className="media-left">

                                <FaClock className="highlight fa fa-clock-o" />
                            </div>
                            <div className="media-body"> 24 hours a day, 7 days a week</div>
                        </div>
                    </div>
                    {/*.col-* */}
                </div>
                {/*.row */}
            </div>
            {/*.container */}
        </section>

    )
}
