import React from "react";
import {
  FaClock,
  FaFacebook,
  FaFacebookF,
  FaInstagramSquare,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import galleryData from "../Assets/galleryData";
import { CgInstagram } from "react-icons/cg";
export default function Footer() {
  return (
    <footer className="page_footer ds section_padding_top_65 section_padding_bottom_50 columns_margin_bottom_40">
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 col-sm-6 to_animate animated fadeInUp"
            data-animation="fadeInUp"
          >
            <a href="./" className="logo">
              <div style={{ width: 80 }}>
                <img src={galleryData.LOGO} alt="" />
              </div>
            </a>
            <p>
              Modern Towing has 20 years of experience providing reliable car
              towing, luxury vehicle transport, heavy vehicle towing, and
              specialized hydraulic towing services, ensuring safe and efficient
              transport for all vehicles.
            </p>
            <p>
              <div className="social-cont">
                <Link
                  to={
                    "https://www.instagram.com/modern_towing_24?igsh=dmltYTQ3cGo1bG1q"
                  }
                >
                  <CgInstagram className="social-icon theme-color-icon soc-twitter" />
                </Link>
                <Link to={"https://www.facebook.com/share/Yea8LeehKWKfXNcq/"}>
                  {" "}
                  <FaFacebook className="social-icon theme-color-icon soc-twitter" />
                </Link>
                <Link
                  to="https://wa.me/9820849090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="social-icon theme-color-icon soc-twitter" />
                </Link>
              </div>
            </p>
          </div>
          <div
            className="col-md-4 col-sm-6 to_animate animated fadeInUp"
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
                        <MdKeyboardArrowRight style={{ color: "#ff0000" }} />
                        <a href="about">About</a>
                      </li>
                      <li>
                        <MdKeyboardArrowRight style={{ color: "#ff0000" }} />

                        <a href="/service/closedcartowing">Services</a>
                      </li>
                      <li>
                        <MdKeyboardArrowRight style={{ color: "#ff0000" }} />

                        <a href="/gallery">Gallery</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6">
                    <ul className="greylinks">
                      <li>
                        <MdKeyboardArrowRight style={{ color: "#ff0000" }} />

                        <a href="/contact">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 to_animate animated fadeInUp"
            data-animation="fadeInUp"
          >
            <div className="widget widget_text topmargin_15">
              <h3 className="widget-title">
                Get in
                <strong> Touch</strong>
              </h3>
              <hr className="divider_30_3 zebra_bg divider_left" />

              <div className="media small-teaser custom-small-teaser">
                <i className="fa fa-envelope highlight fontsize_18" />
                <div className="media-body">
                  <FaLocationArrow
                    style={{ color: "#ff0000", marginRight: 20 }}
                  />
                  Shop no 2 om sai darshan building C D Barfiwala road juhu
                  cross lane andheri west mumbai 400058
                </div>
              </div>
              <div className="media small-teaser custom-small-teaser">
                <i className="fa fa-envelope highlight fontsize_18" />
                <div className="media-body greylinks">
                  <MdEmail style={{ color: "#ff0000", marginRight: 20 }} />
                  <a href="mailto:your@mail.com">info@moderntowing.in</a>
                </div>
              </div>
              <div className="media small-teaser custom-small-teaser">
                <i className="fa fa-phone highlight fontsize_18" />
                <FaPhone style={{ color: "#ff0000", marginRight: 20 }} />
                <div className="media-body">
                  9820849090 / 9820842020 / 9820848080
                </div>
              </div>
              <div className="media small-teaser custom-small-teaser">
                <i className="fa fa-clock-o highlight fontsize_18" />
                <FaClock style={{ color: "#ff0000", marginRight: 20 }} />
                <div className="media-body">24 hours a day, 7 days a week</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
