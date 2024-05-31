import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "../../../../../utils/axiosCustomize.js";

const ModalDeleteAccount = (props) => {
    const {
        show,
        setShowModalDelete,
        dataDelete,
        fetchAccountWithPaginate,
        setCurrentPage,
    } = props;

    const handleClose = () => {
        setShowModalDelete(false);
    };

    const handleSubmitDelete = async () => {
        let response = await axios.delete(
            `/deleteAccount/${dataDelete.taiKhoan_ID}`
        );
        console.log(response.data);

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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cofirm delete the User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete this user? email:{" "}
                    <b>
                        {dataDelete && dataDelete.email ? dataDelete.email : ""}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteAccount;
