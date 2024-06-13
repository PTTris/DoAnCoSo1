import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { NavLink } from "react-router-dom";
import axios from "../../../utils/axiosCustomize.js";
import { useSelector } from "react-redux";
import { selectAccount } from "../../../redux/reducer/accountReducer.js";

const Profile = () => {
    const account = useSelector(selectAccount);
    const [listOrder, setListOrders] = useState([]);
    const [bookDetails, setBookDetails] = useState({});
    const [showBtn, setShowBtn] = useState(true);
    const fetchAllOrdersWithAccount = async (id) => {
        const response = await axios.get(`/getOrderWithAccount/${id}`);
        setListOrders(response.data);
    };

    useEffect(() => {
        fetchAllOrdersWithAccount(account.id_taiKhoan);
    }, [account.id_taiKhoan]);

    const showListBook = async (id_donHang) => {
        const response = await axios.get(`/getBooksInOrder/${id_donHang}`);
        setBookDetails((prevOrder) => ({
            ...prevOrder,
            [id_donHang]: response.data,
        }));
        setShowBtn(!showBtn);
    };

    return (
        <div>
            <section className="bread-crumb">
                <span className="crumb-border"></span>
                <div className="container">
                    <div className="rows">
                        <div className="col-xs-12 a-left">
                            <ul className="breadcrumb">
                                <li className="home">
                                    <NavLink to="/">
                                        <span>Trang Chủ</span>
                                    </NavLink>
                                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                                </li>

                                <li>
                                    <span>Trang khách hàng</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="signup page_customer_account">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
                            <div className="block-account">
                                <h5 className="title-account">
                                    Trang tài khoản
                                </h5>
                                <p>
                                    Xin chào,{" "}
                                    <span style={{ color: "#38a8ea" }}>
                                        {account.tenTaiKhoan}
                                    </span>
                                </p>
                                <p>
                                    <span>{account.email}</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
                            <h5 className="title-head margin-top-0">
                                Đơn hàng của bạn
                            </h5>
                            <div className="col-xs-12 col-sm-12 col-lg-12 no-padding">
                                <div className="my-account">
                                    <div className="dashboard">
                                        <div className="recent-orders">
                                            <div
                                                className="table-responsive-block tab-all"
                                                style={{ overflowX: "auto" }}
                                            >
                                                <table className="table">
                                                    <thead className="text-center">
                                                        <tr>
                                                            <th>STT</th>
                                                            <th>
                                                                Thông tin sách
                                                            </th>
                                                            <th>
                                                                Thông tin đặt
                                                                hàng
                                                            </th>
                                                            <th>
                                                                Ngày đặt hàng
                                                            </th>
                                                            <th>
                                                                Tổng đơn hàng
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {listOrder.length > 0 &&
                                                            listOrder.map(
                                                                (
                                                                    order,
                                                                    index
                                                                ) => (
                                                                    <tr
                                                                        key={
                                                                            order.id_donHang
                                                                        }
                                                                    >
                                                                        <td>
                                                                            <p className="text-center">
                                                                                {index +
                                                                                    1}
                                                                            </p>
                                                                        </td>
                                                                        <td className="list-book text-center">
                                                                            {showBtn && (
                                                                                <button
                                                                                    onClick={() =>
                                                                                        showListBook(
                                                                                            order.id_donHang
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Hiển
                                                                                    thị
                                                                                    sách
                                                                                </button>
                                                                            )}

                                                                            {bookDetails[
                                                                                order
                                                                                    .id_donHang
                                                                            ] && (
                                                                                <ul>
                                                                                    {bookDetails[
                                                                                        order
                                                                                            .id_donHang
                                                                                    ].map(
                                                                                        (
                                                                                            book
                                                                                        ) => (
                                                                                            <li
                                                                                                key={
                                                                                                    book.id_sach
                                                                                                }
                                                                                            >
                                                                                                <p>
                                                                                                    {
                                                                                                        book.tenSach
                                                                                                    }
                                                                                                </p>
                                                                                                <p>
                                                                                                    (SL:{" "}
                                                                                                    {
                                                                                                        book.soLuongSach
                                                                                                    }

                                                                                                    )
                                                                                                </p>
                                                                                            </li>
                                                                                        )
                                                                                    )}
                                                                                </ul>
                                                                            )}
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                Họ
                                                                                tên:{" "}
                                                                                {
                                                                                    order.hoTenKH
                                                                                }
                                                                            </p>
                                                                            <p>
                                                                                SĐT:{" "}
                                                                                {
                                                                                    order.SDT
                                                                                }
                                                                            </p>

                                                                            <p>
                                                                                Địa
                                                                                chỉ:{" "}
                                                                                {
                                                                                    order.diaChiKH
                                                                                }
                                                                            </p>
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                {
                                                                                    order.ngayDatHang
                                                                                }
                                                                            </p>
                                                                        </td>
                                                                        <td>
                                                                            <p className="special">
                                                                                {Number.parseFloat(
                                                                                    order.tongTien
                                                                                ).toLocaleString(
                                                                                    "vi-VN"
                                                                                )}{" "}
                                                                                VNĐ
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )}
                                                        {listOrder.length ===
                                                            0 && (
                                                            <tr>
                                                                <td
                                                                    colSpan="5"
                                                                    className="text-center"
                                                                >
                                                                    <p>
                                                                        Không có
                                                                        đơn hàng
                                                                        nào.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
