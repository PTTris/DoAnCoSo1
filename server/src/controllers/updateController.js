import pool from "../config/database.js";

const updateAccount = async (req, res) => {
    const id_taiKhoan = req.params.id_taiKhoan;
    const { tenTaiKhoan } = req.body;
    try {
        const sql = `UPDATE taiKhoan
            set tenTaiKhoan = ? WHERE id_taiKhoan = ?
            `;
        await pool.query(sql, [tenTaiKhoan, id_taiKhoan]);
        res.status(200).json({
            EC: 0,
            EM: "Cập nhật tài khoản thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Cập nhật tài khoản thất bại",
            Err: err,
        });
    }
};

const updateBook = async (req, res) => {
    const id_sach = req.params.id_sach;
    const {
        tenSach,
        tacGia,
        nhaXB,
        nguoiDich,
        namXB,
        ngonNgu,
        trongLuongGr,
        kichThuocBaoBi,
        soTrang,
        giaSach,
        soLuongTonKho,
        hinhThucSach,
        maTheLoaiSach,
    } = req.body;
    const thumbnail = req.file;
    try {
        if (thumbnail) {
            const sql = `UPDATE Sach 
            set tenSach = ?, tacGia = ?, nhaXB = ?, nguoiDich = ?, namXB = ?, ngonNgu = ?, trongLuongGr = ?, 
            kichThuocBaoBi = ?, soTrang = ?, giaSach = ?, soLuongTonKho = ?, hinhThucSach = ?, maTheLoaiSach = ?, thumbnail = ?
            WHERE id_sach = ?`;
            await pool.query(sql, [
                tenSach,
                tacGia,
                nhaXB,
                nguoiDich,
                +namXB,
                ngonNgu,
                +trongLuongGr,
                kichThuocBaoBi,
                +soTrang,
                +giaSach,
                +soLuongTonKho,
                hinhThucSach,
                maTheLoaiSach,
                thumbnail.filename,
                id_sach,
            ]);
            res.status(200).json({
                EC: 0,
                EM: "Cập nhật sách thành công",
            });
        } else {
            const sql = `UPDATE Sach
            set tenSach = ?, tacGia = ?, nhaXB = ?, nguoiDich = ?, namXB = ?, ngonNgu = ?, trongLuongGr = ?,
            kichThuocBaoBi = ?, soTrang = ?, giaSach = ?, soLuongTonKho = ?,  hinhThucSach = ?, maTheLoaiSach = ? WHERE id_sach = ?
            `;
            await pool.query(sql, [
                tenSach,
                tacGia,
                nhaXB,
                nguoiDich,
                +namXB,
                ngonNgu,
                +trongLuongGr,
                kichThuocBaoBi,
                +soTrang,
                +giaSach,
                +soLuongTonKho,
                hinhThucSach,
                maTheLoaiSach,
                +id_sach,
            ]);
            res.status(200).json({
                EC: 0,
                EM: "Cập nhật sách thành công",
            });
        }
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Cập nhật sách thất bại",
            Err: err,
        });
    }
};

const updateCategory = async (req, res) => {
    const tenTaiKhoan = req.params.maTheLoaiSach;
    const { tenTheLoaiSach } = req.body;
    try {
        const sql = `UPDATE Theloaisach
            set tenTheLoaiSach = ? WHERE maTheLoaiSach = ?
            `;
        await pool.query(sql, [tenTheLoaiSach, maTheLoaiSach]);
        res.status(200).json({
            EC: 0,
            EM: "Cập nhật thể loại sách thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Cập nhật thể loại sách thất bại",
            Err: err,
        });
    }
};

export { updateAccount, updateBook, updateCategory };
