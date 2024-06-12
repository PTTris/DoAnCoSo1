import pool from "../config/database.js";

const deleteAccount = async (req, res) => {
    const { id_taiKhoan } = req.params;

    try {
        // Kiểm tra vai trò của tài khoản trước khi xóa
        const checkRoleSql =
            "SELECT vaiTro FROM taikhoan WHERE id_taiKhoan = ?";
        const [rows] = await pool.query(checkRoleSql, [id_taiKhoan]);

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
        const deleteSql = "DELETE FROM taikhoan WHERE id_taiKhoan = ?";
        await pool.query(deleteSql, [id_taiKhoan]);

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

        const deleteDescSQL = "DELETE FROM motasach WHERE id_sach = ?";
        await pool.query(deleteDescSQL, [id_sach]);

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

const deleteCategory = async (req, res) => {
    const maTheLoaiSach = req.params.maTheLoaiSach;
    try {
        const deleteCategorySql =
            "DELETE FROM theloaisach WHERE maTheLoaiSach = ?";
        await pool.query(deleteCategorySql, [maTheLoaiSach]);

        res.status(200).json({
            EC: 0,
            EM: "Xóa thể loại sách thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Xóa thể loại sách thất bại",
            Err: err,
        });
    }
};

const deleteCart = async (req, res) => {
    const id_gioHang = req.params.id_gioHang;
    try {
        const deleteCartSql = "DELETE FROM GioHang WHERE id_gioHang = ?";
        await pool.query(deleteCartSql, [id_gioHang]);

        res.status(200).json({
            EC: 0,
            EM: "Xóa sản phẩm trong giỏ hàng thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Xóa sản phẩm trong giỏ hàng thất bại",
            Err: err,
        });
    }
};

export { deleteAccount, deleteBook, deleteCategory, deleteCart };
