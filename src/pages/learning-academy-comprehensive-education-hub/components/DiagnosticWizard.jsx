import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const DiagnosticWizard = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [machineType, setMachineType] = useState('');

  const diagnosticSteps = [
    {
      id: 'machine-type',
      title: 'Type de Machine',
      description: 'Sélectionnez votre modèle de machine',
      type: 'selection',
      options: [
        { id: 'industrial-straight', name: 'Machine Droite Industrielle', icon: 'Settings' },
        { id: 'overlock', name: 'Surjeteuse', icon: 'Scissors' },
        { id: 'buttonhole', name: 'Boutonnière', icon: 'Circle' },
        { id: 'embroidery', name: 'Broderie', icon: 'Palette' }
      ]
    },
    {
      id: 'symptoms',
      title: 'Symptômes Observés',
      description: 'Cochez tous les problèmes que vous rencontrez',
      type: 'multiple-choice',
      options: [
        { id: 'thread-break', name: 'Cassure de fil', icon: 'AlertTriangle' },
        { id: 'skip-stitch', name: 'Points sautés', icon: 'Minus' },
        { id: 'noise', name: 'Bruit anormal', icon: 'Volume2' },
        { id: 'tension', name: 'Problème de tension', icon: 'Zap' },
        { id: 'jam', name: 'Bourrage', icon: 'Lock' },
        { id: 'speed', name: 'Vitesse irrégulière', icon: 'Gauge' }
      ]
    },
    {
      id: 'diagnosis',
      title: 'Diagnostic',
      description: 'Voici les solutions recommandées',
      type: 'results'
    }
  ];

  const getDiagnosisResults = () => {
    const results = [];
    
    if (selectedSymptoms?.includes('thread-break')) {
      results?.push({
        problem: 'Cassure de fil',
        solutions: [
          'Vérifiez la tension du fil supérieur',
          'Nettoyez le chemin du fil',
          'Remplacez l\'aiguille si elle est émoussée'
        ],
        urgency: 'medium',
        videoGuide: 'thread-tension-guide',
        parts: ['Aiguilles universelles', 'Kit de nettoyage']
      });
    }
    
    if (selectedSymptoms?.includes('noise')) {
      results?.push({
        problem: 'Bruit anormal',
        solutions: [
          'Lubrifiez les pièces mobiles',
          'Vérifiez l\'alignement des pièces',
          'Nettoyez les griffes d\'entraînement'
        ],
        urgency: 'high',
        videoGuide: 'maintenance-lubrication',
        parts: ['Huile de machine', 'Kit d\'outils']
      });
    }
    
    return results;
  };

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev?.includes(symptomId) 
        ? prev?.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleNext = () => {
    if (currentStep < diagnosticSteps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    const step = diagnosticSteps?.[currentStep];
    
    switch (step?.type) {
      case 'selection':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {step?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => setMachineType(option?.id)}
                className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  machineType === option?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    machineType === option?.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <Icon name={option?.icon} size={20} />
                  </div>
                  <span className="font-medium">{option?.name}</span>
                </div>
              </button>
            ))}
          </div>
        );
        
      case 'multiple-choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {step?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => handleSymptomToggle(option?.id)}
                className={`p-3 border rounded-lg text-left transition-all hover:shadow-sm ${
                  selectedSymptoms?.includes(option?.id)
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-1.5 rounded ${
                    selectedSymptoms?.includes(option?.id) ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <Icon name={option?.icon} size={16} />
                  </div>
                  <span className="text-sm font-medium">{option?.name}</span>
                  {selectedSymptoms?.includes(option?.id) && (
                    <Icon name="Check" size={16} className="text-primary ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        );
        
      case 'results':
        const results = getDiagnosisResults();
        return (
          <div className="space-y-4">
            {results?.map((result, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{result?.problem}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    result?.urgency === 'high' ? 'bg-error/10 text-error' :
                    result?.urgency === 'medium'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                  }`}>
                    {result?.urgency === 'high' ? 'Urgent' :
                     result?.urgency === 'medium' ? 'Modéré' : 'Faible'}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {result?.solutions?.map((solution, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{solution}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" iconName="Play">
                    Guide Vidéo
                  </Button>
                  <Button variant="outline" size="sm" iconName="ShoppingCart">
                    Commander Pièces
                  </Button>
                  <Button variant="outline" size="sm" iconName="Calendar">
                    Planifier Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Diagnostic Intelligent</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Étape {currentStep + 1} sur {diagnosticSteps?.length}
            </p>
          </div>
          <Button variant="ghost" size="sm" iconName="X" onClick={onClose} />
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              {diagnosticSteps?.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full ${
                    index <= currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {diagnosticSteps?.[currentStep]?.title}
            </h3>
            <p className="text-muted-foreground">
              {diagnosticSteps?.[currentStep]?.description}
            </p>
          </div>
          
          <div className="mb-6">
            {renderStepContent()}
          </div>
          
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Précédent
            </Button>
            
            {currentStep < diagnosticSteps?.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (currentStep === 0 && !machineType) ||
                  (currentStep === 1 && selectedSymptoms?.length === 0)
                }
                iconName="ChevronRight"
                iconPosition="right"
              >
                Suivant
              </Button>
            ) : (
              <Button onClick={onClose} iconName="Check">
                Terminer
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticWizard;