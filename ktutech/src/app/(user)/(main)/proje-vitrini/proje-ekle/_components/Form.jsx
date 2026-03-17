import React from 'react';

const Form = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/10 p-6 md:p-8 space-y-8">
            <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">image</span> Proje Görselleri
                </h3>
                <div
                    className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-primary/20 bg-primary/5 dark:bg-primary/10 px-6 py-12 transition-all hover:border-primary/40 cursor-pointer">
                    <span className="material-symbols-outlined text-primary text-5xl">cloud_upload</span>
                    <div className="text-center">
                        <p className="font-bold">Sürükle ve Bırak</p>
                        <p className="text-slate-500 text-sm">PNG, JPG veya GIF (max. 5MB)</p>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg">Dosya Seç</button>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Proje Başlığı</label>
                    <input
                        className="w-full rounded-lg border border-primary/20 bg-background-light dark:bg-slate-800 px-4 py-3 outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Örn: E-Ticaret Otomasyon Paneli" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Teknik Detaylar</label>
                    <textarea
                        className="w-full rounded-lg border border-primary/20 bg-background-light dark:bg-slate-800 px-4 py-3 outline-none focus:ring-1 focus:ring-primary resize-none"
                        rows="6" placeholder="Hangi teknolojileri kullandınız?"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold flex items-center gap-2"><span
                                className="material-symbols-outlined text-sm">code</span> GitHub</label>
                        <input
                            className="w-full rounded-lg border border-primary/20 bg-background-light dark:bg-slate-800 px-4 py-3 outline-none"
                            placeholder="https://github.com/..." type="url" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold flex items-center gap-2"><span
                                className="material-symbols-outlined text-sm">rocket_launch</span> Demo</label>
                        <input
                            className="w-full rounded-lg border border-primary/20 bg-background-light dark:bg-slate-800 px-4 py-3 outline-none"
                            placeholder="https://..." type="url" />
                    </div>
                </div>
            </div>

            <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span> Projeyi Onaya Gönder
            </button>
        </div>
    );
};

export default Form;