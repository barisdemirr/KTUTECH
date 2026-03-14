"use client"

import React, { useState } from 'react';
import ProfileHeader from './_components/ProfileHeader';
import ProfileNav from './_components/ProfileNav';
import ProjectsSection from './_components/ProjectsSection';
import ProfileSettings from './_components/ProfileSettings';

const ProfilPage = () => {
    const [activeSection, setActiveSection] = useState('projects');

    return (
        <main className="max-w-5xl mx-auto px-4 py-8">
            <ProfileHeader />
            <ProfileNav activeSection={activeSection} setActiveSection={setActiveSection} />
            {activeSection === 'projects' && <ProjectsSection />}
            {activeSection === 'settings' && <ProfileSettings />}
        </main>
    );
};

export default ProfilPage;