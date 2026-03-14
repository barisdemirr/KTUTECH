import HeroSection from './_components/HeroSection';
import StudentProjects from './_components/StudentProjects';

export default function ProjectShowcasePage() {
    return (
        <main className="flex-1 w-full max-w-300 mx-auto">
            <HeroSection />
            <StudentProjects />
        </main>
    );
}