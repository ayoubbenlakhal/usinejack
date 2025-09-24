import React from 'react';
import Icon from '../../../components/AppIcon';

const MachineHealthCard = ({ machine }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-success bg-success/10 border-success/20';
      case 'good': return 'text-success bg-success/10 border-success/20';
      case 'warning': return 'text-warning bg-warning/10 border-warning/20';
      case 'critical': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent': return 'CheckCircle';
      case 'good': return 'CheckCircle';
      case 'warning': return 'AlertTriangle';
      case 'critical': return 'AlertCircle';
      default: return 'HelpCircle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Settings" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{machine?.name}</h3>
            <p className="text-sm text-muted-foreground">{machine?.model}</p>
          </div>
        </div>
        
        <div className={`px-3 py-1 rounded-full border text-xs font-medium flex items-center space-x-1 ${getStatusColor(machine?.status)}`}>
          <Icon name={getStatusIcon(machine?.status)} size={12} />
          <span className="capitalize">{machine?.status}</span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Heures d'utilisation</span>
          <span className="text-sm font-medium text-foreground">{machine?.hours?.toLocaleString('fr-FR')}h</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Dernière maintenance</span>
          <span className="text-sm font-medium text-foreground">{machine?.lastMaintenance}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Prochaine révision</span>
          <span className="text-sm font-medium text-foreground">{machine?.nextMaintenance}</span>
        </div>
      </div>
      {machine?.alerts && machine?.alerts?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-warning">
            <Icon name="AlertTriangle" size={14} />
            <span className="text-xs font-medium">{machine?.alerts?.length} alerte(s)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MachineHealthCard;