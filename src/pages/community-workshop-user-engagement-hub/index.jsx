import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import CommunityHeader from './components/CommunityHeader';
import ForumSection from './components/ForumSection';

const CommunityWorkshopUserEngagementHub = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState('');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'forums':
        return <ForumSection searchQuery={searchQuery} />;
      default:
        return null;
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
