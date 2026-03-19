import React from 'react';

const ProfileNav = ({ activeSection, setActiveSection }) => {
    return (
        <nav className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto no-scrollbar">
            <button
                className={`flex items-center gap-2 px-6 py-4 border-b-2 ${
                    activeSection === 'projects' ? 'border-primary text-primary font-bold' : 'border-transparent text-slate-500 hover:text-primary'
                } transition-colors whitespace-nowrap`}
                onClick={() => setActiveSection('projects')}
            >
                <span className="material-symbols-outlined text-xl">folder_open</span>
                Projelerim
            </button>
            <button
                className={`flex items-center gap-2 px-6 py-4 border-b-2 ${
                    activeSection === 'settings' ? 'border-primary text-primary font-bold' : 'border-transparent text-slate-500 hover:text-primary'
                } transition-colors whitespace-nowrap`}
                onClick={() => setActiveSection('settings')}
            >
                <span className="material-symbols-outlined text-xl">settings</span>
                Hesap Ayarları
            </button>
        </nav>
    );
};

export default ProfileNav;