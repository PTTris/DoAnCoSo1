import "./ManageOrders.scss";
import React, { useEffect, useState } from "react";
import axios from "../../../../utils/axiosCustomize.js";
import { Table } from "react-bootstrap";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import ModalDeleteOrder from "./Modal/ModalDeleteOrder.jsx";
import { toast } from "react-toastify";
import ModalViewBooksInOrder from "./Modal/ModalViewBooksInOrder.jsx";
const ManageOrders = () => {
    const LIMIT_PAGE = 3;
    const [listOrder, setListOrders] = useState();
    const [dataDelete, setDataDelete] = useState();
    const [dataView, setDataView] = useState();
    const [totalPages, settotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalView, setShowModalView] = useState(false);
    const fetchOrdersWithPaginate = async (page) => {
        let response = await axios.get(
            `/getOrdersWithPaginations?page=${page}&limit=${LIMIT_PAGE}`
        );
        setListOrders(response.data.data);
        settotalPages(response.data.totalPages);
    };

    useEffect(() => {
        fetchOrdersWithPaginate(1);
    }, []);

    // Xử lí click
    const handlePageClick = async (event) => {
        await fetchOrdersWithPaginate(+event.selected + 1);
        setCurrentPage(+event.selected + 1);
    };

    const handleResolve = async (order) => {
        const response = await axios.put(`/resolveOrder/${order.id_donHang}`);
        if (response.data && response.data.EC !== 0) {
            toast.error(response.data.EM);
        }
        if (response.data && response.data.EC === 0) {
            toast.success(response.data.EM);
            fetchOrdersWithPaginate(currentPage);
        }
    };

    const handleReject = async (order) => {
        const response = await axios.put(`/rejectOrder/${order.id_donHang}`);
        if (response.data && response.data.EC !== 0) {
            toast.error(response.data.EM);
        }
        if (response.data && response.data.EC === 0) {
            toast.success(response.data.EM);
            fetchOrdersWithPaginate(currentPage);
        }
    };

    const handleClickDeleteOrder = (order) => {
        setShowModalDelete(true);
        setDataDelete(order);
    };

    const handleClickViewBooksInOrder = async (order) => {
        setShowModalView(true);
        const response = await axios.get(
            `/getBooksInOrder/${order.id_donHang}`
        );
        setDataView(response.data);
    };

    return (
        <div className="manage-container">
            <h1 className="title text-center">Quản lý đơn hàng</h1>
            <div className="content">
                <div className="table-container">
                    <Table className="table table-hover table-bordered mt-3">
                        <thead>
                            <tr>
                                <th className="text-center fs-6" scope="col">
                                    ID
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    Email
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    TK
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    Thông tin đặt hàng
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    SL Sách
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    Tổng
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    Ngày đặt
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    TT
                                </th>
                                <th className="text-center fs-6" scope="col">
                                    CN
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrder &&
                                listOrder?.length > 0 &&
                                listOrder.map((order, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">
                                                {order.id_donHang}
                                            </td>
                                            <td>{order.email}</td>
                                            <td
                                                style={{ whiteSpace: "nowrap" }}
                                                className="col-1"
                                            >
                                                {order.tenTaiKhoan}
                                            </td>
                                            <td className="col-3">
                                                <p style={{ margin: 0 }}>
                                                    Họ Tên: {order.hoTenKH}
                                                </p>
                                                <p style={{ margin: 0 }}>
                                                    ĐC: {order.diaChiKH}
                                                </p>
                                                <p style={{ margin: 0 }}>
                                                    SĐT: {order.SDT}
                                                </p>
                                            </td>
                                            <td className="text-center d-flex flex-column justify-content-between align-items-center">
                                                {order.soLuongSanPham}
                                                <MdRemoveRedEye
                                                    className="text-info mt-3"
                                                    size={"1.5rem"}
                                                    cursor={"pointer"}
                                                    onClick={() =>
                                                        handleClickViewBooksInOrder(
                                                            order
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td
                                                style={{ whiteSpace: "nowrap" }}
                                            >
                                                {Number.parseFloat(
                                                    order.tongTien
                                                ).toLocaleString("vi-VN")}{" "}
                                                VNĐ
                                            </td>
                                            <td>{order.ngayDatHang}</td>
                                            <td>{order.trangThaiDonHang}</td>
                                            <td className="text-center d-flex flex-column justify-content-between">
                                                <FaCheckCircle
                                                    className="text-success mb-2"
                                                    size={"1.5rem"}
                                                    cursor={"pointer"}
                                                    onClick={() =>
                                                        handleResolve(order)
                                                    }
                                                />
                                                <FaTimes
                                                    size={"1.5rem"}
                                                    className="text-warning mb-2"
                                                    cursor={"pointer"}
                                                    onClick={() =>
                                                        handleReject(order)
                                                    }
                                                />
                                                <MdDelete
                                                    size={"1.5rem"}
                                                    className="text-danger"
                                                    cursor={"pointer"}
                                                    onClick={() =>
                                                        handleClickDeleteOrder(
                                                            order
                                                        )
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            {listOrder && listOrder?.length === 0 && (
                                <tr>
                                    <td className="text-center" colSpan={8}>
                                        Không tìm thấy bất kỳ đơn hàng nào!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <div
                    className="paginater-container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "80px",
                    }}
                >
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={3}
                        pageCount={totalPages}
                        nextLabel=">"
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={currentPage - 1}
                    />
                </div>
                <ModalViewBooksInOrder
                    show={showModalView}
                    setShow={setShowModalView}
                    dataView={dataView}
                />
                <ModalDeleteOrder
                    show={showModalDelete}
                    setShowModalDelete={setShowModalDelete}
                    dataDelete={dataDelete}
                    fetchOrdersWithPaginate={fetchOrdersWithPaginate}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ManageOrders;
