import React from 'react';
import Hero from '@/app/(user)/(main)/(home)/_components/Hero';
import Announcements from './_components/Announcements';
import Events from './_components/Events';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <Announcements />
            <Events />
        </main>
    );
};

export default HomePage;