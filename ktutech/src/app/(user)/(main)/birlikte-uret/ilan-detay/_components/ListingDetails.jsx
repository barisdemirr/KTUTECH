export default function ListingDetails() {
    return (
        <article className="bg-broken-white shadow-xl rounded-xl overflow-hidden border border-primary/5">
            <div className="w-full h-80 bg-slate-200 relative">
                <img
                    alt="Yaratıcı Atölye Çalışma Ortamı"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhfpcyNj0jNwGoTzlj8QR-7J35MlfUcL18lc-clEBa1SF0IxGTlmGXPYr_pVBxQ0jHgDktpdN7HohVPtUI1ce6tprjn_kjULs2CNShbqyet1_tA4I9V98T0ViDpt7U6Di_5dhMPi3TcpYFgPzdGej6MlmOmW3n-0jsXipiNhZnqnCIDW0htwcQeaNPRs2xIOR_NQvmDMlzbJjDIc1_sQCwfrT3T2J_cQFB_hqD84Av1hc5VGFOCzqkTrItSlx3XtHnM6CjSzOjjqlm"
                />
                <div className="absolute inset-0 bg-linear-to-t from-midnight-navy/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                        Aktif İlan
                    </span>
                    <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                        Yaratıcı Atölye İşbirliği: Sürdürülebilir Tasarım
                    </h1>
                </div>
            </div>
            <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-primary/10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                            AY
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-primary/60">Proje Sahibi</p>
                            <h3 className="text-lg font-bold text-midnight-navy leading-tight">Ahmet Yılmaz</h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-background-light px-4 py-2 rounded-lg border border-primary/5">
                            <p className="text-[10px] font-bold uppercase text-primary/40">Konum</p>
                            <p className="text-sm font-bold text-midnight-navy">İstanbul, TR</p>
                        </div>
                        <div className="bg-background-light px-4 py-2 rounded-lg border border-primary/5">
                            <p className="text-[10px] font-bold uppercase text-primary/40">Süre</p>
                            <p className="text-sm font-bold text-midnight-navy">3-6 Ay</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 prose prose-slate max-w-none">
                    <h2 className="text-2xl font-bold text-midnight-navy mb-4">Proje Açıklaması</h2>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        Bu proje, şehir yaşamında sürdürülebilirliği teşvik etmek amacıyla başlatılmış bir yaratıcı
                        atölye girişimidir. Amacımız, yerel zanaatkarlar ve modern tasarımcıları bir araya getirerek ev
                        eşyaları üretmektir.
                    </p>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    <button
                        className="w-full md:w-auto min-w-75 bg-primary text-white font-bold py-5 px-10 rounded-xl hover:bg-midnight-navy transition-colors flex items-center justify-center gap-3 text-lg shadow-lg">
                        Başvuru Yap <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>

            <div className="m-5">
                <div className="mt-10">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">group</span>
                            Başvuranlar Listesi
                        </h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            4 Yeni Başvuru
                        </span>
                    </div>
                    <div className="overflow-hidden border border-primary/10 rounded-xl bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary/5 border-b border-primary/10">
                                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">
                                        İsim Soyisim
                                    </th>
                                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">
                                        Telefon
                                    </th>
                                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">
                                        Durum
                                    </th>
                                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider text-right">
                                        İşlem
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary/5">
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                MK
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">
                                                Mehmet Kaya
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        +90 532 123 45 67
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200">
                                            İnceleniyor
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/70 transition-colors">
                                            <span className="material-symbols-outlined text-xl leading-none">
                                                chat
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                ED
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">
                                                Elif Demir
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        +90 544 987 65 43
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-200">
                                            Görüşüldü
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/70 transition-colors">
                                            <span className="material-symbols-outlined text-xl leading-none">
                                                chat
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                CA
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">
                                                Can Aksoy
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        +90 505 555 11 22
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200">
                                            İnceleniyor
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/70 transition-colors">
                                            <span className="material-symbols-outlined text-xl leading-none">
                                                chat
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-slate-900 font-bold">Tehlikeli Bölge</p>
                        <p className="text-slate-500 text-sm">
                            İlanı kaldırırsanız tüm başvurular silinecektir.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-red-500/20 text-red-600 hover:bg-red-50 rounded-xl font-bold transition-all group">
                        <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                            delete_forever
                        </span>
                        İlanı Kaldır
                    </button>
                </div>
            </div>
        </article>
    );
}