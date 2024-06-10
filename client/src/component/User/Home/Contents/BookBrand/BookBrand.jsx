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
            <section className="panner-book-brand">
                <section
                    className="section_why clearfix lazyload"
                    style={{
                        backgroundImage:
                            'url("//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg_why.jpg?1714959329989")',
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="heading clearfix">
                                    <h2>
                                        <span></span>
                                    </h2>
                                    <p className="text_small"></p>
                                </div>
                                <div className="wrap_item">
                                    <div className="col-item-srv">
                                        <div className="service_item_ed">
                                            <span className="iconx">
                                                <img
                                                    alt=""
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/icon_why_1.png?1714959329989"
                                                />
                                            </span>
                                            <div className="content_srv">
                                                <span className="title_service"></span>
                                                <span className="content_service"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-item-srv">
                                        <div className="service_item_ed">
                                            <span className="iconx">
                                                <img
                                                    alt=""
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/icon_why_2.png?1714959329989"
                                                />
                                            </span>
                                            <div className="content_srv">
                                                <span className="title_service"></span>
                                                <span className="content_service"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-item-srv">
                                        <div className="service_item_ed">
                                            <span className="iconx">
                                                <img
                                                    alt=""
                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/icon_why_3.png?1714959329989"
                                                />
                                            </span>
                                            <div className="content_srv">
                                                <span className="title_service"></span>
                                                <span className="content_service"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="types-of-brand">
                <div className="section_tab_feature lazyload">
                    <div className="container">
                        <div className="row">
                            <div className="section tabwrap">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="heading clearfix text-center">
                                        <h2 className="title_tab">
                                            Tủ sách thương hiệu Skybooks
                                        </h2>
                                    </div>
                                </div>

                                <div className=" navbar-pills tabs tabs-title tabtitle1 closetab ajax clearfix wrap_tab_index">
                                    <ul className=" twrap tabs tabs-title tabtitle1 clearfix">
                                        {categories.map((category) => (
                                            <li
                                                className={`item ${
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

                                <div className="col-xl-12 col-lg-12 col-12">
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
                                                            className="image_cate_thumb lazyload loaded"
                                                            src={`http://localhost:8080/images/${book.thumbnail}`}
                                                            alt={book.tenSach}
                                                        />
                                                        <div className="cate-content">
                                                            <h3 className="title_cate">
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
