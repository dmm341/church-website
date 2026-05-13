import React from "react";
import { Outlet } from "react-router-dom";
import { FaMoon, FaSun } from 'react-icons/fa'
import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTop from "../ScrollToTop";
import { useTheme } from "../ThemeProvider.jsx";

const MainLayout = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <NavBar />
        <ScrollToTop />

        <button
          onClick={toggleTheme}
          className="fixed right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white p-4 text-blue-700 shadow-lg transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
        </div>
    );
    }
export default MainLayout;