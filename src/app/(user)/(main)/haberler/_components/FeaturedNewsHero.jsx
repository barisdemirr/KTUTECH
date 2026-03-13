import React from 'react';

const FeaturedNewsHero = () => {
    return (
        <section className="mb-16">
            {/* ASPECT RATIO AYARLARI:
                - Default (Mobil): 4/5 (Yüksek/Dikey)
                - lg (1024px+): 16/9 (Standart Geniş)
                - xl (1280px+): 21/9 (Ultra Geniş)
                - items-start: Yazıları yukarı çeker
            */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl  flex items-end">

                {/* Arkaplan ve Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{
                        /* Yazılar yukarı çıktığı için gradyanı 'to bottom' (aşağı doğru) yaptık */
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(2, 2, 61, 0.95), rgba(2, 2, 61, 0.4), transparent), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
                    }}
                ></div>

                {/* İçerik Alanı */}
                <div className="relative p-8 md:p-12 lg:p-16 max-w-3xl text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        🚀 Öne Çıkan Gelişme
                    </span>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                        Geleceğin Teknolojileri Burada Şekilleniyor
                    </h2>

                    <p className="text-base md:text-lg text-slate-200/90 mb-10 font-medium max-w-xl line-clamp-4 md:line-clamp-none">
                        Teknoloji dünyasındaki en son gelişmeleri ve geleceği şekillendiren yenilikleri ekosistemimizin kalbinde keşfedin.
                    </p>

                    <button className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl shadow-black/20 group w-full sm:w-auto justify-center">
                        Devamını Oku
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedNewsHero;