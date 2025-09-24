import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import CommunityHeader from './components/CommunityHeader';
import ForumSection from './components/ForumSection';
import ProjectGallery from './components/ProjectGallery';
import ExpertQA from './components/ExpertQA';
import ChallengesSection from './components/ChallengesSection';
import MentorshipSection from './components/MentorshipSection';

const CommunityWorkshopUserEngagementHub = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState('');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'forums':
        return <ForumSection searchQuery={searchQuery} />;
      case 'gallery':
        return <ProjectGallery searchQuery={searchQuery} />;
      case 'qa':
        return <ExpertQA searchQuery={searchQuery} />;
      case 'challenges':
        return <ChallengesSection searchQuery={searchQuery} />;
      case 'mentorship':
        return <MentorshipSection searchQuery={searchQuery} />;
      default:
        return <ForumSection searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <CommunityHeader 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <div className="pb-8">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default CommunityWorkshopUserEngagementHub;