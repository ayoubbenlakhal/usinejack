import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LearningPathways = () => {
  const learningPaths = [
    {
      id: 1,
      title: "Initiation à la Couture Industrielle",
      description: "Maîtrisez les bases des machines industrielles et les techniques fondamentales",
      level: "Débutant",
      duration: "4 semaines",
      lessons: 12,
      progress: 0,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      topics: ["Sécurité machine", "Points de base", "Réglages essentiels"],
      instructor: "Marie Dubois",
      rating: 4.9,
      students: 1247,
      badge: "Populaire"
    },
    {
      id: 2,
      title: "Maintenance Préventive Avancée",
      description: "Apprenez à entretenir et réparer vos machines pour optimiser leur durée de vie",
      level: "Intermédiaire",
      duration: "6 semaines",
      lessons: 18,
      progress: 65,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      topics: ["Diagnostic pannes", "Lubrification", "Calibrage précision"],
      instructor: "Jean-Pierre Martin",
      rating: 4.8,
      students: 892,
      badge: "En cours"
    },
    {
      id: 3,
      title: "Techniques de Broderie Industrielle",
      description: "Perfectionnez vos compétences en broderie avec les machines professionnelles",
      level: "Avancé",
      duration: "8 semaines",
      lessons: 24,
      progress: 0,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      topics: ["Motifs complexes", "Programmation", "Finitions premium"],
      instructor: "Sophie Laurent",
      rating: 4.9,
      students: 634,
      badge: "Nouveau"
    }
  ];

  const quickTutorials = [
    {
      id: 1,
      title: "Réglage tension fil supérieur",
      duration: "5 min",
      views: "12.5K",
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "Dépannage"
    },
    {
      id: 2,
      title: "Changement d\'aiguille industrielle",
      duration: "3 min",
      views: "8.9K",
      thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "Points décoratifs avancés",
      duration: "12 min",
      views: "15.2K",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "Technique"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'bg-emerald-100 text-emerald-800';
      case 'Intermédiaire': return 'bg-orange-100 text-orange-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Populaire': return 'bg-orange-600 text-white';
      case 'En cours': return 'bg-blue-600 text-white';
      case 'Nouveau': return 'bg-emerald-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Icon name="GraduationCap" size={16} />
            <span className="text-sm font-medium">Formation Continue</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Parcours d'apprentissage personnalisés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Développez vos compétences avec nos formations structurées et nos tutoriels pratiques
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning Paths */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Formations Complètes</h3>
              <Link 
                to="/learning-academy-comprehensive-education-hub"
                className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
              >
                <span>Voir tout</span>
                <Icon name="ArrowRight" size={14} />
              </Link>
            </div>

            <div className="space-y-6">
              {learningPaths?.map((path) => (
                <div key={path?.id} className="bg-card border border-border rounded-xl p-6 shadow-industrial hover:shadow-elevated transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={path?.image}
                        alt={path?.title}
                        className="w-full h-full object-cover"
                      />
                      {path?.badge && (
                        <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-semibold ${getBadgeColor(path?.badge)}`}>
                          {path?.badge}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getLevelColor(path?.level)}`}>
                              {path?.level}
                            </span>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Icon name="Clock" size={14} />
                              <span>{path?.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Icon name="BookOpen" size={14} />
                              <span>{path?.lessons} leçons</span>
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{path?.title}</h4>
                          <p className="text-muted-foreground text-sm mb-3">{path?.description}</p>
                        </div>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {path?.topics?.map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      {path?.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progression</span>
                            <span className="font-medium text-foreground">{path?.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${path?.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="User" size={14} />
                            <span>{path?.instructor}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                            <span>{path?.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" size={14} />
                            <span>{path?.students}</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant={path?.progress > 0 ? "default" : "outline"} 
                          size="sm"
                          iconName={path?.progress > 0 ? "Play" : "BookOpen"}
                        >
                          {path?.progress > 0 ? "Continuer" : "Commencer"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tutorials Sidebar */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Tutoriels Express</h3>
              <Link 
                to="/learning-academy-comprehensive-education-hub"
                className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
              >
                <span>Plus</span>
                <Icon name="ArrowRight" size={14} />
              </Link>
            </div>

            <div className="space-y-4">
              {quickTutorials?.map((tutorial) => (
                <div key={tutorial?.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex space-x-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={tutorial?.thumbnail}
                        alt={tutorial?.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Icon name="Play" size={16} color="white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md font-medium">
                          {tutorial?.category}
                        </span>
                      </div>
                      <h4 className="font-medium text-foreground text-sm leading-tight mb-2 line-clamp-2">
                        {tutorial?.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{tutorial?.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={12} />
                          <span>{tutorial?.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-8 bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
              <div className="text-center">
                <Icon name="Award" size={32} className="mx-auto mb-3 text-white/80" />
                <h4 className="font-bold mb-2">Certification Professionnelle</h4>
                <p className="text-sm text-white/80 mb-4">
                  Obtenez votre certification reconnue par l'industrie
                </p>
                <Button variant="secondary" size="sm" fullWidth>
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathways;