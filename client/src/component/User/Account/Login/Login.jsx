import { NavLink } from "react-router-dom";
import "./Login.scss";

const Login = () => {
    return (
        <>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="img-fluid"
                                alt="Sample"
                            />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p class="lead fw-normal mb-0 me-3">
                                        Đăng nhập với
                                    </p>
                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-floating mx-1"
                                    >
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-floating mx-1"
                                    >
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-floating mx-1"
                                    >
                                        <i class="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">
                                        Hoặc
                                    </p>
                                </div>

                                <div
                                    data-mdb-input-init
                                    class="form-outline mb-4"
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        class="form-control form-control-lg"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                    <label class="form-label" for="email">
                                        Email address
                                    </label>
                                </div>

                                <div
                                    data-mdb-input-init
                                    class="form-outline mb-3"
                                >
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control form-control-lg"
                                        placeholder="Nhập mật khẩu tối thiểu 8 kí tự"
                                    />
                                    <label class="form-label" for="password">
                                        Password
                                    </label>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="form-check mb-0">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            name="form2Example3"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="form2Example3"
                                        >
                                            Ghi nhớ mật khẩu?
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">
                                        Quên mật khẩu?
                                    </a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-lg px-5 btn-login"
                                    >
                                        Đăng nhập
                                    </button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <NavLink to="/account/register">
                                            Đăng ký
                                        </NavLink>
                                    </p>
                                    <div className="return-home">
                                        <NavLink
                                            to="/"
                                            className="btn-return-home"
                                        >
                                            {"<-- Trở về trang chủ"}
                                        </NavLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div class="text-white mb-3 mb-md-0">
                        © 2024 Copyright: PhanThanhTri.
                    </div>

                    <div>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#!" class="text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default Login;