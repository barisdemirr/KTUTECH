import React from 'react';
import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Font ayarı
const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-work-sans",
});

// Metadata - HTML'deki title ve meta tagların karşılığı
export const metadata = {
    title: "MidnightElite - Professional Excellence",
    description: "Professional excellence in every step.",
};

const Layout = ({ children }) => {
    return (
        <html className="light" lang="en">
            <head>

                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default Layout;