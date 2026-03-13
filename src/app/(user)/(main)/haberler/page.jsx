import React from 'react';
import FeaturedNewsHero from './_components/FeaturedNewsHero';
import HeaderSection from './_components/HeaderSection';
import NewsGrid from './_components/NewsGrid';

const NewsPage = () => {
    return (
        <main className="max-w-300 mx-auto px-4 md:px-10 lg:px-20 py-10">
            <FeaturedNewsHero />
            <HeaderSection />
            <NewsGrid />
        </main>
    );
};

export default NewsPage;