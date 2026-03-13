import React from 'react';

const Events = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="flex justify-between items-end">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h3 className="text-4xl font-bold mb-2">Etkinlikler</h3>
                        <div className="h-1.5 w-20 bg-primary"></div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt="Team shaking hands at a modern table"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcCazuvHimgpqLncRgicGbodVf97AJm2s4NRblyvPykd_YRZobCzCNhztOAlbYpMBTSVoFEjpK-rsLi0OxpKqottPNhvMeDKNDYe2GXgEG_iDKdRcEIDl31EhvXJBeanGeFKB7NkQzzsd9y59P-OI1dLTdSVSNcGdN--sa3MKsNIWQfb5dRe5ag5TFMtoO-JKyBTduZj_5o41QTLmy8Jy3wknwgZf23BxqKhw2XBVMaVf1T8sM05euE4jqgLOow25cC49hEsYB4wh1"
                        />
                    </div>
                    <div className="p-6">
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Partnership</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                            New Strategic Alliance
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Partnering with leading tech firms to integrate AI-driven solutions into our core infrastructure.
                        </p>
                        <button className="text-sm font-bold flex items-center gap-2 group/btn">
                            Read Full Report
                            <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">
                                trending_flat
                            </span>
                        </button>
                    </div>
                </div>
                <div className="group bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt="Futuristic building in Singapore skyline"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF80jEuNv8FEIWYwxKSyNY1LNLlLjs0BYSXpayfGJ4G9whzHKNP4TabuZDP3Ygbna86DAFWhGuUUGZxAJH8jEqst7P6U2NQea2tZWiH604CTWt5cCzDJL8yBB4foIleQWiDGTIGO1VoLMIoOE3wdooaXVnPjT6Odd7vELV25ymLkouh0a9gLrhBodAHlBQ8W2PiZqSPfDTVmE9py6OtVPiaWmoF8SMGSnyck--afqO_C6pcwhaXbMBzbVXbsMjrKKESmM5_0E9Fn5R"
                        />
                    </div>
                    <div className="p-6">
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Global</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                            Singapore Hub Expansion
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Opening our new regional headquarters in Marina Bay to better serve our Asian market partners.
                        </p>
                        <button className="text-sm font-bold flex items-center gap-2 group/btn">
                            Read Full Report
                            <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">
                                trending_flat
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 w-max">
                <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                    View All <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
            </div>
        </section>
    );
};

export default Events;