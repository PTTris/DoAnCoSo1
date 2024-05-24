import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function Footer() {
    return (
        <MDBFooter
            bgColor="grey"
            className="text-center text-lg-start text-muted"
        >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Hãy kết nối với chúng tôi trên các mạng xã hội:</span>
                </div>

                <div>
                    <Link to="" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="facebook-f" />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="twitter" />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="google" />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="instagram" />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="linkedin" />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="github" />
                    </Link>
                </div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon
                                    color="secondary"
                                    icon="gem"
                                    className="me-3"
                                />
                                SKYBOOKS
                            </h6>
                            <p>
                                Skybooks - thương hiệu sách dành cho những người
                                viết trẻ, đam mê văn chương, tôn trọng, gìn giữ,
                                sáng tạo Tiếng Việt. Dành cho một thế hệ độc giả
                                trẻ, đam mê khám phá ngôn ngữ, say mê đến với
                                thế giới của những quyển sách. Và là một thế hệ
                                những người làm sách trẻ, đam mê mang đến những
                                giá trị tinh thần cho bạn đọc, lan toả cảm xúc
                                và kết nối tâm hồn.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    ExpressJS
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    ReactJS
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    MySQL
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="home"
                                    className="me-2"
                                />
                                168, Nguyễn Văn Cừ {"(nối dài)"}, P. An Bình, Q.
                                Ninh Kiều, TP. Cần Thơ
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="envelope"
                                    className="me-3"
                                />
                                dnc@moet.edu.vn
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="phone"
                                    className="me-3"
                                />{" "}
                                + 84 0292 3 798 222
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="print"
                                    className="me-3"
                                />{" "}
                                + 84 0292 3 798 668
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2024 Copyright: &nbsp;
                <Link className="text-reset fw-bold" to="/">
                    PhanThanhTri
                </Link>
            </div>
            <ScrollToTop />
        </MDBFooter>
    );
}
