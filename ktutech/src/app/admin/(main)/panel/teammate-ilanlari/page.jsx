import HeaderSection from "./_components/HeaderSection";
import SearchFilterSection from "./_components/SearchFilterSection";
import TeammateListSection from "./_components/TeammateListSection";

const TeammateManagementPage = () => {
    return (
        <main className="flex-1 h-screen overflow-y-auto bg-background-dark p-8">
            <HeaderSection />
            <SearchFilterSection />
            <TeammateListSection />
        </main>
    );
};

export default TeammateManagementPage;