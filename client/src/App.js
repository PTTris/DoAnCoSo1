import { Routes, Route } from "react-router-dom";
import User from "./component/User/User";
import HomePage from "./component/User/Home/HomePage";
import Login from "./component/User/Account/Login/Login";
import Register from "./component/User/Account/Register/Register";
import AllBooks from "./component/User/Books/AllBooks/AllBooks";
import News from "./component/User/News/News";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<User />}>
                    <Route index element={<HomePage />} />
                    <Route path="/allbooks" element={<AllBooks />} />
                    <Route path="/news" element={<News />} />
                </Route>
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
