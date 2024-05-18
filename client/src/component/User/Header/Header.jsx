// --- Icon ---
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";

import "./Header.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCategory,
    selectAllCategory,
} from "../../../redux/reducer/getAllCategory";
import { fetchAllBook } from "../../../redux/reducer/getAllBooks";
import { fetchBookSortByDate } from "../../../redux/reducer/getBookSortByDate";
import { changeString } from "../../../assets/js/handleFunc";

export default function Header(props) {
    const [isShowMenuRight, setShowMenuRight] = useState(true);
    const [isShowListBookSelf, setShowListBookSelf] = useState(true);

    const categoryBooks = useSelector(selectAllCategory);

    const dispatch = useDispatch();
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
        props.setSelectedCategoryID(event.target.getAttribute("dataKey"));
        props.setSelectedCategory(event.target.getAttribute("href"));
        props.setNameCategory(event.target.getAttribute("dataName"));
    };

    return (
        <header>
            <div class="opacity_menu"></div>
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
                                        class="phonenumber"
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
                                        <div className="input-group search-bar">
                                            <input
                                                type="text"
                                                name="query"
                                                autocomplete="off"
                                                required
                                                placeholder="Tìm kiếm..."
                                                class="input-group-field auto-search"
                                            ></input>
                                            <button
                                                type="submit"
                                                class=" btn icon-fallback-text"
                                            >
                                                <IoSearch size={"1.7em"} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="account d-flex align-items-center">
                                    <FaRegUser size={"1.1em"} />
                                    <span className="mx-1">Tài khoản</span>
                                    <div class="group_ac">
                                        <NavLink
                                            class="btnx"
                                            to="/account/login"
                                        >
                                            Đăng nhập
                                        </NavLink>
                                        <NavLink to="/account/register">
                                            Đăng ký
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="cart d-flex align-items-center">
                                    <NavLink
                                        className="text-light"
                                        to={"/Cart"}
                                    >
                                        <IoCartOutline size={"1.4em"} />
                                        <span className="mx-1 ">Giỏ hàng</span>
                                    </NavLink>

                                    <div class="top-cart-content">
                                        <ul
                                            id="cart-sidebar"
                                            class="mini-products-list count_li"
                                        >
                                            <div class="no-item">
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
            <div class="wraphead_mobile clearfix d-none d-lg-block d-xl-block">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="header-main">
                                <div class="wrap_main d-none d-lg-block d-xl-block">
                                    <div class="header-nav">
                                        <ul class="item_big nav-left hidden-xs hidden-sm">
                                            <li class="nav-item ">
                                                <NavLink
                                                    class="a-img"
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

                                            <li class="nav-item ">
                                                <NavLink
                                                    to="/allbooks"
                                                    class="a-img"
                                                    onClick={() => {
                                                        dispatch(
                                                            fetchAllBook()
                                                        );
                                                    }}
                                                >
                                                    <span>
                                                        Tủ sách thương hiệu
                                                    </span>
                                                    <i class="fa fa-caret-down"></i>
                                                </NavLink>
                                                <ul class="item_small hidden-sm hidden-xs">
                                                    {categoryBooks.map(
                                                        (category) => (
                                                            <li>
                                                                <NavLink
                                                                    dataKey={
                                                                        category.maTheLoaiSach
                                                                    }
                                                                    dataName={
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

                                            <li class="nav-item ">
                                                <NavLink
                                                    class="a-img"
                                                    to="/news"
                                                >
                                                    <span>Tin tức báo chí</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <ul class="logo_center">
                                            <li class="logo">
                                                <NavLink
                                                    to="/"
                                                    class="logo-wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block"
                                                >
                                                    <img
                                                        src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/logo.png?1714706765233"
                                                        alt="logo Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                    />
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <ul class="item_big nav-right hidden-xs hidden-sm">
                                            <li class="nav-item ">
                                                <NavLink
                                                    class="a-img"
                                                    to="/author"
                                                >
                                                    <span>Tác giả</span>
                                                </NavLink>
                                            </li>

                                            <li class="nav-item ">
                                                <NavLink
                                                    class="arguments-img"
                                                    to="/contact"
                                                >
                                                    <span>Liên hệ</span>
                                                </NavLink>
                                            </li>

                                            <li class="nav-item ">
                                                <NavLink
                                                    class="arguments-img"
                                                    to="/admin"
                                                >
                                                    <span>Quản lý</span>
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
            <div class="wraphead_mobile clearfix d-sm-block d-md-block d-lg-none d-xl-none">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="header-main">
                                <div class="wrap_main d-sm-block d-md-block d-lg-none d-xl-none">
                                    <div class="header-nav">
                                        <ul class="logo_center">
                                            <li class="logo">
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
                                <div class="header_r d-sm-block d-md-block">
                                    <div class="cartsearch">
                                        <div class="carthd">
                                            <div class="mini-cart text-xs-center">
                                                <div class="heading-cart cart_header">
                                                    <a
                                                        class="img_hover_cart"
                                                        href="/cart"
                                                        title="Giỏ hàng"
                                                    >
                                                        <div class="icon_hotline">
                                                            <i>
                                                                <img
                                                                    src="//bizweb.dktcdn.net/100/465/223/themes/877050/assets/i_cart.png?1714706765233"
                                                                    alt="Công ty TNHH văn hóa &amp; truyền thông Skybooks Việt Nam"
                                                                />
                                                                <span class="count_item count_item_pr">
                                                                    0
                                                                </span>
                                                            </i>
                                                            <span class="bolds cartext d-none d-sm-block d-md-block">
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
                            <div class="wrapmenu">
                                <div class="section margin-bottom-10 margin-top-15 a-left">
                                    <form
                                        action="/search"
                                        method="get"
                                        class="input-group search-bar"
                                        role="search"
                                    >
                                        <input
                                            type="text"
                                            name="query"
                                            autocomplete="off"
                                            required=""
                                            placeholder="Tìm sản phẩm bạn mong muốn..."
                                            class="input-group-field auto-search"
                                        />
                                        <button
                                            type="submit"
                                            class="visible_index btn icon-fallback-text"
                                        >
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span class="menubutton d-block d-lg-none d-xl-none">
                <i
                    class="fas fa-bars"
                    onClick={(event) => handleShowWrapMenuRight(event)}
                ></i>
            </span>

            <div class="wrapmenu_right d-lg">
                <div class="wrapmenu">
                    <div class="wrapmenu_full menumain_full">
                        <div class="containers">
                            <div class="contenttop">
                                <div class="section mb-2 mt-1">
                                    <a class="btnx" href="/account/login">
                                        Đăng nhập
                                    </a>
                                    &nbsp;/&nbsp;
                                    <a href="/account/register">Đăng ký</a>
                                </div>
                            </div>
                            <div class="menu_mobile">
                                <ul class="ul_collections">
                                    <li class="level0 level-top parent">
                                        <NavLink to="/">Trang chủ</NavLink>
                                    </li>

                                    <li class="level0 level-top parent">
                                        <a href="/collections/all">
                                            Tủ sách thương hiệu
                                        </a>

                                        <i
                                            class="cursor-pointer fa fa-plus show-list-bookself"
                                            onClick={handleShowListBookSelf}
                                        ></i>
                                        <ul
                                            class="level0 list-bookself"
                                            style={{ display: "none" }}
                                        >
                                            <li class="level1 ">
                                                <a href="/skybooks">
                                                    <span>Skybooks</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/skynovel">
                                                    <span>Skynovel</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/skycomics">
                                                    <span>Skycomics</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/skymommy">
                                                    <span>Skymommy</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/sky-special">
                                                    <span>Sky Special</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/tu-sach-chua-lanh">
                                                    <span>
                                                        Tủ sách chữa lành
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/tu-sach-quy-co">
                                                    <span>Tủ sách quý cô</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/song-khac">
                                                    <span>Sống khác</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/deepbooks">
                                                    <span>Deepbooks</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/tram-huong-nghiep">
                                                    <span>
                                                        Trạm hướng nghiệp
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/i-love-cookbook">
                                                    <span>I love cookbook</span>
                                                </a>
                                            </li>

                                            <li class="level1 ">
                                                <a href="/glow-books">
                                                    <span>Glow Books</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="level0 level-top parent">
                                        <NavLink to="/news">Tin tức</NavLink>
                                    </li>

                                    <li class="level0 level-top parent">
                                        <a href="/tac-gia">Tác giả</a>
                                    </li>

                                    <li class="level0 level-top parent">
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
