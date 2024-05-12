import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTextArea,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import "./Cart.scss";
import { NavLink } from "react-router-dom";

export default function Cart() {
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
                                                    tag="h1"
                                                    className="fw-bold mb-0 text-black"
                                                >
                                                    Giỏ hàng
                                                </MDBTypography>
                                                <MDBTypography className="mb-0 text-muted">
                                                    3 items
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                                        fluid
                                                        className="rounded-3"
                                                        alt="Cotton T-shirt"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-muted"
                                                    >
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-black mb-0"
                                                    >
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="3"
                                                    xl="3"
                                                    className="d-flex align-items-center"
                                                >
                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="minus"
                                                        />
                                                    </MDBBtn>

                                                    <MDBInput
                                                        type="number"
                                                        min="0"
                                                        defaultValue={1}
                                                        size="sm"
                                                    />

                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="plus"
                                                        />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="2"
                                                    xl="2"
                                                    className="text-end"
                                                >
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="mb-0"
                                                    >
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="1"
                                                    lg="1"
                                                    xl="1"
                                                    className="text-end"
                                                >
                                                    <a
                                                        href="#!"
                                                        className="text-muted"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="times"
                                                        />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                                        fluid
                                                        className="rounded-3"
                                                        alt="Cotton T-shirt"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-muted"
                                                    >
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-black mb-0"
                                                    >
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="3"
                                                    xl="3"
                                                    className="d-flex align-items-center"
                                                >
                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="minus"
                                                        />
                                                    </MDBBtn>

                                                    <MDBInput
                                                        type="number"
                                                        min="0"
                                                        defaultValue={1}
                                                        size="sm"
                                                    />

                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="plus"
                                                        />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="2"
                                                    xl="2"
                                                    className="text-end"
                                                >
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="mb-0"
                                                    >
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="1"
                                                    lg="1"
                                                    xl="1"
                                                    className="text-end"
                                                >
                                                    <a
                                                        href="#!"
                                                        className="text-muted"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="times"
                                                        />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                                        fluid
                                                        className="rounded-3"
                                                        alt="Cotton T-shirt"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-muted"
                                                    >
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-black mb-0"
                                                    >
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="3"
                                                    xl="3"
                                                    className="d-flex align-items-center"
                                                >
                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="minus"
                                                        />
                                                    </MDBBtn>

                                                    <MDBInput
                                                        type="number"
                                                        min="0"
                                                        defaultValue={1}
                                                        size="sm"
                                                    />

                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="plus"
                                                        />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="2"
                                                    xl="2"
                                                    className="text-end"
                                                >
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="mb-0"
                                                    >
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="1"
                                                    lg="1"
                                                    xl="1"
                                                    className="text-end"
                                                >
                                                    <a
                                                        href="#!"
                                                        className="text-muted"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="times"
                                                        />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                                        fluid
                                                        className="rounded-3"
                                                        alt="Cotton T-shirt"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-muted"
                                                    >
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-black mb-0"
                                                    >
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="3"
                                                    xl="3"
                                                    className="d-flex align-items-center"
                                                >
                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="minus"
                                                        />
                                                    </MDBBtn>

                                                    <MDBInput
                                                        type="number"
                                                        min="0"
                                                        defaultValue={1}
                                                        size="sm"
                                                    />

                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="plus"
                                                        />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="2"
                                                    xl="2"
                                                    className="text-end"
                                                >
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="mb-0"
                                                    >
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="1"
                                                    lg="1"
                                                    xl="1"
                                                    className="text-end"
                                                >
                                                    <a
                                                        href="#!"
                                                        className="text-muted"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="times"
                                                        />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                                                        fluid
                                                        className="rounded-3"
                                                        alt="Cotton T-shirt"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-muted"
                                                    >
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="text-black mb-0"
                                                    >
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="3"
                                                    xl="3"
                                                    className="d-flex align-items-center"
                                                >
                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="minus"
                                                        />
                                                    </MDBBtn>

                                                    <MDBInput
                                                        type="number"
                                                        min="0"
                                                        defaultValue={1}
                                                        size="sm"
                                                    />

                                                    <MDBBtn
                                                        color="link"
                                                        className="px-2"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="plus"
                                                        />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="2"
                                                    xl="2"
                                                    className="text-end"
                                                >
                                                    <MDBTypography
                                                        tag="h6"
                                                        className="mb-0"
                                                    >
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    md="1"
                                                    lg="1"
                                                    xl="1"
                                                    className="text-end"
                                                >
                                                    <a
                                                        href="#!"
                                                        className="text-muted"
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="times"
                                                        />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <MDBTypography
                                                    tag="h6"
                                                    className="mb-0"
                                                >
                                                    <NavLink
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
                                                    tag="h5"
                                                    className="text-uppercase"
                                                >
                                                    Số lượng: 3
                                                </MDBTypography>
                                                <MDBTypography
                                                    tag="h5"
                                                    className="price"
                                                    style={{
                                                        color: "#38a8ea",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    200.000 VNĐ
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
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <MDBInput
                                                    size="lg"
                                                    label="Nhập số điện thoại"
                                                    className="border-none"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <MDBTextArea
                                                    size="lg"
                                                    label="Địa chỉ nhận hàng"
                                                    className="border-none"
                                                />
                                            </div>

                                            <MDBTypography
                                                tag="h5"
                                                className="text-uppercase mb-3"
                                            >
                                                Give code
                                            </MDBTypography>

                                            <div className="mb-5">
                                                <MDBInput
                                                    size="lg"
                                                    label="Nhập mã code của bạn"
                                                    className="border-none"
                                                />
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
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
                                                    2.000.000 VNĐ
                                                </MDBTypography>
                                            </div>

                                            <MDBBtn
                                                style={{
                                                    background: "#38a8ea",
                                                    fontSize: "18px",
                                                }}
                                                block
                                                size="lg"
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
