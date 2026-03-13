import React from 'react';

const Announcements = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h3 className="text-4xl font-bold mb-2">Duyurular</h3>
                    <div className="h-1.5 w-20 bg-primary"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group bg-primary p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                    <h5 className="text-xl text-white font-bold mb-3 group-hover:text-white/80 transition-colors">
                        Yeni Nesil Altyapı Güncellemesi
                    </h5>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Sistem performansını %40 artıran yeni sunucu altyapımıza geçiş yaptık. Artık tüm işlemleriniz çok daha hızlı ve güvenli.
                    </p>
                </div>

                <div className="group bg-primary p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                    <h5 className="text-xl text-white font-bold mb-3 group-hover:text-white/80 transition-colors">
                        Yıllık Teknoloji Raporu Yayınlandı
                    </h5>
                    <p className="text-white/60 text-sm leading-relaxed">
                        2024 yılı sektör analizlerini ve gelecek vizyonumuzu içeren kapsamlı raporumuz dijital kütüphanemizde yerini aldı.
                    </p>
                </div>

                <div className="group bg-primary p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                    <h5 className="text-xl text-white font-bold mb-3 group-hover:text-white/80 transition-colors">
                        Geliştirici Topluluğu Buluşması
                    </h5>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Gelecek ay gerçekleştireceğimiz açık kaynak projeler temalı topluluk buluşmamızın detayları çok yakında sizlerle olacak.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Announcements;