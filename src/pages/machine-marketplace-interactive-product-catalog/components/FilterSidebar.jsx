import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFiltersChange, onClearFilters, isCollapsed, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    usage: true,
    features: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const handleFilterChange = (category, value, checked) => {
    const currentValues = filters?.[category] || [];
    const newValues = checked 
      ? [...currentValues, value]
      : currentValues?.filter(v => v !== value);
    
    onFiltersChange({
      ...filters,
      [category]: newValues
    });
  };

  const filterSections = [
    {
      key: 'type',
      title: 'Type de Machine',
      icon: 'Settings',
      options: [
        { value: 'industrielle', label: 'Machine Industrielle', count: 45 },
        { value: 'surjeteuse', label: 'Surjeteuse', count: 23 },
        { value: 'brodeuse', label: 'Machine à Broder', count: 18 },
        { value: 'recouvreuse', label: 'Recouvreuse', count: 12 },
        { value: 'boutonniere', label: 'Boutonnière', count: 8 }
      ]
    },
    {
      key: 'usage',
      title: 'Usage Prévu',
      icon: 'Target',
      options: [
        { value: 'couture', label: 'Couture Générale', count: 52 },
        { value: 'broderie', label: 'Broderie', count: 28 },
        { value: 'surfilage', label: 'Surfilage', count: 34 },
        { value: 'maroquinerie', label: 'Maroquinerie', count: 16 },
        { value: 'ameublement', label: 'Ameublement', count: 21 }
      ]
    },
    {
      key: 'features',
      title: 'Fonctionnalités',
      icon: 'Zap',
      options: [
        { value: 'automatique', label: 'Coupe Automatique', count: 42 },
        { value: 'numerique', label: 'Écran Numérique', count: 38 },
        { value: 'usb', label: 'Port USB', count: 31 },
        { value: 'wifi', label: 'Connectivité WiFi', count: 24 },
        { value: 'led', label: 'Éclairage LED', count: 56 }
      ]
    }
  ];

  const activeFiltersCount = Object.values(filters)?.reduce((count, filterArray) => {
    if (Array.isArray(filterArray)) {
      return count + filterArray?.length;
    }
    return count;
  }, 0);

  if (isCollapsed) {
    return (
      <div className="w-12 bg-card border-r border-border shadow-industrial">
        <div className="p-2">
          <button
            onClick={onToggle}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-micro"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-card border-r border-border shadow-industrial">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <Icon name="Filter" size={20} />
            <span>Filtres</span>
            {activeFiltersCount > 0 && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </h2>
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-muted transition-micro"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
        </div>
        
        {activeFiltersCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            fullWidth
          >
            Effacer les filtres
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="p-4 border-b border-border">
        <Input
          type="search"
          placeholder="Rechercher une machine..."
          value={filters?.search || ''}
          onChange={(e) => onFiltersChange({ ...filters, search: e?.target?.value })}
        />
      </div>

      {/* Filter Sections */}
      <div className="flex-1 overflow-y-auto">
        {filterSections?.map((section) => (
          <div key={section?.key} className="p-4 border-b border-border">
            <button
              onClick={() => toggleSection(section?.key)}
              className="flex items-center justify-between w-full mb-3 text-left"
            >
              <h3 className="font-medium text-foreground flex items-center space-x-2">
                <Icon name={section?.icon} size={16} />
                <span>{section?.title}</span>
              </h3>
              <Icon 
                name={expandedSections?.[section?.key] ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                className="text-muted-foreground"
              />
            </button>
            
            {expandedSections?.[section?.key] && (
              <div className="space-y-2">
                {section?.options?.map((option) => (
                  <div key={option?.value} className="flex items-center justify-between">
                    <Checkbox
                      label={option?.label}
                      checked={(filters?.[section?.key] || [])?.includes(option?.value)}
                      onChange={(e) => handleFilterChange(section?.key, option?.value, e?.target?.checked)}
                    />
                    <span className="text-xs text-muted-foreground">
                      {option?.count}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
