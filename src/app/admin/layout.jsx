import "@/styles/admin-globals.css";

export const metadata = {
    title: "System Login | Command Terminal",
    description: "Secure Access Protocol v4.0.1",
};

// Next.js 14+ için viewport ayrı export edilir
export const viewport = {
    width: "device-width",
    initialScale: 1.0,
    charset: "utf-8",
};

export default function AdminLayout({ children }) {
    return (
        <html lang="en" className="h-full bg-black">
            <head>
                {/* Google Fonts Preconnects */}
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&amp;family=Public+Sans:wght@400;700&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
            </head>

            <body>


                {children}


            </body>
        </html>
    );
}