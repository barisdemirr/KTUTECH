import HeaderSection from "./_components/HeaderSection";
import SearchFilterSection from "./_components/SearchFilterSection";
import InternshipListSection from "./_components/InternshipListSection";

const InternshipManagementPage = () => {
    return (
        <main className="flex-1 h-screen overflow-y-auto bg-background-dark p-8">
            <HeaderSection />
            <SearchFilterSection />
            <InternshipListSection />
        </main>
    );
};

export default InternshipManagementPage;