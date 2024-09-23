import React from 'react'
import './Service.css'
import './About.css'
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa'
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
      <div className="container custom-about-cont" style={{ padding: 0 }}>
        <div className="row">
          {/* First Column with a Card */}
          <div className="col-12 col-md-6 custom-padding" style={{ paddingTop: 0, padding: 0 }}>
            <p className='speacial-para'>
              We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed by highly qualified mechanics. We can handle any car problem.


            </p>
            <h4>Why Choose Us</h4>
            <p>
              Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam, vel congue ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis venenatis neque. Donec volutpat tellus lobortis mi ornare eleifend. Fusce eu nisl ut diam ultricies accumsan. Integer lobortis vestibulum nunc id porta. Curabitur aliquam arcu sed ex dictum, a facilisis urna porttitor. Fusce et mattis nisl. Sed iaculis libero consequat justo auctor iaculis. Vestibulum sed ex et magna tristique bibendum. Sed hendrerit neque nec est suscipit, id faucibus dolor convallis.
            </p>
            <div className='about-check-cont'>
              <ul>
                <li><FaCheck /> {' '}Fusce justo risus placerat in risus eget tincidunt consequat elit.</li>
                <li><FaCheck /> {' '}Nunc fermentum sem sit amet dolor laoreet placerat.</li>
                <li><FaCheck /> {' '}Nullam rhoncus dictum diam quis ultrices.</li>
                <li><FaCheck /> {' '}Integer quis Quisque tristique neque arcu ut venenatis felis malesuada et.Service is good</li>
              </ul>
            </div>
            <div className='wpb_wrapper'>
<span>OUR SERVICES</span>
            </div>
          </div>

          {/* Second Column with Two Image Grids */}
          <div className="col-12 col-md-6 custom-about-col">
            <div className="d-flex flex-wrap">
              <div className="p-2 about-img-cont ">
                <img
                  src="https://ustow.com/wp-content/uploads/2020/07/truck-16-2-scaled.jpg"
                  alt="Grid Image 1"
                  className='about-img '
                />
              </div>


              <div className='container custom-img-cont custom-padding' style={{ padding: 0 }}>
                <div className="p-2 about-img2-cont">
                  <img
                    src="https://th.bing.com/th/id/OIP.oqa7G6c51hPDj5YYm4UaBwHaG0?rs=1&pid=ImgDetMain"
                    alt="Grid Image 1"
                    className='about-img'
                  />
                </div>
                <div className="p-2 about-img2-cont">
                  <img
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/EPr8-DxFHVTDT9ecEZZgdw/o.jpg"
                    alt="Grid Image 1"
                    className='about-img'
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
