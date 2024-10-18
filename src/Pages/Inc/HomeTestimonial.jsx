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
import testi4 from "../../Components/Assets/testi4.png"
import testi5 from "../../Components/Assets/testi5.png"
import testi6 from "../../Components/Assets/testi6.png"
import testi7 from "../../Components/Assets/testi7.png"
import testi8 from "../../Components/Assets/testi8.png"
import testi9 from "../../Components/Assets/testi9.png"
import testi10 from "../../Components/Assets/testi10.png"


export default function HomeTestimonial() {
    return (
        <section className="ds background_cover page_testimonials section_padding_50">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
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
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi4} alt="John Smith" />
                            Best towing service i ever received great experience to do a work with you guys
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Kaif ansari</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi5} alt="John Smith" />
                            Very prompt and quick response. The towing truck was at my place within 30 mins. My bike was delivered to the service center perfectly.
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Jude Thomas</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi6} alt="John Smith" />
                            Nice towing on time and provide best service I'm little very satisfied 🥰🥰
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Surendr Tiwari</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi7} alt="John Smith" />
                            On time service and professionaly loaded the vehicle
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Vishal Baradia</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi8} alt="John Smith" />
                            On time and good work no damage to vehicle not even single scratch
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Sabir Shaikh</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi9} alt="John Smith" />
                            On time delivery And provided best services I'm absolutely very satisfied 🥰
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Qasim Shaikh</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src={testi10} alt="John Smith" />
                            Modern towing has been a great help very honest super quick and professional and upfront 10/10would recommend
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Dayasagar Sah</h5>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
