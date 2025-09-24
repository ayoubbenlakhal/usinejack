import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const TechnicalLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMachine, setSelectedMachine] = useState('all');

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'manuals', label: 'Manuels d\'utilisation' },
    { value: 'maintenance', label: 'Guides de maintenance' },
    { value: 'specifications', label: 'Fiches techniques' },
    { value: 'troubleshooting', label: 'Dépannage' },
    { value: 'safety', label: 'Sécurité' },
    { value: 'parts', label: 'Catalogues de pièces' }
  ];

  const machineTypes = [
    { value: 'all', label: 'Tous les modèles' },
    { value: 'industrial-straight', label: 'Machine Droite Industrielle' },
    { value: 'overlock', label: 'Surjeteuse' },
    { value: 'buttonhole', label: 'Boutonnière' },
    { value: 'embroidery', label: 'Broderie' },
    { value: 'cutting', label: 'Découpe' }
  ];

  const documents = [
    {
      id: 1,
      title: "Manuel d\'Utilisation - Machine Droite UJ-8700",
      category: 'manuals',
      machineType: 'industrial-straight',
      fileType: 'PDF',
      fileSize: '15.2 MB',
      pages: 156,
      language: 'Français',
      version: '2.1',
      lastUpdated: '2025-09-10',
      downloads: 2847,
      rating: 4.8,
      description: `Manuel complet d'utilisation de la machine droite industrielle UJ-8700. Couvre l'installation, la configuration, l'utilisation quotidienne et les procédures de maintenance de base.`,
      topics: ['Installation', 'Configuration', 'Utilisation', 'Maintenance'],
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: "Guide Maintenance Préventive - Surjeteuse UJ-5400",
      category: 'maintenance',machineType: 'overlock',fileType: 'PDF',fileSize: '8.7 MB',pages: 89,language: 'Français',version: '1.5',lastUpdated: '2025-09-08',
      downloads: 1923,
      rating: 4.9,
      description: `Guide détaillé pour la maintenance préventive de la surjeteuse UJ-5400. Inclut les calendriers de maintenance, les procédures de lubrification et les contrôles qualité.`,
      topics: ['Lubrification', 'Réglages', 'Contrôles', 'Planning'],
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=150&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: "Fiche Technique - Boutonnière Automatique UJ-1200",
      category: 'specifications',machineType: 'buttonhole',fileType: 'PDF',fileSize: '3.1 MB',pages: 24,language: 'Français',version: '1.0',lastUpdated: '2025-09-15',
      downloads: 756,
      rating: 4.7,
      description: `Spécifications techniques complètes de la machine à boutonnière automatique UJ-1200. Dimensions, capacités, consommation électrique et performances.`,
      topics: ['Dimensions', 'Performances', 'Électrique', 'Capacités'],
      thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=150&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: "Diagnostic Pannes Courantes - Machines Industrielles",
      category: 'troubleshooting',machineType: 'all',fileType: 'PDF',fileSize: '12.4 MB',pages: 134,language: 'Français',version: '3.2',lastUpdated: '2025-09-12',
      downloads: 3421,
      rating: 4.9,
      description: `Guide complet de diagnostic pour les pannes les plus courantes sur les machines industrielles. Symptômes, causes probables et solutions étape par étape.`,
      topics: ['Diagnostic', 'Pannes', 'Solutions', 'Prévention'],
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop',
      featured: true
    },
    {
      id: 5,
      title: "Protocoles Sécurité Atelier - Guide Complet",
      category: 'safety',machineType: 'all',fileType: 'PDF',fileSize: '6.8 MB',pages: 67,language: 'Français',version: '2.0',lastUpdated: '2025-09-05',
      downloads: 1654,
      rating: 4.8,
      description: `Protocoles de sécurité essentiels pour l'utilisation des machines industrielles. Équipements de protection, procédures d'urgence et bonnes pratiques.`,
      topics: ['EPI', 'Procédures', 'Urgence', 'Formation'],
      thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=150&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: "Catalogue Pièces Détachées - Série UJ-8000",
      category: 'parts',machineType: 'industrial-straight',fileType: 'PDF',fileSize: '22.1 MB',pages: 298,language: 'Français',version: '4.1',lastUpdated: '2025-09-14',
      downloads: 987,
      rating: 4.6,
      description: `Catalogue complet des pièces détachées pour la série UJ-8000. Références, descriptions, prix et procédures de commande.`,
      topics: ['Pièces', 'Références', 'Commande', 'Installation'],
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=150&fit=crop',
      featured: false
    }
  ];

  const filteredDocuments = documents?.filter(doc => {
    const matchesSearch = doc?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         doc?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         doc?.topics?.some(topic => topic?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || doc?.category === selectedCategory;
    const matchesMachine = selectedMachine === 'all' || doc?.machineType === selectedMachine || doc?.machineType === 'all';
    
    return matchesSearch && matchesCategory && matchesMachine;
  });

  const featuredDocuments = documents?.filter(doc => doc?.featured);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'manuals': return 'BookOpen';
      case 'maintenance': return 'Wrench';
      case 'specifications': return 'FileText';
      case 'troubleshooting': return 'AlertTriangle';
      case 'safety': return 'Shield';
      case 'parts': return 'Package';
      default: return 'File';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'manuals': return 'text-primary bg-primary/10';
      case 'maintenance': return 'text-warning bg-warning/10';
      case 'specifications': return 'text-success bg-success/10';
      case 'troubleshooting': return 'text-error bg-error/10';
      case 'safety': return 'text-accent bg-accent/10';
      case 'parts': return 'text-secondary bg-secondary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Bibliothèque Technique</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Accédez à tous les manuels, guides techniques et documentation de vos machines Usine Jack. 
          Téléchargez, consultez et gardez vos références à portée de main.
        </p>
      </div>
      {/* Search and Filters */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            type="search"
            placeholder="Rechercher dans la bibliothèque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="md:col-span-1"
          />
          
          <Select
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Catégorie"
          />
          
          <Select
            options={machineTypes}
            value={selectedMachine}
            onChange={setSelectedMachine}
            placeholder="Type de machine"
          />
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {filteredDocuments?.length} document{filteredDocuments?.length > 1 ? 's' : ''} trouvé{filteredDocuments?.length > 1 ? 's' : ''}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" iconName="Filter">
              Filtres Avancés
            </Button>
            <Button variant="ghost" size="sm" iconName="Download">
              Télécharger Sélection
            </Button>
          </div>
        </div>
      </div>
      {/* Featured Documents */}
      {featuredDocuments?.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Documents Recommandés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredDocuments?.map((doc) => (
              <div key={doc?.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-16 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon name={getCategoryIcon(doc?.category)} size={24} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {doc?.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${getCategoryColor(doc?.category)}`}>
                        <Icon name={getCategoryIcon(doc?.category)} size={12} className="inline mr-1" />
                        {categories?.find(c => c?.value === doc?.category)?.label}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {doc?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="FileText" size={12} />
                          <span>{doc?.pages} pages</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Download" size={12} />
                          <span>{doc?.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} className="text-warning fill-current" />
                          <span>{doc?.rating}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" iconName="Download">
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* All Documents */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Tous les Documents</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredDocuments?.map((doc) => (
            <div key={doc?.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`p-1.5 rounded ${getCategoryColor(doc?.category)}`}>
                      <Icon name={getCategoryIcon(doc?.category)} size={16} />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {doc?.fileType} • {doc?.fileSize}
                    </div>
                  </div>
                  
                  {doc?.featured && (
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                  )}
                </div>
                
                <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {doc?.title}
                </h4>
                
                <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                  {doc?.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {doc?.topics?.slice(0, 3)?.map((topic, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>v{doc?.version}</span>
                  <span>{new Date(doc.lastUpdated)?.toLocaleDateString('fr-FR')}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={12} />
                      <span>{doc?.pages}p</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={12} />
                      <span>{doc?.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="xs" iconName="Eye">
                      Aperçu
                    </Button>
                    <Button variant="outline" size="xs" iconName="Download">
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Access */}
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">Accès Rapide</h3>
          <p className="text-sm text-muted-foreground">
            Trouvez rapidement ce que vous cherchez
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories?.slice(1)?.map((category) => (
            <button
              key={category?.value}
              onClick={() => setSelectedCategory(category?.value)}
              className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-card hover:shadow-sm transition-all group"
            >
              <div className={`p-2 rounded-lg ${getCategoryColor(category?.value)} group-hover:scale-110 transition-transform`}>
                <Icon name={getCategoryIcon(category?.value)} size={20} />
              </div>
              <span className="text-xs font-medium text-center line-clamp-2">
                {category?.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalLibrary;