const DashboardPage = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-background-dark relative tech-bg min-h-screen">
            <div className="p-8 space-y-8 relative z-10 lg:my-15 lg:mx-30">

                {/* Dashboard Header */}
                <div className="relative group border-b border-slate-800/50 pb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] font-mono text-green-500 uppercase tracking-[0.2em] opacity-80">
                            System Status: Optimal
                        </span>
                    </div>

                    <h1 className="text-4xl font-mono font-bold text-white tracking-tight">
                        <span className="text-primary opacity-80">&gt;</span> Hoşgeldin, Admin
                        <span className="cursor-blink"></span>
                    </h1>

                    <p className="text-slate-500 font-mono text-sm mt-4 max-w-3xl leading-relaxed border-l-2 border-primary/30 pl-4">
                        Tüm alt sistemler başarıyla başlatıldı. Veri akışı senkronize edildi.
                        Sistem üzerinde <span className="text-primary/90">14 bekleyen işlem</span> ve
                        <span className="text-green-500/90"> 0 kritik hata</span> raporlandı.
                    </p>
                </div>

                {/* Top Widgets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Widget 1: Aktif Bağlantılar */}
                    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-6xl">leak_add</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 font-mono">Aktif Bağlantılar</p>
                        <h3 className="text-3xl font-mono text-primary font-bold">1,284</h3>
                        <p className="text-green-500 text-[10px] font-mono mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">trending_up</span> +12% OFFSET
                        </p>
                    </div>

                    {/* Widget 2: İşlem Gücü */}
                    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-6xl">memory</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 font-mono">İşlem Gücü</p>
                        <h3 className="text-3xl font-mono text-primary font-bold">88%</h3>
                        <p className="text-green-500 text-[10px] font-mono mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">trending_up</span> +5% CAPACITY
                        </p>
                    </div>

                    {/* Widget 3: Hata Oranı */}
                    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-red-500 transition-all">
                            <span className="material-symbols-outlined text-6xl">warning</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 font-mono">Hata Oranı</p>
                        <h3 className="text-3xl font-mono text-red-500 font-bold">0.02%</h3>
                        <p className="text-red-500 text-[10px] font-mono mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">priority_high</span> -1% REDUCTION
                        </p>
                    </div>

                    {/* Widget 3: Hata Oranı */}
                    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-red-500 transition-all">
                            <span className="material-symbols-outlined text-6xl">warning</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 font-mono">Hata Oranı</p>
                        <h3 className="text-3xl font-mono text-red-500 font-bold">0.02%</h3>
                        <p className="text-red-500 text-[10px] font-mono mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">priority_high</span> -1% REDUCTION
                        </p>
                    </div>

                    {/* Widget 3: Hata Oranı */}
                    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-red-500 transition-all">
                            <span className="material-symbols-outlined text-6xl">warning</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 font-mono">Hata Oranı</p>
                        <h3 className="text-3xl font-mono text-red-500 font-bold">0.02%</h3>
                        <p className="text-red-500 text-[10px] font-mono mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">priority_high</span> -1% REDUCTION
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default DashboardPage;