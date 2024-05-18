import pool from "../config/database.js";

const getAllBooks = async (req, res) => {
    try {
        const [rows, fields] = await pool.execute("SELECT * FROM Sach");
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).send("Error: " + error.message);
    }
};

const getAllBooksWithPaginations = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const offset = (page - 1) * limit;

        const [rows] = await pool.query("SELECT * FROM Sach LIMIT ? OFFSET ?", [
            +limit,
            +offset,
        ]);
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
            "SELECT maSach, tenSach, hinhAnh, ngayThemMoi FROM Sach ORDER BY ngayThemMoi DESC LIMIT 8"
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
            maSach,
            tenSach,
            hinhAnh
        FROM (
            SELECT 
                maTheLoaiSach, 
                maSach,
                tenSach,
                hinhAnh,
                ROW_NUMBER() OVER (PARTITION BY maTheLoaiSach ORDER BY maSach) AS rn
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
            maSach,
            tenSach,
            giaSach,
            hinhAnh
        FROM (
            SELECT 
                maTheLoaiSach, 
                maSach,
                tenSach,
                giaSach,
                hinhAnh,
                ROW_NUMBER() OVER (PARTITION BY maTheLoaiSach ORDER BY maSach) AS rn
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

// const createNewBook = async (req, res) => {
//     // console.log("check: ", req.file);
//     const Img = req.file.filename;
//     let { title, desc, price } = req.body;

//     await pool.execute(
//         "INSERT INTO books(`title`, `desc`, `cover`, `price`) values(?, ?, ?, ?)",
//         [title, desc, Img, price]
//     );

//     return res.status(200).json({
//         message: "Added a book!",
//     });
// };

// const deleteBook = async (req, res) => {
//     let id = req.params.id;
//     await pool.execute("DELETE FROM books WHERE id = ?", [id]);

//     return res.status(200).json({
//         EM: `Xóa `,
//         ER: 0,

//     });
// };

export {
    getAllBooks,
    getAllBooksWithPaginations,
    getBookSortByDate,
    getAllCategoryBook,
    getAllBooksOfCategory,
    getAllBooksOfCategoryWithPag,
    getBookForm,
};
