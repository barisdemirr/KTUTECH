import React from 'react';

const HeaderSection = () => {
    return (
        <section className="flex flex-col gap-6 mb-10">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Güncel Haberler</h1>
                    <div className="h-1.5 w-20 bg-primary"></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/50">search</span>
                    <input
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm"
                        placeholder="Haberlerde ara..."
                        type="text"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 w-full no-scrollbar">
                    <button className="px-5 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">Tümü</button>
                    <button className="px-5 py-2 bg-white dark:bg-slate-800 border border-primary/10 hover:bg-primary/5 text-sm font-medium rounded-full whitespace-nowrap transition-colors">
                        Teknoloji
                    </button>
                    <button className="px-5 py-2 bg-white dark:bg-slate-800 border border-primary/10 hover:bg-primary/5 text-sm font-medium rounded-full whitespace-nowrap transition-colors">
                        Duyurular
                    </button>
                    <button className="px-5 py-2 bg-white dark:bg-slate-800 border border-primary/10 hover:bg-primary/5 text-sm font-medium rounded-full whitespace-nowrap transition-colors">
                        Yazılım
                    </button>
                    <button className="px-5 py-2 bg-white dark:bg-slate-800 border border-primary/10 hover:bg-primary/5 text-sm font-medium rounded-full whitespace-nowrap transition-colors">
                        Kulüp Haberleri
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;