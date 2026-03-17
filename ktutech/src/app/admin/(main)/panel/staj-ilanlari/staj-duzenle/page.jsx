"use client";

import { useState } from 'react';

const EditInternshipPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
            <div className="flex-1 p-4 md:p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter">Staj İlanını Düzenle</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Sistem portalı için staj ilanı içeriklerini düzenleyin.</p>
                    </div>

                    {/* Form Container */}
                    <div className="bg-background-dark dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
                        {/* Image Upload */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Görsel Yükle</label>
                            <div className="border-2 border-dashed border-primary/40 hover:border-primary  dark:bg-accent-orange/5 transition-colors p-10 flex flex-col items-center justify-center text-center group cursor-pointer">
                                <span className="material-symbols-outlined text-4xl text-accent-orange mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
                                <p className="text-lg font-bold">Dosyaları buraya sürükleyin</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Veya bilgisayarınızdan bir dosya seçmek için tıklayın</p>
                                <button className="mt-6 px-6 py-2 bg-accent-orange text-white font-bold text-sm uppercase tracking-widest hover:bg-primary transition-colors">Dosya Seç</button>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Staj İlanı Başlığı</label>
                            <input
                                className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-800 p-4 text-xl font-bold placeholder:text-slate-400 focus:ring-2 focus:ring-accent-orange focus:border-accent-orange outline-none transition-all shadow-sm"
                                placeholder="Staj ilanının çarpıcı başlığını buraya giriniz..."
                                type="text"
                            />
                        </div>

                        {/* Short Description */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Kısa Açıklama</label>
                            <textarea
                                className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-800 p-4 text-base placeholder:text-slate-400 focus:ring-2 focus:ring-accent-orange focus:border-accent-orange outline-none transition-all"
                                placeholder="Staj ilanının kısa özetini giriniz (Meta açıklama için kullanılır)..."
                                rows="3"
                            ></textarea>
                        </div>

                        {/* Rich Text Editor Placeholder */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Staj İlanı İçeriği</label>
                            <div className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-background-dark overflow-hidden">
                                {/* Editor Toolbar */}
                                <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">format_bold</span>
                                    </button>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">format_italic</span>
                                    </button>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">format_underlined</span>
                                    </button>
                                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                                    </button>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">format_list_numbered</span>
                                    </button>
                                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">link</span>
                                    </button>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">image</span>
                                    </button>
                                    <button className="p-1.5 rounded hover:bg-white dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-sm">code</span>
                                    </button>
                                </div>
                                {/* Content Area */}
                                <div
                                    className="min-h-75 p-6 text-slate-600 dark:text-slate-300 outline-none"
                                    contentEditable="true"
                                    suppressContentEditableWarning={true}
                                >
                                    <p className="text-slate-400 italic">Staj ilanı detaylarını buraya yazmaya başlayın...</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-8">
                            <button className="w-full sm:w-auto px-8 py-3 border-2 border-accent-orange text-accent-orange font-bold uppercase tracking-widest hover:bg-accent-orange/10 transition-colors">
                                İptal Et
                            </button>
                            <button className="w-full sm:w-auto px-10 py-3 bg-accent-orange text-white font-black uppercase tracking-[0.15em] hover:bg-primary shadow-lg shadow-accent-orange/20 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-lg">publish</span>
                                Staj İlanını Yayınla
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditInternshipPage;