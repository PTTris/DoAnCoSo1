import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "../../../../../utils/axiosCustomize.js";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllCategory,
    selectAllCategory,
} from "../../../../../redux/reducer/getAllCategory.js";

const ModalCreateBook = (props) => {
    const { show, setShow, fetchAllBooksWithPaginate, setCurrentPage } = props;

    const [tenSach, setTenSach] = useState("");
    const [tacGia, setTacGia] = useState("");
    const [nhaXB, setNhaXB] = useState("");
    const [nguoiDich, setNguoiDich] = useState("");
    const [namXB, setNamXB] = useState(new Date().getFullYear());
    const [ngonNgu, setngonNgu] = useState("");
    const [trongLuongGr, setTrongLuongGr] = useState();
    const [kichThuocBaoBi, setKichThuocBaoBi] = useState();
    const [soTrang, setSoTrang] = useState();
    const [giaSach, setGiaSach] = useState();
    const [soLuongTonKho, setSoLuongTonKho] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [hinhThucSach, setHinhThucSach] = useState("Bìa mềm");
    const [maTheLoaiSach, setTheLoaiSach] = useState("");

    const categoryBooks = useSelector(selectAllCategory);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [dispatch]);

    const validate = (state, message) => {
        if (!state) {
            toast.error(message);
            return;
        }
    };
    const handleClose = () => {
        setShow(false);
        setTenSach("");
        setTacGia("");
        setNhaXB("");
        setNguoiDich("");
        setngonNgu("");
        setTrongLuongGr("");
        setKichThuocBaoBi("");
        setSoTrang("");
        setGiaSach("");
        setSoLuongTonKho("");
        setThumbnail("");
        setTheLoaiSach("");
    };

    const handleSubmitCreateAccount = async () => {
        const formData = new FormData();
        formData.append("tenSach", tenSach);
        formData.append("tacGia", tacGia);
        formData.append("nhaXB", nhaXB);
        formData.append("nguoiDich", nguoiDich);
        formData.append("namXB", namXB);
        formData.append("ngonNgu", ngonNgu);
        formData.append("trongLuongGr", trongLuongGr);
        formData.append("kichThuocBaoBi", kichThuocBaoBi);
        formData.append("soTrang", soTrang);
        formData.append("giaSach", giaSach);
        formData.append("soLuongTonKho", soLuongTonKho);
        formData.append("thumbnail", thumbnail);
        formData.append("hinhThucSach", hinhThucSach);
        formData.append("maTheLoaiSach", maTheLoaiSach);

        let response = await axios.post("/postCreateBook", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data && response.data.EC !== 0) {
            toast.error(response.data.EM);
        }
        if (response.data && response.data.EC === 0) {
            toast.success(response.data.EM);
            handleClose();
            await fetchAllBooksWithPaginate(1);
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
                        <div className="col-md-6">
                            <label className="form-label">Tên sách</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: Đam mê hái được tiền"
                                onChange={(event) =>
                                    setTenSach(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Tác giả</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: Phan Thanh Trí"
                                onChange={(event) =>
                                    setTacGia(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Nhà xuất bản</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: Thế giới"
                                onChange={(event) =>
                                    setNhaXB(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">
                                Người dịch {"(nếu có)"}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: Phan Thanh Trí"
                                onChange={(event) =>
                                    setNguoiDich(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Thể loại sách</label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    setTheLoaiSach(event.target.value)
                                }
                            >
                                {categoryBooks &&
                                    categoryBooks.map((book) => (
                                        <option value={book.maTheLoaiSach}>
                                            {book.tenTheLoaiSach}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Năm xuất bản</label>
                            <input
                                className="form-control"
                                type="text"
                                value={namXB}
                                onChange={(event) =>
                                    setNamXB(event.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Kích thước</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="21 x 14.5 x 1.1"
                                onChange={(event) =>
                                    setKichThuocBaoBi(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Ngôn ngữ</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: Tiếng Việt"
                                onChange={(event) =>
                                    setngonNgu(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Trọng lượng</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: 190 (Gr)"
                                onChange={(event) =>
                                    setTrongLuongGr(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Số trang</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: 200"
                                onChange={(event) =>
                                    setSoTrang(event.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-2">
                            <label className="form-label">Số lượng tồn</label>
                            <input
                                type="text"
                                placeholder="VD: 33"
                                className="form-control"
                                onChange={(event) =>
                                    setSoLuongTonKho(event.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-3">
                            <label className="form-label">Hình thức sách</label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    setHinhThucSach(event.target.value)
                                }
                            >
                                <option selected value={"Bìa mềm"}>
                                    Bìa mềm
                                </option>
                                <option value={"Bìa cứng"}>Bìa cứng</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Giá sách</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="VD: 99.000"
                                onChange={(event) =>
                                    setGiaSach(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Thumbnail</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(event) =>
                                    setThumbnail(event.target.files[0])
                                }
                            />
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
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateBook;
