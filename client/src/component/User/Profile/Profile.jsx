import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { NavLink } from "react-router-dom";
import axios from "../../../utils/axiosCustomize.js";
import { useSelector } from "react-redux";
import { selectAccount } from "../../../redux/reducer/accountReducer.js";
const Profile = () => {
    const account = useSelector(selectAccount);
    const [listOrder, setListOrders] = useState();
    const fetchOrders = async (id_taiKhoan) => {
        let response = await axios.get(`/getOrders/${id_taiKhoan}`);
        setListOrders(response.data);
    };

    useEffect(() => {
        fetchOrders(account.id_taiKhoan);
    }, [account.id_taiKhoan]);

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
            <section class="signup page_customer_account">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
                            <div class="block-account">
                                <h5 class="title-account">Trang tài khoản</h5>
                                <p>
                                    Xin chào,{" "}
                                    <span style={{ color: "#38a8ea" }}>
                                        Trí Phan Thanh
                                    </span>
                                </p>
                                <p>
                                    <span>tript2609@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
                            <h5 class="title-head margin-top-0">
                                Đơn hàng của bạn
                            </h5>
                            <div class="col-xs-12 col-sm-12 col-lg-12 no-padding">
                                <div class="my-account">
                                    <div class="dashboard">
                                        <div class="recent-orders">
                                            <div
                                                class="table-responsive-block tab-all"
                                                style={{ overflowX: "auto" }}
                                            >
                                                <table class="table">
                                                    <thead class="text-center">
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
                                                        {listOrder?.length >
                                                            0 &&
                                                            listOrder.map(
                                                                (
                                                                    order,
                                                                    index
                                                                ) => (
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-center">
                                                                                {index +
                                                                                    1}
                                                                            </p>
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                {
                                                                                    order
                                                                                }
                                                                                <p>
                                                                                    (SL:
                                                                                    3)
                                                                                </p>
                                                                            </p>
                                                                            <p>
                                                                                NHÀ
                                                                                CÓ
                                                                                HAI
                                                                                NGƯỜI
                                                                                <p>
                                                                                    (SL:
                                                                                    3)
                                                                                </p>
                                                                            </p>
                                                                            <p>
                                                                                LÁ
                                                                                THƯ
                                                                                GỬI
                                                                                TỪ
                                                                                MIỀN
                                                                                HẠNH
                                                                                PHÚC
                                                                                <p>
                                                                                    (SL:
                                                                                    3)
                                                                                </p>
                                                                            </p>
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                Họ
                                                                                tên:
                                                                                Phan
                                                                                Thanh
                                                                                Trí
                                                                            </p>
                                                                            <p>
                                                                                SĐT:
                                                                                0398944226
                                                                            </p>

                                                                            <p>
                                                                                Địa
                                                                                chỉ:
                                                                                Kiên
                                                                                Thị
                                                                                Nhẫn
                                                                                Khóm
                                                                                3
                                                                                Phường
                                                                                7
                                                                                TP
                                                                                Trà
                                                                                Vinh
                                                                            </p>
                                                                        </td>
                                                                        <td>
                                                                            <p>
                                                                                26/09/2003
                                                                                18:30:02
                                                                            </p>
                                                                        </td>
                                                                        <td>
                                                                            <p className="special">
                                                                                2.200.000
                                                                                VNĐ
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )}
                                                        {listOrder?.length ===
                                                            0 && (
                                                            <tr>
                                                                <td
                                                                    colspan="5"
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
