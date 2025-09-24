import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MachineOverview = ({ machines, onViewManual, onScheduleMaintenance }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'text-success bg-success/10';
      case 'Bon': return 'text-primary bg-primary/10';
      case 'Attention': return 'text-warning bg-warning/10';
      case 'Maintenance': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="Settings" size={24} className="text-primary" />
          <span>Mes Machines</span>
        </h2>
        <Button variant="outline" iconName="Plus" size="sm">
          Ajouter Machine
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {machines?.map((machine) => (
          <div key={machine?.id} className="border border-border rounded-lg p-4 hover:shadow-elevated transition-industrial">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={machine?.image} 
                  alt={machine?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground truncate">{machine?.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(machine?.status)}`}>
                    {machine?.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  Modèle: {machine?.model} • Série: {machine?.serialNumber}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>Acheté: {machine?.purchaseDate}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{machine?.hoursUsed}h</span>
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    iconName="FileText"
                    onClick={() => onViewManual(machine?.id)}
                  >
                    Manuel
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    iconName="Wrench"
                    onClick={() => onScheduleMaintenance(machine?.id)}
                  >
                    Maintenance
                  </Button>
                  <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineOverview;