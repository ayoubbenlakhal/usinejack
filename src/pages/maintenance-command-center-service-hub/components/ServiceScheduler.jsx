import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceScheduler = ({ isOpen, onClose }) => {
  const [selectedMachine, setSelectedMachine] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');

  const machines = [
    { value: 'machine-1', label: 'JUKI DDL-8700 - Atelier Principal' },
    { value: 'machine-2', label: 'Brother S-7300A - Station 2' },
    { value: 'machine-3', label: 'PFAFF 1245 - Cuir Spécialisé' },
    { value: 'machine-4', label: 'Singer 191D - Maintenance' }
  ];

  const serviceTypes = [
    { value: 'maintenance', label: 'Maintenance préventive' },
    { value: 'repair', label: 'Réparation' },
    { value: 'calibration', label: 'Calibrage et réglage' },
    { value: 'cleaning', label: 'Nettoyage approfondi' },
    { value: 'inspection', label: 'Inspection technique' }
  ];

  const availableTimes = [
    { value: '08:00', label: '08:00' },
    { value: '09:00', label: '09:00' },
    { value: '10:00', label: '10:00' },
    { value: '11:00', label: '11:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
    { value: '17:00', label: '17:00' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Service scheduled:', {
      machine: selectedMachine,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      notes
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card border border-border rounded-lg shadow-elevated w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Calendar" size={16} color="white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Planifier un Service</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-micro"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <Select
            label="Machine à entretenir"
            placeholder="Sélectionnez une machine"
            options={machines}
            value={selectedMachine}
            onChange={setSelectedMachine}
            required
          />

          <Select
            label="Type de service"
            placeholder="Choisissez le type d'intervention"
            options={serviceTypes}
            value={selectedService}
            onChange={setSelectedService}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Date souhaitée"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e?.target?.value)}
              min={new Date()?.toISOString()?.split('T')?.[0]}
              required
            />

            <Select
              label="Heure préférée"
              placeholder="Choisissez un créneau"
              options={availableTimes}
              value={selectedTime}
              onChange={setSelectedTime}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Notes additionnelles
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e?.target?.value)}
              placeholder="Décrivez le problème ou les spécifications particulières..."
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={4}
            />
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={16} className="text-primary mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Informations importantes :</p>
                <ul className="space-y-1">
                  <li>• Confirmation par email sous 2h ouvrées</li>
                  <li>• Technicien certifié assigné automatiquement</li>
                  <li>• Possibilité de reprogrammer jusqu'à 24h avant</li>
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
              variant="default"
              iconName="Calendar"
              iconPosition="left"
              fullWidth
              className="sm:w-auto"
            >
              Confirmer le Rendez-vous
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceScheduler;