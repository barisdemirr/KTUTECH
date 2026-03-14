import HeroSection from './_components/HeroSection';
import JobListings from './_components/JobListings';

export default function BirlikteUretPage() {
    return (
        <main className="flex-1 w-full max-w-300 px-6 md:px-20 mx-auto">
            <HeroSection />
            <JobListings />
        </main>
    );
}
