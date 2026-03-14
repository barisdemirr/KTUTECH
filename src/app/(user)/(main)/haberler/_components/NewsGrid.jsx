import React from 'react';

const NewsGrid = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* News Card 1 */}
                <div className="group bg-white dark:bg-slate-800 border border-primary/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden aspect-video rounded-t-xl">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="Cybersecurity digital shield illustration"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2_pG1XNpTG3SlU__nb3Hh9nWquQziRjzRZ9lCCPCRp0tbUk9kP-a40nLvlt0LZhLtlYIhl_PWlNgiE46gqtDqAO12E0zKCqWQJ0qtwQfWkXODiUWwWLk9saV-_RNR-bcbkRgND-bdcBILFKd67OchdkKnGdP8fAgIrX5m6sJ2-nMcV6OiqZgpMB7Bb-XP5eDonpFDNYATwXzmw7XA-hiqLvNCJbfE7-GUcrJsU870D-pNo0_rg2fvE-JDRAMbk0g-sVHGUSzj7c_W"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-primary dark:text-slate-100 mb-3 line-clamp-2">
                            Siber Güvenlikte Yeni Nesil Protokoller Yayına Alındı
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                            Veri güvenliğini en üst düzeye çıkarmak için geliştirilen yeni şifreleme yöntemleri tüm sistemlerimizde aktif edildi.
                        </p>
                        <div className="flex items-center justify-between font-semibold text-slate-400 border-t border-primary/5 pt-4">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                <p className="text-gray-700 text-sm">13 Mart 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional News Cards */}
                {/* Add more cards here as needed */}
            </div>
            <div className="flex items-center justify-center gap-2 py-8 border-t border-slate-100 dark:border-slate-800">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex gap-2">
                    <button className="w-10 h-10 bg-primary text-white font-bold rounded-lg">1</button>
                    <button className="w-10 h-10 border border-primary/10 rounded-lg bg-white hover:border-primary">2</button>
                </div>
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </section>
    );
};

export default NewsGrid;