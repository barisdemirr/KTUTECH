export default function HeroSection() {
    return (
        <section className="px-6 md:px-20 py-8">
            <div
                className="relative min-h-125 w-full flex flex-col justify-center overflow-hidden rounded-xl bg-slate-900 shadow-2xl group cursor-pointer transition-shadow hover:shadow-primary/20">

                <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpwwDxlzVVBkhgmQWftguPWM9cu1j5jyWyZx1tSNJMzxYAnU4e9uFUWLmn6ItWmTTjU0HjSIN5ahegT5_wZYtVV7hYnwZME45cFreBq6Pv8l28fH37Ubzh2kx_HSgU5lruB3vo51GFr1xcZDPHCuIhjtADvmnIyDSaBhgcd-oewXXLDoMun8Y33TQD_-7xudUHsMXNuztg2mKNlwM0leKGqN-9-FD4WpYCsZ-Ap70UDGabCw9C0atLjx5tMcnT5PQEKtoEfGcKIj7P"
                    alt="Otonom Drone Filosu" />

                <div
                    className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95 z-10">
                </div>

                <div className="relative z-20 p-8 md:p-16 flex flex-col gap-6 max-w-3xl">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-midnight text-xs font-black tracking-widest uppercase rounded w-fit">
                        <span className="material-symbols-outlined text-sm">stars</span> Ayın Projesi
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Otonom Drone Filosu Yönetimi
                        </h1>
                        <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed">
                            Endüstriyel denetim süreçlerini otomatize eden yapay zeka tabanlı yeni nesil drone
                            ekosistemi.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="proje-vitrini/proje-detay"
                            className="flex min-w-40 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-white hover:text-primary transition-all shadow-lg shadow-primary/20">
                            Projeyi İncele
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}