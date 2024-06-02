import { log } from "console";
import pool from "../config/database.js";

const postCreateBook = async (req, res) => {
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
    const thumbnail = req.file.filename;
    try {
        const sql = `insert into Sach 
        (tenSach, tacGia, nhaXB, nguoiDich, namXB, ngonNgu, trongLuongGr, 
        kichThuocBaoBi, soTrang, giaSach, soLuongTonKho, thumbnail, hinhThucSach, maTheLoaiSach)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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
            thumbnail,
            hinhThucSach,
            maTheLoaiSach,
        ]);
        res.status(200).json({
            EC: 0,
            EM: "Tạo sách thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Tạo sách thất bại",
            Err: err,
        });
    }
};
const postCreateAccount = async (req, res) => {
    const { email, tenTaiKhoan, matKhau, vaiTro } = req.body;
    try {
        const sql =
            "INSERT INTO taikhoan (email,tenTaiKhoan,matKhau,vaiTro) VALUES (?, ?, ?, ?)";
        await pool.query(sql, [email, tenTaiKhoan, matKhau, vaiTro]);
        res.status(200).json({
            EC: 0,
            EM: "Tạo tài khoản thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Tạo tài khoản thất bại",
            Err: err,
        });
    }
};

// Hàm xử lý việc tải lên nhiều ảnh
const uploadImages = async (req, res) => {
    const { id_sach } = req.body;
    const imagePaths = req.files.map((file) => file.filename);

    const sql = "INSERT INTO HinhAnhSach (id_sach, hinhAnh) VALUES ?";
    const values = imagePaths.map((path) => [id_sach, path]);

    try {
        await pool.query(sql, [values]);
        res.status(200).json({
            EC: 0,
            EM: "Thêm hình ảnh sách thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Thêm hình ảnh sách thất bại",
            Err: err,
        });
    }
};

export { uploadImages, postCreateAccount, postCreateBook };
