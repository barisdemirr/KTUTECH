import HeaderSection from "./_components/HeaderSection";
import SearchFilterSection from "./_components/SearchFilterSection";
import EventListSection from "./_components/EventListSection";
import EventRequestListSection from "./_components/EventRequestListSection";

const EventManagementPage = () => {
    return (
        <main className="flex-1 h-screen overflow-y-auto bg-background-dark p-8">
            <HeaderSection />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Events */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Etkinlikler</h3>
                    <EventListSection />
                </div>
                {/* Right Column: Event Requests */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Etkinlik Talepleri</h3>
                    <EventRequestListSection />
                </div>
            </div>
        </main>
    );
};

export default EventManagementPage;