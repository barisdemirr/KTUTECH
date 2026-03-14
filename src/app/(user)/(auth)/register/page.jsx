const RegisterPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6">
            <div className="relative w-full max-w-120 bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50">
                <a className="absolute top-6 left-6 flex items-center gap-1.5 text-primary/70 hover:text-primary transition-colors group"
                    href="/">
                    <span
                        className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
                    <span className="text-sm font-semibold">Geri Dön</span>
                </a>
                {/* Header Branding Section */}
                <div className="pt-10 pb-6 px-10 text-center">
                    <div
                        className="inline-flex items-center justify-center size-12 bg-primary/10 dark:bg-primary/20 rounded-xl mb-6">
                        <span className="material-symbols-outlined text-primary text-3xl">shield_lock</span>
                    </div>
                    <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight mb-2">
                        Topluluğa Katıl
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Projelerini hayata geçirmek için ilk adımı at.
                    </p>
                </div>
                {/* Registration Form */}
                <form className="px-10 pb-10 space-y-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">İsim Soyisim</label>
                        <div className="relative">
                            <input
                                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                placeholder="Adınız ve soyadınız" type="text" />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">E-posta</label>
                        <div className="relative flex items-center">
                            <input
                                className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                placeholder="ogr-no@ogr.ktu.edu.tr" type="email" />
                            <span className="material-symbols-outlined absolute right-3 text-slate-400">mail</span>
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Telefon Numarası</label>
                        <div className="relative flex items-center">
                            <input
                                className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                placeholder="05xx xxx xx xx" type="tel" />
                            <span className="material-symbols-outlined absolute right-3 text-slate-400">phone</span>
                        </div>
                    </div>
                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Şifre</label>
                        <div className="relative flex items-center">
                            <input
                                className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                placeholder="••••••••" type="password" />
                            <div className="absolute right-3 flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">visibility</span>
                            </div>
                        </div>
                    </div>
                    {/* Terms and Privacy */}
                    <div className="flex items-start gap-3 pt-2">
                        <div className="flex items-center h-5">
                            <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" id="terms"
                                type="checkbox" />
                        </div>
                        <label className="text-xs text-slate-500 dark:text-slate-400 leading-tight" htmlFor="terms">
                            <a className="text-primary font-semibold hover:underline" href="#">Kullanım Koşulları</a> ve <a
                                className="text-primary font-semibold hover:underline" href="#">Gizlilik Politikası</a>'nı kabul
                            ediyorum.
                        </label>
                    </div>
                    {/* Submit Button */}
                    <button
                        className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                        type="submit">
                        Hesap Oluştur
                        <span
                            className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                    {/* Login Link */}
                    <div className="text-center pt-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Zaten hesabın var mı?
                            <a className="text-primary font-bold hover:underline ml-1" href="/login">Giriş Yap</a>
                        </p>
                    </div>
                </form>
            </div>
            {/* Background Decorative Element */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default RegisterPage;