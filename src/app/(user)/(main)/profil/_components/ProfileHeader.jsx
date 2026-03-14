import React from 'react';

const ProfileHeader = () => {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-10 mb-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-r from-primary/10 to-transparent"></div>
            <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6">
                <div className="size-32 md:size-40 rounded-full border-4 border-white dark:border-slate-900 shadow-lg overflow-hidden bg-slate-200">
                    <img className="w-full h-full object-cover" data-alt="Close up profile picture of Ahmet Yilmaz" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLfcfNtGEa7EEGDRIr43o44XajfhJBHzs6HVzbA-B5OCskU1Kq4_8i0fym0C0ViJxaax-B8oaBsBqykFRHUS3JANkaCAOpiiztAnCQwpdzl1RP3muEk-BwPPItrWxiRqsOR7x1xJCKQPWO9SUYkRLkUKaLRRzfPtwYq_f5GnyPp64EHm3hwxmD3aj3aRKYJPa9nDwpz4-fXCiLtNzSF_Eko-QDsUaE0WHR8fjunHPrqEMEBdJqd__LxzuJ-vmho8SjGmyTQaIyF9eJ"/>
                </div>
                <div className="flex-1 text-center md:text-left pb-2">
                    <h2 className="text-3xl font-bold text-primary dark:text-white">Ahmet Yılmaz</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Bilgisayar Mühendisliği</p>
                    <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                            Mart 2026
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-sm">verified</span>
                            Mezun Adayı
                        </span>
                    </div>
                </div>
                <div className="pb-2">
                    <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-primary/90 transition-all">
                        Profili Düzenle
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfileHeader;