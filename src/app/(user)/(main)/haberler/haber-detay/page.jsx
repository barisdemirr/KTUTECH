import BackNavigation from "./_components/BackNavigation";
import ArticleHero from "./_components/ArticleHero";
import HeaderContent from "./_components/HeaderContent";
import ArticleBody from "./_components/ArticleBody";
import SocialSharing from "./_components/SocialSharing";

const NewsDetailPage = () => {
    return (
        <main className="grow">
            <div className="mx-auto max-w-225 px-6 py-8">
                <BackNavigation />
                <article>
                    <ArticleHero />
                    <HeaderContent />
                    <ArticleBody />
                    <SocialSharing />
                </article>
            </div>
        </main>
    );
};

export default NewsDetailPage;