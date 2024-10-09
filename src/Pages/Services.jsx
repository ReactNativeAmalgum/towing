import React from 'react';
import './Service.css';
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';
import serviceDetail from '../Components/Inc/ServiceDetail';
import { useParams, Link } from 'react-router-dom';

export default function Services() {
  const { slug } = useParams();
  const serviceF = serviceDetail.find((service) => service.slug === slug);

  // Check if service is found
  if (!serviceF) {
    return (
      <div className="container">
        <h2>Service Not Found</h2>
        <p>The service you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <section className="page_breadcrumbs cs background_cover section_padding_top_40 section_padding_bottom_40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center custom-contact-col">
              <h2>Services</h2>
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Service</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="container custom-service-cont">
        <div className="row">
          {/* First Column with a Card */}
          <div className="col-12 col-md-4 custom-padding">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">All Services</h4>
                <ul className="list-group list-group-flush">
                  {serviceDetail.map((service, index) => (
                    <li key={index} className="list-group-item">
                      <Link to={`/service/${service.slug}`} className="nav-link">
                        <FaLongArrowAltRight /> {' '} {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Second Column with Two Image Grids */}
          <div className="col-12 col-md-8 custom-service-col">
            <div className="d-flex flex-wrap">
              <div className="p-2 service-img-cont">
                <img
                  src={serviceF.img[0]}
                  style={{ objectFit: 'cover' }}
                  alt="Service Main Image"
                  className='service-img'
                />
              </div>

              <div className='service-descp custom-padding'>
                <h3 className="title-with-line">{serviceF.title}</h3>
                <p>{serviceF.descp1}</p>
                <p>{serviceF.descp2}</p>
              </div>
              
              <div className='container custom-img-cont custom-padding'>
                <div className="p-2 service-img2-cont">
                  <img
                    src={serviceF.img[1]} // Uncomment and use appropriate image source
                    alt="Additional Image 1"
                    className='service-img'
                  />
                </div>
                <div className="p-2 service-img2-cont">
                  <img
                    src={serviceF.img[2]} // Uncomment and use appropriate image source
                    alt="Additional Image 2"
                    className='service-img'
                  />
                </div>
              </div>
              
              <div className='custom-padding'>
                <h3 className="title-with-line">Our Work Process</h3>
                <p>{serviceF.descp3}</p>
                <div className='service-check-cont'>
                  <ul>
                    <li><FaCheck /> {' '}{serviceF.list1}</li>
                    <li><FaCheck /> {' '}{serviceF.list2}.</li>
                    <li><FaCheck /> {' '}{serviceF.list3}</li>
                    <li><FaCheck /> {' '}{serviceF.list4}</li>
                  </ul>
                </div>
                <h3 className="title-with-line">Service Features</h3>
                <p>{serviceF.descp4}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
