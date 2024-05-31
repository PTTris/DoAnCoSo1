import { useEffect, useState } from "react";

// import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteAccount from "./Modal/ModalDeleteAccount.jsx";
import axios from "../../../../utils/axiosCustomize.js";
import TableAccount from "./TableAccount.jsx";
import ModalCreateAccount from "./Modal/ModalCreateAccount.jsx";

const ManageAccount = () => {
    const LIMIT_PAGE = 5;
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [listAccount, setListAccount] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [totalPages, settotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchAccountWithPaginate = async (page) => {
        let response = await axios.get(
            `/getAllUsersWithPaginations?page=${page}&limit=${LIMIT_PAGE}`
        );

        setListAccount(response.data.data);

        settotalPages(response.data.totalPages);
    };

    useEffect(() => {
        fetchAccountWithPaginate(1);
    }, []);

    // Xử lý sự kiện click
    const handleClickUpdateUser = (user) => {
        setShowModalUpdate(true);
        setDataUpdate(user);
    };

    const handleClickDeleteAccount = (user) => {
        setShowModalDelete(true);
        setDataDelete(user);
    };

    return (
        <div className="manage-account-container">
            <h1 className="title text-center">Quản lý tài khoản</h1>
            <div className="account-content">
                <button
                    className="btn-add-account btn btn-primary"
                    onClick={() => setShowModalCreate(!showModalCreate)}
                >
                    Thêm tài khoản
                </button>

                <div className="table-accounts-container">
                    <TableAccount
                        listAccount={listAccount}
                        handleClickUpdateUser={handleClickUpdateUser}
                        handleClickDeleteAccount={handleClickDeleteAccount}
                        fetchAccountWithPaginate={fetchAccountWithPaginate}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
            <ModalCreateAccount
                show={showModalCreate}
                setShow={setShowModalCreate}
                fetchAccountWithPaginate={fetchAccountWithPaginate}
                setCurrentPage={setCurrentPage}
            />
            {/* <ModalUpdateUser
                show={showModalUpdate}
                setShow={setShowModalUpdate}
                fetchAccountWithPaginate={fetchAccountWithPaginate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            /> */}
            <ModalDeleteAccount
                show={showModalDelete}
                setShowModalDelete={setShowModalDelete}
                fetchAccountWithPaginate={fetchAccountWithPaginate}
                dataDelete={dataDelete}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ManageAccount;
