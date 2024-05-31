import pool from "../config/database.js";

const postCreateAccount = async (req, res) => {
    const { email, tenTaiKhoan, matKhau, vaiTro } = req.body;
    try {
        const sql =
            "INSERT INTO TaiKhoan (email,tenTaiKhoan,matKhau,vaiTro) VALUES (?, ?, ?, ?)";
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
        res.status(200).send("Images uploaded successfully");
    } catch (err) {
        console.error("Error inserting image paths to MySQL: ", err);
        res.status(500).send("Error uploading images");
    }
};

export { uploadImages, postCreateAccount };
