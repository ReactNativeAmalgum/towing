import React, { useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../../Pages/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import $ from "jquery";
import 'react-toastify/dist/ReactToastify.css';
export default function ContactSection() {
  const [custName, setCustName] = useState("");
  const [custLastName, setCustLastName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custContact, setCustContact] = useState("");
  const [custMessage, setCustMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const resetForm = () => {
    setCustName('');          
    setCustLastName('');     
    setCustEmail('');        
    setCustContact('');     
    setCustMessage('');     
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!custName || !custLastName || !custContact || !custEmail || !custMessage) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate email format
    if (!validateEmail(custEmail)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      await Appoinment(); 
      console.log("Submitted data:", { custName, custLastName, custEmail, custContact, custMessage });
      toast.success("Your message has been sent!"); 
      resetForm(); 

    } catch (error) {
      console.error("Error submitting the appointment:", error);
      toast.error("Failed to send the message. Please try again later."); 
    } 
  };

  const Appoinment = () => {
    const body =
    '<!DOCTYPE html><html> <head> <title>Mordern Towing</title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> </head> <body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"> <div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"> <tr> <td align="center" style="background-color:#eee" bgcolor="#eeeeee"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"> <tr> <td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#FFD44C"> <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"> <tr> <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"> <a href="tel:+91 986745454" style="text-decoration:none;color:#000;font-family:serif;font-size:16px">Leade generate for just Mordern Towing</a> </td></tr></table> </td></tr></table> </div></td></tr><tr> <td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"> <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"> <tr> <td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"> <tr> <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"> <img style="width:100%;height:120px" src="https://justmirrorsalon.in/static/media/JMS.7493f202fc387288d7c0.png" alt=""> </td></tr></table> </td></tr></table> </div></td></tr><tr> <td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#FFD44C"> <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"> <tr> <td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"> <h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#000">Client Enquiry Details</h1> </td></tr></table> </div></td></tr><tr> <td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"> <tr> <td width="100%" align="center" valign="top" style="font-size:0"> <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"> <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"> <tr> <td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer First Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
    custName +
    '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer Lastname:</p><p style="font-size:14px;font-weight:500;color:#111">' +
    custLastName +
    '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' +
    custEmail +
    '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer Contact:</p><p style="font-size:14px;font-weight:500;color:#111">' +
    custContact +
    '</p></td></tr></table> </div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"> <tr> <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"> <p style="font-size:16px;font-weight:600;color:#0074be">Customer Message:</p><p style="font-size:14px;font-weight:500;color:#111">' +
    custMessage +
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
    });
  
  };
  return (
    <section className="ls columns_padding_25 columns_margin_bottom_60">
      <div className="container">
        <div className="row">
          <ToastContainer />
          <div className="col-md-8 to_animate animated scaleAppear" data-animation="scaleAppear">
            <h2 className="section_header">
              Contact <strong>Form</strong>
            </h2>
            <hr className="divider_30_3 bottommargin_30 divider_left zebra_bg" />
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="row columns_margin_bottom_15">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">First Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="First Name"
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="lastName" className="sr-only">Last Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={custLastName}
                      onChange={(e) => setCustLastName(e.target.value)}

                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Your E-Mail</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Your E-Mail"
                      value={custEmail}
                      onChange={(e) => setCustEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="sr-only">Phone Number <span className="required">*</span></label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Your Phone"
                      value={custContact}
                      onChange={(e) => setCustContact(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                      rows={10}
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Your Message"
                      value={custMessage}
                      onChange={(e) => setCustMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <p className="form-submit">
                <button type="submit" className="theme_button"><span>submit</span></button>
              </p>
            </form>
          </div>
          {/* Contact Info */}
          <div className="col-md-4 to_animate animated scaleAppear" data-animation="scaleAppear">
            <h2 className="section_header contact-header">
              Contact <strong>Info</strong>
            </h2>
            <hr className="divider_30_3 bottommargin_30 divider_left zebra_bg" />
            <div className="small-teaser media">
              <div className="media-left">
                <FaMapMarkerAlt style={{ paddingRight: 20 }} className="highlight" />
              </div>
              <div className="media-body">Shop no 2 om sai darshan building C D Barfiwala road juhu cross lane andheri west mumbai 400058</div>
            </div>
            <div className="small-teaser media">
              <div className="media-left">
                <MdEmail className="highlight" />
              </div>
              <div className="media-body" style={{ paddingRight: 20 }}>info@moderntowing.in</div>
            </div>
            <div className="small-teaser media">
              <div className="media-left">
                <FaPhoneAlt className="highlight" />
              </div>
              <div className="media-body" style={{ paddingRight: 20 }}>9820849090 / 9820842020 / 9820848080</div>
            </div>
            <div className="small-teaser media">
              <div className="media-left">
                <FaClock className="highlight" />
              </div>
              <div className="media-body" style={{ paddingRight: 20 }}>24 hours a day, 7 days a week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
