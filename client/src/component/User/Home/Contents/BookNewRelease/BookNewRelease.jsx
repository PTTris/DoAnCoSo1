import "./BookNewRelease.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchBookSortByDate,
    selectBookSortByDate,
} from "../../../../../redux/reducer/getBookSortByDate";
import { useEffect } from "react";
// import "./SlideShow.scss";
const BookNewRelease = () => {
    const dispatch = useDispatch();
    const booksNewRelease = useSelector(selectBookSortByDate);

    useEffect(() => {
        dispatch(fetchBookSortByDate());
    }, [dispatch]);

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
                                        {booksNewRelease &&
                                            booksNewRelease.map((book) => (
                                                <>
                                                    <SwiperSlide
                                                        key={book.maSach}
                                                    >
                                                        <div className="image">
                                                            <img
                                                                class="image_cate_thumb lazyload loaded"
                                                                src={
                                                                    book.hinhAnh
                                                                }
                                                                alt={
                                                                    book.tenSach
                                                                }
                                                            />
                                                            <div class="cate-content">
                                                                <h3 class="title_cate">
                                                                    {
                                                                        book.tenSach
                                                                    }
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            ))}
                                    </Swiper>
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
