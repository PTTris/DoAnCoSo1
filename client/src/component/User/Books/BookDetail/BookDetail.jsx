import "./BookDetail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const BookDetail = () => {
    return (
        <>
            <div class="section wrap-padding-15 wp_product_main clearfix">
                <div class="details-product section">
                    <div
                        class="bg_product clearfix lazyload"
                        data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/bg-top-product.jpg?1714959329989"
                        data-was-processed="true"
                    >
                        <div class="container">
                            <div class="row">
                                <div class="product-detail-left product-images col-xs-12 col-sm-12 col-md-12 col-lg-5 col-lg-5-pro">
                                    <div class="wrapbb">
                                        <div class="slider-big-video clearfix mb-5">
                                            <div class="slider">
                                                <div
                                                    aria-live="polite"
                                                    class="slick-list draggable"
                                                >
                                                    <div class="slick-track">
                                                        <a
                                                            class="img_bigg slick-slide slick-current slick-active"
                                                            href="//bizweb.dktcdn.net/thumb/1024x1024/100/465/223/products/b-a-1-b-n-m-a-ng-s-ng-b-y-ng-y-ng-mong.jpg?v=1715072106453"
                                                            title="Click để xem"
                                                            rel="lightbox-demo"
                                                        >
                                                            <img
                                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/products/b-a-1-b-n-m-a-ng-s-ng-b-y-ng-y-ng-mong.jpg?v=1715072106453"
                                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/products/b-a-1-b-n-m-a-ng-s-ng-b-y-ng-y-ng-mong.jpg?v=1715072106453"
                                                                alt="Bốn Mùa Đáng Sống, Bảy Ngày Đáng Mong"
                                                                data-image="https://bizweb.dktcdn.net/100/465/223/products/b-a-1-b-n-m-a-ng-s-ng-b-y-ng-y-ng-mong.jpg?v=1715072106453"
                                                                class="lazyload img-responsive mx-auto d-block loaded"
                                                                data-was-processed="true"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                    Bốn Mùa Đáng Sống, Bảy Ngày
                                                    Đáng Mong
                                                </h1>
                                            </div>

                                            <div class="product-summary">
                                                <div class="rte">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Tác giả</th>
                                                                <td>
                                                                    Phạm Thảo
                                                                    Ly, Viết Dài
                                                                    Ai Đọc
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>NXB</th>
                                                                <td>Dân Trí</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Năm XB</th>
                                                                <td>2024</td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Ngôn Ngữ
                                                                </th>
                                                                <td>
                                                                    Tiếng Việt
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Trọng lượng
                                                                    (gr)
                                                                </th>
                                                                <td>220</td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Kích Thước
                                                                    Bao Bì
                                                                </th>
                                                                <td>
                                                                    20 x 12 x 1
                                                                    cm
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Số trang
                                                                </th>
                                                                <td>200</td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Hình thức
                                                                </th>
                                                                <td>Bìa Mềm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-product">
                                            <div class="special-price">
                                                <span class="price product-price">
                                                    Liên hệ
                                                </span>
                                            </div>

                                            <div class="clearfix form-group  ">
                                                <div class="custom custom-btn-number show">
                                                    <label class="sl section">
                                                        Số lượng:
                                                    </label>
                                                    <div class="custom input_number_product custom-btn-number form-control">
                                                        <button
                                                            class="btn_num num_1 button button_qty"
                                                            onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro ) &amp;&amp; qtypro > 1 ) result.value--;return false;"
                                                            type="button"
                                                        >
                                                            <i class="fas fa-minus"></i>
                                                        </button>
                                                        <input
                                                            type="text"
                                                            id="qtym"
                                                            name="quantity"
                                                            value="1"
                                                            maxlength="3"
                                                            class="form-control prd_quantity"
                                                        />
                                                        <button
                                                            class="btn_num num_2 button button_qty"
                                                            type="button"
                                                        >
                                                            <i class="fas fa-plus"></i>
                                                        </button>
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
                                            </div>
                                        </div>
                                    </form>
                                </div>
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

                                <div className="prodcut-relevant">
                                    <div class="col-xl-12 col-12">
                                        <div class="heading text-center">
                                            <h2>
                                                <a
                                                    href="/tin-tuc-bao-chi"
                                                    title="Tin tức nổi bật"
                                                >
                                                    Sản phẩm liên quan
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-12">
                                        <div className="swiper-container">
                                            <Swiper
                                                slidesPerView={2}
                                                spaceBetween={50}
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
                                                                Đến Nơi Nên Đến
                                                                Yêu Người Nên
                                                                Yêu
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
                                                                Giả mã bí ẩn
                                                                tiền mã hóa
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
                </div>
            </div>
        </>
    );
};

export default BookDetail;
