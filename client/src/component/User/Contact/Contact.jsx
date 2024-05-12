import "./Contact.scss";

const Contact = () => {
    return (
        <>
            <div class="page_contact section">
                <div class="container">
                    <div class="wrapcontactin">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12"></div>
                            <div class="col-xl-6 col-lg-6 col-sm-12 col-xs-12 right_col">
                                <div class="section right_contact">
                                    <div class="heading text-start">
                                        <h4>
                                            <span>LIÊN HỆ GỬI BẢN THẢO</span>
                                        </h4>
                                    </div>
                                    <p class="des_1">
                                        Để trở thành tác giả của Skybooks
                                        <br />
                                        <b>
                                            CÔNG TY TNHH VĂN HÓA &amp; TRUYỀN
                                            THÔNG SKYBOOKS VIỆT NAM
                                        </b>
                                    </p>
                                    <div class="time_work">
                                        <div class="itemfooter cont">
                                            <div class="r">
                                                <i class="fas fa-map-marker-alt"></i>
                                                <div>
                                                    <b>Địa chỉ:</b> Số 83 Lý Nam
                                                    Đế, Phường Cửa Đông, Quận
                                                    Hoàn Kiếm, Hà Nội
                                                </div>
                                            </div>
                                            <div class="r">
                                                <i class="fas fa-envelope"></i>
                                                <div>
                                                    <b>Email:</b>{" "}
                                                    <a href="mailto:contact.skybooks@gmail.com">
                                                        contact.skybooks@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="r">
                                                <i class="fas fa-phone"></i>
                                                <div>
                                                    <b>Hotline:</b>{" "}
                                                    <a
                                                        class="fone"
                                                        href="tel:02438438220"
                                                    >
                                                        02438438220
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="pagelogin"
                                        class="margin-bottom-50"
                                    >
                                        <form action="">
                                            <div class="form-signup clearfix">
                                                <div class="row group_contact">
                                                    <div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="row">
                                                            <fieldset class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <input
                                                                    placeholder="Họ và tên*"
                                                                    type="text"
                                                                    class="form-control  form-control-lg"
                                                                    required=""
                                                                    value=""
                                                                    name="contact[Name]"
                                                                />
                                                            </fieldset>
                                                            <fieldset class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <input
                                                                    placeholder="Email*"
                                                                    type="email"
                                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                                    required=""
                                                                    id="email1"
                                                                    class="form-control form-control-lg"
                                                                    value=""
                                                                    name="contact[email]"
                                                                />
                                                            </fieldset>
                                                            <fieldset class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Điện thoại*"
                                                                    name="contact[phone]"
                                                                    class="form-control form-control-lg"
                                                                    required=""
                                                                />
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <fieldset>
                                                        <textarea
                                                            placeholder="Nội dung*"
                                                            name="contact[body]"
                                                            id="comment"
                                                            class="form-control content-area form-control-lg"
                                                            rows="5"
                                                            required=""
                                                        ></textarea>
                                                    </fieldset>
                                                    <fieldset>
                                                        <button
                                                            type="submit"
                                                            class="margin-top-20 btn btn-main btn-primary bg_gradient btn-lienhe"
                                                        >
                                                            Gửi thông tin
                                                        </button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Contact;
