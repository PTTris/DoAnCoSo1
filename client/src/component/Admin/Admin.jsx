import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import { useState } from "react";
import "./Admin.scss";

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Admin;
