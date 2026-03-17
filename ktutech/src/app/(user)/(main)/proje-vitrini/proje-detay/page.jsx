import GallerySection from './_components/GallerySection';
import DetailsSection from './_components/DetailsSection';

export default function Page() {
    return (
        <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
            <GallerySection />
            <DetailsSection />
        </main>
    );
}