import HeroSection from './_components/HeroSection';
import FilterSection from './_components/FilterSection';
import FeaturedSection from './_components/FeaturedSection';

export default function Page() {
    return (
        <main className="flex flex-1 flex-col items-center w-full max-w-300 gap-8 py-8 px-6 md:px-10 mx-auto">
            <HeroSection />
            <FilterSection />
            <FeaturedSection />
        </main>
    );
}