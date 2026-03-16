const AnnouncementListSection = () => {
    return (
        <section className="space-y-4">
            {/* Card 1 */}
            <div className="bg-card-dark border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row items-center p-4 gap-6 group">
                <div className="w-24 h-24 shrink-0 bg-slate-800 border border-white/10">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        data-alt="Industrial solar panels installation close up view"
                        style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
                    ></div>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 border border-accent-orange text-accent-orange uppercase">Aktif</span>
                        <p className="text-xs text-slate-500 font-medium">15 Mart 2026, 10:00</p>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        Yeni Duyuru Yayınlandı
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                        Duyuru detayları burada yer alacak...
                    </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
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
        </section>
    );
};

export default AnnouncementListSection;