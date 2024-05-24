import express from "express";
import multer from "multer";
import path from "path";
import appRoot from "app-root-path";
const router = express.Router();
import {
    getAllBooks,
    getAllBooksWithPaginations,
    getBookSortByDate,
    getAllCategoryBook,
    getAllBooksOfCategory,
    getAllBooksOfCategoryWithPag,
    getBookForm,
    getImagesBook,
} from "../controllers/getApiController.js";
import { uploadImages } from "../controllers/postApiController.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(appRoot.path, "src/public/images");
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

const initAPIRoute = (app) => {
    router.get("/getAllBooks", getAllBooks);
    router.get("/getAllBooksWithPaginations", getAllBooksWithPaginations);
    router.get("/getBookSortByDate", getBookSortByDate);
    router.get("/getCategoryBook", getAllCategoryBook);
    router.get("/getAllBooksOfCategory/:maTheLoaiSach", getAllBooksOfCategory);
    router.get(
        "/getAllBooksOfCategoryWithPag/:maTheLoaiSach",
        getAllBooksOfCategoryWithPag
    );
    router.get("/getBookForm", getBookForm);
    router.get("/getImagesBook/:id_sach", getImagesBook);

    router.post("/postImagesBook", upload.array("images", 10), uploadImages);

    return app.use("/api/v1", router);
};

export default initAPIRoute;
