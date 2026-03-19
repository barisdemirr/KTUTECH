import HeaderSection from "./_components/HeaderSection";
import SearchFilterSection from "./_components/SearchFilterSection";
import NewsListSection from "./_components/NewsListSection";

const NewsManagementPage = () => {
    return (
        <main className="flex-1 h-screen overflow-y-auto bg-background-dark p-8">
            <HeaderSection />
            <SearchFilterSection />
            <NewsListSection />
        </main>
    );
};

export default NewsManagementPage;