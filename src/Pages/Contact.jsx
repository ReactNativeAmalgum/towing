import React from 'react'
import './Contact.css'
import ContactSection from './Inc/ContactSection'
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
<ContactSection />
    </>
  )
}
