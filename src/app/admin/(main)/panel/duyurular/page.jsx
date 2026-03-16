import HeaderSection from "./_components/HeaderSection";
import SearchFilterSection from "./_components/SearchFilterSection";
import AnnouncementListSection from "./_components/AnnouncementListSection";

const AnnouncementManagementPage = () => {
    return (
        <main className="flex-1 h-screen overflow-y-auto bg-background-dark p-8">
            <HeaderSection />
            <SearchFilterSection />
            <AnnouncementListSection />
        </main>
    );
};

export default AnnouncementManagementPage;