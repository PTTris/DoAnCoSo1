import { Routes, Route } from "react-router-dom";
import User from "./component/User/User";
import HomePage from "./component/User/Home/HomePage";
import Login from "./component/User/Account/Login/Login";
import Register from "./component/User/Account/Register/Register";
import AllBooks from "./component/User/Books/AllBooks/AllBooks";
import News from "./component/User/News/News";
import Author from "./component/User/Author/Author";
import Contact from "./component/User/Contact/Contact";
import BookDetail from "./component/User/Books/BookDetail/BookDetail";
import Cart from "./component/User/Cart/Cart";
import AllBooksOfCategory from "./component/User/Books/AllBooksOfCategory/AllBooksOfCategory";
import { useSelector } from "react-redux";
import { selectAllCategory } from "./redux/reducer/getAllCategory";
import { useState } from "react";

function App() {
    let currentUrl = window.location.href;

    let newUrl = currentUrl.replace(/%20/, "-");

    window.history.replaceState(null, "", newUrl);
    const categories = useSelector(selectAllCategory);
    const [selectedCategory, setSelectedCategory] = useState(
        categories[0].tenTheLoaiSach
    );
    const [nameCategory, setNameCategory] = useState(
        categories[0].tenTheLoaiSach
    );
    const [selectedCategoryID, setSelectedCategoryID] = useState(
        categories[0].maTheLoaiSach
    );

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <User
                            setSelectedCategory={setSelectedCategory}
                            setSelectedCategoryID={setSelectedCategoryID}
                            setNameCategory={setNameCategory}
                        />
                    }
                >
                    <Route index element={<HomePage />} />
                    <Route path="/allbooks" element={<AllBooks />} />

                    <Route
                        path={`/${selectedCategory}`}
                        element={
                            <AllBooksOfCategory
                                selectedCategory={selectedCategory}
                                selectedCategoryID={selectedCategoryID}
                                nameCategory={nameCategory}
                            />
                        }
                    />
                    <Route path="/news" element={<News />} />
                    <Route path="/author" element={<Author />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/nhung-em-be-dang-lon"
                        element={<BookDetail />}
                    />
                </Route>
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
