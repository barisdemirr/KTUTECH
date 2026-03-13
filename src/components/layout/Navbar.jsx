"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const getLinkClass = (path) => {
        const isActive = pathname === path || pathname.startsWith(`${path}/`);
        return isActive
            ? 'text-sm md:text-md font-semibold text-primary transition-colors'
            : 'text-sm md:text-md font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors';
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg text-white">
                            <span className="material-symbols-outlined block">diamond</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-primary">MidnightElite</span>
                    </div>

                    {/* Desktop Nav - CHANGED: md -> lg */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <Link href="/" className={getLinkClass('/')}>Anasayfa</Link>
                        <Link href="/haberler" className={getLinkClass('/haberler')}>Haberler</Link>
                        <Link href="/etkinlik-takvimi" className={getLinkClass('/etkinlik-takvimi')}>Etkinlik Takvimi</Link>
                        <Link href="/staj-ilanlari" className={getLinkClass('/staj-ilanlari')}>Staj İlanları</Link>
                        <Link href="/proje-vitrini" className={getLinkClass('/proje-vitrini')}>Proje Vitrini</Link>
                        <Link href="/birlikte-uret" className={getLinkClass('/birlikte-uret')}>Birlikte Üret</Link>
                    </nav>

                    {/* Actions - CHANGED: md -> lg */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="px-5 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
                            Login
                        </button>
                        <button className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            Register
                        </button>
                    </div>

                    {/* Mobile Toggle - CHANGED: md -> lg */}
                    <button
                        className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
                        onClick={toggleMobileMenu}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Container - CHANGED: md -> lg */}
            <div
                className={`absolute top-full left-0 w-full lg:hidden bg-white dark:bg-background-dark border-b border-primary/10 transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-4 invisible'
                    }`}
            >
                <nav className="flex flex-col gap-1 p-6">
                    <Link href="/" className={`${getLinkClass('/')} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Anasayfa</Link>
                    <Link href="/haberler" className={`${getLinkClass('/haberler')} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Haberler</Link>
                    <Link href="/etkinlik-takvimi" className={`${getLinkClass('/etkinlik-takvimi')} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Etkinlik Takvimi</Link>
                    <Link href="/staj-ilanlari" className={`${getLinkClass('/staj-ilanlari')} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Staj İlanları</Link>
                    <Link href="/proje-vitrini" className={`${getLinkClass('/proje-vitrini')} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Proje Vitrini</Link>
                    <Link href="/birlikte-uret" className={`${getLinkClass('/birlikte-uret')} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Birlikte Üret</Link>
                    <hr className="my-2 border-primary/5" />
                    <div className="flex flex-col gap-3 pt-2">
                        <button className="w-full py-3 text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            Login
                        </button>
                        <button className="w-full py-3 text-sm font-bold bg-primary text-white rounded-lg">
                            Register
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;