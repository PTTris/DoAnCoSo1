import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SlideShow.scss";

export default function SlideShow() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper1"
            >
                <SwiperSlide>
                    <img
                        width="1920"
                        height="787"
                        src="https://bizweb.dktcdn.net/100/465/223/themes/877050/assets/slider_1.jpg?1714959329989"
                        alt="Slider 2"
                        class="img-responsive center-block"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        width="1920"
                        height="787"
                        src="https://bizweb.dktcdn.net/100/465/223/themes/877050/assets/slider_2.jpg?1714959329989"
                        alt="Slider 1"
                        class="img-responsive center-block"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
