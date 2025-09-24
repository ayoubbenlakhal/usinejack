import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunitySpotlight = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projectCategories = [
    { id: 'all', name: 'Tous les projets', icon: 'Grid3X3' },
    { id: 'fashion', name: 'Mode', icon: 'Shirt' },
    { id: 'industrial', name: 'Industriel', icon: 'Factory' },
    { id: 'embroidery', name: 'Broderie', icon: 'Sparkles' },
    { id: 'repair', name: 'Réparation', icon: 'Wrench' }
  ];

  const communityProjects = [
    {
      id: 1,
      title: "Collection Capsule Éco-Responsable",
      author: "Atelier Verde",
      location: "Paris, France",
      category: "fashion",
      description: "Création d\'une ligne de vêtements durables avec nos machines JACK JK-8720. Matériaux recyclés et techniques innovantes.",
      beforeImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      likes: 234,
      comments: 45,
      shares: 12,
      timeAgo: "2 jours",
      tags: ["Éco-responsable", "Mode", "Innovation"],
      machinesUsed: ["JACK JK-8720", "BROTHER S-7300A"]
    },
    {
      id: 2,
      title: "Restauration Machines Vintage",
      author: "Pierre Antiquités",
      location: "Lyon, France",
      category: "repair",
      description: "Remise en état d\'une machine Singer des années 1950 avec les techniques modernes apprises chez Usine Jack.",
      beforeImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      likes: 189,
      comments: 67,
      shares: 23,
      timeAgo: "5 jours",
      tags: ["Restauration", "Vintage", "Savoir-faire"],
      machinesUsed: ["Outils Usine Jack"]
    },
    {
      id: 3,
      title: "Broderie Personnalisée Entreprise",
      author: "BrodArt Pro",
      location: "Marseille, France",
      category: "embroidery",
      description: "Réalisation de 500 logos brodés pour une entreprise locale avec notre TAJIMA TMAR-1501. Qualité professionnelle garantie.",
      beforeImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      likes: 156,
      comments: 28,
      shares: 8,
      timeAgo: "1 semaine",
      tags: ["Broderie", "Entreprise", "Logo"],
      machinesUsed: ["TAJIMA TMAR-1501"]
    },
    {
      id: 4,
      title: "Production Masques Chirurgicaux",
      author: "MedTextile Solutions",
      location: "Toulouse, France",
      category: "industrial",
      description: "Conversion rapide de notre atelier pour produire 10,000 masques/jour pendant la pandémie. Machines Usine Jack fiables 24/7.",
      beforeImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      likes: 312,
      comments: 89,
      shares: 45,
      timeAgo: "2 semaines",
      tags: ["Médical", "Production", "Urgence"],
      machinesUsed: ["JUKI DDL-8700", "PEGASUS M752"]
    }
  ];

  const communityStats = [
    { label: "Membres actifs", value: "2,847", icon: "Users", color: "text-blue-600" },
    { label: "Projets partagés", value: "1,234", icon: "FolderOpen", color: "text-emerald-600" },
    { label: "Heures d\'entraide", value: "5,678", icon: "Clock", color: "text-orange-600" },
    { label: "Problèmes résolus", value: "892", icon: "CheckCircle", color: "text-emerald-600" }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? communityProjects 
    : communityProjects?.filter(project => project?.category === activeCategory);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'k';
    }
    return num?.toString();
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} />
            <span className="text-sm font-medium">Communauté Active</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Projets inspirants de notre communauté
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les réalisations exceptionnelles de nos membres et partagez vos propres créations
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {communityStats?.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
              <Icon name={stat?.icon} size={24} className={`mx-auto mb-2 ${stat?.color}`} />
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredProjects?.map((project) => (
            <div key={project?.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-industrial hover:shadow-elevated transition-all duration-300">
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project?.beforeImage}
                      alt={`${project?.title} - Avant`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Avant
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src={project?.afterImage}
                      alt={`${project?.title} - Après`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Après
                    </div>
                  </div>
                </div>
                
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" iconName="Eye" size="sm">
                    Voir le projet
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={project?.avatar}
                      alt={project?.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-foreground">{project?.author}</h3>
                      <p className="text-sm text-muted-foreground">{project?.location}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{project?.timeAgo}</span>
                </div>

                {/* Title & Description */}
                <h4 className="text-lg font-bold text-foreground mb-2">{project?.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project?.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.tags?.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Machines Used */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Machines utilisées:</p>
                  <div className="flex flex-wrap gap-1">
                    {project?.machinesUsed?.map((machine, index) => (
                      <span key={index} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md font-medium">
                        {machine}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-red-500 transition-colors">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{formatNumber(project?.likes)}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-blue-500 transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{project?.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-emerald-500 transition-colors">
                      <Icon name="Share2" size={16} />
                      <span className="text-sm">{project?.shares}</span>
                    </button>
                  </div>
                  
                  <Button variant="ghost" size="sm" iconName="Bookmark">
                    Sauvegarder
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Icon name="Users" size={48} className="mx-auto mb-6 text-white/80" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Rejoignez notre communauté de passionnés
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Partagez vos projets, échangez des conseils et trouvez l'inspiration auprès de milliers de professionnels de la couture industrielle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" iconName="UserPlus" iconPosition="left">
                <Link to="/community-workshop-user-engagement-hub">
                  Rejoindre la communauté
                </Link>
              </Button>
              <Button variant="outline" size="lg" iconName="Upload" iconPosition="left" className="border-white/30 text-white hover:bg-white/10">
                Partager un projet
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Gratuit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Disponible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2,847</div>
                <div className="text-sm text-white/80">Membres</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;