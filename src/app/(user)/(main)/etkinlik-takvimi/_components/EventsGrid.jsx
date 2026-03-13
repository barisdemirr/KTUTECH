export default function EventsGrid() {
    return (
        <section className="px-6 md:px-20 py-6 flex flex-col gap-10 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                    className="flex flex-col md:flex-row bg-white dark:bg-slate-800 border border-primary/10 rounded-xl overflow-hidden group">
                    <div className="md:w-1/3 aspect-4/3 md:aspect-auto relative overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl0iElJmJGtqh5CZ_LjVQszYjK6plm1Tm4O33skq9XL6SW8G6BQ2S4d-kkwJrGWI0l-LzdkhLk4H2SwE-B_bVEvEOpCcmAR7yROp7ZIkV-enhRw2blStWFHU7qt0Nnxv1vKnzAklAqbLzcyQHt-E02Io7J0uApYp3iAD3f_qHxYFq3cRurln40cUMEteodvD7QBoTZf7lL8G14wQXyXw97vJyvT4mWrVpvSb-IGT8OMBhvNjqdC2TXn4pGtxWau4vhHYKWrLYgGb5K" />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Yapay Zeka Atölyesi</h3>
                            <p className="text-slate-500 text-sm mb-4">Geleceğin teknolojilerini bugün öğrenin.</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-primary font-bold rounded-lg text-sm">Detaylar</button>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row bg-white dark:bg-slate-800 border border-primary/10 rounded-xl overflow-hidden group">
                    <div className="md:w-1/3 aspect-4/3 md:aspect-auto relative overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5aQ2PiggCB1ARSql0GgcOVyJkU4Q-Dbhofz83OTdyhSZWZnnG7mhpyQV43-4ycC12gM1s9WXD_hm-OnrCIkmFp-Kj28UJIJPGj8rtkYAg8QP9aqkVxZLV2Z5HlpQGWt4YD_q_HEg1DOFJY7WV1-gujfJcq6DSkqEQnztjj-kFZsQVXbgLYSiuiUSioJ01qBQLKm9hit28vU3XwXjjSdYB3rl-BWawBsUaTUFjpbRrTwPr_esyJm2a5u74BSIC_Ll6BmaFoNFCotdO" />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Kariyer Günleri</h3>
                            <p className="text-slate-500 text-sm mb-4">Sektör liderleriyle tanışma fırsatı.</p>
                        </div>
                        <div className="flex justify-end">
                            <a
                                href="/etkinlik-takvimi/etkinlik-detay"
                                className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-primary font-bold rounded-lg text-sm">Detaylar</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-8 border-t border-slate-100 dark:border-slate-800">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex gap-2">
                    <button className="w-10 h-10 bg-primary text-white font-bold rounded-lg">1</button>
                    <button className="w-10 h-10 border border-primary/10 rounded-lg hover:border-primary">2</button>
                </div>
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </section>
    );
}