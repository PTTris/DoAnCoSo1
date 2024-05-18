import { combineReducers } from "redux";
import getAllBooks from "./getAllBooks.js";
import getAllCategory from "./getAllCategory.js";
import getBookSortByDate from "./getBookSortByDate.js";
import getAllBooksOfCategory from "./getAllBooksOfCategory.js";

const rootReducer = combineReducers({
    getAllBooks: getAllBooks,
    getAllCategory: getAllCategory,
    getBookSortByDate: getBookSortByDate,
    getAllBooksOfCategory: getAllBooksOfCategory,
});

export default rootReducer;
