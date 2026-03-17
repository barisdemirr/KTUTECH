const HeaderContent = () => {
    return (
        <div className="space-y-6 mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 font-medium">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Teknoloji</span>
                <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    17 Mart 2026
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-[1.1] tracking-tight">
                Geleceğin Teknolojileri Burada Şekilleniyor
            </h1>
        </div>
    );
};

export default HeaderContent;