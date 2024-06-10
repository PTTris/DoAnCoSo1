// --- Icon ---
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import "./Header.scss";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCategory,
    selectAllCategory,
} from "../../../redux/reducer/getAllCategory";
import { fetchBookSortByDate } from "../../../redux/reducer/getBookSortByDate";
import { changeString } from "../../../assets/js/handleFunc";
import {
    LOGOUT,
    selectAccount,
    selectIsAdmin,
    selectIsAuthenticated,
} from "../../../redux/reducer/accountReducer";

export default function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dataSearch, setDataSearch] = useState();
    const [isShowMenuRight, setShowMenuRight] = useState(true);
    const [isShowListBookSelf, setShowListBookSelf] = useState(true);
    const categoryBooks = useSelector(selectAllCategory);
    const account = useSelector(selectAccount);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isAdmin = useSelector(selectIsAdmin);

    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [dispatch]);

    const handleShowListBookSelf = () => {
        const listBookself = document.querySelector(".list-bookself");
        if (isShowListBookSelf) {
            listBookself.style.display = "block";
            setShowListBookSelf(!isShowListBookSelf);
        } else {
            listBookself.style.display = "none";
            setShowListBookSelf(!isShowListBookSelf);
        }
    };

    const handleShowWrapMenuRight = (event) => {
        const wrapMenuRight = document.querySelector(".wrapmenu_right");
        const opacityMenu = document.querySelector(".opacity_menu");
        if (isShowMenuRight) {
            wrapMenuRight.classList.add("open_sidebar_menu");
            opacityMenu.classList.add("open_opacity");
            setShowMenuRight(!isShowMenuRight);
        } else {
            wrapMenuRight.classList.remove("open_sidebar_menu");
            opacityMenu.classList.remove("open_opacity");
            setShowMenuRight(!isShowMenuRight);
        }
        opacityMenu.addEventListener("click", (event) => {
            event.stopPropagation();
            wrapMenuRight.classList.remove("open_sidebar_menu");
            opacityMenu.classList.remove("open_opacity");
            setShowMenuRight(true);
        });
    };

    const handleClickSetSelectedCategory = (event) => {
        props.setSelectedCategoryID(event.target.getAttribute("data-key"));
        props.setSelectedCategory(event.target.getAttribute("href"));
        props.setNameCategory(event.target.getAttribute("data-name"));
    };

    const handleLogout = (event) => {
        localStorage.removeItem("token");
        dispatch(LOGOUT());
    };

    const handleSubmitSearch = (event) => {
        props.setDataSearch(dataSearch);
        navigate("/tim-kiem");
    };
    return (
        <header>
            <div className="opacity_menu"></div>
            {/* --- Topbar --- */}
            <div className="clearfix topbar d-none d-lg-block d-xl-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6  col-md-none d-lg-block d-sm-none">
                            <div className="time_contact">
                                <p className="hotline">
                                    <FaPhoneVolume />
                                    <span
                                        className="mx-2"
                                        style={{ margin: "0 5px" }}
                                    >
                                        Hotline:
                                    </span>
                                    <a
                                        className="phonenumber"
                                        href="tel:0398944226"
                                    >
                                        0398944226
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="cartsearch">
                                <div className="search d-flex align-items-center">
                                    <IoIosSearch size={"1.5em"} />
                                    <span>Tìm kiếm</span>
                                    <div className="boxsearch">
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                handleSubmitSearch();
                                            }}
                                            className="input-group search-bar"
                                        >
                                            <input
                                                type="text"
                                                name="query"
                                                required
                                                placeholder="Tìm kiếm..."
                                                className="input-group-field auto-search"
                                                onChange={(event) => {
                                                    setDataSearch(
                                                        event.target.value
                                                    );
                                                }}
                                            ></input>
                                            <button className=" btn icon-fallback-text">
                                                {props.dataSearch ? (
                                                    <Link
                                                        to={"/tim-kiem"}
                                                        onClick={
                                                            handleSubmitSearch
                                                        }
                                                    >
                                                        <IoSearch
                                                            size={"1.7em"}
                                                            color="#000"
                                                        />
                                                    </Link>
                                                ) : (
                                                    <IoSearch
                                                        size={"1.7em"}
                                                        color="#000"
                                                    />
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="account d-flex align-items-center">
                                    <FaRegUser size={"1.1em"} />
                                    <span className="mx-1">
                                        {isAuthenticated
                                            ? account.tenTaiKhoan
                                            : "Tài khoản"}
                                    </span>
                                    <div className="group_ac">
                                        {isAuthenticated ? (
                                            <>
                                                {isAdmin ? (
                                                    <NavLink
                                                        className="btnx"
                                                        to="/admin"
                                                    >
                                                        Quản lý
                                                    </NavLink>
                                                ) : (
                                                    ""
                                                )}
                                                <NavLink onClick={handleLogout}>
                                                    Đăng xuất
                                                </NavLink>
                                            </>
                                        ) : (
                                            <div>
                                                <NavLink
                                                    className="btnx"
                                                    to="/dang-nhap"
                                                >
                                                    Đăng nhập
                                                </NavLink>
                                                <NavLink to="/dang-ky">
                                                    Đăng ký
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="cart d-flex align-items-center">
                                    <NavLink className="text-light" to="/Cart">
                                        <IoCartOutline size={"1.4em"} />
                                        <span className="mx-1 ">Giỏ hàng</span>
                                    </NavLink>

                                    <div className="top-cart-content">
                                        <ul
                                            id="cart-sidebar"
                                            className="mini-products-list count_li"
                                        >
                                            <div className="no-item">
                                                <p>Không có sản phẩm nào.</p>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- Main Header --- */}
            <div className="wraphead_mobile clearfix d-none d-lg-block d-xl-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main">
                                <div className="wrap_main d-none d-lg-block d-xl-block">
                                    <div className="header-nav">
                                        <ul className="item_big nav-left hidden-xs hidden-sm">
                                            <li className="nav-item ">
                                                <NavLink
                                                    className="a-img"
                                                    to="/"
                                                    onClick={() => {
                                                        dispatch(
                                                            fetchBookSortByDate()
                                                        );
                                                    }}
                                                >
                                                    <span>Trang chủ</span>
                                                </NavLink>
                                            </li>

                                            <li className="nav-item ">
                                                <div className="list-brand">
                                                    <span>
                                                        Tủ sách thương hiệu
                                                    </span>
                                                    <i className="fa fa-caret-down"></i>
                                                </div>
                                                <ul className="item_small hidden-sm hidden-xs">
                                                    {categoryBooks.map(
                                                        (category, index) => (
                                                            <li key={index}>
                                                                <NavLink
                                                                    data-key={
                                                                        category.maTheLoaiSach
                                                                    }
                                                                    data-name={
                                                                        category.tenTheLoaiSach
                                                                    }
                                                                    onClick={(
                                                                        event
                                                                    ) =>
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
                                                        )
                                                    )}
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="logo_center">
                                            <li className="logo">
                                                <NavLink
                                                    to="/"
                                                    className="logo-wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block"
                                                >
                                                    <img
                                                        src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/logo.png?1714706765233"
                                                        alt="logo Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                    />
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <ul className="item_big nav-right hidden-xs hidden-sm">
                                            <li className="nav-item ">
                                                <NavLink
                                                    className="a-img"
                                                    to="/tat-ca-san-pham"
                                                >
                                                    <span>Tất cả sản phẩm</span>
                                                </NavLink>
                                            </li>

                                            <li className="nav-item ">
                                                <NavLink
                                                    className="arguments-img"
                                                    to="/contact"
                                                >
                                                    <span>Liên hệ</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Responsive */}
            <div className="wraphead_mobile clearfix d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main">
                                <div className="wrap_main d-sm-block d-md-block d-lg-none d-xl-none">
                                    <div className="header-nav">
                                        <ul className="logo_center">
                                            <li className="logo">
                                                <NavLink
                                                    to="/"
                                                    className="logo-wrapper"
                                                >
                                                    <img
                                                        src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/logo_mobi.png?1714706765233"
                                                        alt="logo Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                    />
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header_r d-sm-block d-md-block">
                                    <div className="cartsearch">
                                        <div className="carthd">
                                            <div className="mini-cart text-xs-center">
                                                <div className="heading-cart cart_header">
                                                    <a
                                                        className="img_hover_cart"
                                                        href="/cart"
                                                        title="Giỏ hàng"
                                                    >
                                                        <div className="icon_hotline">
                                                            <i>
                                                                <img
                                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/i_cart.png?1714706765233"
                                                                    alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                                />
                                                                <span className="count_item count_item_pr">
                                                                    0
                                                                </span>
                                                            </i>
                                                            <span className="bolds cartext d-none d-sm-block d-md-block">
                                                                Giỏ hàng
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapmenu">
                                <div className="section margin-bottom-10 margin-top-15 a-left">
                                    <form
                                        action="/search"
                                        method="get"
                                        className="input-group search-bar"
                                        role="search"
                                    >
                                        <input
                                            type="text"
                                            name="query"
                                            required=""
                                            placeholder="Tìm sản phẩm bạn mong muốn..."
                                            className="input-group-field auto-search"
                                        />
                                        <button
                                            type="submit"
                                            className="visible_index btn icon-fallback-text"
                                        >
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span className="menubutton d-block d-lg-none d-xl-none">
                <i
                    className="fas fa-bars"
                    onClick={(event) => handleShowWrapMenuRight(event)}
                ></i>
            </span>

            <div className="wrapmenu_right d-lg">
                <div className="wrapmenu">
                    <div className="wrapmenu_full menumain_full">
                        <div className="containers">
                            <div className="contenttop">
                                <div className="section mb-2 mt-1">
                                    <a className="btnx" href="/account/login">
                                        Đăng nhập
                                    </a>
                                    &nbsp;/&nbsp;
                                    <a href="/account/register">Đăng ký</a>
                                </div>
                            </div>
                            <div className="menu_mobile">
                                <ul className="ul_collections">
                                    <li className="level0 level-top parent">
                                        <NavLink to="/">Trang chủ</NavLink>
                                    </li>

                                    <li className="level0 level-top parent">
                                        <a href="/collections/all">
                                            Tủ sách thương hiệu
                                        </a>

                                        <i
                                            className="cursor-pointer fa fa-plus show-list-bookself"
                                            onClick={handleShowListBookSelf}
                                        ></i>
                                        <ul
                                            className="level0 list-bookself"
                                            style={{ display: "none" }}
                                        >
                                            <li className="level1 ">
                                                <a href="/skybooks">
                                                    <span>Skybooks</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/skynovel">
                                                    <span>Skynovel</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/skycomics">
                                                    <span>Skycomics</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/skymommy">
                                                    <span>Skymommy</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/sky-special">
                                                    <span>Sky Special</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/tu-sach-chua-lanh">
                                                    <span>
                                                        Tủ sách chữa lành
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/tu-sach-quy-co">
                                                    <span>Tủ sách quý cô</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/song-khac">
                                                    <span>Sống khác</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/deepbooks">
                                                    <span>Deepbooks</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/tram-huong-nghiep">
                                                    <span>
                                                        Trạm hướng nghiệp
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/i-love-cookbook">
                                                    <span>I love cookbook</span>
                                                </a>
                                            </li>

                                            <li className="level1 ">
                                                <a href="/glow-books">
                                                    <span>Glow Books</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="level0 level-top parent">
                                        <NavLink to="/news">Tin tức</NavLink>
                                    </li>

                                    <li className="level0 level-top parent">
                                        <a href="/tac-gia">Tác giả</a>
                                    </li>

                                    <li className="level0 level-top parent">
                                        <a href="/lien-he">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
