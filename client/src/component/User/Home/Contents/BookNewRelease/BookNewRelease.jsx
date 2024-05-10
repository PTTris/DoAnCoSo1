import "./BookNewRelease.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "./SlideShow.scss";
const BookNewRelease = () => {
    return (
        <>
            <section class="book-new-release">
                <section class="section_category clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-12">
                                <div class="heading clearfix text-center">
                                    <h2>
                                        <span>SÁCH MỚI PHÁT HÀNH </span>
                                    </h2>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-12">
                                <div className="swiper-container">
                                    <Swiper
                                        slidesPerView={2}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            390: {
                                                slidesPerView: 2,
                                                spaceBetween: 10,
                                            },
                                            820: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 30,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <div className="image">
                                                <img
                                                    class="image_cate_thumb lazyload loaded"
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_1.jpg?1714959329989"
                                                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_1.jpg?1714959329989"
                                                    alt="Ăn Trái Cây Phải Đúng Cách"
                                                    data-was-processed="true"
                                                />
                                                <div class="cate-content">
                                                    <h3 class="title_cate">
                                                        Ăn Trái Cây Phải Đúng
                                                        Cách
                                                    </h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img
                                                    class="image_cate_thumb lazyload loaded"
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_2.jpg?1714959329989"
                                                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_2.jpg?1714959329989"
                                                    alt="Dạo Này Em Có Ổn Không?"
                                                    data-was-processed="true"
                                                />
                                                <div class="cate-content">
                                                    <h3 class="title_cate">
                                                        Dạo Này Em Có Ổn Không?
                                                    </h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img
                                                    class="image_cate_thumb lazyload loaded"
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_3.jpg?1714959329989"
                                                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_3.jpg?1714959329989"
                                                    alt="Vẻ Đẹp Ngôn Từ"
                                                    data-was-processed="true"
                                                />
                                                <div class="cate-content">
                                                    <h3 class="title_cate">
                                                        Vẻ Đẹp Ngôn Từ
                                                    </h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img
                                                    class="image_cate_thumb lazyload loaded"
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_4.jpg?1714959329989"
                                                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_4.jpg?1714959329989"
                                                    alt="Đến Nơi Nên Đến Yêu Người Nên Yêu "
                                                    data-was-processed="true"
                                                />
                                                <div class="cate-content">
                                                    <h3 class="title_cate">
                                                        Đến Nơi Nên Đến Yêu
                                                        Người Nên Yêu
                                                    </h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img
                                                    class="image_cate_thumb lazyload loaded"
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_5.jpg?1714959329989"
                                                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/sec_category_5.jpg?1714959329989"
                                                    alt="Giả mã bí ẩn tiền mã hóa "
                                                    data-was-processed="true"
                                                />
                                                <div class="cate-content">
                                                    <h3 class="title_cate">
                                                        Giả mã bí ẩn tiền mã hóa
                                                    </h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    {/* <Swiper
                                        slidesPerView={2}
                                        spaceBetween={20}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper2"
                                    ></Swiper> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default BookNewRelease;
