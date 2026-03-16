const HeaderSection = () => {
    return (
        <header className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Duyuruları Yönet</h2>
                <div className="h-1 w-24 bg-primary mt-2"></div>
            </div>
            <a href="/admin/panel/duyurular/duyuru-ekle" className="flex items-center gap-2 bg-primary hover:bg-[#e67e00] transition-colors text-white px-6 py-3 font-bold uppercase text-sm">
                <span className="material-symbols-outlined">add</span>
                <span>Yeni Duyuru Ekle</span>
            </a>
        </header>
    );
};

export default HeaderSection;