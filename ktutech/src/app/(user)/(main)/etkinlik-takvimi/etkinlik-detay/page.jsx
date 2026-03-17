import Breadcrumb from './_components/Breadcrumb';
import EventBanner from './_components/EventBanner';
import EventDetails from './_components/EventDetails';

export default function EtkinlikDetayPage() {
    return (
        <main className="flex-1 px-4 py-10 md:px-20 lg:px-40 max-w-300 mx-auto">
            <div className="mx-auto max-w-240 flex flex-col gap-8">
                <Breadcrumb />
                <EventBanner />
                <EventDetails />
            </div>
        </main>
    );
}
