import React from 'react';

const DetailsSection = () => {
    return (
        <section className="flex flex-col gap-6 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-navy-deep/5">
            <div className="flex flex-col gap-2">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Teknoloji & İnovasyon</span>
                <h1 className="text-navy-deep text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    Geleceğin Teknolojileri ve <br />Dijital Dönüşüm Zirvesi 2024
                </h1>
            </div>
            <div className="flex flex-wrap gap-4 py-6 border-y border-navy-deep/10">
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-navy-deep/5 flex-1 min-w-[200px]">
                    <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-navy-deep/40 tracking-wider">Tarih</span>
                        <span className="text-navy-deep font-bold">25 Ekim 2024, Cuma</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-navy-deep/5 flex-1 min-w-[200px]">
                    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-navy-deep/40 tracking-wider">Saat</span>
                        <span className="text-navy-deep font-bold">14:00 - 18:30</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-navy-deep/5 flex-1 min-w-[200px]">
                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-navy-deep/40 tracking-wider">Konum</span>
                        <span className="text-navy-deep font-bold" data-location="Istanbul">Lütfi Kırdar Kongre
                            Merkezi</span>
                    </div>
                </div>
            </div>
            <div className="prose prose-lg max-w-none text-navy-deep/80 leading-relaxed">
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    Geleceğin dünyasını şekillendiren en yeni teknolojiler, bu yılki zirvemizde bir araya geliyor.
                    Yapay zekanın iş dünyasındaki rolü, kuantum bilişimin temelleri ve Web3 ekosistemindeki son
                    gelişmeler, sektörün önde gelen vizyonerleri tarafından derinlemesine ele alınacaktır. Bu
                    etkinlikte, sadece dinleyici olmakla kalmayacak, interaktif atölye çalışmaları ve demo
                    alanlarında geleceğin araçlarını ilk elden deneyimleme fırsatı bulacaksınız. Derin gece mavisi
                    tonlarında hazırlanan bu özel içerik alanı, yüksek okunabilirlik sağlayan profesyonel tipografi
                    ile sunulmaktadır.
                </p>
            </div>
        </section>
    );
};

export default DetailsSection;