import { Routes, Route } from "react-router-dom";
import User from "./component/User/User";
import HomePage from "./component/User/Home/HomePage";
import Login from "./component/User/Account/Login/Login";
import Register from "./component/User/Account/Register/Register";
import AllBooks from "./component/User/Books/AllBooks/AllBooks";
import News from "./component/User/News/News";
import Contact from "./component/User/Contact/Contact";
import BookDetail from "./component/User/Books/BookDetail/BookDetail";
import Cart from "./component/User/Cart/Cart";
import AllBooksOfCategory from "./component/User/Books/AllBooksOfCategory/AllBooksOfCategory";
import { useState } from "react";
import UploadImages from "./component/UploadImages";
import Admin from "./component/Admin/Admin";
import Dashboard from "./component/Admin/Content/Dashboard";
import ManageBooks from "./component/Admin/Manage/ManageBooks/ManageBooks";
import ManageNews from "./component/Admin/Manage/ManageNews/ManageNews";
import ManageAccount from "./component/Admin/Manage/ManageUsers/ManageAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace(/%20/g, "-");
    window.history.replaceState(null, "", newUrl);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [nameCategory, setNameCategory] = useState("");
    const [selectedCategoryID, setSelectedCategoryID] = useState("");

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
                        path={`${selectedCategory}`}
                        element={
                            <AllBooksOfCategory
                                selectedCategoryID={selectedCategoryID}
                                nameCategory={nameCategory}
                            />
                        }
                    />

                    <Route
                        path="/tin-tuc-bao-chi"
                        element={
                            <News
                                setSelectedCategory={setSelectedCategory}
                                setSelectedCategoryID={setSelectedCategoryID}
                                setNameCategory={setNameCategory}
                            />
                        }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/:tenSach" element={<BookDetail />} />
                </Route>

                <Route path="/dang-nhap" element={<Login />} />
                <Route path="/dang-ky" element={<Register />} />
                <Route path="/test1" element={<UploadImages />} />

                <Route path="/admin" element={<Admin />}>
                    <Route index element={<Dashboard />} />
                    <Route
                        path="/admin/quan-ly-tai-khoan"
                        element={<ManageAccount />}
                    />
                    <Route
                        path="/admin/quan-ly-sach"
                        element={<ManageBooks />}
                    />
                    <Route
                        path="/admin/quan-ly-tin-tuc"
                        element={<ManageNews />}
                    />
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
