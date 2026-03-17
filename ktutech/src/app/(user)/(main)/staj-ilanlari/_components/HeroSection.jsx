import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section
            className="relative w-full overflow-hidden rounded-3xl h-90 md:h-120 flex items-center justify-center text-center bg-midnight group">
            {/* Yazıların okunabilirliği için güçlendirilmiş siyah geçişli efekt */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
                alt="Engineers working on tech projects in a modern office"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIgOhLyJmQw5qOgGl6c8LHqodNsh08xjn1MKW7PWGzZyNPyZahRJ1KjOax7kAjknk3C4FPTOP-8AAI7xUOW4Vacys-i_A--ro5aBaf89mj9-2Q5rfrCxxXqlneev6nW-0klo3aaD5Oa82WvEauBdEliv9zobhKD_E-DFcEDHTYqAEd48xNA4n06-OSpyfa56-rYcZNjP_fn5s5iEIGqSeTbkBIHKPJPLLlMJ1K5cvXj4Ag82rPbgndqagIXrxzJ8vZdjx6CDqkq6-6"
                fill
                priority
            />
            <div className="relative z-20 flex flex-col gap-4 px-6 max-w-3xl">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                    Kariyerine İlk Adımı At
                </h1>
                <p className="text-slate-200 text-base md:text-xl font-light leading-relaxed">
                    Geleceğin mühendisleri için en iyi teknoloji ve mühendislik staj fırsatlarını keşfedin, hayalindeki
                    kariyere bugün başla.
                </p>
                <div className="mt-4">
                    <a href="#stajlar"
                        className="bg-white hover:bg-primary/90 text-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:scale-105 hover:text-white cursor-pointer">
                        Fırsatları Keşfet
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;