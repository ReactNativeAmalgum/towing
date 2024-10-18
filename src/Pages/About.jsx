import React from 'react'
import './Service.css'
import './About.css'
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import galleryData from '../Components/Assets/galleryData'
export default function About() {
  return (
    <>
      <section className="page_breadcrumbs cs background_cover section_padding_top_40 section_padding_bottom_40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center custom-contact-col">
              <h2>About Us</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="./">Home</a>
                </li>
                <li className="active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="container custom-about-cont" >
        <div className="row">
          {/* First Column with a Card */}
          <div className="col-12 col-md-6 custom-padding" >
            <p className='speacial-para'>
              Since 2004, we’ve been providing reliable towing and vehicle transport services for all types of vehicles, from cars to heavy-duty trucks. Our experienced team uses the latest equipment to ensure safe and efficient service. Trust us for professional and timely assistance, every time.

            </p>
            <h4>Why Choose Us</h4>
            <p>
              Our commitment to excellence sets us apart in the towing industry. We prioritize your safety and peace of mind by ensuring that every vehicle, whether a car, motorcycle, or truck, is handled with the utmost care by our highly trained professionals. With state-of-the-art equipment and technology, we provide efficient and reliable towing services tailored to your needs. We understand that emergencies can happen at any time, which is why we are available 24/7 to assist you. Our dedication to customer satisfaction drives us to go above and beyond, ensuring you receive the best service possible. Choose us for dependable, quality towing that you can trust.            </p>
            <div className='about-check-cont'>
              <ul>
                <li><FaCheck /> {' '} Our trained professionals ensure your vehicle is handled with care.</li>
                <li><FaCheck /> {' '}We use the latest technology for efficient towing services.</li>
                <li><FaCheck /> {' '} Our team is ready to assist you 24/7, day or night..</li>
                <li><FaCheck /> {' '}We strive to exceed your expectations with every service.</li>
              </ul>
            </div>
            <div className='wpb_wrapper'>
              <Link style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)} to="/contact" >
                <span style={{ color: 'white', }}>OUR SERVICES</span>
              </Link>

            </div>
          </div>

          {/* Second Column with Two Image Grids */}
          <div className="col-12 col-md-6 custom-about-col">
            <div className="d-flex flex-wrap">
              <div className="p-2 about-img-cont ">
                <img
                  src={galleryData.CLOSED2}
                  alt="Grid Image 1"
                  className='about-img '
                />
              </div>


              <div className='container custom-img-cont custom-padding' style={{ padding: 0 }}>
                <div className='row custom-aboutimg-row'>

                    <div className="p-2 about-img2-cont col-lg-6 col-sm-6">
                      <img
                        src={galleryData.FLATBED2}
                        alt="Grid Image 1"
                        className='about-img'
                      />

                  </div>

                    <div className="p-2 about-img2-cont col-lg-6 col-sm-6">
                      <img
                        src={galleryData.Flatbed8}
                        alt="Grid Image 1"
                        className='about-img'
                      />

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
