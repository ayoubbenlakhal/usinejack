import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunityHeader = ({ activeTab, onTabChange, searchQuery, onSearchChange }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const tabs = [
    { id: 'forums', name: 'Forums', icon: 'MessageSquare', count: 1247 },
    { id: 'gallery', name: 'Galerie', icon: 'Image', count: 892 },
    { id: 'qa', name: 'Q&A Expert', icon: 'HelpCircle', count: 456 },
    { id: 'challenges', name: 'Défis', icon: 'Trophy', count: 12 },
    { id: 'mentorship', name: 'Mentorat', icon: 'Users', count: 234 }
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Users" size={24} color="white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Atelier Communautaire</h1>
                <p className="text-muted-foreground">Partagez, apprenez et grandissez ensemble</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className={`relative transition-all duration-300 ${isSearchExpanded ? 'w-80' : 'w-10'} lg:w-80`}>
                {isSearchExpanded || window.innerWidth >= 1024 ? (
                  <Input
                    type="search"
                    placeholder="Rechercher dans la communauté..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e?.target?.value)}
                    className="pr-10"
                  />
                ) : (
                  <button
                    onClick={() => setIsSearchExpanded(true)}
                    className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-micro"
                  >
                    <Icon name="Search" size={18} />
                  </button>
                )}
                {(isSearchExpanded || window.innerWidth >= 1024) && (
                  <button
                    onClick={() => {
                      setIsSearchExpanded(false);
                      onSearchChange('');
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <Icon name="Search" size={16} className="text-muted-foreground" />
                  </button>
                )}
              </div>

              {/* Quick Actions */}
              <Button variant="outline" iconName="Bell" size="sm">
                <span className="hidden sm:inline">Notifications</span>
              </Button>
              <Button variant="default" iconName="Plus" size="sm">
                <span className="hidden sm:inline">Nouveau Post</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 overflow-x-auto pb-px">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => onTabChange(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg text-sm font-medium whitespace-nowrap transition-micro ${
                activeTab === tab?.id
                  ? 'bg-background text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {tab?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;