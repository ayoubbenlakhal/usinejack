import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import MaintenanceHeader from './components/MaintenanceHeader';
import MachineHealthCard from './components/MachineHealthCard';
import ServiceScheduler from './components/ServiceScheduler';
import DiagnosticTools from './components/DiagnosticTools';
import PartsOrdering from './components/PartsOrdering';
import EmergencySupport from './components/EmergencySupport';
import ServiceHistory from './components/ServiceHistory';

const MaintenanceCommandCenter = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  // Mock data for machines
  const machines = [
    {
      id: 1,
      name: "JUKI DDL-8700",
      model: "Piqueuse Plate Industrielle",
      status: "excellent",
      hours: 12450,
      lastMaintenance: "15/12/2024",
      nextMaintenance: "15/03/2025",
      alerts: []
    },
    {
      id: 2,
      name: "Brother S-7300A",
      model: "Surjeteuse 5 Fils",
      status: "good",
      hours: 8920,
      lastMaintenance: "08/12/2024",
      nextMaintenance: "08/02/2025",
      alerts: []
    },
    {
      id: 3,
      name: "PFAFF 1245",
      model: "Cuir et Matériaux Lourds",
      status: "warning",
      hours: 15680,
      lastMaintenance: "22/11/2024",
      nextMaintenance: "22/01/2025",
      alerts: ["Tension irrégulière", "Bruit anormal"]
    },
    {
      id: 4,
      name: "Singer 191D",
      model: "Point Droit Robuste",
      status: "critical",
      hours: 18750,
      lastMaintenance: "05/11/2024",
      nextMaintenance: "Maintenance urgente requise",
      alerts: ["Surchauffe moteur", "Vibrations excessives", "Huile à changer"]
    }
  ];

  const handleEmergencyClick = () => {
    setIsEmergencyOpen(true);
  };

  const handleScheduleClick = () => {
    setIsSchedulerOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <MaintenanceHeader 
          onEmergencyClick={handleEmergencyClick}
          onScheduleClick={handleScheduleClick}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Machine Health Overview */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">État des Machines</h2>
                <p className="text-muted-foreground mt-1">
                  Surveillance en temps réel de vos équipements
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Excellent/Bon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-muted-foreground">Attention</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <span className="text-muted-foreground">Critique</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {machines?.map((machine) => (
                <MachineHealthCard key={machine?.id} machine={machine} />
              ))}
            </div>
          </section>

          {/* Diagnostic Tools */}
          <section className="mb-8">
            <DiagnosticTools />
          </section>

          {/* Parts Ordering */}
          <section className="mb-8">
            <PartsOrdering />
          </section>

          {/* Service History */}
          <section className="mb-8">
            <ServiceHistory />
          </section>

          {/* Quick Stats */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-success">98%</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Disponibilité</h3>
                    <p className="text-sm text-muted-foreground">Temps de fonctionnement</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">24</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Services ce mois</h3>
                    <p className="text-sm text-muted-foreground">Interventions réalisées</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-accent">2.5h</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Temps moyen</h3>
                    <p className="text-sm text-muted-foreground">Durée d'intervention</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Modals */}
      <ServiceScheduler 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
      />
      <EmergencySupport 
        isOpen={isEmergencyOpen} 
        onClose={() => setIsEmergencyOpen(false)} 
      />
    </div>
  );
};

export default MaintenanceCommandCenter;