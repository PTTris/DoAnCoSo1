import { combineReducers } from "redux";
import getAllBooks from "./getAllBooks.js";
import getAllCategory from "./getAllCategory.js";
import getBookSortByDate from "./getBookSortByDate.js";
import getAllBooksOfCategory from "./getAllBooksOfCategory.js";
import getAllImagesBook from "./getAllImagesBook.js";

const rootReducer = combineReducers({
    getAllBooks: getAllBooks,
    getAllCategory: getAllCategory,
    getBookSortByDate: getBookSortByDate,
    getAllBooksOfCategory: getAllBooksOfCategory,
    getAllImagesBook: getAllImagesBook,
});

export default rootReducer;
