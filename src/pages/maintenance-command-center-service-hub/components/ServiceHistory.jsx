import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const serviceHistory = [
    {
      id: 1,
      date: "15/12/2024",
      machine: "JUKI DDL-8700",
      type: "Maintenance préventive",
      technician: "Marc Dubois",
      status: "Terminé",
      cost: 125.00,
      duration: "2h30",
      description: "Nettoyage complet, graissage, réglage tension",
      nextMaintenance: "15/03/2025",
      rating: 5,
      report: "Rapport_DDL8700_151224.pdf"
    },
    {
      id: 2,
      date: "08/12/2024",
      machine: "Brother S-7300A",
      type: "Réparation",
      technician: "Sophie Martin",
      status: "Terminé",
      cost: 89.50,
      duration: "1h45",
      description: "Remplacement ressort de tension, calibrage",
      nextMaintenance: "08/02/2025",
      rating: 4,
      report: "Rapport_S7300A_081224.pdf"
    },
    {
      id: 3,
      date: "02/12/2024",
      machine: "PFAFF 1245",
      type: "Diagnostic",
      technician: "Pierre Leroy",
      status: "En cours",
      cost: 0.00,
      duration: "En cours",
      description: "Analyse bruit anormal, vérification mécanisme",
      nextMaintenance: "-",
      rating: null,
      report: null
    },
    {
      id: 4,
      date: "28/11/2024",
      machine: "JUKI DDL-8700",
      type: "SOS Dépannage",
      technician: "Marc Dubois",
      status: "Terminé",
      cost: 156.00,
      duration: "3h15",
      description: "Intervention urgente - Bourrage mécanisme",
      nextMaintenance: "28/01/2025",
      rating: 5,
      report: "Rapport_Urgence_DDL8700_281124.pdf"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'Tous les services', count: serviceHistory?.length },
    { value: 'maintenance', label: 'Maintenance', count: serviceHistory?.filter(s => s?.type?.includes('Maintenance'))?.length },
    { value: 'repair', label: 'Réparations', count: serviceHistory?.filter(s => s?.type === 'Réparation')?.length },
    { value: 'emergency', label: 'Urgences', count: serviceHistory?.filter(s => s?.type === 'SOS Dépannage')?.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé': return 'text-success bg-success/10 border-success/20';
      case 'En cours': return 'text-warning bg-warning/10 border-warning/20';
      case 'Planifié': return 'text-primary bg-primary/10 border-primary/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getTypeIcon = (type) => {
    if (type?.includes('Maintenance')) return 'Settings';
    if (type === 'Réparation') return 'Wrench';
    if (type === 'SOS Dépannage') return 'AlertTriangle';
    if (type === 'Diagnostic') return 'Search';
    return 'Tool';
  };

  const getTypeColor = (type) => {
    if (type?.includes('Maintenance')) return 'text-primary';
    if (type === 'Réparation') return 'text-accent';
    if (type === 'SOS Dépannage') return 'text-error';
    if (type === 'Diagnostic') return 'text-secondary';
    return 'text-muted-foreground';
  };

  const filteredHistory = selectedFilter === 'all' 
    ? serviceHistory 
    : serviceHistory?.filter(service => {
        switch (selectedFilter) {
          case 'maintenance': return service?.type?.includes('Maintenance');
          case 'repair': return service?.type === 'Réparation';
          case 'emergency': return service?.type === 'SOS Dépannage';
          default: return true;
        }
      });

  const renderStars = (rating) => {
    if (!rating) return null;
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <Icon
            key={star}
            name="Star"
            size={12}
            className={star <= rating ? 'text-warning fill-current' : 'text-muted-foreground'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
            <Icon name="History" size={16} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Historique des Services</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => setSelectedFilter(option?.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-micro ${
                selectedFilter === option?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span>{option?.label}</span>
              <span className="bg-background/20 px-2 py-0.5 rounded-full text-xs">
                {option?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {filteredHistory?.map((service) => (
            <div key={service?.id} className="border border-border rounded-lg p-6 hover:shadow-industrial transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-muted ${getTypeColor(service?.type)}`}>
                      <Icon name={getTypeIcon(service?.type)} size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{service?.machine}</h3>
                          <p className="text-sm text-muted-foreground">{service?.type}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(service?.status)}`}>
                            {service?.status}
                          </div>
                          <span className="text-sm text-muted-foreground">{service?.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">{service?.description}</p>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Technicien :</span>
                          <p className="font-medium text-foreground">{service?.technician}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Durée :</span>
                          <p className="font-medium text-foreground">{service?.duration}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Coût :</span>
                          <p className="font-medium text-foreground">
                            {service?.cost > 0 ? `${service?.cost?.toFixed(2)} €` : 'Gratuit'}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Prochaine maintenance :</span>
                          <p className="font-medium text-foreground">{service?.nextMaintenance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
                  {service?.rating && (
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">Évaluation :</span>
                      {renderStars(service?.rating)}
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                    {service?.report && (
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                        className="text-xs"
                      >
                        Rapport
                      </Button>
                    )}
                    
                    {service?.status === 'Terminé' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="RotateCcw"
                        iconPosition="left"
                        className="text-xs"
                      >
                        Replanifier
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHistory?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="History" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Aucun service trouvé</h3>
            <p className="text-muted-foreground">
              Aucun service ne correspond aux critères sélectionnés.
            </p>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Affichage de {filteredHistory?.length} service(s) sur {serviceHistory?.length} au total
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" iconName="Download">
                Exporter l'historique
              </Button>
              <Button variant="outline" size="sm" iconName="Printer">
                Imprimer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHistory;