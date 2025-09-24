import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MaintenanceHeader = ({ onEmergencyClick, onScheduleClick }) => {
  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
              <Icon name="Wrench" size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Centre de Maintenance
              </h1>
              <p className="text-muted-foreground mt-1">
                Gérez vos équipements et planifiez vos interventions
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="destructive" 
              iconName="AlertTriangle" 
              iconPosition="left"
              onClick={onEmergencyClick}
              className="sm:w-auto"
            >
              SOS Dépannage
            </Button>
            <Button 
              variant="default" 
              iconName="Calendar" 
              iconPosition="left"
              onClick={onScheduleClick}
              className="sm:w-auto"
            >
              Planifier Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceHeader;