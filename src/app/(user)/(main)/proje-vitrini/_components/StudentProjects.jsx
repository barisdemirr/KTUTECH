import React from 'react';
import Image from 'next/image';

const StudentProjects = () => {
    return (
        <section className="px-6 md:px-20 pt-3 pb-10">
            {/* Project Submission Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-primary/10 p-6 md:p-8 mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">Proje Ekle</h2>
                <p className="text-sm text-primary/70 mb-6">Yeteneğini konuştur! Projeni hemen ekle, tüm KTÜ kampüsünde ses getir.</p>
                <a href='proje-vitrini/proje-ekle' className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
                    Proje Ekle </a>
            </div>

            <div className="flex items-center justify-between mb-10 border-l-4 border-primary pl-4">
                <h2 className="text-3xl font-bold tracking-tight">Öğrenci Projeleri</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card */}
                <div
                    className="group bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800">
                    {/* Resim Alanı */}
                    <div className="relative h-56 overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqhG6_vHD-YLFnNb5lZED2IOHUDsSXWuoytIsMR5v1EE4UzGEsnaNApiXQ-psx8TPxq28w3PnEWp8ZfYYNrQcxlfSXOFeuOb_kSTKH9Y4Yj1GwGuyWTAXsj1lmnqIgBh0PbvUIANmxKUWyjvN_obl7vYlEDr-P5G6HkLqGBe0jjM_ntpkDpguLOKBsc62f1IcQxOxWqVvjzidTZijIQ0XUVEhkC255AaLNsNFSFVOqRdGnVbWi-CUuLuFs2nE3SC_7TiyZRiPMo6f5"
                            alt="Elektrikli Araç Batarya Yönetimi"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Elektrikli Araç Batarya Yönetimi</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Lityum-iyon pillerin ömrünü %20
                            uzatan akıllı soğutma ve dengeleme yazılımı.</p>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                                <span className="text-sm font-medium">Ahmet Yılmaz</span>
                            </div>
                            <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                                href="#">İncele <span className="material-symbols-outlined text-xs">open_in_new</span></a>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800">
                    <div className="h-56 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqhG6_vHD-YLFnNb5lZED2IOHUDsSXWuoytIsMR5v1EE4UzGEsnaNApiXQ-psx8TPxq28w3PnEWp8ZfYYNrQcxlfSXOFeuOb_kSTKH9Y4Yj1GwGuyWTAXsj1lmnqIgBh0PbvUIANmxKUWyjvN_obl7vYlEDr-P5G6HkLqGBe0jjM_ntpkDpguLOKBsc62f1IcQxOxWqVvjzidTZijIQ0XUVEhkC255AaLNsNFSFVOqRdGnVbWi-CUuLuFs2nE3SC_7TiyZRiPMo6f5')" }}>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Elektrikli Araç Batarya Yönetimi</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Lityum-iyon pillerin ömrünü %20
                            uzatan akıllı soğutma ve dengeleme yazılımı.</p>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                                <span className="text-sm font-medium">Ahmet Yılmaz</span>
                            </div>
                            <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                                href="#">İncele <span className="material-symbols-outlined text-xs">open_in_new</span></a>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800">
                    <div className="h-56 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqhG6_vHD-YLFnNb5lZED2IOHUDsSXWuoytIsMR5v1EE4UzGEsnaNApiXQ-psx8TPxq28w3PnEWp8ZfYYNrQcxlfSXOFeuOb_kSTKH9Y4Yj1GwGuyWTAXsj1lmnqIgBh0PbvUIANmxKUWyjvN_obl7vYlEDr-P5G6HkLqGBe0jjM_ntpkDpguLOKBsc62f1IcQxOxWqVvjzidTZijIQ0XUVEhkC255AaLNsNFSFVOqRdGnVbWi-CUuLuFs2nE3SC_7TiyZRiPMo6f5')" }}>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Elektrikli Araç Batarya Yönetimi</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Lityum-iyon pillerin ömrünü %20
                            uzatan akıllı soğutma ve dengeleme yazılımı.</p>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                                <span className="text-sm font-medium">Ahmet Yılmaz</span>
                            </div>
                            <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                                href="#">İncele <span className="material-symbols-outlined text-xs">open_in_new</span></a>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800">
                    <div className="h-56 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqhG6_vHD-YLFnNb5lZED2IOHUDsSXWuoytIsMR5v1EE4UzGEsnaNApiXQ-psx8TPxq28w3PnEWp8ZfYYNrQcxlfSXOFeuOb_kSTKH9Y4Yj1GwGuyWTAXsj1lmnqIgBh0PbvUIANmxKUWyjvN_obl7vYlEDr-P5G6HkLqGBe0jjM_ntpkDpguLOKBsc62f1IcQxOxWqVvjzidTZijIQ0XUVEhkC255AaLNsNFSFVOqRdGnVbWi-CUuLuFs2nE3SC_7TiyZRiPMo6f5')" }}>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Elektrikli Araç Batarya Yönetimi</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Lityum-iyon pillerin ömrünü %20
                            uzatan akıllı soğutma ve dengeleme yazılımı.</p>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                                <span className="text-sm font-medium">Ahmet Yılmaz</span>
                            </div>
                            <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                                href="#">İncele <span className="material-symbols-outlined text-xs">open_in_new</span></a>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800">
                    <div className="h-56 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqhG6_vHD-YLFnNb5lZED2IOHUDsSXWuoytIsMR5v1EE4UzGEsnaNApiXQ-psx8TPxq28w3PnEWp8ZfYYNrQcxlfSXOFeuOb_kSTKH9Y4Yj1GwGuyWTAXsj1lmnqIgBh0PbvUIANmxKUWyjvN_obl7vYlEDr-P5G6HkLqGBe0jjM_ntpkDpguLOKBsc62f1IcQxOxWqVvjzidTZijIQ0XUVEhkC255AaLNsNFSFVOqRdGnVbWi-CUuLuFs2nE3SC_7TiyZRiPMo6f5')" }}>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Elektrikli Araç Batarya Yönetimi</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Lityum-iyon pillerin ömrünü %20
                            uzatan akıllı soğutma ve dengeleme yazılımı.</p>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                                <span className="text-sm font-medium">Ahmet Yılmaz</span>
                            </div>
                            <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                                href="#">İncele <span className="material-symbols-outlined text-xs">open_in_new</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-8 border-t border-slate-100 dark:border-slate-800">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex gap-2">
                    <button className="w-10 h-10 bg-primary text-white font-bold rounded-lg">1</button>
                    <button className="w-10 h-10 border border-primary/10 rounded-lg bg-white hover:border-primary">2</button>
                </div>
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </section>
    );
};

export default StudentProjects;