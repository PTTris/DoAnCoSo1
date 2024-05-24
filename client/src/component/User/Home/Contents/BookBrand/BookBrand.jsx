import "./BookBrand.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategory } from "../../../../../redux/reducer/getAllCategory";
import {
    fetchAllBooksOfCategory,
    selectAllBooksOfCategory,
} from "../../../../../redux/reducer/getAllBooksOfCategory";
import { useEffect, useState } from "react";
import { fetchAllBook } from "../../../../../redux/reducer/getAllBooks";

const BookBrand = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategory);
    const [changeBookOfCategory, setchangeBookOfCategory] = useState(
        categories[0].maTheLoaiSach
    );
    const booksOfCategory = useSelector(selectAllBooksOfCategory);

    useEffect(() => {
        dispatch(fetchAllBook());
        dispatch(fetchAllBooksOfCategory(changeBookOfCategory));
    }, [dispatch, changeBookOfCategory, categories]);

    const handleOnClickChange = (event) => {
        const maTheLoaiSach = event.target.getAttribute("data");

        setchangeBookOfCategory(maTheLoaiSach);

        const allListItem = document.querySelectorAll("ul.twrap li.item");
        allListItem.forEach((item) => {
            item.classList.remove("current");
        });
        event.target.classList.add("current");
    };

    return (
        <>
            <section class="panner-book-brand">
                <section
                    class="section_why clearfix lazyload"
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
                        </div>
                    </div>
                </section>
            </section>

            <section class="types-of-brand">
                <div class="section_tab_feature lazyload">
                    <div class="container">
                        <div class="row">
                            <div class="section tabwrap">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="heading clearfix text-center">
                                        <h2 class="title_tab">
                                            Tủ sách thương hiệu Skybooks
                                        </h2>
                                    </div>
                                </div>

                                <div class=" navbar-pills tabs tabs-title tabtitle1 closetab ajax clearfix wrap_tab_index">
                                    <ul class=" twrap tabs tabs-title tabtitle1 clearfix">
                                        {categories.map((category) => (
                                            <li
                                                class={`item ${
                                                    changeBookOfCategory ===
                                                    category.maTheLoaiSach
                                                        ? "current"
                                                        : ""
                                                }`}
                                                key={category.maTheLoaiSach}
                                                data={category.maTheLoaiSach}
                                                onClick={(event) => {
                                                    handleOnClickChange(event);
                                                }}
                                            >
                                                {category.tenTheLoaiSach}
                                            </li>
                                        ))}
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
                                            {booksOfCategory.map((book) => (
                                                <SwiperSlide key={book.id_sach}>
                                                    <div className="image">
                                                        <img
                                                            class="image_cate_thumb lazyload loaded"
                                                            src={`http://localhost:8080/images/${book.thumbnail}`}
                                                            alt={book.tenSach}
                                                        />
                                                        <div class="cate-content">
                                                            <h3 class="title_cate">
                                                                {book.tenSach}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
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
