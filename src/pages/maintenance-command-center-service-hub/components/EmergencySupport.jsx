import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EmergencySupport = ({ isOpen, onClose }) => {
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [machineModel, setMachineModel] = useState('');

  const urgencyLevels = [
    { value: 'critical', label: 'Critique - Production arrêtée' },
    { value: 'high', label: 'Urgent - Impact majeur' },
    { value: 'medium', label: 'Modéré - Peut attendre quelques heures' }
  ];

  const contactMethods = [
    { value: 'phone', label: 'Appel téléphonique immédiat' },
    { value: 'video', label: 'Consultation vidéo' },
    { value: 'chat', label: 'Chat en direct' },
    { value: 'onsite', label: 'Intervention sur site' }
  ];

  const machines = [
    { value: 'juki-ddl-8700', label: 'JUKI DDL-8700 - Atelier Principal' },
    { value: 'brother-s-7300a', label: 'Brother S-7300A - Station 2' },
    { value: 'pfaff-1245', label: 'PFAFF 1245 - Cuir Spécialisé' },
    { value: 'singer-191d', label: 'Singer 191D - Maintenance' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle emergency support request
    console.log('Emergency support requested:', {
      urgency: urgencyLevel,
      description: problemDescription,
      contact: contactMethod,
      machine: machineModel
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card border border-border rounded-lg shadow-elevated w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border bg-error/5">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-error rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={16} color="white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">SOS Dépannage d'Urgence</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-micro"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-error/10 border border-error/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Clock" size={16} className="text-error mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-error mb-1">Service d'urgence 24/7</p>
                <p className="text-muted-foreground">
                  Nos techniciens sont disponibles pour vous aider immédiatement. 
                  Temps de réponse garanti selon le niveau d'urgence.
                </p>
              </div>
            </div>
          </div>

          <Select
            label="Niveau d'urgence"
            placeholder="Sélectionnez le niveau de priorité"
            options={urgencyLevels}
            value={urgencyLevel}
            onChange={setUrgencyLevel}
            required
          />

          <Select
            label="Machine concernée"
            placeholder="Choisissez la machine en panne"
            options={machines}
            value={machineModel}
            onChange={setMachineModel}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Description du problème *
            </label>
            <textarea
              value={problemDescription}
              onChange={(e) => setProblemDescription(e?.target?.value)}
              placeholder="Décrivez précisément le problème : bruits, codes d'erreur, symptômes observés..."
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={4}
              required
            />
          </div>

          <Select
            label="Mode de contact préféré"
            placeholder="Comment souhaitez-vous être contacté ?"
            options={contactMethods}
            value={contactMethod}
            onChange={setContactMethod}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Numéro de téléphone"
              type="tel"
              placeholder="+33 1 23 45 67 89"
              required
            />
            <Input
              label="Email de contact"
              type="email"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-foreground mb-3 flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Temps de réponse estimé</span>
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-error font-medium">Critique :</span>
                <span className="text-muted-foreground">5-15 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warning font-medium">Urgent :</span>
                <span className="text-muted-foreground">15-30 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary font-medium">Modéré :</span>
                <span className="text-muted-foreground">1-2 heures</span>
              </div>
            </div>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={16} className="text-success mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-success mb-1">Garantie de service</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Techniciens certifiés disponibles 24/7</li>
                  <li>• Diagnostic gratuit pour les urgences</li>
                  <li>• Pièces de rechange en stock permanent</li>
                  <li>• Intervention sur site possible sous 4h</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              fullWidth
              className="sm:w-auto"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="destructive"
              iconName="AlertTriangle"
              iconPosition="left"
              fullWidth
              className="sm:w-auto"
            >
              Demander une Intervention d'Urgence
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencySupport;