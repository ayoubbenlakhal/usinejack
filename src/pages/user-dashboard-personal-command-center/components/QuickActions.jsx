import React from 'react';
import Icon from '../../../components/AppIcon';


const QuickActions = ({ onAction }) => {
  const quickActions = [
    {
      id: 'emergency-support',
      title: 'SOS Dépannage',
      description: 'Support d\'urgence 24/7',
      icon: 'AlertTriangle',
      color: 'text-error',
      bgColor: 'bg-error/10',
      borderColor: 'border-error/20',
      urgent: true
    },
    {
      id: 'schedule-maintenance',
      title: 'Planifier Maintenance',
      description: 'Réserver un créneau',
      icon: 'Calendar',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20'
    },
    {
      id: 'order-parts',
      title: 'Commander Pièces',
      description: 'Pièces détachées',
      icon: 'Package',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      id: 'download-manual',
      title: 'Télécharger Manuel',
      description: 'Documentation technique',
      icon: 'Download',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20'
    },
    {
      id: 'contact-support',
      title: 'Contacter Support',
      description: 'Assistance technique',
      icon: 'MessageCircle',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      id: 'training-booking',
      title: 'Réserver Formation',
      description: 'Sessions d\'apprentissage',
      icon: 'GraduationCap',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="Zap" size={24} className="text-primary" />
          <span>Actions Rapides</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions?.map((action) => (
          <button
            key={action?.id}
            onClick={() => onAction(action?.id)}
            className={`relative p-4 border rounded-lg text-left hover:shadow-elevated transition-industrial ${action?.bgColor} ${action?.borderColor} group`}
          >
            {action?.urgent && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full animate-pulse" />
            )}
            
            <div className="flex items-start space-x-3">
              <div className={`w-12 h-12 ${action?.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon name={action?.icon} size={24} className={action?.color} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-micro">
                  {action?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action?.description}
                </p>
              </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Cliquer pour accéder
              </span>
              <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>
      {/* Recent Actions */}
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Actions Récentes</h3>
        <div className="space-y-2">
          {[
            { action: 'Manuel téléchargé', item: 'Brother PR-1050X', time: 'Il y a 2h', icon: 'Download' },
            { action: 'Support contacté', item: 'Problème tension fil', time: 'Hier', icon: 'MessageCircle' },
            { action: 'Maintenance planifiée', item: 'Révision générale', time: 'Il y a 3 jours', icon: 'Calendar' }
          ]?.map((recent, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-micro">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <Icon name={recent?.icon} size={16} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{recent?.action}</p>
                <p className="text-xs text-muted-foreground">{recent?.item}</p>
              </div>
              <span className="text-xs text-muted-foreground">{recent?.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;