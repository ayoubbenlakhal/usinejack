import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkshopMetrics = ({ metricsData, onShareSuccess, onUpdateMetrics }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const getMetricIcon = (type) => {
    switch (type) {
      case 'production': return 'TrendingUp';
      case 'efficiency': return 'Zap';
      case 'quality': return 'Award';
      case 'revenue': return 'DollarSign';
      default: return 'BarChart';
    }
  };

  const getMetricColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      case 'stable': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      case 'stable': return 'Minus';
      default: return 'Minus';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="BarChart3" size={24} className="text-primary" />
          <span>Mon Atelier - Métriques</span>
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex bg-muted rounded-lg p-1">
            {['week', 'month', 'quarter']?.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-micro ${
                  selectedPeriod === period
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {period === 'week' ? 'Semaine' : period === 'month' ? 'Mois' : 'Trimestre'}
              </button>
            ))}
          </div>
          <Button variant="outline" iconName="Settings" size="sm" onClick={onUpdateMetrics}>
            Configurer
          </Button>
        </div>
      </div>
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metricsData?.keyMetrics?.map((metric) => (
          <div key={metric?.id} className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={getMetricIcon(metric?.type)} size={20} className="text-primary" />
              </div>
              <div className={`flex items-center space-x-1 ${getMetricColor(metric?.trend)}`}>
                <Icon name={getTrendIcon(metric?.trend)} size={14} />
                <span className="text-xs font-medium">{metric?.change}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground">{metric?.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{metric?.label}</p>
              <p className="text-xs text-muted-foreground">{metric?.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Production Overview */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Aperçu de la Production</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Production Chart Placeholder */}
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-foreground">Production Quotidienne</h4>
              <Icon name="TrendingUp" size={16} className="text-success" />
            </div>
            <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="BarChart" size={32} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Graphique de production</p>
              </div>
            </div>
          </div>

          {/* Machine Utilization */}
          <div className="p-4 border border-border rounded-lg">
            <h4 className="font-medium text-foreground mb-4">Utilisation des Machines</h4>
            <div className="space-y-3">
              {metricsData?.machineUtilization?.map((machine) => (
                <div key={machine?.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Settings" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{machine?.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-border rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${machine?.utilization}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {machine?.utilization}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Recent Achievements */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Réalisations Récentes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metricsData?.achievements?.map((achievement) => (
            <div key={achievement?.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="Award" size={20} className="text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm">{achievement?.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement?.description}</p>
                <p className="text-xs text-success">{achievement?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Success Stories */}
      <div className="pt-6 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Histoires de Succès</h3>
          <Button variant="outline" iconName="Share" size="sm" onClick={onShareSuccess}>
            Partager Succès
          </Button>
        </div>
        
        <div className="space-y-3">
          {metricsData?.successStories?.map((story) => (
            <div key={story?.id} className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-foreground">{story?.title}</h4>
                <span className="text-xs text-muted-foreground">{story?.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{story?.description}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={12} />
                  <span>+{story?.improvement}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="DollarSign" size={12} />
                  <span>{story?.revenue}€</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{story?.likes} likes</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopMetrics;