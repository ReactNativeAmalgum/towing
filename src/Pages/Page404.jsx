import React from 'react'

export default function Page404() {
  return (
    <section className=" backgroundImage404 ds section_404 background_cover section_padding_top_150 section_padding_bottom_150">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-md-push-6 text-center">
          <p className="not_found highlight">
            404
            <span className="oops grey">Ooops!</span>
          </p>
          <h2 className='sorry' >Sorry page not found!</h2>
          <p>
            <a style={{textDecoration:'none'}} href="./" className="theme_button color1">
              Back To Home
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
