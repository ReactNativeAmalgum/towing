import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './HomeTestimonial.css';
// Import Swiper styles
import "swiper/css";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

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
                            <img src="https://html.modernwebtemplates.com/towy/images/faces/01.jpg" alt="Curtis Harrington" />
                            Meatloaf laborum velit kielbasa. Drumstick sirloin lorem chicken swine
                            biltong in short ribs duis bresaola. Veniam meatloaf cow incididunt in
                            bacon kevin in pork belly ball tip duis ipsum. Ribeye et aliquip strip
                            steak dolore in anim. Officia tongue bacon mollit esse. Ipsum deserunt
                            salami jowl short ribs veniam.
                            <div className="item-meta lightfont">
                                <h5 className="highlight">Curtis Harrington</h5>
                                <p>Manager</p>
                            </div>
                        </blockquote>
                    </SwiperSlide>
                    <SwiperSlide>
                        <blockquote>
                            <img src="https://html.modernwebtemplates.com/towy/images/faces/02.jpg" alt="Jane Doe" />
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
                            <img src="https://html.modernwebtemplates.com/towy/images/faces/03.jpg" alt="John Smith" />
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
