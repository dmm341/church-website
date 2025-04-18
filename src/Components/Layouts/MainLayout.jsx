import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
        </div>
    );
    }
export default MainLayout;