import "./BookBrand.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const BookBrand = () => {
    return (
        <>
            <section class="panner-book-brand">
                <section
                    class="section_why clearfix lazyload"
                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg_why.jpg?1714959329989"
                    data-was-processed="true"
                    style={{
                        backgroundImage:
                            'url("//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg_why.jpg?1714959329989");',
                    }}
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-12">
                                <div class="heading clearfix">
                                    <h2>
                                        <span></span>
                                    </h2>
                                    <p class="text_small"></p>
                                </div>
                                <div class="wrap_item">
                                    <div class="col-item-srv">
                                        <div class="service_item_ed">
                                            <span class="iconx">
                                                <img
                                                    alt=""
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/icon_why_1.png?1714959329989"
                                                />
                                            </span>
                                            <div class="content_srv">
                                                <span class="title_service"></span>
                                                <span class="content_service"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-item-srv">
                                        <div class="service_item_ed">
                                            <span class="iconx">
                                                <img
                                                    alt=""
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/icon_why_2.png?1714959329989"
                                                />
                                            </span>
                                            <div class="content_srv">
                                                <span class="title_service"></span>
                                                <span class="content_service"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-item-srv">
                                        <div class="service_item_ed">
                                            <span class="iconx">
                                                <img
                                                    alt=""
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/icon_why_3.png?1714959329989"
                                                />
                                            </span>
                                            <div class="content_srv">
                                                <span class="title_service"></span>
                                                <span class="content_service"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-12"></div>
                        </div>
                    </div>
                </section>
            </section>

            <section class="types-of-brand">
                <div
                    class="section_tab_feature lazyload"
                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg_menu.jpg?1714959329989"
                    data-was-processed="true"
                >
                    <div class="container">
                        <div class="row">
                            <div class="section tabwrap">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="heading clearfix text-center">
                                        <h2 class="title_tab">
                                            <Link to="" className="link">
                                                Tủ sách thương hiệu Skybooks
                                            </Link>
                                        </h2>
                                    </div>
                                </div>

                                <div class=" navbar-pills tabs tabs-title tabtitle1 closetab ajax clearfix wrap_tab_index">
                                    <ul class=" twrap tabs tabs-title tabtitle1 clearfix">
                                        <li
                                            class="tab-link item has-content current"
                                            data-tab="tab-1"
                                            data-url="skybooks"
                                        >
                                            Skybooks
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-2"
                                            data-url="skynovel"
                                        >
                                            Skynovel
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-3"
                                            data-url="skycomics"
                                        >
                                            Skycomics
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-4"
                                            data-url="skymommy"
                                        >
                                            Skymommy
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-5"
                                            data-url="sky-special"
                                        >
                                            Sky Special
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-6"
                                            data-url="tu-sach-chua-lanh"
                                        >
                                            Tủ sách chữa lành
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-7"
                                            data-url="tu-sach-quy-co"
                                        >
                                            Tủ sách quý cô
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-8"
                                            data-url="song-khac"
                                        >
                                            Sống khác
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-9"
                                            data-url="deepbooks"
                                        >
                                            Deepbooks
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-10"
                                            data-url="tram-huong-nghiep"
                                        >
                                            Trạm hướng nghiệp
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-11"
                                            data-url="i-love-cookbook"
                                        >
                                            I love cookbook
                                        </li>

                                        <li
                                            class="tab-link item "
                                            data-tab="tab-12"
                                            data-url="glow-books"
                                        >
                                            Glow Books
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-xl-12 col-lg-12 col-12">
                                    <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={4}
                                            spaceBetween={10}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            grid={{
                                                rows: 2,
                                                fill: "row",
                                            }}
                                            breakpoints={{
                                                344: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 5,
                                                    grid: {
                                                        rows: 2,
                                                        fill: "row",
                                                    },
                                                },
                                                820: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 10,
                                                    grid: {
                                                        rows: 2,
                                                        fill: "row",
                                                    },
                                                },
                                                1024: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 20,
                                                    grid: {
                                                        rows: 2,
                                                        fill: "row",
                                                    },
                                                },
                                            }}
                                            modules={[Grid, Pagination]}
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
                                                            Ăn Trái Cây Phải
                                                            Đúng Cách
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
                                                            Dạo Này Em Có Ổn
                                                            Không?
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
                                                            Giả mã bí ẩn tiền mã
                                                            hóa
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
                                                            Giả mã bí ẩn tiền mã
                                                            hóa
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
                                                            Giả mã bí ẩn tiền mã
                                                            hóa
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
                                                            Giả mã bí ẩn tiền mã
                                                            hóa
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
                                                            Giả mã bí ẩn tiền mã
                                                            hóa
                                                        </h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookBrand;
