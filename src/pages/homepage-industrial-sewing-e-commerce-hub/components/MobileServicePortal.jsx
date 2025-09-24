import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MobileServicePortal = () => {
  const [activeService, setActiveService] = useState('manuals');

  const quickServices = [
    {
      id: 'manuals',
      name: 'Manuels',
      icon: 'BookOpen',
      color: 'bg-blue-600',
      description: 'Accès rapide aux documentations'
    },
    {
      id: 'troubleshoot',
      name: 'Dépannage',
      icon: 'AlertTriangle',
      color: 'bg-red-600',
      description: 'Diagnostic et solutions'
    },
    {
      id: 'support',
      name: 'Support',
      icon: 'Phone',
      color: 'bg-emerald-600',
      description: 'Assistance immédiate'
    },
    {
      id: 'parts',
      name: 'Pièces',
      icon: 'Package',
      color: 'bg-orange-600',
      description: 'Commander des pièces'
    }
  ];

  const emergencyActions = [
    {
      title: "Arrêt d\'urgence activé",
      description: "Machine bloquée en sécurité",
      action: "Diagnostic rapide",
      icon: "AlertCircle",
      priority: "high"
    },
    {
      title: "Fil cassé répétitif",
      description: "Problème de tension détecté",
      action: "Guide de réglage",
      icon: "Zap",
      priority: "medium"
    },
    {
      title: "Bruit anormal",
      description: "Vérification recommandée",
      action: "Checklist audio",
      icon: "Volume2",
      priority: "low"
    }
  ];

  const quickManuals = [
    {
      machine: "JACK JK-8720",
      type: "Manuel utilisateur",
      size: "2.4 MB",
      language: "FR",
      lastUpdated: "Dec 2024"
    },
    {
      machine: "BROTHER S-7300A",
      type: "Guide maintenance",
      size: "1.8 MB",
      language: "FR",
      lastUpdated: "Nov 2024"
    },
    {
      machine: "JUKI DDL-8700",
      type: "Schéma technique",
      size: "3.1 MB",
      language: "FR",
      lastUpdated: "Jan 2025"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-orange-500 bg-orange-50';
      case 'low': return 'border-l-yellow-500 bg-yellow-50';
      default: return 'border-l-slate-500 bg-slate-50';
    }
  };

  const renderServiceContent = () => {
    switch (activeService) {
      case 'manuals':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-4">Manuels Disponibles</h3>
            {quickManuals?.map((manual, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{manual?.machine}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{manual?.type}</p>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>{manual?.size}</span>
                      <span>{manual?.language}</span>
                      <span>Mis à jour: {manual?.lastUpdated}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" iconName="Download">
                    PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'troubleshoot':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-4">Problèmes Fréquents</h3>
            {emergencyActions?.map((action, index) => (
              <div key={index} className={`border-l-4 rounded-lg p-4 ${getPriorityColor(action?.priority)}`}>
                <div className="flex items-start space-x-3">
                  <Icon name={action?.icon} size={20} className="text-muted-foreground mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{action?.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{action?.description}</p>
                    <Button variant="outline" size="sm" iconName="ArrowRight">
                      {action?.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'support':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-4">Contacter le Support</h3>
            <div className="grid gap-3">
              <Button variant="default" fullWidth iconName="Phone" iconPosition="left" className="bg-red-600 hover:bg-red-700">
                Urgence 24/7
              </Button>
              <Button variant="outline" fullWidth iconName="MessageCircle" iconPosition="left">
                Chat en ligne
              </Button>
              <Button variant="outline" fullWidth iconName="Mail" iconPosition="left">
                Email support
              </Button>
              <Button variant="outline" fullWidth iconName="Calendar" iconPosition="left">
                Planifier intervention
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-foreground text-sm mb-2">Horaires Support</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lun - Ven:</span>
                  <span>8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span>9h00 - 12h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Urgences:</span>
                  <span className="text-red-600 font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'parts':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-4">Pièces Détachées</h3>
            <div className="space-y-3">
              <Button variant="outline" fullWidth iconName="Search" iconPosition="left">
                Rechercher par référence
              </Button>
              <Button variant="outline" fullWidth iconName="Camera" iconPosition="left">
                Scanner code-barres
              </Button>
              <Button variant="outline" fullWidth iconName="Settings" iconPosition="left">
                Parcourir par machine
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground text-sm mb-3">Commandes Récentes</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Aiguille 16/100</span>
                  <span className="text-emerald-600 font-medium">Livrée</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Canette métal</span>
                  <span className="text-orange-600 font-medium">En transit</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Courroie moteur</span>
                  <span className="text-blue-600 font-medium">Préparée</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="lg:hidden py-12 bg-muted/30">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1 mb-3">
            <Icon name="Smartphone" size={14} />
            <span className="text-sm font-medium">Service Mobile</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Assistance à portée de main
          </h2>
          <p className="text-muted-foreground text-sm">
            Accès rapide aux outils essentiels depuis votre atelier
          </p>
        </div>

        {/* Quick Service Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {quickServices?.map((service) => (
            <button
              key={service?.id}
              onClick={() => setActiveService(service?.id)}
              className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                activeService === service?.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={service?.icon} size={20} className="mb-1" />
              <span className="text-xs font-medium">{service?.name}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          {renderServiceContent()}
        </div>

        {/* Emergency Button */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 text-white text-center">
          <Icon name="AlertTriangle" size={24} className="mx-auto mb-2" />
          <h3 className="font-bold mb-1">Panne Critique ?</h3>
          <p className="text-xs text-white/80 mb-3">
            Assistance d'urgence 24h/24
          </p>
          <Button variant="secondary" fullWidth iconName="Phone" iconPosition="left">
            Appeler Maintenant
          </Button>
          <p className="text-xs text-white/60 mt-2">+33 1 23 45 67 89</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-foreground">&lt; 15min</div>
            <div className="text-xs text-muted-foreground">Temps réponse</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-foreground">98%</div>
            <div className="text-xs text-muted-foreground">Résolution</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-foreground">24/7</div>
            <div className="text-xs text-muted-foreground">Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileServicePortal;