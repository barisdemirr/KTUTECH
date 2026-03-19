const RegisterPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-120 animate-in fade-in zoom-in duration-300">
                {/* Main Card */}
                <div
                    className="relative bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <a className="absolute top-6 left-6 flex items-center gap-1.5 text-primary/70 hover:text-primary transition-colors group"
                        href="/">
                        <span
                            className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
                        <span className="text-sm font-semibold">Geri Dön</span>
                    </a>
                    {/* Header/Logo Area */}
                    <div className="pt-10 pb-6 px-8 flex flex-col items-center">
                        <div
                            className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl mb-6 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-3xl">shield_lock</span>
                        </div>
                        <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight text-center">Tekrar Hoş
                            Geldin</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-center">Lütfen hesabınıza giriş yapın</p>
                    </div>
                    {/* Form Content */}
                    <div className="px-8 pb-10 space-y-5">
                        {/* Email Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">E-posta</label>
                            <div className="relative">
                                <span
                                    className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="ogr-no@ogr.ktu.edu.tr" type="email" />
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Şifre</label>
                            <div className="relative flex items-stretch">
                                <span
                                    className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl z-10">lock</span>
                                <input
                                    className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••" type="password" />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>
                        {/* Options Row */}
                        <div className="flex items-center justify-end py-1">
                            <a className="text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="#">Şifremi
                                Unuttum</a>
                        </div>
                        {/* Action Button */}
                        <button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
                            <span>Giriş Yap</span>
                            <span
                                className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">login</span>
                        </button>
                    </div>
                    {/* Footer */}
                    <div
                        className="bg-slate-50 dark:bg-slate-800/50 py-6 px-8 border-t border-slate-100 dark:border-slate-800 flex justify-center items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Hesabınız yok mu?</span>
                        <a className="text-primary font-bold text-sm hover:underline" href="/register">Şimdi Kaydolun</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;