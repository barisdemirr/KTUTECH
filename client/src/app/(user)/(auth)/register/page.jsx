import RegistrationForm from "./_components/RegistrationForm";

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
                <RegistrationForm />
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