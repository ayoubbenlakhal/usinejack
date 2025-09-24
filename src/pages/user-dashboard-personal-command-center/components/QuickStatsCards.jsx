import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStatsCards = ({ stats }) => {
  const statCards = [
    {
      title: 'Machines Actives',
      value: stats?.activeMachines,
      icon: 'Settings',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      change: '+2 ce mois'
    },
    {
      title: 'Heures de Formation',
      value: `${stats?.learningHours}h`,
      icon: 'GraduationCap',
      color: 'text-success',
      bgColor: 'bg-success/10',
      change: '+12h cette semaine'
    },
    {
      title: 'Maintenance Planifiée',
      value: stats?.scheduledMaintenance,
      icon: 'Calendar',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      change: '3 prochains jours'
    },
    {
      title: 'Commandes Récentes',
      value: stats?.recentOrders,
      icon: 'ShoppingCart',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      change: 'Ce mois-ci'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards?.map((card, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-industrial">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${card?.bgColor} rounded-lg flex items-center justify-center`}>
              <Icon name={card?.icon} size={24} className={card?.color} />
            </div>
            <Icon name="TrendingUp" size={16} className="text-success" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">{card?.value}</h3>
            <p className="text-sm font-medium text-muted-foreground">{card?.title}</p>
            <p className="text-xs text-success">{card?.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStatsCards;