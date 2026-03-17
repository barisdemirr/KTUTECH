import React from 'react';

const FeaturedSection = () => {
    return (
        <section className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-midnight dark:text-white text-2xl font-bold tracking-tight">Öne Çıkan İlanlar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Job Card */}
                <div
                    className="glass-card bg-white dark:bg-midnight/30 rounded-2xl p-6 flex flex-col gap-5 hover:shadow-xl transition-all duration-300 group relative">
                    <div className="flex items-start justify-between">
                        <div
                            className="size-16 rounded-full bg-white shadow-inner flex items-center justify-center overflow-hidden p-3 border border-slate-100">
                            <img
                                className="w-full h-full object-contain"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy8RNqmPZTNpeaOZd1QaVr_hib36I5o8S8DwE9dFy09Y-diTFVA5RcGfSbCLmOqKym7rMcFqHNcRX-kJgn1yTu5qBzm9aiZmvgAx5fd4zKcWRGunFDZQE6VrARBshaxfQBiqqVnNhlkTLDoufhAhezcgO59pHOVVdcteqePLrBOVyS_VkqJnfk6I9YDOyEziGilncb6ci9fyG59V8mPNRx6lgPzjffvcBuF2Lf69L6M_GeXyhZkIsubSvqCiVVEwVuuY0wGU8Mgn3c"
                                alt="Company Logo"
                            />
                        </div>
                        <span
                            className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Aktif
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3
                            className="text-midnight dark:text-white text-lg font-bold group-hover:text-primary transition-colors">
                            Yazılım Mühendisliği Stajyeri
                        </h3>
                        <p className="text-primary font-semibold text-sm">TechNova Solutions</p>
                    </div>
                    <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-400 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            <span>İstanbul, Türkiye</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            <span>2 gün önce yayınlandı</span>
                        </div>
                    </div>
                    <div className="pt-2">
                        <button
                            className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-midnight transition-all">
                            İlana Git
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        </button>
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

export default FeaturedSection;