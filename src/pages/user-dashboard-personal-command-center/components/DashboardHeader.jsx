import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardHeader = ({ user, onNotificationClick, onSettingsClick }) => {
  return (
    <div className="bg-card border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Icon name="User" size={32} color="white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Bonjour, {user?.name}
            </h1>
            <p className="text-muted-foreground">
              {user?.accountType} • Membre depuis {user?.memberSince}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            iconName="Bell" 
            onClick={onNotificationClick}
            className="relative"
          >
            {user?.unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-error-foreground text-xs rounded-full flex items-center justify-center">
                {user?.unreadNotifications}
              </span>
            )}
          </Button>
          <Button 
            variant="ghost" 
            iconName="Settings" 
            onClick={onSettingsClick}
          />
          <Button variant="outline" iconName="HelpCircle">
            Aide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;