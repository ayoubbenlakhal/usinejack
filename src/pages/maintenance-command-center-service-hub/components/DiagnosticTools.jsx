import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DiagnosticTools = () => {
  const [activeTab, setActiveTab] = useState('symptoms');
  const [searchQuery, setSearchQuery] = useState('');

  const diagnosticTabs = [
    { id: 'symptoms', label: 'Symptômes', icon: 'Stethoscope' },
    { id: 'errors', label: 'Codes Erreur', icon: 'AlertCircle' },
    { id: 'guides', label: 'Guides Vidéo', icon: 'Play' }
  ];

  const commonSymptoms = [
    {
      id: 1,
      title: "Machine qui fait du bruit anormal",
      description: "Bruits de grincement ou claquements",
      solutions: 3,
      urgency: "medium"
    },
    {
      id: 2,
      title: "Points de couture irréguliers",
      description: "Tension inégale ou points sautés",
      solutions: 5,
      urgency: "low"
    },
    {
      id: 3,
      title: "Aiguille qui casse fréquemment",
      description: "Rupture d\'aiguille répétée",
      solutions: 4,
      urgency: "high"
    },
    {
      id: 4,
      title: "Fil qui se casse souvent",
      description: "Rupture de fil supérieur ou inférieur",
      solutions: 6,
      urgency: "medium"
    }
  ];

  const errorCodes = [
    {
      code: "E01",
      description: "Problème de tension du fil",
      severity: "warning",
      quickFix: "Vérifier le réglage de tension"
    },
    {
      code: "E02",
      description: "Bourrage dans le mécanisme",
      severity: "critical",
      quickFix: "Arrêter immédiatement la machine"
    },
    {
      code: "E03",
      description: "Capteur de position défaillant",
      severity: "medium",
      quickFix: "Nettoyer les capteurs"
    },
    {
      code: "E04",
      description: "Surchauffe du moteur",
      severity: "critical",
      quickFix: "Laisser refroidir 30 minutes"
    }
  ];

  const videoGuides = [
    {
      id: 1,
      title: "Maintenance quotidienne - 5 minutes",
      duration: "5:23",
      views: "12.4k",
      thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Réglage de la tension du fil",
      duration: "8:15",
      views: "8.7k",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Changement d\'aiguille et entretien",
      duration: "6:42",
      views: "15.2k",
      thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Diagnostic des bruits anormaux",
      duration: "12:30",
      views: "6.1k",
      thumbnail: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=300&h=200&fit=crop"
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-error bg-error/10 border-error/20';
      case 'warning': return 'text-warning bg-warning/10 border-warning/20';
      case 'medium': return 'text-primary bg-primary/10 border-primary/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Icon name="Search" size={16} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Outils de Diagnostic</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {diagnosticTabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-micro ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <Input
          type="search"
          placeholder="Rechercher un problème, code erreur ou guide..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="mb-6"
        />

        {activeTab === 'symptoms' && (
          <div className="space-y-4">
            {commonSymptoms?.map((symptom) => (
              <div key={symptom?.id} className="border border-border rounded-lg p-4 hover:shadow-industrial transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground">{symptom?.title}</h3>
                  <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getUrgencyColor(symptom?.urgency)}`}>
                    {symptom?.urgency === 'high' ? 'Urgent' : symptom?.urgency === 'medium' ? 'Modéré' : 'Faible'}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{symptom?.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {symptom?.solutions} solution(s) disponible(s)
                  </span>
                  <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                    Voir Solutions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'errors' && (
          <div className="space-y-4">
            {errorCodes?.map((error, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-industrial transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-lg font-bold text-primary">{error?.code}</span>
                    <div>
                      <h3 className="font-medium text-foreground">{error?.description}</h3>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getSeverityColor(error?.severity)}`}>
                    {error?.severity === 'critical' ? 'Critique' : error?.severity === 'warning' ? 'Attention' : 'Modéré'}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-md p-3 mt-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Lightbulb" size={14} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">Solution rapide :</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{error?.quickFix}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videoGuides?.map((video) => (
              <div key={video?.id} className="border border-border rounded-lg overflow-hidden hover:shadow-industrial transition-all duration-300">
                <div className="relative">
                  <img
                    src={video?.thumbnail}
                    alt={video?.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Play" size={20} color="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video?.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-2">{video?.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video?.views} vues</span>
                    <Button variant="ghost" size="sm" iconName="ExternalLink">
                      Regarder
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticTools;