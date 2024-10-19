import React from 'react'
import './Contact.css'
import ContactSection from './Inc/ContactSection'
const interiorWorkContent = [
  {
    descp1:
      `At Modern Towing, we are committed to providing top-notch towing services to ensure you receive the support you need whenever you face vehicle trouble. Located in Andheri, we understand how critical it is to have a reliable towing service available, especially during emergencies. Whether it's a minor breakdown or a more significant towing requirement, our expert team is always ready to assist.`,
    descp2:
      "If you're searching for Towing Services near Andheri, you've come to the right place. We offer a wide range of towing solutions tailored to your needs, ensuring safe and timely assistance for all types of vehicles. Our services cover everything from flatbed towing and hydraulic towing to luxury car towing and two-wheeler towing. No matter the situation, we have the equipment and expertise to handle it efficiently. Our team operates 24/7, making us your go-to provider for Towing Services near Andheri anytime, day or night.",
    descp3:
      `Please feel free to contact us using the information provided below.. Whether you need immediate assistance or have queries about our services, we're always here to help. You can visit our office in Andheri or give us a call for quick service. If you're looking for dependable Towing Services near Andheri, Modern Towing is the name you can trust.
We take pride in our customer-focused approach and always strive to ensure your vehicle is handled with care. With years of experience, a professional team, and state-of-the-art equipment, we guarantee prompt and reliable service. Contact Modern Towing today and experience our unparalleled support in towing services.
`,

  },
];
export default function Contact() {

  return (
    <>
        <section className="page_breadcrumbs cs background_cover section_padding_top_40 section_padding_bottom_40">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center custom-contact-col">
                <h2>Contact Us</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li className="active">Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className='special-padding'>
        <section className="contact-project-version-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div style={{ marginBottom: 0 }} className="section-heading">
                  {/* <h6>| Our Gallery</h6> */}
                  <h2>Towing Services near Andheri</h2>
                </div>
                <div className="interior-work-container">
                  {interiorWorkContent.map((item, index) => (
                    <p key={index} className="interior-work-paragraph">
                      {item.descp1}
                      {item.descp2}
                    </p>
                  ))}
                </div>
                <div className="interior-work-container">
                  {interiorWorkContent.map((item, index) => (
                    <p key={index} className="interior-work-paragraph">
                      {item.descp3}
                      {item.descp4}
                    </p>
                  ))}
                </div>
                <div className="interior-work-container">
                  {interiorWorkContent.map((item, index) => (
                    <p key={index} className="interior-work-paragraph">
                      {item.descp5}
                    </p>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>
        <ContactSection />
      </section>
    </>
  )
}
