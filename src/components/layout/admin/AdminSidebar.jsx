"use client"

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const dropdownPaths = [
            '/admin/panel/haberler',
            '/admin/panel/etkinlikler',
            '/admin/panel/projeler',
            '/admin/panel/staj-ilanlari',
            '/admin/panel/teammate-ilanlari',
        ];
        setIsDropdownOpen(dropdownPaths.includes(pathname));
    }, [pathname]);

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-primary text-white rounded-md shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>

            {/* Sidebar */}
            <aside
                className={`w-72 bg-background-dark border-r border-white/20 flex flex-col fixed lg:static h-full z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            >
                <div className="p-6 mt-20 lg:mt-0">
                    <h1 className="text-primary text-xl font-black tracking-tighter leading-none">SYSTEM PORTAL</h1>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">Admin Console</p>
                </div>
                <nav className="flex-1 px-3 space-y-1">
                    <a
                        href="/admin"
                        className={`flex items-center gap-3 px-4 py-3 rounded-r-lg transition-colors group cursor-pointer ${isActive('/admin') ? 'sidebar-item-active text-primary font-bold' : 'text-slate-400'}`}
                    >
                        <span className="material-symbols-outlined ${isActive('/admin') ? 'text-primary' : ''}">dashboard</span>
                        <span className="text-sm">Dashboard</span>
                    </a>
                    <div className="mt-4">
                        <div
                            className={`flex items-center justify-between px-4 py-2 text-slate-400 group cursor-pointer hover:text-primary transition-colors ${isDropdownOpen ? 'text-primary' : ''}`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px]">settings_input_component</span>
                                <span className="font-semibold text-sm">Panel</span>
                            </div>
                            <span className="material-symbols-outlined text-sm">{isDropdownOpen ? 'expand_less' : 'expand_more'}</span>
                        </div>
                        {isDropdownOpen && (
                            <div className="ml-9 mt-1 space-y-1">
                                <a
                                    href="/admin/panel/haberler"
                                    className={`flex items-center gap-3 px-3 py-2 transition-colors text-sm rounded-lg ${isActive('/admin/panel/haberler') ? 'text-primary font-bold' : 'text-slate-400 hover:text-primary'}`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">newspaper</span>
                                    <span>Haberler</span>
                                </a>
                                <a
                                    href="/admin/panel/etkinlikler"
                                    className={`flex items-center gap-3 px-3 py-2 transition-colors text-sm rounded-lg ${isActive('/admin/panel/etkinlikler') ? 'text-primary font-bold' : 'text-slate-400 hover:text-primary'}`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                    <span>Etkinlikler</span>
                                </a>
                                <a
                                    href="/admin/panel/projeler"
                                    className={`flex items-center gap-3 px-3 py-2 transition-colors text-sm rounded-lg ${isActive('/admin/panel/projeler') ? 'text-primary font-bold' : 'text-slate-400 hover:text-primary'}`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">folder_open</span>
                                    <span>Projeler</span>
                                </a>
                                <a
                                    href="/admin/panel/staj-ilanlari"
                                    className={`flex items-center gap-3 px-3 py-2 transition-colors text-sm rounded-lg ${isActive('/admin/panel/staj-ilanlari') ? 'text-primary font-bold' : 'text-slate-400 hover:text-primary'}`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">school</span>
                                    <span>Staj İlanları</span>
                                </a>
                                <a
                                    href="/admin/panel/teammate-ilanlari"
                                    className={`flex items-center gap-3 px-3 py-2 transition-colors text-sm rounded-lg ${isActive('/admin/panel/teammate-ilanlari') ? 'text-primary font-bold' : 'text-slate-400 hover:text-primary'}`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">group_add</span>
                                    <span>Teammate İlanları</span>
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-primary transition-colors cursor-pointer group">
                        <a href="" className='flex items gap-3 py-3'>
                            <span className="material-symbols-outlined text-[20px]">announcement</span>
                            <span className="font-semibold text-sm">Duyurular</span>
                        </a>
                    </div>
                </nav>
                <div className="p-4 border-t border-white/20">
                    <button className="flex w-full h-12 items-center gap-4 rounded-lg px-4 text-red-500 hover:bg-red-500/10 transition-colors">
                        <span className="material-symbols-outlined">logout</span>
                        <p className="text-base font-bold truncate">Çıkış</p>
                    </button>
                </div>
            </aside>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-10 lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default AdminSidebar;