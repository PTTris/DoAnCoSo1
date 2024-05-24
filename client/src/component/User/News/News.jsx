import { NavLink } from "react-router-dom";
import "./News.scss";
import { useSelector } from "react-redux";
import { selectAllCategory } from "../../../redux/reducer/getAllCategory";
import { changeString, scrollToTop } from "../../../assets/js/handleFunc";

const News = (props) => {
    const categoryBooks = useSelector(selectAllCategory);

    const handleClickSetSelectedCategory = (event) => {
        scrollToTop();
        props.setSelectedCategoryID(event.target.getAttribute("dataKey"));
        props.setSelectedCategory(event.target.getAttribute("href"));
        props.setNameCategory(event.target.getAttribute("dataName"));
    };

    return (
        <>
            <div class="blog_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="right-content margin-bottom-fix col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <section class="list-blogs blog-main listmain_blog clearfix">
                                <div class="111 row row_blog_responsive clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 itembb">
                                        <div class="itemblog_big">
                                            <div class="thumb">
                                                <a
                                                    class="image-blog scale_hover"
                                                    href="/xanh-lam-cua-lam-tu-boc-lo-ca-nhan-den-dai-dien-cam-xuc"
                                                    title="Xanh Lam của Lam: Từ bộc lộ cá nhân đến ‘đại diện’ cảm xúc"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="https://bizweb.dktcdn.net/100/465/223/articles/hinh-2-5568.jpg?v=1715243593763"
                                                        data-src="https://bizweb.dktcdn.net/100/465/223/articles/hinh-2-5568.jpg?v=1715243593763"
                                                        alt="Xanh Lam của Lam: Từ bộc lộ cá nhân đến ‘đại diện’ cảm xúc"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                            </div>
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/xanh-lam-cua-lam-tu-boc-lo-ca-nhan-den-dai-dien-cam-xuc"
                                                        title="Xanh Lam của Lam: Từ bộc lộ cá nhân đến ‘đại diện’ cảm xúc"
                                                    >
                                                        Xanh Lam của Lam: Từ bộc
                                                        lộ cá nhân đến ‘đại
                                                        diện’ cảm xúc
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 itembb">
                                        <div class="itemblog_big">
                                            <div class="thumb">
                                                <a
                                                    class="image-blog scale_hover"
                                                    href="/bat-mi-ve-nha-su-noi-tieng-co-sach-hut-trieu-view"
                                                    title="Bật mí về nhà sư nổi tiếng có sách hút triệu view"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="https://bizweb.dktcdn.net/100/465/223/articles/emag-cover-desk-612.jpg?v=1715132457567"
                                                        data-src="https://bizweb.dktcdn.net/100/465/223/articles/emag-cover-desk-612.jpg?v=1715132457567"
                                                        alt="Bật mí về nhà sư nổi tiếng có sách hút triệu view"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                            </div>
                                            <div class="content-blog">
                                                <h3>
                                                    <a
                                                        href="/bat-mi-ve-nha-su-noi-tieng-co-sach-hut-trieu-view"
                                                        title="Bật mí về nhà sư nổi tiếng có sách hút triệu view"
                                                    >
                                                        Bật mí về nhà sư nổi
                                                        tiếng có sách hút triệu
                                                        view
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row_blog_responsive clearfix">
                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                    title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/410907557-321116830822996-1556162244636689368-n.jpg?v=1703040326097"
                                                        alt="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/tuoi-tre-thang-tram-ma-dang-nho"
                                                            title="Tuổi trẻ thăng trầm mà đáng nhớ"
                                                        >
                                                            Tuổi trẻ thăng trầm
                                                            mà đáng nhớ
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        Nguồn:&nbsp;https://tuoitre.vn/tuoi-tre-thang-tram-ma-dang-nho...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/tun-pham-gioi-nghe-thuat-co-nhieu-cam-do"
                                                    title="Tun Phạm: 'Giới nghệ thuật có nhiều cám dỗ'"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/410939811-321116867489659-1728829218222377720-n.jpg?v=1703039822210"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/410939811-321116867489659-1728829218222377720-n.jpg?v=1703039822210"
                                                        alt="Tun Phạm: 'Giới nghệ thuật có nhiều cám dỗ'"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/tun-pham-gioi-nghe-thuat-co-nhieu-cam-do"
                                                            title="Tun Phạm: 'Giới nghệ thuật có nhiều cám dỗ'"
                                                        >
                                                            Tun Phạm: 'Giới nghệ
                                                            thuật có nhiều cám
                                                            dỗ'
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        Nhân dịp ra sách đầu tay
                                                        "Vì cậu là bạn nhỏ của
                                                        tớ", Tun Phạm ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/tua-truyen-tranh-dau-tien-cua-skycomics-duoc-xuat-ban-tai-nuoc-ngoai"
                                                    title="Tựa truyện tranh đầu tiên của Skycomics được xuất bản tại nước ngoài"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/405293985-404869128529741-7923591511687030842-n.jpg?v=1701933387400"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/405293985-404869128529741-7923591511687030842-n.jpg?v=1701933387400"
                                                        alt="Tựa truyện tranh đầu tiên của Skycomics được xuất bản tại nước ngoài"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/tua-truyen-tranh-dau-tien-cua-skycomics-duoc-xuat-ban-tai-nuoc-ngoai"
                                                            title="Tựa truyện tranh đầu tiên của Skycomics được xuất bản tại nước ngoài"
                                                        >
                                                            Tựa truyện tranh đầu
                                                            tiên của Skycomics
                                                            được xuất bản tại
                                                            nước ngoài
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        "𝗦𝗶𝗱𝗲𝘄𝗼𝗿𝗹𝗱 - 𝗧𝗵ế 𝗴𝗶ớ𝗶
                                                        𝗯ê𝗻 𝗰ạ𝗻𝗵" của tác giả...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/tieu-thuyet-cua-ca-si-jun-pham-ban-sach-5-000-ban-trong-1-ngay"
                                                    title="Tiểu thuyết của ca sĩ Jun Phạm bán sạch 5.000 bản trong 1 ngày"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/tieu-thuyet-cua-ca-si-jun-881690366000-1.jpg?v=1690432325643"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/tieu-thuyet-cua-ca-si-jun-881690366000-1.jpg?v=1690432325643"
                                                        alt="Tiểu thuyết của ca sĩ Jun Phạm bán sạch 5.000 bản trong 1 ngày"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/tieu-thuyet-cua-ca-si-jun-pham-ban-sach-5-000-ban-trong-1-ngay"
                                                            title="Tiểu thuyết của ca sĩ Jun Phạm bán sạch 5.000 bản trong 1 ngày"
                                                        >
                                                            Tiểu thuyết của ca
                                                            sĩ Jun Phạm bán sạch
                                                            5.000 bản trong 1
                                                            ngày
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        PNO - Tiểu thuyết "Xứ sở
                                                        miên man" được phát hành
                                                        chính thức h...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/jun-pham-ra-mat-sach-tuong-nho-bo"
                                                    title="Jun Phạm ra mắt sách tưởng nhớ bố"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/354173357-821754962653243-7356876224234397551-n.jpg?v=1690168596417"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/354173357-821754962653243-7356876224234397551-n.jpg?v=1690168596417"
                                                        alt="Jun Phạm ra mắt sách tưởng nhớ bố"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/jun-pham-ra-mat-sach-tuong-nho-bo"
                                                            title="Jun Phạm ra mắt sách tưởng nhớ bố"
                                                        >
                                                            Jun Phạm ra mắt sách
                                                            tưởng nhớ bố
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        Jun Phạm nói nhờ sống
                                                        gần bố năm tháng cuối
                                                        đời của ông, ca sĩ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/jun-pham-phat-hanh-tieu-thuyet-danh-cho-thieu-nhi"
                                                    title="Jun Phạm phát hành tiểu thuyết dành cho thiếu nhi"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/359860282-842830113879061-7926490445161176393-n.jpg?v=1689564764867"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/359860282-842830113879061-7926490445161176393-n.jpg?v=1689564764867"
                                                        alt="Jun Phạm phát hành tiểu thuyết dành cho thiếu nhi"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/jun-pham-phat-hanh-tieu-thuyet-danh-cho-thieu-nhi"
                                                            title="Jun Phạm phát hành tiểu thuyết dành cho thiếu nhi"
                                                        >
                                                            Jun Phạm phát hành
                                                            tiểu thuyết dành cho
                                                            thiếu nhi
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        Xứ Sở Miên Man là tác
                                                        phẩm tiếp theo của Jun
                                                        Phạm sau MV "1900...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/i-love-cookbook-gioi-thieu-bep-nha-nam-khong-co-lo-cua-nam-co-ich"
                                                    title="I love cookbook giới thiệu “Bếp Nhà Nam Không Có Lò” của Nam Có Ích"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/i-love-cookbook-gioi-thieu-bep-nha-nam-khong-co-lo-cua-nam-co-ich-01072023-04.jpg?v=1688439096367"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/i-love-cookbook-gioi-thieu-bep-nha-nam-khong-co-lo-cua-nam-co-ich-01072023-04.jpg?v=1688439096367"
                                                        alt="I love cookbook giới thiệu “Bếp Nhà Nam Không Có Lò” của Nam Có Ích"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/i-love-cookbook-gioi-thieu-bep-nha-nam-khong-co-lo-cua-nam-co-ich"
                                                            title="I love cookbook giới thiệu “Bếp Nhà Nam Không Có Lò” của Nam Có Ích"
                                                        >
                                                            I love cookbook giới
                                                            thiệu “Bếp Nhà Nam
                                                            Không Có Lò” của Nam
                                                            Có Ích
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        I Love Cookbook – thương
                                                        hiệu sách ẩm thực cao
                                                        cấp đầu tiên và...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-12 itembb">
                                        <div class="itembb_full">
                                            <div class="blogwp bloglr">
                                                <a
                                                    class="image-blog"
                                                    href="/nha-su-trieu-view-giac-minh-luat-noi-ve-tinh-yeu-va-su-co-don"
                                                    title="Nhà sư triệu view Giác Minh Luật nói về tình yêu và sự cô đơn"
                                                >
                                                    <img
                                                        class="imageload lazyload loaded"
                                                        src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/quote-5-up-full-man-hinh-85.png?v=1684114844490"
                                                        data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/articles/quote-5-up-full-man-hinh-85.png?v=1684114844490"
                                                        alt="Nhà sư triệu view Giác Minh Luật nói về tình yêu và sự cô đơn"
                                                        data-was-processed="true"
                                                    />
                                                </a>
                                                <div class="contentright">
                                                    <h3>
                                                        <a
                                                            href="/nha-su-trieu-view-giac-minh-luat-noi-ve-tinh-yeu-va-su-co-don"
                                                            title="Nhà sư triệu view Giác Minh Luật nói về tình yêu và sự cô đơn"
                                                        >
                                                            Nhà sư triệu view
                                                            Giác Minh Luật nói
                                                            về tình yêu và sự cô
                                                            đơn
                                                        </a>
                                                    </h3>

                                                    <p>
                                                        Sư Giác Minh Luật là vị
                                                        sư trẻ (sinh năm 1992),
                                                        tác giả của n...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination */}
                            </section>
                        </div>

                        <div class="blog_left_base col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <aside class="aside-item sidebar-category collection-category">
                                <div class="aside-title">
                                    <h2 class="title-head margin-top-0 cate">
                                        <span>Danh mục</span>
                                    </h2>
                                </div>
                                <div class="aside-content">
                                    <nav class="nav-category navbar-toggleable-md">
                                        <ul class="nav navbar-pills">
                                            {categoryBooks.map((category) => (
                                                <li class="nav-item">
                                                    <NavLink
                                                        dataKey={
                                                            category.maTheLoaiSach
                                                        }
                                                        dataName={
                                                            category.tenTheLoaiSach
                                                        }
                                                        onClick={(event) =>
                                                            handleClickSetSelectedCategory(
                                                                event
                                                            )
                                                        }
                                                        to={`/${changeString(
                                                            category.tenTheLoaiSach
                                                        )}`}
                                                    >
                                                        {`
                                                            ${category.tenTheLoaiSach}
                                                        `}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </aside>

                            <div class="about_sidebarblog aside-item">
                                <div class="aside-title">
                                    <h2 class="title-head margin-top-0 cate">
                                        <a href="/gioi-thieu" title="">
                                            Về chúng tôi
                                        </a>
                                    </h2>
                                </div>
                                <div class="aside-content">
                                    <a
                                        href="/gioi-thieu"
                                        title="Về chúng tôi"
                                        class="img_about scale_hover"
                                    >
                                        <img
                                            class="imageload lazyload banner_leng loaded"
                                            src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/banner_about.jpg?1714959329989"
                                            data-src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/banner_about.jpg?1714959329989"
                                            alt="Về chúng tôi"
                                            data-was-processed="true"
                                        />
                                    </a>
                                    <div class="about_sum">
                                        <p>
                                            Skybooks - thương hiệu sách dành cho
                                            những người viết trẻ, đam mê văn
                                            chương, tôn trọng, gìn giữ, sáng tạo
                                            Tiếng Việt. Dành cho một thế hệ độc
                                            giả trẻ, đam mê khám phá ngôn ngữ,
                                            say mê đến với thế giới của những
                                            quyển sách. Và là một thế hệ những
                                            người làm sách trẻ, đam mê mang đến
                                            những giá trị tinh thần cho bạn đọc,
                                            lan toả cảm xúc và kết nối tâm hồn.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="picture_sidebarblog aside-item">
                                <div class="aside-title">
                                    <h2 class="title-head margin-top-0 cate">
                                        <span>Hình ảnh SkyBooks</span>
                                    </h2>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-xl-4 col-md-4 col-6 margin-bottom-15">
                                        <div class="item">
                                            <img
                                                class="lazyload img-responsive loaded"
                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_1.jpg?1714959329989"
                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_1.jpg?1714959329989"
                                                alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                data-was-processed="true"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-md-4 col-6 margin-bottom-15">
                                        <div class="item">
                                            <img
                                                class="lazyload img-responsive loaded"
                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_2.jpg?1714959329989"
                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_2.jpg?1714959329989"
                                                alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                data-was-processed="true"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-md-4 col-6 margin-bottom-15">
                                        <div class="item">
                                            <img
                                                class="lazyload img-responsive loaded"
                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_3.jpg?1714959329989"
                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_3.jpg?1714959329989"
                                                alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                data-was-processed="true"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-md-4 col-6 margin-bottom-15">
                                        <div class="item">
                                            <img
                                                class="lazyload img-responsive loaded"
                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_4.jpg?1714959329989"
                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_4.jpg?1714959329989"
                                                alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                data-was-processed="true"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-md-4 col-6 margin-bottom-15">
                                        <div class="item">
                                            <img
                                                class="lazyload img-responsive loaded"
                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_5.jpg?1714959329989"
                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_5.jpg?1714959329989"
                                                alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                data-was-processed="true"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-md-4 col-6 margin-bottom-15">
                                        <div class="item">
                                            <img
                                                class="lazyload img-responsive loaded"
                                                src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_6.jpg?1714959329989"
                                                data-src="//bizweb.dktcdn.net/thumb/large/100/465/223/themes/877050/assets/pictureblog_6.jpg?1714959329989"
                                                alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                data-was-processed="true"
                                            />
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

export default News;
