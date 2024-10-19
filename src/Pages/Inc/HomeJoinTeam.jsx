import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './HomeJoinTeam.css'
import { FaCalendarAlt } from 'react-icons/fa'
export default function HomeJoinTeam() {
    return (
        <section
            id="quote"
            className="parallax get_quote section_padding_0 columns_margin_0"
            style={{ backgroundPosition: "50% -17px" }}
        >
            <div className="container-fluid">
                <div className="row row_columns_padding_0 display_table_md">
                    <div className="cs col-md-6 section_padding_top_60 section_padding_bottom_65 display_table_cell_md vertical_top">
                        <div className="container-left-half horizontal-center">
                            <div className="row">
                                <div className="col-sm-12 text-center" data-animation="fadeInLeft">
                                    <h2 className="section_header">
                                        Connect with
                                        <strong> US</strong>
                                    </h2>
                                    <p className="small-text">Fast and Courteous specialists</p>
                                    <hr className="divider_30_3 zebra_bg" />
                                    <p className="topmargin_90 bottommargin_90 grey">
                                    Experience the difference with Modern Towing. Whether you’re facing an emergency or need scheduled towing, trust us to deliver exceptional service every time. Join the thousands of satisfied customers who have relied on our expertise since 2004. For the best Towing Services in Mumbai, look no further—contact us today!                                    </p>
                                    <a style={{textDecoration:'none'}} href="/contact" className="theme_button">
                                        Apply today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ds col-md-6 section_padding_top_60 section_padding_bottom_65 display_table_cell_md vertical_top">
                        <div className="container-right-half horizontal-center wide-half-container">
                            <div className="row">
                                <div className="col-md-12 text-center" data-animation="fadeInRight">
                                    <h2 className="section_header">
                                        Get a<strong className="highlight"> quote</strong>
                                    </h2>
                                    <p className="small-text lightfont">delivers the best</p>
                                    <hr className="divider_30_3 zebra_bg" />
                                    <form className="topmargin_60" method="post" action="./">
                                        <div className="row columns_margin_bottom_15">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="full-name" className="sr-only">
                                                        Full Name
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        aria-required="true"
                                                        size={30}
                                                        defaultValue=""
                                                        name="full-name"
                                                        id="full-name"
                                                        className="form-control"
                                                        placeholder="Full Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone-number" className="sr-only">
                                                        Phone Number
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        aria-required="true"
                                                        size={30}
                                                        defaultValue=""
                                                        name="phone-number"
                                                        id="phone-number"
                                                        className="form-control"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="start-address" className="sr-only">
                                                        Tow From
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        aria-required="true"
                                                        size={30}
                                                        defaultValue=""
                                                        name="start-address"
                                                        id="start-address"
                                                        className="form-control"
                                                        placeholder="Tow From"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="end-address" className="sr-only">
                                                        Tow To
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        aria-required="true"
                                                        size={30}
                                                        defaultValue=""
                                                        name="end-address"
                                                        id="end-address"
                                                        className="form-control"
                                                        placeholder="Tow To"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group select-group">
                                                    <label htmlFor="vechicle" className="sr-only">
                                                        Vechicle Type
                                                        <span className="required">*</span>
                                                    </label>
                                                    <div className="input-group select-wrapper">
                                                        <select
                                                            aria-required="true"
                                                            id="vechicle"
                                                            name="vechicle"
                                                            className="choice empty form-control"
                                                        >

                                                            <option value="" disabled selected data-default>
                                                                Vehicle Type
                                                            </option>
                                                            <option value="january">Type 1</option>
                                                            <option value="february">Type 2</option>
                                                            <option value="march">Type 3</option>

                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="tow-date" className="sr-only">
                                                        Date
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="tow-date"
                                                        id="tow-date"
                                                        defaultValue=""
                                                        className="form-control"
                                                        placeholder="Date"
                                                    />
                                                
                                                    <FaCalendarAlt className="fa fa-calendar grey" />
                                   
                                                </div>
                                            </div>
                                        </div>
                                        <p className="form-submit">
                                            <button
                                                type="submit"
                                                id="submit"
                                                name="submit"
                                                className="theme_button color1"
                                                style={{color:'red'}}
                                            >
                                                Submit now
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="images/hook.png"
                alt="Towing Services Mumbai"
                className="top_image"
                data-animation="fadeInDown"
            />
        </section>

    )
}
