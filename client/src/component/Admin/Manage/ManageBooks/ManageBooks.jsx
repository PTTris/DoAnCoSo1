import React from "react";
import { useEffect, useState } from "react";
import axios from "../../../../utils/axiosCustomize.js";

import TableBooks from "./TableBooks";
import ModalDeleteBook from "./Modal/ModalDeleteBook.jsx";
import ModalCreateBook from "./Modal/ModalCreateBook.jsx";
import ModalCreateImagesBook from "./Modal/ModalCreateImagesBook.jsx";

const ManageBooks = () => {
    const LIMIT_PAGE = 4;
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalCreateImages, setShowModalCreateImages] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const [listBooks, setListBooks] = useState([]);
    const [dataDelete, setDataDelete] = useState({});
    const [dataCreateImages, setDataCreateImages] = useState({});
    const [dataUpdate, setDataUpdate] = useState({});
    const [totalPages, settotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchAllBooksWithPaginate = async (page) => {
        let response = await axios.get(
            `/getAllBooksWithPaginations?page=${page}&limit=${LIMIT_PAGE}`
        );

        setListBooks(response.data.data);

        settotalPages(response.data.totalPages);
    };

    useEffect(() => {
        fetchAllBooksWithPaginate(1);
    }, []);

    const handleClickCreateImages = (book) => {
        setShowModalCreateImages(true);
        setDataCreateImages(book);
    };

    const handleClickDeleteBook = (book) => {
        setShowModalDelete(true);
        setDataDelete(book);
    };

    const handleClickUpdateBook = (book) => {
        setShowModalUpdate(true);
        setDataUpdate(book);
    };

    return (
        <div className="manage-account-container">
            <h1 className="title text-center">Quản lý sách</h1>
            <div className="account-content">
                <button
                    className="btn-add-account btn btn-primary"
                    onClick={() => setShowModalCreate(!showModalCreate)}
                >
                    Tạo mới sách
                </button>

                <div className="table-accounts-container">
                    <TableBooks
                        listBooks={listBooks}
                        handleClickDeleteBook={handleClickDeleteBook}
                        handleClickCreateImages={handleClickCreateImages}
                        fetchAllBooksWithPaginate={fetchAllBooksWithPaginate}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
            <ModalCreateBook
                show={showModalCreate}
                setShow={setShowModalCreate}
                fetchAllBooksWithPaginate={fetchAllBooksWithPaginate}
                setCurrentPage={setCurrentPage}
            />
            <ModalCreateImagesBook
                show={showModalCreateImages}
                setShow={setShowModalCreateImages}
                fetchAllBooksWithPaginate={fetchAllBooksWithPaginate}
                dataCreateImages={dataCreateImages}
                setCurrentPage={setCurrentPage}
            />
            <ModalDeleteBook
                show={showModalDelete}
                setShowModalDelete={setShowModalDelete}
                fetchAllBooksWithPaginate={fetchAllBooksWithPaginate}
                dataDelete={dataDelete}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ManageBooks;
