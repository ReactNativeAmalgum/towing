import React, { useState } from 'react'
import './Service.css'
import './About.css'
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import galleryData from '../Components/Assets/galleryData'

export default function About() {
  const [showMore, setShowMore] = useState(false);
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
      <section className='special-padding'>
        <div className="container custom-about-cont" >
          <div className="row">
            {/* First Column with a Card */}
            <div className="col-12 col-md-6 custom-padding" >
              <h1 className='specialh1 underline'>
              Car Towing Services in Andheri
              </h1>
              <p className='speacial-para'>
                Welcome to Modern Towing, your trusted partner for all your towing needs since 2004. With nearly two decades of experience in the industry, we take pride in being a leader in providing reliable Car Towing Services in Andheri West and beyond. Our commitment to excellence has allowed us to successfully tow over 400,000 vehicles, making us a preferred choice for drivers in need of assistance.
              </p>
              <h4>Why Choose Us</h4>
              <p>
                At Modern Towing, we understand that vehicle breakdowns can be stressful and inconvenient. That’s why our dedicated team is available around the clock to ensure that help is always just a call away. Our trained professionals are equipped with the latest towing technology and equipment, allowing us to handle all types of vehicles, from cars and motorcycles to trucks and heavy machinery. You may feel secure knowing that your Vehicle is in good hands when you choose us.
              </p>
              {
                showMore && (
                  <>
                    <p>
                      With three offices worldwide, we have established a reputation for reliability and efficiency. Our team consists of more than 50 skilled workers who are passionate about providing the best Car Towing Services in Andheri West. Each member of our team is committed to delivering prompt, professional service that exceeds your expectations. We believe that our customers deserve only the best, which is why we continuously invest in training and technology to enhance our services.
                    </p>
                    <p>
                      We recognize the importance of a seamless towing experience. That’s why we prioritize quick response times and clear communication with our clients. When you contact us for Car Towing Services in Andheri West, you can expect a friendly voice on the other end, ready to assist you with any questions or concerns. Our goal is to make the towing process as smooth and hassle-free as possible, so you can get back on the road in no time.
                    </p>
                    <p>
                      At Modern Towing, we are not just a towing company; we are a community of dedicated professionals who genuinely care about our customers. Our mission is to provide reliable and affordable towing solutions while maintaining the highest standards of safety and professionalism. Whether you are facing a roadside emergency or need to transport your vehicle to a different location, our team is here to help.
                    </p>
                    <p>
                      In conclusion, if you are looking for trustworthy Car Towing Services in Andheri West, look no further than Modern Towing. With our extensive experience, commitment to quality, and customer-focused approach, we are confident that we can meet all your towing needs. Thank you for considering us, and we look forward to serving you!
                    </p>
                  </>
                )
              }

               {/* Toggle Button */}
               <button 
                className='btn ' 
                style={{border:0,  paddingLeft:0, paddingTop:0}}
                onClick={() => setShowMore(!showMore)}
              >
                <span style={{color:'red',}}>
                {showMore ? 'show less' : 'read more...'}
                </span>
              </button>

              <div className='about-check-cont'>
                <ul>
                  <li><FaCheck /> {' '} Our trained professionals ensure your vehicle is handled with care.</li>
                  <li><FaCheck /> {' '}We use the latest technology for efficient towing services.</li>
                  <li><FaCheck /> {' '} Our team is ready to assist you 24/7, day or night..</li>
                  <li><FaCheck /> {' '}We strive to exceed your expectations with every service.</li>
                </ul>
              </div>
              <div className='wpb_wrapper'>
                <Link style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)} to="/top-car-towing-services-andheri-west/flatbed-towing-service-andheri" >
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
                    alt="Car Towing Services in Andheri"
                    className='about-img '
                  />
                </div>
                <div className='container custom-img-cont custom-padding' style={{ padding: 0 }}>
                  <div className='row custom-aboutimg-row'>

                    <div className="p-2 about-img2-cont col-lg-6 col-sm-6">
                      <img
                        src={galleryData.FLATBED2}
                        alt="Car Towing Services in Andheri"
                        className='about-img'
                      />

                    </div>

                    <div className="p-2 about-img2-cont col-lg-6 col-sm-6">
                      <img
                        src={galleryData.Flatbed8}
                        alt="Car Towing Services in Andheri"
                        className='about-img'
                      />

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
