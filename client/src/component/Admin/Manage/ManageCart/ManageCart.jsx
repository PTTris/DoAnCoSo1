import React from "react";
import TableCarts from "./TableCarts";

const ManageCart = () => {
    return (
        <div className="manage-container">
            <h1 className="title text-center">Quản lý giỏ hàng</h1>
            <div className="content">
                <div className="table-container">
                    {/* <TableCarts
                        listAccount={listAccount}
                        fetchAccountWithPaginate={fetchAccountWithPaginate}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default ManageCart;
