import "dotenv/config";
import pool from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const hashedPassword = bcrypt.hashSync(matKhau, 8);
    try {
        const sql =
            "INSERT INTO taikhoan (email,tenTaiKhoan,matKhau,vaiTro) VALUES (?, ?, ?, ?)";
        await pool.query(sql, [email, tenTaiKhoan, hashedPassword, vaiTro]);
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

const postCreateCategory = async (req, res) => {
    const { maTheLoaiSach, tenTheLoaiSach } = req.body;
    console.log(maTheLoaiSach, tenTheLoaiSach);
    try {
        const sql =
            "insert into TheLoaiSach (maTheLoaiSach, tenTheLoaiSach) VALUES (?, ?)";
        await pool.query(sql, [maTheLoaiSach, tenTheLoaiSach]);
        res.status(200).json({
            EC: 0,
            EM: "Tạo thể loại sách thành công",
        });
    } catch (err) {
        // let ErrMessage = "";
        // if (err.errno === 1048) ErrMessage = "cannot be null";
        res.status(500).json({
            EC: 1,
            EM: "Tạo thể loại sách thất bại",
            Err: err,
        });
        console.log(err);
    }
};

// Hàm xử lý việc tải lên nhiều ảnh
const uploadImages = async (req, res) => {
    const { id_sach } = req.body;
    const imagePaths = req.files.map((file) => file.filename);

    const sql = `INSERT INTO HinhAnhSach (id_sach, hinhAnh) VALUES ?`;
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

const uploadDesc = async (req, res) => {
    const { id_sach, noiDung } = req.body;
    const sql = `INSERT INTO MoTaSach (id_sach, noiDung) VALUES (?, ?)`;

    try {
        await pool.query(sql, [id_sach, noiDung]);
        res.status(200).json({
            EC: 0,
            EM: "Thêm nội dung sách thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Thêm nội dung sách thất bại",
            Err: err,
        });
    }
};

// Authentication
const register = async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql =
        "INSERT INTO taikhoan (email,tenTaiKhoan, matKhau, vaiTro) VALUES (?, ?, ?, 'USER')";
    try {
        await pool.query(sql, [email, username, hashedPassword]);
        res.status(200).json({
            EC: 0,
            EM: "Đăng ký thành công",
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Đăng ký thất bại",
            Err: err,
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM taikhoan WHERE email = ?";

    try {
        const [rows] = await pool.query(sql, [email]);

        if (rows.length === 0)
            return res.status(404).json({
                EC: 1,
                EM: "Tài khoản không hợp lệ",
                Err: err,
            });

        const user = rows[0];
        const passwordIsValid = bcrypt.compareSync(password, user.matKhau);
        if (!passwordIsValid)
            return res.status(401).json({
                EC: 1,
                EM: "Sai mật khẩu",
                Err: err,
            });

        const token = jwt.sign(
            { id: user.taiKhoan_ID, role: user.vaiTro },
            process.env.SECRET_KEY,
            {
                expiresIn: "30m",
            }
        );

        res.status(200).json({
            DATA: rows,
            EC: 0,
            EM: "Đăng nhập thành công!",
            token: token,
        });
    } catch (err) {
        res.status(500).json({
            EC: 1,
            EM: "Đăng nhập thất bại",
            Err: err,
        });
    }
};

export {
    postCreateAccount,
    postCreateCategory,
    postCreateBook,
    uploadImages,
    uploadDesc,
    register,
    login,
};
