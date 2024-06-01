import "./BookDetail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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

const BookDetail = () => {
    const dispatch = useDispatch();
    const { tenSach } = useParams();
    const books = useSelector(selectAllBooks);
    const imgsBook = useSelector(selectAllImagesBook);
    console.log(books);
    const newBooks = books.filter((book) => {
        return changeString(book.tenSach) === tenSach;
    });

    const [imgID, setimgId] = useState(...newBooks);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchAllImagesBook(imgID.id_sach));
    }, [dispatch, imgID]);

    return (
        <>
            <div class="section wrap-padding-15 wp_product_main clearfix">
                <div class="details-product section">
                    <div
                        class="bg_product clearfix lazyload"
                        style={{
                            backgroundImage:
                                "url('//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg-top-product.jpg?1715681543062')",
                        }}
                    >
                        <div class="container">
                            <div class="row">
                                <div class="product-detail-left product-images col-xs-12 col-sm-12 col-md-12 col-lg-5 col-lg-5-pro">
                                    <div class="wrapbb">
                                        <div class="clearfix mb-5">
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
                                                    {/* {imgsBook &&
                                                        imgsBook.map((img) => (
                                                            <SwiperSlide>
                                                                <img
                                                                    src={`http://localhost:8080/images/${img.hinhAnh}`}
                                                                    alt=""
                                                                />
                                                            </SwiperSlide>
                                                        ))} */}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {newBooks.map((book) => (
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-lg-7-pro details-pro">
                                        <form
                                            id="add-to-cart-form"
                                            action="/cart/add"
                                            method="post"
                                            class="form-inline"
                                        >
                                            <div class="fw w_100">
                                                <div class="title_p clearfix">
                                                    <h1 class="title-product">
                                                        {book.tenSach}
                                                    </h1>
                                                </div>

                                                <div class="product-summary">
                                                    <div class="rte">
                                                        <table>
                                                            <tbody>
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
                                            <div class="form-product">
                                                <div className="price_quantity">
                                                    <div class="clearfix form-group  ">
                                                        <div class="custom custom-btn-number show">
                                                            <label class="sl section">
                                                                Số lượng:
                                                            </label>
                                                            <div class="input_number_product custom-btn-number form-control">
                                                                <button
                                                                    class="btn_num num_1"
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
                                                                    <i class="fas fa-minus"></i>
                                                                </button>
                                                                <input
                                                                    type="number"
                                                                    id="qtym"
                                                                    min={1}
                                                                    value={
                                                                        quantity
                                                                    }
                                                                    maxlength="3"
                                                                    class="form-control prd_quantity"
                                                                />
                                                                <button
                                                                    class="btn_num num_2"
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
                                                                    <i class="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="special-price">
                                                        <span class="price product-price">
                                                            {book.giaSach} VNĐ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-mua button_actions clearfix">
                                                <button
                                                    type="submit"
                                                    class="btn btn_base normal_button btn_add_cart add_to_cart btn-cart"
                                                >
                                                    <span class="txt-main text_1">
                                                        Thêm vào giỏ hàng
                                                    </span>
                                                </button>
                                                <button
                                                    type="submit"
                                                    class="btn fast btn_base btn_add_cart btn-cart"
                                                >
                                                    <span class="txt-main text_1">
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
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-12">
                                <div class="tab_h">
                                    <div class="section bg_white">
                                        <div class="product-tab e-tabs not-dqtab">
                                            <ul class="tabs tabs-title clearfix">
                                                <li
                                                    class="tab-link active"
                                                    data-tab="#tab-1"
                                                >
                                                    <h2 class="title-head margin-top-0 cate">
                                                        <span>
                                                            Mô tả sản phẩm
                                                        </span>
                                                    </h2>
                                                </li>
                                            </ul>
                                            <div class="tab-float">
                                                <div
                                                    id="tab-1"
                                                    class="tab-content active content_extab"
                                                >
                                                    <div class="rte product_getcontent">
                                                        <div id="content">
                                                            <p>&nbsp;</p>
                                                            <p>
                                                                <strong>
                                                                    Bốn Mùa Đáng
                                                                    Sống, Bảy
                                                                    Ngày Đáng
                                                                    Mong
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                Cuộc đời này dài
                                                                rộng thế, liệu
                                                                có một nơi nào
                                                                đủ ấm áp để bạn
                                                                chọn dừng chân?
                                                            </p>
                                                            <p>
                                                                Ở đó, bạn sẽ cảm
                                                                nhận từng làn
                                                                gió khi mùa xuân
                                                                sang, lắng nghe
                                                                tiếng ve kêu râm
                                                                ran khi mùa hè
                                                                tới, ngắm nhìn
                                                                mùa thu với
                                                                những chiếc lá
                                                                vàng thay áo hay
                                                                mùa đông của cái
                                                                lạnh cắt da… Với
                                                                cuốn sách “Bốn
                                                                mùa đáng sống,
                                                                bảy ngày đáng
                                                                mong” bạn sẽ
                                                                được dẫn tới một
                                                                nơi như thế, nơi
                                                                mà nỗi buồn
                                                                không còn u tối
                                                                và muộn phiền
                                                                không nặng nề,
                                                                một cuốn sách sẽ
                                                                giúp bạn tìm lại
                                                                những rung động
                                                                đẹp đẽ của tâm
                                                                hồn.
                                                            </p>
                                                            <p>
                                                                - “Bốn mùa đáng
                                                                sống” - bốn mùa
                                                                trôi qua, dẫu có
                                                                lúc hạnh phúc,
                                                                có khi lại khó
                                                                khăn vất vả, ta
                                                                đều cảm ơn tháng
                                                                ngày đi qua và
                                                                cùng cầu chúc
                                                                cho một khởi đầu
                                                                tươi mới, vui vẻ
                                                                và dịu dàng hơn
                                                                cứ thế mà đi qua
                                                                Xuân Hạ Thu Đông
                                                            </p>
                                                            <p>
                                                                - “Bảy ngày đáng
                                                                mong” - mỗi ngày
                                                                đều phải nhắc
                                                                nhở bản thân
                                                                đừng mãi than
                                                                phiền. Nếu như
                                                                bạn không đuổi
                                                                kịp bình mình
                                                                lúc 5h sáng, vậy
                                                                hãy thử ngắm
                                                                hoàng hôn lúc 6h
                                                                chiều bởi khoảnh
                                                                khắc nào cũng
                                                                đáng giá.&nbsp;
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                Suy cho cùng,
                                                                hoàng hôn miễn
                                                                phí, xuân hạ thu
                                                                đông cũng vậy,
                                                                đừng cảm thấy
                                                                cuộc đời này là
                                                                vô
                                                                nghĩa.&nbsp;&nbsp;
                                                            </p>
                                                            <p>
                                                                Gửi gắm trong
                                                                200 trang sách
                                                                là những câu
                                                                chuyện thăng
                                                                trầm ai rồi cũng
                                                                phải đi qua…,
                                                                nhưng bằng lời
                                                                văn của tác giả
                                                                Phạm Thảo Ly
                                                                (Viết dài ai
                                                                đọc) bạn sẽ cảm
                                                                thấy nhẹ nhàng,
                                                                như khi trở về
                                                                nhà sau những
                                                                giờ phút căng
                                                                thẳng, để tâm
                                                                trí hoàn toàn
                                                                rộng mở, trước
                                                                cánh đồng xanh,
                                                                trong góc quán
                                                                nhỏ, bên cạnh
                                                                một người bạn
                                                                hợp ý, bất kể
                                                                mới quen biết
                                                                hay đã thân
                                                                thuộc từ lâu.
                                                            </p>
                                                            <p>
                                                                Hy vọng bạn đi
                                                                qua bốn mùa đều
                                                                thấy đáng sống,
                                                                bảy ngày với bạn
                                                                đều là ngày đáng
                                                                mong. Mỗi phút
                                                                mỗi giây trôi
                                                                qua đều có thể
                                                                hết mình sống
                                                                cho thật trọn
                                                                vẹn. Bởi vốn dĩ
                                                                đến được cuộc
                                                                đời này và đi
                                                                đến ngày hôm nay
                                                                đã chẳng dễ dàng
                                                                gì. Hoa không nở
                                                                mãi nhưng sẽ vẫn
                                                                luôn có hoa đang
                                                                bung nở. Một
                                                                thái độ sống đẹp
                                                                sẽ là vị thuốc
                                                                tốt để chữa lành
                                                                tất cả. Bốn mùa
                                                                tuy dài đằng
                                                                đẵng, nhưng cũng
                                                                sẽ mênh mông rực
                                                                rỡ vô cùng.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-12 col-lg-12 col-12">
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
