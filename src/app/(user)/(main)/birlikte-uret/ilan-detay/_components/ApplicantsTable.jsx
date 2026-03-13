export default function ApplicantsTable() {
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">group</span>
                    Başvuranlar Listesi
                </h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">4 Yeni Başvuru</span>
            </div>
            <div className="overflow-hidden border border-primary/10 rounded-xl bg-white">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-primary/5 border-b border-primary/10">
                            <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">İsim Soyisim</th>
                            <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">Telefon</th>
                            <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">Durum</th>
                            <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider text-right">İşlem</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                        <tr className="hover:bg-primary/5 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                        MK
                                    </div>
                                    <span className="text-sm font-semibold text-slate-900">Mehmet Kaya</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">+90 532 123 45 67</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200">
                                    İnceleniyor
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-primary hover:text-primary/70 transition-colors">
                                    <span className="material-symbols-outlined text-xl leading-none">chat</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-primary/5 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                        ED
                                    </div>
                                    <span className="text-sm font-semibold text-slate-900">Elif Demir</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">+90 544 987 65 43</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-200">
                                    Görüşüldü
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-primary hover:text-primary/70 transition-colors">
                                    <span className="material-symbols-outlined text-xl leading-none">chat</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-primary/5 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                        CA
                                    </div>
                                    <span className="text-sm font-semibold text-slate-900">Can Aksoy</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">+90 505 555 11 22</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200">
                                    İnceleniyor
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-primary hover:text-primary/70 transition-colors">
                                    <span className="material-symbols-outlined text-xl leading-none">chat</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}