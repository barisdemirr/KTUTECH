

const LoginPage = () => {
    return (
        <main className="h-full flex items-center justify-center tech-bg p-4 min-h-screen">
            <div className="w-full max-w-md z-10" data-purpose="login-wrapper">
                {/* BEGIN: TerminalCard */}
                <div className="bg-background-dark border border-zinc-800 shadow-2xl p-8 md:p-10 relative overflow-hidden" data-purpose="login-card">
                    {/* Decorative Border Accents (Industrial Tech feel) */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-secondary"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-secondary"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-secondary"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-secondary"></div>
                    {/* Header Section */}
                    <header className="mb-10">
                        <h1 className="text-secondary text-xl font-bold tracking-widest flex items-center uppercase">
                            SYSTEM LOGIN
                            <span className="cursor-blink"></span>
                        </h1>
                        <p className="text-zinc-500 text-xs mt-2 uppercase tracking-tighter">Secure Access Protocol v4.0.1</p>
                    </header>
                    {/* BEGIN: LoginForm */}
                    <form action="#" className="space-y-6" data-purpose="terminal-form" method="POST">
                        {/* Username Input Group */}
                        <div className="space-y-1">
                            <label className="block text-zinc-500 text-[10px] uppercase font-bold tracking-widest" htmlFor="username">
                                ID_USER &gt;
                            </label>
                            <input
                                className="w-full bg-black border-zinc-800 text-secondary focus:ring-0 focus:border-secondary py-3 px-4 rounded-none placeholder-zinc-700 transition-colors"
                                id="username"
                                name="username"
                                placeholder="root@admin"
                                required
                                type="text"
                            />
                        </div>
                        {/* Password Input Group */}
                        <div className="space-y-1">
                            <label className="block text-zinc-500 text-[10px] uppercase font-bold tracking-widest" htmlFor="password">
                                SEC_KEY &gt;
                            </label>
                            <input
                                className="w-full bg-black border-zinc-800 text-secondary focus:ring-0 focus:border-secondary py-3 px-4 rounded-none placeholder-zinc-700 transition-colors"
                                id="password"
                                name="password"
                                placeholder="********"
                                required
                                type="password"
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                className="w-full bg-secondary hover:bg-[#e65c00] text-black font-bold py-3 uppercase tracking-widest transition-all active:scale-[0.98] focus:outline-none flex items-center justify-center gap-2"
                                type="submit"
                            >
                                <span>[ INITIALIZE ]</span>
                            </button>
                        </div>
                        {/* Forgot Password Link */}
                        <div className="text-center pt-2">
                            <a
                                className="text-zinc-500 hover:text-secondary text-[11px] uppercase tracking-wider transition-colors"
                                href="#"
                            >
                            // Şifremi Unuttum?
                            </a>
                        </div>
                    </form>
                    {/* END: LoginForm */}
                    {/* Bottom Status Indicators (Industrial Aesthetics) */}
                    <div className="mt-10 pt-4 border-t border-zinc-900 flex justify-between items-center opacity-50">
                        <div className="text-[9px] text-zinc-500 uppercase tracking-tighter">Status: Standby</div>
                        <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* END: TerminalCard */}
                {/* Footer Copyright/Legal */}
                <footer className="mt-6 text-center">
                    <p className="text-[9px] text-zinc-600 uppercase tracking-widest">
                        © 2023 Advanced Security Systems • Restricted Access
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default LoginPage;