import React from 'react';
import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-work-sans",
});

export const metadata = {
    title: "MidnightElite - Professional Excellence",
    description: "Professional excellence in every step.",
};

const RootLayout = ({ children }) => {
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
            <body className={`${workSans.variable} bg-background-light dark:bg-background-dark`}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;