export default function EventForm() {
    return (
        <div className="bg-white rounded-xl shadow-xl shadow-primary/5 p-8 border border-primary/5">
            <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-midnight-navy text-sm font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">image</span> Afiş Yükle
                    </label>
                    <div
                        className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-primary/20 bg-primary/5 px-6 py-10 hover:border-primary/40 transition-all cursor-pointer group">
                        <div
                            className="size-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">upload_file</span>
                        </div>
                        <div className="text-center">
                            <p className="text-midnight-navy font-semibold">Dosya Seçin veya Sürükleyin</p>
                            <p className="text-primary/60 text-xs mt-1">PNG, JPG veya PDF (Max 5MB)</p>
                        </div>
                        <button
                            className="mt-2 px-6 py-2 bg-white border border-primary/20 text-primary text-sm font-bold rounded-lg hover:bg-primary/5 transition-colors"
                            type="button">
                            Dosya Seç
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-midnight-navy text-sm font-bold">Etkinlik Başlığı</label>
                        <input
                            className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary bg-broken-white p-3 text-midnight-navy"
                            placeholder="Örn: Gençlik Konseri 2024"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-midnight-navy text-sm font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">calendar_today</span> Etkinlik Tarihi
                        </label>
                        <input
                            className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary bg-broken-white p-3 text-midnight-navy"
                            type="date"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-midnight-navy text-sm font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">link</span> Başvuru Linki
                        </label>
                        <input
                            className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary bg-broken-white p-3 text-midnight-navy"
                            placeholder="https://..."
                            type="url"
                        />
                    </div>

                    <div className="flex items-center gap-3 pt-6">
                        <input
                            id="online-check"
                            type="checkbox"
                            className="w-5 h-5 rounded border-primary/20 text-primary focus:ring-primary cursor-pointer"
                        />
                        <label
                            htmlFor="online-check"
                            className="text-midnight-navy text-lg font-bold cursor-pointer select-none">
                            Online
                        </label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-midnight-navy text-sm font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">location_on</span> Konum
                        </label>
                        <input
                            className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary bg-broken-white p-3 text-midnight-navy"
                            placeholder="Örn: Kadıköy Sahne"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-midnight-navy text-sm font-bold">Etkinlik Detayları</label>
                        <textarea
                            className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary bg-broken-white p-3 text-midnight-navy"
                            placeholder="Etkinlik hakkında detaylı bilgi veriniz..."
                            rows="4"
                        ></textarea>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg"
                        type="button">
                        <span className="material-symbols-outlined">send</span> Talep Gönder
                    </button>
                </div>
            </form>
        </div>
    );
}