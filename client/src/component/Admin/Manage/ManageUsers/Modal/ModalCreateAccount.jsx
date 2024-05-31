import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "../../../../../utils/axiosCustomize.js";

const ModalCreateAccount = (props) => {
    const { show, setShow, fetchAccountWithPaginate, setCurrentPage } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateAccount = async () => {
        if (!validateEmail(email)) {
            toast.error("Vui lòng nhập email chính xác!");
            return;
        }
        if (!password) {
            toast.error("Vui lòng nhập mật khẩu!");
            return;
        }
        if (password.length <= 8) {
            toast.error("Mật khẩu phải lớn hơn hoặc bằng 8 kí tự");
            return;
        }
        if (!username) {
            toast.error("Vui lòng nhập tên tài khoản!");
            return;
        }
        const formData = new URLSearchParams();
        formData.append("email", email);
        formData.append("tenTaiKhoan", username);
        formData.append("matKhau", password);
        formData.append("vaiTro", role);
        let response = await axios.post("/postCreateAccount", formData);

        if (response.data && response.data.EC !== 0) {
            toast.error(response.data.EM);
        }
        if (response.data && response.data.EC === 0) {
            toast.success(response.data.EM);
            handleClose();
            await fetchAccountWithPaginate(1);
            setCurrentPage(1);
        }
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                className="modal-add-users"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-8">
                            <label for="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Tên tài khoản</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Vai trò</label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    setRole(event.target.value)
                                }
                            >
                                <option value={"USER"}>User</option>
                                <option value={"ADMIN"}>Admin</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleSubmitCreateAccount}
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateAccount;
