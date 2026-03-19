const SearchFilterSection = () => {
    return (
        <div className="mb-8 flex gap-4">
            <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                <input
                    className="w-full bg-card-dark border border-white/10 px-12 py-3 text-sm focus:border-primary focus:ring-0 outline-none"
                    placeholder="İlan başlığı ara..."
                    type="text"
                />
            </div>
            <select className="bg-card-dark border border-white/10 px-4 py-3 text-sm text-slate-400 focus:border-primary focus:ring-0">
                <option>Tüm Durumlar</option>
                <option>Aktif</option>
                <option>Pasif</option>
            </select>
        </div>
    );
};

export default SearchFilterSection;