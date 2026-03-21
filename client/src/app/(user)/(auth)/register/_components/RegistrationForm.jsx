"use client"

import React, { useState } from 'react';
import ErrorAlert from '@/components/ui/errorAlert';
import { useRouter } from 'next/navigation';
import { registerService } from '@/services/authService';

const RegistrationForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nameSurname: '',
        email: '',
        password: '',
        phone: '',
        department: ''
    });

    const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanData = {
            nameSurname: formData.nameSurname.trim(),

            email: formData.email.trim().toLowerCase(),

            phone: formData.phone.replace(/\s/g, ''),

            password: formData.password.trim().replace(/\s/g, ''),

            department: formData.department?.trim() || null
        };

        if (!isPrivacyAccepted) {
            setError("Önce gizlilik politikasını onaylaman lazım.");
            return;
        }

        try {
            await registerService(cleanData);
            router.push('/login?status=success');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div>
            <div className='w-4/5 mx-auto'>
                <ErrorAlert error={error} />
            </div>
            <form className="px-10 pb-10 space-y-5" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">İsim Soyisim</label>
                    <div className="relative">
                        <input
                            className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            placeholder="Adınız ve soyadınız" name="nameSurname" value={formData.nameSurname} onChange={handleChange} type="text" />
                    </div>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">E-posta</label>
                    <div className="relative flex items-center">
                        <input
                            className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            placeholder="ogr-no@ogr.ktu.edu.tr" name="email" value={formData.email} onChange={handleChange} type="email" />
                        <span className="material-symbols-outlined absolute right-3 text-slate-400">mail</span>
                    </div>
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Telefon Numarası</label>
                    <div className="relative flex items-center">
                        <input
                            className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            placeholder="05xx xxx xx xx" name="phone" value={formData.phone} onChange={handleChange} type="tel" />
                        <span className="material-symbols-outlined absolute right-3 text-slate-400">phone</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Bölüm (Opsiyonel)</label>
                    <div className="relative flex items-center">
                        <input
                            className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder="Örn: Bilgisayar Mühendisliği"
                        />
                        <span className="material-symbols-outlined absolute right-3 text-slate-400">phone</span>
                    </div>
                    <small>Bu alanı boş bırakabilirsin.</small>
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Şifre</label>
                    <div className="relative flex items-center">
                        <input
                            className="w-full h-12 pl-4 pr-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            placeholder="••••••••" name="password" value={formData.password} onChange={handleChange} type="password" />
                        <div className="absolute right-3 flex items-center gap-2">
                            <span
                                className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">visibility</span>
                        </div>
                    </div>
                </div>
                {/* Terms and Privacy */}
                <div className="flex items-start gap-3 pt-2">
                    <div className="flex items-center h-5">
                        <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                            id="privacy"
                            checked={isPrivacyAccepted}
                            onChange={(e) => setIsPrivacyAccepted(e.target.checked)} />
                    </div>
                    <label className="text-xs text-slate-500 dark:text-slate-400 leading-tight" htmlFor="terms">
                        <a className="text-primary font-semibold hover:underline" href="#">Kullanım Koşulları</a> ve <a
                            className="text-primary font-semibold hover:underline" href="#">Gizlilik Politikası</a>'nı kabul
                        ediyorum.
                    </label>
                </div>
                {/* Submit Button */}
                <button
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                    type="submit">
                    Hesap Oluştur
                    <span
                        className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                {/* Login Link */}
                <div className="text-center pt-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Zaten hesabın var mı?
                        <a className="text-primary font-bold hover:underline ml-1" href="/login">Giriş Yap</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;