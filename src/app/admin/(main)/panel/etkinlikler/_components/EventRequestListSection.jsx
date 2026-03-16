const EventRequestListSection = () => {
    return (
        <section>
            <div className="space-y-4">
                {/* Example Request */}
                <div className="bg-card-dark border border-white/5 hover:border-white/20 transition-all p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold text-white">Yeni Etkinlik Talebi</h4>
                        <p className="text-sm text-slate-400">15 Mart 2026</p>
                    </div>
                    <p className="text-sm text-slate-400">Etkinlik detayları burada yer alacak...</p>
                    <div className="flex justify-between gap-4">
                        <a href="/admin/panel/etkinlikler/etkinlik-detay" className="px-4 py-2 bg-white text-black font-bold uppercase text-sm hover:bg-white/80 transition-colors cursor-pointer">
                            Detaylar
                        </a>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-green-600 text-white font-bold uppercase text-sm hover:bg-green-700 transition-colors cursor-pointer">
                                Onayla
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white font-bold uppercase text-sm hover:bg-red-900 transition-colors cursor-pointer">
                                Reddet
                            </button>
                        </div>
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

export default EventRequestListSection;