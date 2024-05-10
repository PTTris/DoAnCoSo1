import "./NewsSpecial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const NewsSpecial = () => {
    return (
        <>
            <section class="news-special-main">
                <div
                    class="section_blog_feature lazyload"
                    data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg_blog.jpg?1714959329989"
                    data-was-processed="true"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-12">
                                <div class="heading text-center">
                                    <h2>
                                        <a
                                            href="/tin-tuc-bao-chi"
                                            title="Tin tức nổi bật"
                                        >
                                            Tin tức nổi bật
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-12">
                            <div className="swiper-container">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={5}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        390: {
                                            slidesPerView: 1,
                                            spaceBetween: 5,
                                        },
                                        820: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    modules={[Autoplay, Pagination]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                class="imageload lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                data-src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                alt="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                data-was-processed="true"
                                            />
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                        title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                    >
                                                        Tuổi trẻ thăng trầm mà
                                                        đáng nhớ
                                                    </a>
                                                </h3>
                                                <div class="posts">
                                                    <p>
                                                        Nguồn:&nbsp;https://tuoitre.vn/tuoi-tre-thang-tram-ma-dang-nho-20231217210316693.htm
                                                        Tuổi trẻ có những thăng
                                                        trầm giúp mình trưởng
                                                        thành hơn là thông điệp
                                                        được tác giả Tun Phạm
                                                        gửi gắm qua quyển sá...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                class="imageload lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                data-src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                alt="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                data-was-processed="true"
                                            />
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                        title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                    >
                                                        Tuổi trẻ thăng trầm mà
                                                        đáng nhớ
                                                    </a>
                                                </h3>
                                                <div class="posts">
                                                    <p>
                                                        Nguồn:&nbsp;https://tuoitre.vn/tuoi-tre-thang-tram-ma-dang-nho-20231217210316693.htm
                                                        Tuổi trẻ có những thăng
                                                        trầm giúp mình trưởng
                                                        thành hơn là thông điệp
                                                        được tác giả Tun Phạm
                                                        gửi gắm qua quyển sá...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                class="imageload lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                data-src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                alt="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                data-was-processed="true"
                                            />
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                        title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                    >
                                                        Tuổi trẻ thăng trầm mà
                                                        đáng nhớ
                                                    </a>
                                                </h3>
                                                <div class="posts">
                                                    <p>
                                                        Nguồn:&nbsp;https://tuoitre.vn/tuoi-tre-thang-tram-ma-dang-nho-20231217210316693.htm
                                                        Tuổi trẻ có những thăng
                                                        trầm giúp mình trưởng
                                                        thành hơn là thông điệp
                                                        được tác giả Tun Phạm
                                                        gửi gắm qua quyển sá...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                class="imageload lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                data-src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                alt="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                data-was-processed="true"
                                            />
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                        title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                    >
                                                        Tuổi trẻ thăng trầm mà
                                                        đáng nhớ
                                                    </a>
                                                </h3>
                                                <div class="posts">
                                                    <p>
                                                        Nguồn:&nbsp;https://tuoitre.vn/tuoi-tre-thang-tram-ma-dang-nho-20231217210316693.htm
                                                        Tuổi trẻ có những thăng
                                                        trầm giúp mình trưởng
                                                        thành hơn là thông điệp
                                                        được tác giả Tun Phạm
                                                        gửi gắm qua quyển sá...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                class="imageload lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                data-src="https://bizweb.dktcdn.net/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                alt="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                data-was-processed="true"
                                            />
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                        title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                    >
                                                        Tuổi trẻ thăng trầm mà
                                                        đáng nhớ
                                                    </a>
                                                </h3>
                                                <div class="posts">
                                                    <p>
                                                        Nguồn:&nbsp;https://tuoitre.vn/tuoi-tre-thang-tram-ma-dang-nho-20231217210316693.htm
                                                        Tuổi trẻ có những thăng
                                                        trầm giúp mình trưởng
                                                        thành hơn là thông điệp
                                                        được tác giả Tun Phạm
                                                        gửi gắm qua quyển sá...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsSpecial;
