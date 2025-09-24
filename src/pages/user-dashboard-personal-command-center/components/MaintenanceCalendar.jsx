import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MaintenanceCalendar = ({ maintenanceData, onScheduleService, onViewDetails }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Planifié': return 'text-primary bg-primary/10 border-primary/20';
      case 'En cours': return 'text-warning bg-warning/10 border-warning/20';
      case 'Terminé': return 'text-success bg-success/10 border-success/20';
      case 'Urgent': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Haute': return 'AlertTriangle';
      case 'Moyenne': return 'Clock';
      case 'Basse': return 'CheckCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="Calendar" size={24} className="text-warning" />
          <span>Calendrier de Maintenance</span>
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex bg-muted rounded-lg p-1">
            {['week', 'month']?.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-micro ${
                  selectedPeriod === period
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {period === 'week' ? 'Semaine' : 'Mois'}
              </button>
            ))}
          </div>
          <Button variant="outline" iconName="Plus" size="sm" onClick={onScheduleService}>
            Planifier
          </Button>
        </div>
      </div>
      {/* Maintenance Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-primary mb-1">
            {maintenanceData?.summary?.scheduled}
          </div>
          <div className="text-sm text-muted-foreground">Planifiées</div>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-warning mb-1">
            {maintenanceData?.summary?.inProgress}
          </div>
          <div className="text-sm text-muted-foreground">En cours</div>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-success mb-1">
            {maintenanceData?.summary?.completed}
          </div>
          <div className="text-sm text-muted-foreground">Terminées</div>
        </div>
      </div>
      {/* Upcoming Maintenance */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Prochaines Interventions</h3>
        {maintenanceData?.upcoming?.map((maintenance) => (
          <div key={maintenance?.id} className={`border rounded-lg p-4 ${getStatusColor(maintenance?.status)}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                  <Icon name={getPriorityIcon(maintenance?.priority)} size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{maintenance?.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{maintenance?.machine}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} />
                      <span>{maintenance?.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{maintenance?.time}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="User" size={12} />
                      <span>{maintenance?.technician}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(maintenance?.status)}`}>
                  {maintenance?.status}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  iconName="Eye"
                  onClick={() => onViewDetails(maintenance?.id)}
                />
              </div>
            </div>
            
            {maintenance?.description && (
              <p className="text-sm text-muted-foreground mb-3 pl-13">
                {maintenance?.description}
              </p>
            )}
            
            {maintenance?.estimatedCost && (
              <div className="flex items-center justify-between pl-13">
                <span className="text-sm text-muted-foreground">
                  Coût estimé: <span className="font-medium text-foreground">{maintenance?.estimatedCost}€</span>
                </span>
                {maintenance?.status === 'Planifié' && (
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" iconName="Edit">
                      Modifier
                    </Button>
                    <Button variant="ghost" size="sm" iconName="MessageCircle">
                      Contact
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Maintenance History Link */}
      <div className="mt-6 pt-4 border-t border-border">
        <Button variant="ghost" iconName="History" fullWidth>
          Voir l'Historique Complet
        </Button>
      </div>
    </div>
  );
};

export default MaintenanceCalendar;