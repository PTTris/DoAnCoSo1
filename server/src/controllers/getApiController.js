import pool from "../config/database.js";

const getAllBooks = async (req, res) => {
    try {
        const [rows, fields] = await pool.query(
            `SELECT * FROM Sach, TheLoaiSach 
            WHERE Sach.maTheLoaiSach = TheLoaiSach.maTheLoaiSach`
        );
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getAllBooksWithPaginations = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const offset = (page - 1) * limit;

        const [rows] = await pool.query(
            `SELECT * FROM Sach, TheLoaiSach 
            WHERE Sach.maTheLoaiSach = TheLoaiSach.maTheLoaiSach ORDER BY id_sach DESC LIMIT ? OFFSET ?`,
            [+limit, +offset]
        );
        const [[{ totalData }]] = await pool.query(
            "SELECT COUNT(*) AS totalData FROM Sach"
        );

        return res.status(200).json({
            data: rows,
            page,
            limit,
            totalData,
            totalPages: Math.ceil(totalData / limit),
        });
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getBookSortByDate = async (req, res) => {
    try {
        const [rows, fields] = await pool.execute(
            "SELECT id_sach, tenSach, thumbnail, ngayThemMoi FROM Sach ORDER BY ngayThemMoi DESC LIMIT 8"
        );
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getAllCategoryBook = async (req, res) => {
    try {
        const [rows, fields] = await pool.execute(
            "SELECT maTheLoaiSach, tenTheLoaiSach FROM TheLoaiSach ORDER BY tenTheLoaiSach"
        );
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getAllBooksOfCategory = async (req, res) => {
    const { maTheLoaiSach } = req.params;
    try {
        const [rows, fields] = await pool.query(
            `SELECT 
            maTheLoaiSach, 
            id_sach,
            tenSach,
            thumbnail
        FROM (
            SELECT 
                maTheLoaiSach, 
                id_sach,
                tenSach,
                thumbnail,
                ROW_NUMBER() OVER (PARTITION BY maTheLoaiSach ORDER BY id_sach) AS rn
            FROM Sach
            WHERE maTheLoaiSach = ?
        ) AS RankedBooks
        WHERE rn <= 8;`,
            [maTheLoaiSach]
        );
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getAllBooksOfCategoryWithPag = async (req, res) => {
    const { maTheLoaiSach } = req.params;
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    try {
        const [[{ totalData }]] = await pool.query(
            "SELECT COUNT(*) AS totalData FROM Sach WHERE maTheLoaiSach = ?",
            [maTheLoaiSach]
        );

        const [rows, fields] = await pool.query(
            `SELECT 
            maTheLoaiSach, 
            id_sach,
            tenSach,
            giaSach,
            thumbnail
        FROM (
            SELECT 
                maTheLoaiSach, 
                id_sach,
                tenSach,
                giaSach,
                thumbnail,
                ROW_NUMBER() OVER (PARTITION BY maTheLoaiSach ORDER BY id_sach) AS rn
            FROM Sach
            WHERE maTheLoaiSach = ?
        ) AS RankedBooks
        WHERE rn <= 8 LIMIT ? OFFSET ?;`,
            [maTheLoaiSach, +limit, +offset]
        );
        return res.status(200).json({
            data: rows,
            page,
            limit,
            totalData,
            totalPages: Math.ceil(totalData / limit),
        });
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getBookForm = async (req, res) => {
    try {
        const [rows, fields] = await pool.execute("SELECT * FROM HinhThucSach");
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(404).send("Error: " + error.message);
    }
};

const getImagesBook = async (req, res) => {
    const { id_sach } = req.params;
    try {
        const [rows, fields] = await pool.query(
            "SELECT hinhAnh FROM HinhAnhSach WHERE id_sach = ?",
            [id_sach]
        );
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getAllUsersWithPaginations = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const offset = (page - 1) * limit;

        const [rows] = await pool.query(
            "SELECT * FROM Taikhoan LIMIT ? OFFSET ?",
            [+limit, +offset]
        );
        const [[{ totalData }]] = await pool.query(
            "SELECT COUNT(*) AS totalData FROM Taikhoan"
        );

        return res.status(200).json({
            data: rows,
            page,
            limit,
            totalData,
            totalPages: Math.ceil(totalData / limit),
        });
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};
export {
    getAllBooks,
    getAllBooksWithPaginations,
    getBookSortByDate,
    getAllCategoryBook,
    getAllBooksOfCategory,
    getAllBooksOfCategoryWithPag,
    getBookForm,
    getImagesBook,
    getAllUsersWithPaginations,
};
