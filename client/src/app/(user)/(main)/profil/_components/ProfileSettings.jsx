import React from 'react';

const ProfileSettings = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Info Form Section */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                <div className="flex items-center gap-2 border-b border-slate-50 dark:border-slate-800 pb-4">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold">Kişisel Bilgiler</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tam Adınız</label>
                        <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Ahmet Yılmaz" type="text"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">E-posta Adresi</label>
                        <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="ahmet.yilmaz@example.com" type="email"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Telefon Numarası</label>
                        <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+90 5XX XXX XX XX" type="tel"/>
                    </div>
                </div>
                <button className="mt-2 w-full bg-primary/10 text-primary font-bold py-3 rounded-lg hover:bg-primary/20 transition-all">
                    Değişiklikleri Kaydet
                </button>
            </div>
            {/* Password Change Section */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                <div className="flex items-center gap-2 border-b border-slate-50 dark:border-slate-800 pb-4">
                    <span className="material-symbols-outlined text-primary">lock</span>
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold">Şifre Değiştirme</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mevcut Şifre</label>
                        <div className="relative">
                            <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none" placeholder="••••••••" type="password"/>
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 cursor-pointer hover:text-primary">visibility</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Yeni Şifre</label>
                        <div className="relative">
                            <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none" placeholder="••••••••" type="password"/>
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400">lock_reset</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Yeni Şifre (Tekrar)</label>
                        <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none" placeholder="••••••••" type="password"/>
                    </div>
                </div>
                <button className="mt-2 w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">sync</span>
                    Şifreyi Güncelle
                </button>
            </div>
        </div>
    );
};

export default ProfileSettings;