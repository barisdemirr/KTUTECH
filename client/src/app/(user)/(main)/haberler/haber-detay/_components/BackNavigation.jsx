const BackNavigation = () => {
    return (
        <div className="mb-8">
            <a className="inline-flex items-center gap-2 text-primary dark:text-slate-300 text-sm font-medium transition-all group" href="#">
                <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Haberlere Geri Dön
            </a>
        </div>
    );
};

export default BackNavigation;