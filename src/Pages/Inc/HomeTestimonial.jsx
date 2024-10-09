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
                                <h5 className="highlight">Curtis Harrington</h5>
                                <p>Manager</p>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi2} alt="Jane Doe" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Jane Doe</h5>
                                <p>Director</p>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi3} alt="John Smith" />
                            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris.
                            <div className="item-meta lightfont">
                                <h5 className="highlight">John Smith</h5>
                                <p>CEO</p>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
