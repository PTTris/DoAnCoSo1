import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const User = () => {
    return (
        <>
            <div className="user-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="main-container">
                    <div className="sidebar-container"></div>
                    <div className="app-content">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default User;
