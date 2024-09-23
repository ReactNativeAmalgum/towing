import React from 'react'
import GallerySection from './Inc/GallerySection'

export default function Gallery() {
  return (
    <>
      <section className="page_breadcrumbs cs background_cover section_padding_top_40 section_padding_bottom_40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center custom-contact-col">
              <h2>Gallery</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="./">Home</a>
                </li>
                <li className="active">Gallery</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <GallerySection />
    </>
  )
}
