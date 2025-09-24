import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProjectGallery = ({ searchQuery }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filters = [
    { id: 'all', name: 'Tous les Projets', count: 892 },
    { id: 'recent', name: 'Récents', count: 156 },
    { id: 'popular', name: 'Populaires', count: 234 },
    { id: 'featured', name: 'Mis en Avant', count: 45 },
    { id: 'clothing', name: 'Vêtements', count: 345 },
    { id: 'accessories', name: 'Accessoires', count: 178 },
    { id: 'home', name: 'Maison', count: 123 },
    { id: 'industrial', name: 'Industriel', count: 67 }
  ];

  const projects = [
    {
      id: 1,
      title: "Veste en cuir sur mesure - Technique de surpiqûre",
      description: "Création d\'une veste en cuir avec surpiqûres décoratives utilisant une machine Brother DB2-B755. Détails du processus et astuces pour travailler le cuir épais.",
      author: {
        name: "Marie Dubois",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        level: "Expert"
      },
      images: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800"
      ],
      category: "Vêtements",
      difficulty: "Avancé",
      timeSpent: "24 heures",
      machine: "Brother DB2-B755",
      stats: {
        likes: 234,
        comments: 45,
        saves: 89,
        views: 2341
      },
      tags: ["Cuir", "Surpiqûre", "Veste", "Brother"],
      createdAt: "2024-09-14",
      isFeatured: true
    },
    {
      id: 2,
      title: "Collection de sacs en toile recyclée",
      description: "Série de sacs créés à partir de toiles recyclées. Techniques de renforcement et finitions professionnelles avec machine industrielle Juki.",
      author: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        level: "Professionnel"
      },
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800"
      ],
      category: "Accessoires",
      difficulty: "Intermédiaire",
      timeSpent: "16 heures",
      machine: "Juki DDL-8700",
      stats: {
        likes: 189,
        comments: 32,
        saves: 67,
        views: 1876
      },
      tags: ["Recyclage", "Sacs", "Toile", "Juki"],
      createdAt: "2024-09-12",
      isFeatured: false
    },
    {
      id: 3,
      title: "Rideaux industriels pour atelier",
      description: "Fabrication de rideaux résistants pour séparer les zones de travail. Utilisation de tissus techniques et coutures renforcées.",
      author: {
        name: "Jean-Pierre Martin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        level: "Maître Artisan"
      },
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800"
      ],
      category: "Industriel",
      difficulty: "Intermédiaire",
      timeSpent: "8 heures",
      machine: "Singer 191D-30",
      stats: {
        likes: 156,
        comments: 28,
        saves: 45,
        views: 1234
      },
      tags: ["Rideaux", "Industriel", "Atelier", "Singer"],
      createdAt: "2024-09-10",
      isFeatured: true
    },
    {
      id: 4,
      title: "Coussins décoratifs - Broderie machine",
      description: "Série de coussins avec broderies automatisées. Combinaison de techniques traditionnelles et modernes pour un rendu unique.",
      author: {
        name: "Emma Rousseau",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        level: "Débutant"
      },
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800"
      ],
      category: "Maison",
      difficulty: "Débutant",
      timeSpent: "12 heures",
      machine: "Brother PR-1050X",
      stats: {
        likes: 98,
        comments: 15,
        saves: 34,
        views: 876
      },
      tags: ["Coussins", "Broderie", "Décoration", "Brother"],
      createdAt: "2024-09-08",
      isFeatured: false
    }
  ];

  const filteredProjects = projects?.filter(project => {
    const matchesSearch = searchQuery === '' || 
      project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      project?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'recent' && new Date(project.createdAt) > new Date('2024-09-12')) ||
      (selectedFilter === 'popular' && project?.stats?.likes > 150) ||
      (selectedFilter === 'featured' && project?.isFeatured) ||
      project?.category?.toLowerCase()?.includes(selectedFilter);
    
    return matchesSearch && matchesFilter;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Débutant': return 'text-green-600 bg-green-50';
      case 'Intermédiaire': return 'text-yellow-600 bg-yellow-50';
      case 'Avancé': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Galerie de Projets</h2>
          <p className="text-muted-foreground">
            {filteredProjects?.length} projet{filteredProjects?.length > 1 ? 's' : ''} trouvé{filteredProjects?.length > 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-micro ${
                viewMode === 'grid' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-micro ${
                viewMode === 'list' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
          
          <Button variant="default" iconName="Upload" size="sm">
            Partager un Projet
          </Button>
        </div>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setSelectedFilter(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-micro ${
              selectedFilter === filter?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <span>{filter?.name}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              selectedFilter === filter?.id
                ? 'bg-primary-foreground text-primary'
                : 'bg-background text-muted-foreground'
            }`}>
              {filter?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Projects Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
        {filteredProjects?.map((project) => (
          <div
            key={project?.id}
            className={`bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-meaningful ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            {/* Project Images */}
            <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'aspect-video'} overflow-hidden`}>
              <Image
                src={project?.images?.[0]}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              {project?.isFeatured && (
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    Mis en Avant
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 flex space-x-1">
                {project?.images?.length > 1 && (
                  <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                    +{project?.images?.length - 1}
                  </span>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project?.difficulty)}`}>
                    {project?.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    {project?.category}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                {project?.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project?.description}
              </p>

              {/* Project Details */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{project?.timeSpent}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Settings" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{project?.machine}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project?.tags?.slice(0, 3)?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
                {project?.tags?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                    +{project?.tags?.length - 3}
                  </span>
                )}
              </div>

              {/* Author & Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Image
                    src={project?.author?.avatar}
                    alt={project?.author?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {project?.author?.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project?.author?.level}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={14} />
                    <span>{project?.stats?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageSquare" size={14} />
                    <span>{project?.stats?.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Bookmark" size={14} />
                    <span>{project?.stats?.saves}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" iconName="ChevronDown">
          Charger Plus de Projets
        </Button>
      </div>
    </div>
  );
};

export default ProjectGallery;