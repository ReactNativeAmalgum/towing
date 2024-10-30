import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './HomeJoinTeam.css'
import { FaCalendarAlt } from 'react-icons/fa'
import galleryData from '../../Components/Assets/galleryData'
import { ToastContainer, toast } from 'react-toastify';
import $ from "jquery";
import 'react-toastify/dist/ReactToastify.css';

export default function HomeJoinTeam() {
    const [custName, setCustName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [date, setDate] = useState('');
    const [custContact, setCustContact] = useState('');

    const resetForm = () => {
        setCustName('');
        setFrom('');
        setTo('');
        setVehicle('');
        setDate('');
        setCustContact('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        const phonePattern = /^\d{10}$/;
        if (!custName || !from || !to || !vehicle || !date || !custContact.match(phonePattern)) {
            toast.error("Please fill in all fields with valid information");
            // return;
        }

        try {
            await Appoinment();
            toast.success("Your message has been sent!");
            resetForm();
        } catch (error) {
            console.error("Error submitting the appointment:", error);
            toast.error("Failed to send the message. Please try again later.");
        }
    };

    const Appoinment = () => {
        const body =
            '<!DOCTYPE html><html> <head> <title>Mordern Towing</title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> </head> <body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"> <div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"> <tr> <td align="center" style="background-color:#eee" bgcolor="#eeeeee"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"> <tr> <td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#FFD44C"> <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"> <tr> <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"> <a href="tel:+91 986745454" style="text-decoration:none;color:#000;font-family:serif;font-size:16px">Leade generate for just Mordern Towing</a> </td></tr></table> </td></tr></table> </div></td></tr><tr> <td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"> <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"> <tr> <td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"> <tr> <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"> <img style="width:100%;height:120px" src="https://justmirrorsalon.in/static/media/JMS.7493f202fc387288d7c0.png" alt=""> </td></tr></table> </td></tr></table> </div></td></tr><tr> <td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#FFD44C"> <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"> <tr> <td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"> <h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#000">Client Enquiry Details</h1> </td></tr></table> </div></td></tr><tr> <td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"> <tr> <td width="100%" align="center" valign="top" style="font-size:0"> <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"> <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"> <tr> <td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer Full Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
            custName +
            '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer Contact:</p><p style="font-size:14px;font-weight:500;color:#111">' +
            custContact +
            '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Vehicle Type:</p><p style="font-size:14px;font-weight:500;color:#111">' +
            vehicle +
            '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Date:</p><p style="font-size:14px;font-weight:500;color:#111">' +
            date +
            '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Tow From:</p><p style="font-size:14px;font-weight:500;color:#111">' +
            from +
            '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Tow To:</p><p style="font-size:14px;font-weight:500;color:#111">' +
            to +
            '</p></td></tr></table> </div></td></tr></table> </td></tr><tr> <td width="100%" align="center" bgcolor="#FFD44C" style="padding:10px 0"> <p style="color:#000;font-weight:500;font-size:1rem;padding:0;margin:0">Morder Towing</p></td></tr></table> </td></tr></table> </body></html> ';


        return $.post("https://skdm.in/server/v1/send_lead_mail.php", {
            toEmail: "mukundsharma1085@gmail.com",
            fromEmail: "reactnativeamalgum@gmail.com",
            bccMail: "reactnativeamalgum@gmail.com",
            mailSubject: "New Customer Lead",
            mailBody: body,
            accountName: "Just Mirror Saloon",
            accountLeadSource: "https://demo.co.in/",
            accountLeadName: custName,
        }).fail(() => {
            toast.error("Error sending appointment request.");
        });

    };
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
                                    <a style={{ textDecoration: 'none' }} href="/contact" className="theme_button">
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
                                    <ToastContainer />
                                    <form className="topmargin_60" noValidate onSubmit={handleSubmit} action="./">
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
                                                        value={custName}
                                                        onChange={(e) => setCustName(e.target.value)}
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
                                                        value={custContact}
                                                        onChange={(e) => setCustContact((e.target.value))}
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
                                                        value={from}
                                                        onChange={(e) => setFrom(e.target.value)}
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
                                                        value={to}
                                                        onChange={(e) => setTo(e.target.value)}
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
                                                            value={vehicle}
                                                            onChange={(e) => setVehicle(e.target.value)}
                                                            className="choice empty form-control"
                                                        >

                                                            <option value="" disabled selected data-default>
                                                                Select vehicle
                                                            </option>
                                                            <option value="bike">Bike</option>
                                                            <option value="car">Car</option>
                                                            <option value="truck">Heavy Vehicle</option>

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
                                                        type="date"

                                                        name="tow-date"
                                                        id="tow-date"
                                                        defaultValue=""
                                                        className="form-control"
                                                        placeholder="Type date"
                                                    />

                                                    <FaCalendarAlt className="fa fa-calendar grey" />

                                                </div>
                                            </div>
                                        </div>
                                        <p className="form-submit">
                                            <button
                                                type="submit"
                                                // id="submit"
                                                // name="submit"
                                                className="theme_button color1"
                                                style={{ color: 'red' }}
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

        </section>

    )
}
