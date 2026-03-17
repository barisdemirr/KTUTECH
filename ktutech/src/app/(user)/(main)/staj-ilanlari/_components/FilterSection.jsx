import React from 'react';

const FilterSection = () => {
    return (
        <section id='stajlar' className="scroll-mt-25 w-full mt-10">
            <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20">
                    Hepsi
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Yazılım
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Donanım
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Yapay Zeka
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Siber Güvenlik
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Veri Bilimi
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Gömülü Sistemler
                </button>
                <button
                    className="shrink-0 px-6 py-2.5 rounded-full bg-white dark:bg-midnight/40 border border-primary/10 text-midnight dark:text-slate-300 text-sm font-medium hover:border-primary transition-all">
                    Bulut Bilişim
                </button>
            </div>
        </section>
    );
};

export default FilterSection;