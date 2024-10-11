import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './HomeTestimonial.css';
// Import Swiper styles
import "swiper/css";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import testi1 from '../../Components/Assets/testi1.png'
import testi2 from "../../Components/Assets/testi2.png"
import testi3 from "../../Components/Assets/testi3.png"
export default function HomeTestimonial() {
    return (
        <section className="ds background_cover page_testimonials section_padding_50">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi1} alt="Curtis Harrington" />
                            On time, quick, smooth experience at competitive prices. Driver was very experienced and was able to find pickup and drop locations quickly.
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Anmol Mehta</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi2} alt="Jane Doe" />
                            Very prompt and quick response. The towing truck was at my place within 30 mins. My bike was delivered to the service center perfectly.
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Mahetab Khan</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi3} alt="John Smith" />
                            Excellent service for towing my TATA Nexon EV   - very well handled and punctual timing wise   - suresh Karnani
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Sohail Shaikh</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
