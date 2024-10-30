import React from 'react';
import './Service.css';
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';
import serviceDetail from '../Components/Inc/ServiceDetail';
import { useParams, Link } from 'react-router-dom';
import { MetaTags } from "react-meta-tags";

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
    <MetaTags>
        <title>{`${serviceF.title} | Modern Towing`}</title>
        <meta title={`${serviceF.title} | Modern Towing`} />
        <meta name="description" content={[serviceF.h1]} />
        <link rel="canonical" href={`Flatbed Towing Service in Andheri | Modern Towing, Best Hydraulic Towing in Andheri | Modern Towing, Two Wheeler Towing Services in Andheri | Modern Towing, Top Car Towing Services For Luxury Car in Andheri, Truck Towing Services in Andheri | Modern Towing   `} />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content={`${serviceF.title} | Modern Towing`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://demo.com/" />
        <meta property="og:description" content="Looking for Top Car Towing Services in Andheri West? Our reliable team offers 24/7 roadside assistance and fast towing solutions for your vehicle emergencies." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
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
      <section className='special-padding'>
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
                      <Link to={`/${service.slug}`} className="nav-link">
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
                  style={{ objectFit: 'fill' }}
                  alt={serviceF.alt}
                  className='service-img'
                />
              </div>

              <div className='service-descp custom-padding'>
                <h1 className="specialh1 underline serviceh1" >{serviceF.h1}</h1>
                <p>{serviceF.descp1}</p>
                <p>{serviceF.descp2}</p>
                <p>{serviceF.descp3}</p>
                <p>{serviceF.descp4}</p>
                <p>{serviceF.descp5}</p>
                <p>{serviceF.descp6}</p>
              </div>

              <div className='container custom-img-cont custom-padding'>
                <div className='row custom-service-imgrow' >
                  <div className="p-2 service-img2-cont col-6">
                    <img
                      src={serviceF.img[1]} // Uncomment and use appropriate image source
                      alt={serviceF.alt}
                      className='service-img'
                    />
                  </div>
                  <div className="p-2 service-img2-cont col-6">
                    <img
                      src={serviceF.img[2]} // Uncomment and use appropriate image source
                      alt={serviceF.alt}
                      className='service-img'
                    />
                  </div>
                </div>
              </div>

              <div className='custom-padding'>
                <h3 className="title-with-line">Our Work Process</h3>
                <div className='service-check-cont'>
                  <ul>
                    <li><FaCheck style={{ fontSize: 'medium' }} /> {' '}{serviceF.list1}</li>
                    <li><FaCheck style={{ fontSize: 'medium' }} /> {' '}{serviceF.list2}.</li>
                    <li><FaCheck style={{ fontSize: 'medium' }} /> {' '}{serviceF.list3}</li>
                    <li><FaCheck style={{ fontSize: 'medium' }} /> {' '}{serviceF.list4}</li>
                  </ul>
                </div>
                <h3 className="title-with-line">Service Features</h3>
                <p style={{paddingTop:20}}>{serviceF.specialfeature}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
