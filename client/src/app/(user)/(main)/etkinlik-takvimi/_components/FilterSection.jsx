"use client";

import { useState } from 'react';

export default function FilterSection() {
    const [selectedStatus, setSelectedStatus] = useState('Aktif');

    return (
        <section className="px-6 md:px-20 py-4">
            <div
                className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-xl border border-primary/5">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="text-sm font-semibold text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined">sort</span> Sıralama:
                    </span>
                    <div className="flex bg-slate-100 dark:bg-slate-900 rounded-lg p-1">
                        <button
                            className="px-4 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-slate-700 text-primary shadow-sm">Güncel</button>
                        <button className="px-4 py-1.5 text-xs font-medium text-slate-500">Eski</button>
                    </div>
                </div>
                <div className="flex bg-slate-100 dark:bg-slate-900 rounded-lg p-1 w-full md:w-auto">
                    <label
                        className="flex-1 cursor-pointer py-2 px-6 rounded-lg text-xs font-bold transition-all text-center has-checked:bg-primary has-checked:text-white text-slate-500">
                        <input
                            className="hidden"
                            name="st"
                            type="radio"
                            value="Aktif"
                            checked={selectedStatus === 'Aktif'}
                            onChange={() => setSelectedStatus('Aktif')}
                        />
                        <span>Aktif</span>
                    </label>
                    <label
                        className="flex-1 cursor-pointer py-2 px-6 rounded-lg text-xs font-bold transition-all text-center has-checked:bg-primary has-checked:text-white text-slate-500">
                        <input
                            className="hidden"
                            name="st"
                            type="radio"
                            value="Geçmiş"
                            checked={selectedStatus === 'Geçmiş'}
                            onChange={() => setSelectedStatus('Geçmiş')}
                        />
                        <span>Geçmiş</span>
                    </label>
                </div>
            </div>
        </section>
    );
}