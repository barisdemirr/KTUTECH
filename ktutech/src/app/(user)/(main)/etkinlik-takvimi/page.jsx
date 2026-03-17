import HeroSection from './_components/HeroSection';
import FilterSection from './_components/FilterSection';
import EventsGrid from './_components/EventsGrid';

export default function EtkinlikTakvimiPage() {
    return (
        <main className="flex-1 w-full max-w-300 mx-auto">
            <HeroSection />
            <FilterSection />
            <EventsGrid />
        </main>
    );
}