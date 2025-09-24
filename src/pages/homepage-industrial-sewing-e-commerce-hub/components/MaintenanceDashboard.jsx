import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MaintenanceDashboard = () => {
  const [activeAlert, setActiveAlert] = useState(0);

  const maintenanceAlerts = [
    {
      id: 1,
      machine: "JACK JK-8720",
      type: "Maintenance préventive",
      priority: "medium",
      dueDate: "2025-01-20",
      description: "Lubrification générale et vérification des tensions",
      estimatedTime: "45 min",
      icon: "Wrench"
    },
    {
      id: 2,
      machine: "BROTHER S-7300A",
      type: "Alerte système",
      priority: "high",
      dueDate: "2025-01-18",
      description: "Tension fil anormale détectée - Intervention requise",
      estimatedTime: "30 min",
      icon: "AlertTriangle"
    },
    {
      id: 3,
      machine: "JUKI DDL-8700",
      type: "Rappel entretien",
      priority: "low",
      dueDate: "2025-01-25",
      description: "Nettoyage des griffes d'entraînement recommandé",
      estimatedTime: "20 min",
      icon: "Clock"
    }
  ];

  const quickActions = [
    {
      name: "SOS Dépannage",
      description: "Assistance immédiate 24/7",
      icon: "Phone",
      color: "bg-red-600 hover:bg-red-700",
      urgent: true
    },
    {
      name: "Planifier Service",
      description: "Réserver un créneau",
      icon: "Calendar",
      color: "bg-blue-600 hover:bg-blue-700",
      urgent: false
    },
    {
      name: "Commander Pièces",
      description: "Pièces détachées originales",
      icon: "Package",
      color: "bg-emerald-600 hover:bg-emerald-700",
      urgent: false
    },
    {
      name: "Guide Diagnostic",
      description: "Résoudre soi-même",
      icon: "BookOpen",
      color: "bg-orange-600 hover:bg-orange-700",
      urgent: false
    }
  ];

  const maintenanceStats = [
    { label: "Machines actives", value: "3", icon: "Settings", color: "text-emerald-600" },
    { label: "Interventions ce mois", value: "7", icon: "Wrench", color: "text-blue-600" },
    { label: "Temps d\'arrêt évité", value: "24h", icon: "Clock", color: "text-orange-600" },
    { label: "Économies réalisées", value: "1,250€", icon: "TrendingUp", color: "text-emerald-600" }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-orange-500 bg-orange-50';
      case 'low': return 'border-l-emerald-500 bg-emerald-50';
      default: return 'border-l-slate-500 bg-slate-50';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high': return 'Urgent';
      case 'medium': return 'Modéré';
      case 'low': return 'Faible';
      default: return 'Normal';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Icon name="Shield" size={16} />
            <span className="text-sm font-medium">Maintenance Intelligente</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tableau de bord maintenance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Surveillez vos équipements, planifiez les interventions et maximisez la productivité
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {maintenanceStats?.map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat?.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat?.value}</p>
                    </div>
                    <Icon name={stat?.icon} size={24} className={stat?.color} />
                  </div>
                </div>
              ))}
            </div>

            {/* Maintenance Alerts */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Alertes & Rappels</h3>
                <Link 
                  to="/maintenance-command-center-service-hub"
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Voir tout</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>

              <div className="space-y-4">
                {maintenanceAlerts?.map((alert, index) => (
                  <div 
                    key={alert?.id} 
                    className={`border-l-4 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      getPriorityColor(alert?.priority)
                    } ${activeAlert === index ? 'shadow-md' : 'hover:shadow-sm'}`}
                    onClick={() => setActiveAlert(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          alert?.priority === 'high' ? 'bg-red-100 text-red-600' :
                          alert?.priority === 'medium'? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          <Icon name={alert?.icon} size={20} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-foreground">{alert?.machine}</h4>
                            <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                              alert?.priority === 'high' ? 'bg-red-100 text-red-800' :
                              alert?.priority === 'medium'? 'bg-orange-100 text-orange-800' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {getPriorityText(alert?.priority)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{alert?.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Icon name="Calendar" size={12} />
                              <span>Échéance: {formatDate(alert?.dueDate)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Clock" size={12} />
                              <span>{alert?.estimatedTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" iconName="ArrowRight">
                        Planifier
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} color="white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Urgence 24/7</h3>
                <p className="text-white/80 text-sm mb-4">
                  Assistance technique immédiate pour vos pannes critiques
                </p>
                <Button variant="secondary" fullWidth iconName="Phone" iconPosition="left">
                  Appeler maintenant
                </Button>
                <p className="text-xs text-white/60 mt-2">+33 1 23 45 67 89</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">Actions Rapides</h3>
              <div className="space-y-3">
                {quickActions?.filter(action => !action?.urgent)?.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-white transition-all duration-300 ${action?.color}`}
                  >
                    <Icon name={action?.icon} size={20} />
                    <div className="text-left">
                      <div className="font-medium text-sm">{action?.name}</div>
                      <div className="text-xs text-white/80">{action?.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Maintenance Tips */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">Conseil du Jour</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      Lubrification quotidienne
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Une goutte d'huile sur les points de friction prolonge la durée de vie de 40%
                    </p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" fullWidth iconName="BookOpen">
                  Plus de conseils
                </Button>
              </div>
            </div>

            {/* Service History */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">Historique Récent</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-muted-foreground">Maintenance JACK JK-8720</span>
                  <span className="text-xs text-muted-foreground ml-auto">12 jan</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Réparation BROTHER S-7300A</span>
                  <span className="text-xs text-muted-foreground ml-auto">8 jan</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Calibrage JUKI DDL-8700</span>
                  <span className="text-xs text-muted-foreground ml-auto">3 jan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceDashboard;