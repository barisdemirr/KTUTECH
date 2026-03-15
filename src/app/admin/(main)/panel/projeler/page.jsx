import HeaderSection from "./_components/HeaderSection";
import SearchFilterSection from "./_components/SearchFilterSection";
import ProjectListSection from "./_components/ProjectListSection";

const ProjectManagementPage = () => {
    return (
        <main className="flex-1 h-screen overflow-y-auto bg-background-dark p-8">
            <HeaderSection />
            <SearchFilterSection />
            <ProjectListSection />
        </main>
    );
};

export default ProjectManagementPage;