"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const IMAGES = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDjHsHxFSc_IUoMDYekC-SAvaxhPCQaJM-T4NytlEJOzPR-WxaMtnVEucRAbfx78e76oQiaZuO4IKfB_ToWP58mLP2VDdyZuV-sjvmEdFN0c5OGSRIo6ePeqDDu1icAm_Y0k0uiYGVapJYRfSHxfvtZzRWb4JZ6RVjPjMvx43qzKKzpoqPe93wq4UcVELVSAxCM0ZBiyr9Y_cKmUZw_d50mk0h7K0i-rNiPyYmBGiydW84vntiMBmUgZJpip-2zhm6C7xx5tQsKaRtq',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpR-DL8oL7i6MiW2t2x3UOe19iyu1cFSRYyTXRjK8Z2FVmyWT4l6Wd-MmhAjNiVoyV3v9IwHx91zBRrePTX79I0UIQjaC2Igl2Z9dH792GWhL_0OhG2m5_meI39N_OY5A0agTAnn88xG7pGy0F3_PpT0lPHx7XCrfNCBJ_-rZSIYndPhT-cSlPoFI3c-vfBj7fS6D0C2DGefK6Tyn83Osxzw0VgPYd616aVtK_j5bmUCjm6MBsuuS7zAdS16_VkcaS3EmhtTzKatbT',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCb2FzzZwvIPYWLDfyseK8bHkapELuOEUzuLZ_xYkDVIjgxzFxT9Q2zwm7Qp85kX_RDX9TM4JUVDggg8ap6ahwadOWGrdzdbYE2yPODaLcMxQNka3ljvKCEHItKUE_mmrDkSJ0toSGT5QVNiGPtqOd397k8gCSzVIpxLVp0vrD9EMLt0Hlf7JUEB_h33kfuhdHH9LuKvXHgnOW__I1195_W_5iEwXxGnyZD5awIZowQ99BMNTk_VdfFLlCSIKY0BFnj1zuCpjipfpdf',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
];

export default function ProjectGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // Swipe hassasiyeti (piksel cinsinden)
    const minSwipeDistance = 50;

    const showNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, []);

    const showPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    }, []);

    // --- Swipe Mantığı ---
    const onTouchStart = (e) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) showNext();
        if (isRightSwipe) showPrev();
    };

    // Klavye Desteği
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentIndex === null) return;
            if (e.key === 'Escape') setCurrentIndex(null);
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, showNext, showPrev]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* 1. GRID SECTION (Aynı Kalabilir) */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 h-auto">
                <div onClick={() => setCurrentIndex(0)} className="group relative col-span-1 md:col-span-8 overflow-hidden rounded-2xl cursor-pointer aspect-4/3 md:h-125 border border-white/10 shadow-lg">
                    <Image src={IMAGES[0]} alt="Proje" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 lg:gap-4">
                    <div onClick={() => setCurrentIndex(1)} className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square md:aspect-auto border border-white/10 shadow-md">
                        <Image src={IMAGES[1]} alt="Detay 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div onClick={() => setCurrentIndex(2)} className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square md:aspect-auto border border-white/10 shadow-md">
                        <Image src={IMAGES[2]} alt="Detay 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        {IMAGES.length > 3 && (
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                                <span className="text-3xl font-bold">+{IMAGES.length - 2}</span>
                                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-80 text-center px-2">Tümünü Gör</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 2. RESPONSIVE LIGHTBOX (Swipe + Butonlar) */}
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center bg-black/98 backdrop-blur-2xl touch-none"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Üst Bar: Kapatma ve Sayaç */}
                    <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-1001">
                        <span className="text-white/60 text-sm font-mono">{currentIndex + 1} / {IMAGES.length}</span>
                        <button
                            onClick={() => setCurrentIndex(null)}
                            className="text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-all active:scale-90"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    {/* Sol Ok - Mobilde Gizli, Masaüstünde Görünür */}
                    <button
                        onClick={showPrev}
                        className="hidden md:flex absolute left-8 text-white/20 hover:text-white transition-all p-3 z-1001 items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    {/* Görsel Kaplayıcısı */}
                    <div className="relative w-full max-w-6xl h-[60vh] md:h-[85vh] mx-2 select-none pointer-events-none">
                        <Image
                            src={IMAGES[currentIndex]}
                            alt="Slide"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Sağ Ok - Mobilde Gizli, Masaüstünde Görünür */}
                    <button
                        onClick={showNext}
                        className="hidden md:flex absolute right-8 text-white/20 hover:text-white transition-all p-3 z-1001 items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    {/* Alt Göstergeler (Dots) */}
                    <div className="absolute bottom-10 flex gap-2">
                        {IMAGES.map((_, i) => (
                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}