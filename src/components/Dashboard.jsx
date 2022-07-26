import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "react";

function Dashboard() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default Dashboard;