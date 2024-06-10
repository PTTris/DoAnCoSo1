import "./BookDetail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectAllBooks } from "../../../../redux/reducer/getAllBooks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeString } from "../../../../assets/js/handleFunc";
import { useEffect, useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import {
    fetchAllImagesBook,
    selectAllImagesBook,
} from "../../../../redux/reducer/getAllImagesBook";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import BookNewRelease from "../../Home/Contents/BookNewRelease/BookNewRelease";
import {
    fetchAllDescBook,
    selectAllDescBook,
} from "../../../../redux/reducer/getDescriptionBook";

const BookDetail = () => {
    const dispatch = useDispatch();
    const { tenSach } = useParams();
    const books = useSelector(selectAllBooks);
    const imgsBook = useSelector(selectAllImagesBook);
    const descBook = useSelector(selectAllDescBook);
    const updatedBooks = books.filter((book) => {
        return changeString(book.tenSach) === tenSach;
    });
    const [data, setData] = useState(
        updatedBooks.length > 0 ? updatedBooks[0] : {}
    );
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (updatedBooks.length > 0) {
            setData(updatedBooks[0]);
        }
    }, [updatedBooks]);

    useEffect(() => {
        if (data.id_sach) {
            dispatch(fetchAllImagesBook(data.id_sach));
            dispatch(fetchAllDescBook(data.id_sach));
        }
    }, [dispatch, data.id_sach]);

    return (
        <>
            <div className="section wrap-padding-15 wp_product_main clearfix">
                <div className="details-product section">
                    <div
                        className="bg_product clearfix lazyload"
                        style={{
                            backgroundImage:
                                "url('//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg-top-product.jpg?1715681543062')",
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="product-detail-left product-images col-xs-12 col-sm-12 col-md-12 col-lg-5 col-lg-5-pro">
                                    <div className="wrapbb">
                                        <div className="clearfix mb-5">
                                            <div className="swiper-container slide-show-images">
                                                <Swiper
                                                    style={{
                                                        "--swiper-navigation-color":
                                                            "#38a8ea",
                                                        "--swiper-pagination-color":
                                                            "#38a8ea",
                                                    }}
                                                    spaceBetween={5}
                                                    navigation={true}
                                                    modules={[
                                                        FreeMode,
                                                        Navigation,
                                                    ]}
                                                    className="mySwiper2"
                                                >
                                                    {imgsBook &&
                                                        imgsBook.map(
                                                            (img, index) => (
                                                                <SwiperSlide>
                                                                    <img
                                                                        key={
                                                                            index
                                                                        }
                                                                        src={`http://localhost:8080/images/${img.hinhAnh}`}
                                                                        alt=""
                                                                    />
                                                                </SwiperSlide>
                                                            )
                                                        )}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {updatedBooks.map((book) => (
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-lg-7-pro details-pro">
                                        <form
                                            id="add-to-cart-form"
                                            action="/cart/add"
                                            method="post"
                                            className="form-inline"
                                        >
                                            <div className="fw w_100">
                                                <div className="title_p clearfix">
                                                    <h1 className="title-product">
                                                        {book.tenSach}
                                                    </h1>
                                                </div>

                                                <div className="product-summary">
                                                    <div className="rte">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <th>
                                                                        Thể loại
                                                                        sách
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.tenTheLoaiSach
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Tác giả
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.tacGia
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>NXB</th>
                                                                    <td>
                                                                        {
                                                                            book.nhaXB
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Năm XB
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.namXB
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Ngôn Ngữ
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.ngonNgu
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Trọng
                                                                        lượng
                                                                        (gr)
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.trongLuongGr
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Kích
                                                                        Thước
                                                                        Bao Bì
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.kichThuocBaoBi
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Số trang
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.soTrang
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        Hình
                                                                        thức
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            book.hinhThucSach
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-product">
                                                <div className="price_quantity">
                                                    <div className="clearfix form-group  ">
                                                        <div className="custom custom-btn-number show">
                                                            <label className="sl section">
                                                                Số lượng:
                                                            </label>
                                                            <div className="input_number_product custom-btn-number form-control">
                                                                <button
                                                                    className="btn_num num_1"
                                                                    type="button"
                                                                    onClick={() => {
                                                                        if (
                                                                            quantity <=
                                                                            1
                                                                        )
                                                                            return;
                                                                        setQuantity(
                                                                            quantity -
                                                                                1
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className="fas fa-minus"></i>
                                                                </button>
                                                                <input
                                                                    type="number"
                                                                    id="qtym"
                                                                    min={1}
                                                                    value={
                                                                        quantity
                                                                    }
                                                                    maxlength="3"
                                                                    className="form-control prd_quantity"
                                                                />
                                                                <button
                                                                    className="btn_num num_2"
                                                                    type="button"
                                                                    onClick={() => {
                                                                        if (
                                                                            quantity >=
                                                                            book.soLuongTonKho
                                                                        )
                                                                            return;
                                                                        setQuantity(
                                                                            quantity +
                                                                                1
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="special-price">
                                                        <span className="price product-price">
                                                            {book.giaSach} VNĐ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-mua button_actions clearfix">
                                                <button
                                                    type="submit"
                                                    className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart"
                                                >
                                                    <span className="txt-main text_1">
                                                        Thêm vào giỏ hàng
                                                    </span>
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn fast btn_base btn_add_cart btn-cart"
                                                >
                                                    <span className="txt-main text_1">
                                                        Mua ngay
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <div className="tab_h">
                                    <div className="section bg_white">
                                        <div className="product-tab e-tabs not-dqtab">
                                            <ul className="tabs tabs-title clearfix">
                                                <li
                                                    className="tab-link active"
                                                    data-tab="#tab-1"
                                                >
                                                    <h2 className="title-head margin-top-0 cate">
                                                        <span>
                                                            Mô tả sản phẩm
                                                        </span>
                                                    </h2>
                                                </li>
                                            </ul>
                                            <div className="tab-float">
                                                <div
                                                    id="tab-1"
                                                    className="tab-content active content_extab"
                                                >
                                                    <div className="rte product_getcontent">
                                                        <div id="content">
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        descBook.length !==
                                                                        0
                                                                            ? descBook[0]
                                                                                  .noiDung
                                                                            : "Hiện tại nội dung chưa cập nhật",
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-12">
                                    <BookNewRelease />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;
