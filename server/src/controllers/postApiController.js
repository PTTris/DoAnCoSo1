import { log } from "console";
import pool from "../config/database.js";

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

export { uploadImages };
