import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default Dashboard