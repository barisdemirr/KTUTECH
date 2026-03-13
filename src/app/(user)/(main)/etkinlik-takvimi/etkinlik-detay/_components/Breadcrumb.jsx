export default function Breadcrumb() {
    return (
        <nav className="flex items-center gap-2 text-sm text-navy-deep/50">
            <a className="hover:text-primary" href="#">Anasayfa</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <a className="hover:text-primary" href="#">Etkinlikler</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-navy-deep font-medium">Geleceğin Teknolojileri Zirvesi</span>
        </nav>
    );
}