import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTextArea,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../assets/js/handleFunc";
import axios from "../../../utils/axiosCustomize.js";
import { useSelector } from "react-redux";
import { selectAccount } from "../../../redux/reducer/accountReducer";

export default function Cart() {
    const navigate = useNavigate();
    const account = useSelector(selectAccount);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState(0);
    const [dataBooksCart, setDataBooksCart] = useState([]);
    const [errors, setErrors] = useState({}); // Biến trạng thái để lưu trữ lỗi

    const fetchBooksInCart = async (id) => {
        const response = await axios(`/getCart/${id}`);
        setDataBooksCart(response.data);
    };

    useEffect(() => {
        fetchBooksInCart(account.id_taiKhoan);
    }, [account.id_taiKhoan]);

    useEffect(() => {
        const total = dataBooksCart.reduce(
            (acc, book) => acc + book.giaSach * book.soLuong,
            0
        );
        setPrice(total);
    }, [dataBooksCart]);

    const handleIncreaseQuantity = (bookId) => {
        const updatedBooks = dataBooksCart.map((book) => {
            if (book.id_sach === bookId) {
                return { ...book, soLuong: book.soLuong + 1 };
            }
            return book;
        });
        setDataBooksCart(updatedBooks);
    };

    const handleDecreaseQuantity = (bookId) => {
        const updatedBooks = dataBooksCart.map((book) => {
            if (book.id_sach === bookId && book.soLuong > 1) {
                return { ...book, soLuong: book.soLuong - 1 };
            }
            return book;
        });
        setDataBooksCart(updatedBooks);
    };

    const handleQuantityChange = (bookId, newQuantity) => {
        const updatedBooks = dataBooksCart.map((book) => {
            if (book.id_sach === bookId) {
                return { ...book, soLuong: newQuantity };
            }
            return book;
        });
        setDataBooksCart(updatedBooks);
    };

    const handleDeleteCart = async (book) => {
        await axios.delete(`/deleteCart/${book.id_gioHang}`);
        await fetchBooksInCart(account.id_taiKhoan);
    };

    const handleSubmitPayment = async () => {
        // Kiểm tra xem tất cả các trường đã được nhập đầy đủ chưa
        let newErrors = {};
        if (!fullName) newErrors.fullName = "Họ tên là bắt buộc";
        if (!phoneNumber) newErrors.phoneNumber = "Số điện thoại là bắt buộc";
        if (!address) newErrors.address = "Địa chỉ là bắt buộc";
        if (dataBooksCart?.length === 0)
            newErrors.quantity = "Quý khách chưa thêm bất kỳ sản phẩm nào!";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const formData = new URLSearchParams();
            formData.append("id_taiKhoan", account.id_taiKhoan);
            formData.append("hoTenKH", fullName);
            formData.append("diaChiKH", address);
            formData.append("SDT", phoneNumber);
            formData.append("soLuongSanPham", dataBooksCart?.length);
            formData.append("tongTien", price);
            const response = await axios.post(`/postCreateOrder`, formData);

            if (response.data.EC === 0) {
                navigate("/thanh-toan-thanh-cong");
                scrollToTop();
            }
        }
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol size="12">
                        <MDBCard
                            className="card-registration card-registration-2"
                            style={{ borderRadius: "15px" }}
                        >
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography
                                                    tag="h2"
                                                    className="fw-bold mb-0 text-black"
                                                >
                                                    Giỏ hàng
                                                </MDBTypography>
                                                <MDBTypography className="mb-0 text-muted">
                                                    {dataBooksCart?.length} sản
                                                    phẩm
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />

                                            {dataBooksCart?.length > 0 ? (
                                                dataBooksCart.map((book) => (
                                                    <MDBRow
                                                        key={book.id_sach}
                                                        className="mb-4 d-flex justify-content-between align-items-center list-cart"
                                                    >
                                                        <MDBCol
                                                            xs={12}
                                                            md="2"
                                                            lg="2"
                                                            xl="2"
                                                        >
                                                            <MDBCardImage
                                                                src={`http://localhost:8080/images/${book.thumbnail}`}
                                                                fluid
                                                                className="rounded-3"
                                                                alt={
                                                                    book.tenSach
                                                                }
                                                            />
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="3"
                                                            lg="3"
                                                            xl="3"
                                                        >
                                                            <MDBTypography
                                                                tag="h6"
                                                                className="text-muted book-name"
                                                            >
                                                                {book.tenSach}
                                                            </MDBTypography>
                                                            <MDBTypography
                                                                tag="h6"
                                                                className="text-black mb-0"
                                                            ></MDBTypography>
                                                        </MDBCol>

                                                        <MDBCol
                                                            xs={12}
                                                            sm={5}
                                                            md={3}
                                                            lg={4}
                                                            xl={3}
                                                            className="d-flex align-items-center"
                                                        >
                                                            <MDBBtn
                                                                color="link"
                                                                className="px-2"
                                                                onClick={() =>
                                                                    handleDecreaseQuantity(
                                                                        book.id_sach
                                                                    )
                                                                }
                                                            >
                                                                <MDBIcon
                                                                    fas
                                                                    icon="minus"
                                                                />
                                                            </MDBBtn>

                                                            <MDBInput
                                                                className="text-center"
                                                                type="number"
                                                                min="1"
                                                                value={
                                                                    book.soLuong
                                                                }
                                                                size="sm"
                                                                onChange={(e) =>
                                                                    handleQuantityChange(
                                                                        book.id_sach,
                                                                        parseInt(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                }
                                                            />

                                                            <MDBBtn
                                                                color="link"
                                                                className="px-2"
                                                                onClick={() =>
                                                                    handleIncreaseQuantity(
                                                                        book.id_sach
                                                                    )
                                                                }
                                                            >
                                                                <MDBIcon
                                                                    fas
                                                                    icon="plus"
                                                                />
                                                            </MDBBtn>
                                                        </MDBCol>

                                                        <MDBCol
                                                            xs={8}
                                                            sm={5}
                                                            md={3}
                                                            lg={2}
                                                            xl={3}
                                                            className="book-price text-center"
                                                        >
                                                            <MDBTypography
                                                                tag="h6"
                                                                className="mb-0 "
                                                            >
                                                                {Number.parseFloat(
                                                                    book.giaSach *
                                                                        book.soLuong
                                                                ).toLocaleString(
                                                                    "vi-VN"
                                                                )}{" "}
                                                                VNĐ
                                                            </MDBTypography>
                                                        </MDBCol>

                                                        <MDBCol
                                                            xs={4}
                                                            sm={2}
                                                            md={1}
                                                            lg={2}
                                                            xl={1}
                                                            className="text-end text-center time"
                                                        >
                                                            <MDBBtn
                                                                color="transparent"
                                                                style={{
                                                                    padding:
                                                                        "4px",
                                                                    boxShadow:
                                                                        "none",
                                                                }}
                                                                onClick={() =>
                                                                    handleDeleteCart(
                                                                        book
                                                                    )
                                                                }
                                                            >
                                                                <MDBIcon
                                                                    color="danger"
                                                                    fas
                                                                    icon="times"
                                                                />
                                                            </MDBBtn>
                                                        </MDBCol>
                                                        <hr className="my-3" />
                                                    </MDBRow>
                                                ))
                                            ) : (
                                                <strong>
                                                    Không có sản phẩm nào!
                                                </strong>
                                            )}

                                            <div className="pt-5">
                                                <MDBTypography
                                                    tag="h6"
                                                    className="mb-0"
                                                >
                                                    <NavLink
                                                        onClick={scrollToTop}
                                                        to="/"
                                                        className="text-body"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="long-arrow-alt-left me-2"
                                                        />{" "}
                                                        Quay lại trang chủ
                                                    </NavLink>
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography
                                                tag="h3"
                                                className="fw-bold mb-5 mt-2 pt-1"
                                            >
                                                Tổng cộng
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography
                                                    tag="h6"
                                                    className="text-uppercase"
                                                >
                                                    Số lượng:{" "}
                                                    {dataBooksCart?.length} sản
                                                    phẩm
                                                </MDBTypography>
                                            </div>

                                            <MDBTypography
                                                tag="h5"
                                                className=" mb-3"
                                            >
                                                Thông tin giao hàng
                                            </MDBTypography>

                                            <div className="mb-3">
                                                <MDBInput
                                                    size="lg"
                                                    label="Nhập họ tên người nhận hàng"
                                                    className="border-none"
                                                    onChange={(event) => {
                                                        setFullName(
                                                            event.target.value
                                                        );
                                                        setErrors({});
                                                    }}
                                                />
                                                {errors.fullName && (
                                                    <span className="text-danger">
                                                        {errors.fullName}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <MDBInput
                                                    size="lg"
                                                    label="Nhập số điện thoại"
                                                    className="border-none"
                                                    onChange={(event) => {
                                                        setPhoneNumber(
                                                            event.target.value
                                                        );
                                                        setErrors({});
                                                    }}
                                                />
                                                {errors.phoneNumber && (
                                                    <span className="text-danger">
                                                        {errors.phoneNumber}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <MDBTextArea
                                                    size="lg"
                                                    label="Địa chỉ nhận hàng"
                                                    className="border-none"
                                                    onChange={(event) => {
                                                        setAddress(
                                                            event.target.value
                                                        );
                                                        setErrors({});
                                                    }}
                                                />
                                                {errors.address && (
                                                    <span className="text-danger">
                                                        {errors.address}
                                                    </span>
                                                )}
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-3">
                                                <MDBTypography
                                                    tag="h5"
                                                    className="text-uppercase"
                                                >
                                                    Tổng cộng
                                                </MDBTypography>
                                                <MDBTypography
                                                    tag="h5"
                                                    style={{
                                                        color: "#38a8ea",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {price.toLocaleString(
                                                        "vi-VN"
                                                    )}{" "}
                                                    VNĐ
                                                </MDBTypography>
                                            </div>
                                            {errors.quantity && (
                                                <span className="text-danger mb-3 d-block">
                                                    {errors.quantity}
                                                </span>
                                            )}
                                            <MDBBtn
                                                style={{
                                                    background: "#38a8ea",
                                                    fontSize: "18px",
                                                }}
                                                block
                                                size="lg"
                                                onClick={() => {
                                                    handleSubmitPayment();
                                                }}
                                            >
                                                Thanh Toán
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
