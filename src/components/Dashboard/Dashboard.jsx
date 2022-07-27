import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from '../NavBar/NavBar';

function Dashboard() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}

export default Dashboard;