import pool from "../config/database.js";

const deleteAccount = async (req, res) => {
    const { taiKhoan_ID } = req.params;

    try {
        // Kiểm tra vai trò của tài khoản trước khi xóa
        const checkRoleSql =
            "SELECT vaiTro FROM taikhoan WHERE taiKhoan_ID = ?";
        const [rows] = await pool.query(checkRoleSql, [taiKhoan_ID]);

        if (rows.length === 0) {
            return res.status(404).json({
                EC: 1,
                EM: "Không tìm thấy tài khoản",
            });
        }

        const accountRole = rows[0].vaiTro;
        if (accountRole === "ADMIN") {
            return res.status(403).json({
                EC: 1,
                EM: "Không thể xóa tài khoản admin",
            });
        }

        // Thực hiện xóa tài khoản nếu không phải là admin
        const deleteSql = "DELETE FROM taikhoan WHERE taiKhoan_ID = ?";
        await pool.query(deleteSql, [taiKhoan_ID]);

        res.status(200).json({
            EC: 0,
            EM: "Xóa tài khoản thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Xóa tài khoản thất bại",
            Err: err,
        });
    }
};

const deleteBook = async (req, res) => {
    const id_sach = req.params.id_sach;
    try {
        const deleteImagesSQL = "DELETE FROM hinhanhsach WHERE id_sach = ?";
        await pool.query(deleteImagesSQL, [id_sach]);

        const deleteBookSql = "DELETE FROM sach WHERE id_sach = ?";
        await pool.query(deleteBookSql, [id_sach]);

        res.status(200).json({
            EC: 0,
            EM: "Xóa sách thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Xóa sách thất bại",
            Err: err,
        });
    }
};

export { deleteAccount, deleteBook };
