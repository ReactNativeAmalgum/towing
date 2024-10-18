import React from 'react'
import './HomeService.css'
import galleryData from '../../Components/Assets/galleryData'
import serviceDetail from '../../Components/Inc/ServiceDetail'
export default function HomeService() {
    return (
        <section
            id="services"
            className="ls section_padding_top_150 section_padding_bottom_120 columns_margin_0"
        >
            <div className="container"> 
                <div className="row">
                    <div className="col-sm-12 text-center ">
                        <h2 className="section_header numbered-header">
                            Our
                            <strong> Services</strong>
                        </h2>
                        <p className="small-text">Emergency car towing service & closed car carrier service</p>
                        <hr className="divider_30_3 zebra_bg" />
                    </div>
                </div>
                <div className="row topmargin_30">
                    {
                        serviceDetail.map((service, i) => (
                            <div key={i} className="col-md-4 homeservcie-card-cont ">
                                <div className="with_padding">
                                    <div className="teaser text-center custom-homeservice-col">
                                        <div className='eee'>
                                            <div className='carImgCont'>
                                            <img style={{borderRadius:10,}} src={service.img[0]} alt={service.title} />

                                            </div>
                                        </div>
                                        <h4 className="regular title-cont">
                                            <a href={`/service/${service.slug}`}>{service.title}</a>
                                        </h4>
                                        <p>
                                            {service.homeDescp}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>

    )
}
