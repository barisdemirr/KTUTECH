export default function JobListings() {
    return (
        <section className="max-w-300 mx-auto py-12">
            <div
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 border-b border-primary/10 pb-6">
                <div>
                    <h2 className="text-primary text-3xl font-black tracking-tight">Güncel İlanlar</h2>
                    <p className="text-primary/60 text-base mt-1">Sana uygun bir proje mutlaka vardır.</p>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                    <button
                        className="px-4 py-2 rounded-full bg-primary text-white text-sm font-bold whitespace-nowrap">
                        Tümü
                    </button>
                    <button
                        className="px-4 py-2 rounded-full bg-white border border-primary/10 text-primary hover:bg-primary/5 text-sm font-semibold transition-colors">
                        Yazılım
                    </button>
                    <button
                        className="px-4 py-2 rounded-full bg-white border border-primary/10 text-primary hover:bg-primary/5 text-sm font-semibold transition-colors">
                        Tasarım
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div
                    className="group bg-white rounded-xl border border-primary/10 p-6 md:p-8 hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <span
                                className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                                Yazılım
                            </span>
                            <span className="text-primary/40 text-xs italic">2 saat önce</span>
                        </div>
                        <h3
                            className="text-primary text-xl md:text-2xl font-extrabold group-hover:text-accent transition-colors">
                            Mobil Uygulama Geliştiricisi Aranıyor
                        </h3>
                        <div className="flex items-center gap-2 text-primary/70">
                            <span className="material-symbols-outlined text-lg">account_circle</span>
                            <span className="text-sm font-semibold">Ahmet Yılmaz</span>
                        </div>
                        <p className="text-primary/70 text-base leading-relaxed line-clamp-3">
                            Yeni nesil bir e-ticaret platformu için Flutter konusunda deneyimli çalışma arkadaşları
                            arıyoruz. Proje şu an prototip aşamasındadır.
                        </p>
                        <div className="flex justify-end mt-2">
                            <a href="/birlikte-uret/ilan-detay"
                                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-accent transition-colors">
                                Detayları Gör <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
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
}