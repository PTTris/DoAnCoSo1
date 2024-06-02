import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "../../../../../utils/axiosCustomize.js";
import { useState } from "react";

const ModalCreateImagesBook = (props) => {
    const {
        show,
        setShow,
        dataCreateImages,
        fetchAllBooksWithPaginate,
        setCurrentPage,
    } = props;
    const [files, setFiles] = useState([]);

    const handleClose = () => {
        setShow(false);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("id_sach", dataCreateImages.id_sach);
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        const response = await axios.post("/postImagesBook", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới hình ảnh cho sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-2">
                            <label className="form-label">ID Sách</label>
                            <input
                                type="text"
                                className="form-control"
                                disabled
                                value={dataCreateImages.id_sach}
                            />
                        </div>
                        <div className="col-md-10">
                            <label className="form-label">
                                Thêm hình ảnh sách (có thể thêm nhiều cùng lúc)
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                multiple
                                onChange={(event) =>
                                    setFiles(event.target.files)
                                }
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateImagesBook;
