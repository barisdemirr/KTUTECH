import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-150 overflow-hidden bg-primary">
            <div
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByhIF9F7VDa6AVNbw0z6GUl3yQz_pIEGSVsPtmMmbqkQaulK7nb25-sbOHq_Yg9SIYPHKPkp-l5YsajvPF1TOq_ZDZpKdNfQwsjfmnoSX5FwrnRMDkYKlBR2gHha2yaay_BGN1RASZYX3QT0ESy47DY4W89qLS5etrf0Jc3xVjW2sTJdRDvorYnxwafkJoSfCCWMJEjpWdxvxaHFe0_CRCQNJItv-JNtpm3DbLVMsC8si-KpLHXi0Lw3tBv08n-AoRoNYU6EV8mHgU')",
                }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-transparent"></div>

            <div className="relative h-full flex items-center px-4 md:px-10 lg:px-40 pb-20 md:pb-0">
                <div className="max-w-2xl text-white text-center md:text-left mx-auto md:mx-0">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-4 backdrop-blur-md">
                        Öne Çıkan
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold leading-none mb-6">Geleceği Birlikte İnşa Ediyoruz</h2>
                    <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto md:mx-0">
                        En yeni teknolojiler, inovatif projeler ve topluluğumuzun gücüyle sınırları zorlamaya hazır mısınız?
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-broken-white transition-all">
                            Hemen Keşfet
                        </button>
                        <button className="px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            Tanıtımı İzle
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex items-center gap-4">
                <button className="w-12 h-12 rounded-full border border-white/20 text-white hover:text-primary flex items-center justify-center hover:bg-white hover:text-midnight transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-white/20 text-white hover:text-primary flex items-center justify-center hover:bg-white hover:text-midnight transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>

            <div className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-8 h-1 bg-white rounded-full"></div>
                <div className="w-2 h-1 bg-white/30 rounded-full"></div>
                <div className="w-2 h-1 bg-white/30 rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;