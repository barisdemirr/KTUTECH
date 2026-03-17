export default function HeroSection() {
    return (
        <section className="relative px-6 md:px-20 py-8">
            <div
                className="relative min-h-100 flex flex-col gap-6 items-center justify-center p-8 rounded-2xl overflow-hidden bg-primary text-center">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <div className="w-full h-full bg-linear-to-br from-primary via-indigo-900 to-black"></div>
                </div>
                <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">Şehrin ve Kampüsün Nabzını Tut</h1>
                    <p className="text-white/80 text-base md:text-lg">Geleceği şekillendiren profesyonel etkinliklere katılın, ağınızı genişletin.</p>
                    <div className="mt-4">
                        <a href="etkinlik-takvimi/etkinlik-talebi-olustur"
                            className="inline-flex items-center h-12 px-8 bg-white text-primary font-bold rounded-lg shadow-xl hover:-translate-y-1 transition-all">
                            <span className="material-symbols-outlined mr-2">add_circle</span> Talep Oluştur
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}