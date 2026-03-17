const ProjectListSection = () => {
    return (
        <section>
            <div className="space-y-4">
                {/* Card 1 */}
                <div className="bg-card-dark border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row items-center p-4 gap-6 group">
                    <div className="w-24 h-24 shrink-0 bg-slate-800 border border-white/10">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            data-alt="Project image placeholder"
                            style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
                        ></div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold px-2 py-0.5 border border-accent-orange text-accent-orange uppercase">Aktif</span>
                            <p className="text-xs text-slate-500 font-medium">15 Mart 2026, 14:30</p>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                            Yeni Proje Yönetim Sistemi
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                            Proje detayları burada yer alacak...
                        </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <a href="/admin/panel/projeler/proje-duzenle"
                            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-accent-orange/20 text-accent-orange orange-glow transition-all"
                            title="Düzenle"
                        >
                            <span className="material-symbols-outlined">edit</span>
                        </a>
                        <button
                            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-slate-700 text-slate-400 transition-all"
                            title="Devre Dışı Bırak"
                        >
                            <span className="material-symbols-outlined">visibility_off</span>
                        </button>
                        <button
                            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-red-900/40 text-slate-500 hover:text-red-500 transition-all"
                            title="Sil"
                        >
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center bg-card-dark border border-white/10 text-slate-400 hover:text-white hover:border-primary transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                <button className="w-10 h-10 flex items-center justify-center bg-primary text-white font-bold">1</button>

                <button className="className w-10 h-10 flex items-center justify-center bg-card-dark border border-white/10 text-slate-400 hover:text-white hover:border-primary transition-colors">2</button>

                <button className="w-10 h-10 flex items-center justify-center bg-card-dark border border-white/10 text-slate-400 hover:text-white hover:border-primary transition-colors">3</button>

                <span className="text-slate-600 px-2">...</span>

                <button className="w-10 h-10 flex items-center justify-center bg-card-dark border border-white/10 text-slate-400 hover:text-white hover:border-primary transition-colors">12</button>

                <button className="w-10 h-10 flex items-center justify-center bg-card-dark border border-white/10 text-slate-400 hover:text-white hover:border-primary transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </section>
    );
};

export default ProjectListSection;