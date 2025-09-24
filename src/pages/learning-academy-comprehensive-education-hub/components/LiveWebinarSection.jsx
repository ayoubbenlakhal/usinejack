import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const LiveWebinarSection = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "Maintenance Préventive : Éviter les Pannes Coûteuses",
      instructor: "Marie Dubois",
      instructorTitle: "Experte Technique Senior",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "2025-09-20",
      time: "14:00",
      duration: "90 min",
      attendees: 156,
      maxAttendees: 200,
      level: "Intermédiaire",
      topics: ["Lubrification", "Réglages", "Diagnostic", "Planning"],
      description: `Apprenez les techniques essentielles de maintenance préventive pour prolonger la durée de vie de vos machines industrielles. Cette session couvre les protocoles de lubrification, les réglages critiques, et la création d'un planning de maintenance efficace.`,
      isLive: false,
      registrationOpen: true,
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "Techniques Avancées de Couture Industrielle",
      instructor: "Jean-Pierre Martin",
      instructorTitle: "Maître Artisan",
      instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "2025-09-18",
      time: "16:30",
      duration: "120 min",
      attendees: 89,
      maxAttendees: 150,
      level: "Avancé",
      topics: ["Surpiqûres", "Assemblage", "Finitions", "Qualité"],
      description: `Maîtrisez les techniques avancées de couture industrielle avec des démonstrations en direct. Focus sur les surpiqûres parfaites, l'assemblage complexe et les finitions professionnelles.`,
      isLive: true,
      registrationOpen: true,
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Optimisation de la Productivité en Atelier",
      instructor: "Sophie Leroy",
      instructorTitle: "Consultante Industrielle",
      instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "2025-09-25",
      time: "10:00",
      duration: "75 min",
      attendees: 203,
      maxAttendees: 250,
      level: "Tous niveaux",
      topics: ["Organisation", "Workflow", "Ergonomie", "ROI"],
      description: `Découvrez comment optimiser votre atelier pour maximiser la productivité. Techniques d'organisation, amélioration du workflow et calcul du retour sur investissement.`,
      isLive: false,
      registrationOpen: true,
      thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=225&fit=crop"
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Introduction aux Machines Industrielles",
      instructor: "Michel Rousseau",
      date: "2025-09-10",
      views: 1247,
      rating: 4.8,
      duration: "60 min",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=169&fit=crop"
    },
    {
      id: 5,
      title: "Sécurité en Atelier de Couture",
      instructor: "Anne Moreau",
      date: "2025-09-05",
      views: 892,
      rating: 4.9,
      duration: "45 min",
      thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=169&fit=crop"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant':
        return 'text-success bg-success/10';
      case 'Intermédiaire':
        return 'text-warning bg-warning/10';
      case 'Avancé':
        return 'text-error bg-error/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Webinaires en Direct</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Participez à nos sessions de formation en direct avec nos experts. 
          Posez vos questions et apprenez aux côtés d'autres professionnels.
        </p>
      </div>
      {/* Upcoming Webinars */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Prochains Webinaires</h3>
          <Button variant="outline" iconName="Calendar" size="sm">
            Voir Calendrier
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingWebinars?.map((webinar) => (
            <div key={webinar?.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={webinar?.thumbnail}
                    alt={webinar?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex space-x-2">
                  {webinar?.isLive && (
                    <span className="px-2 py-1 bg-error text-error-foreground rounded-full text-xs font-medium flex items-center space-x-1">
                      <div className="w-2 h-2 bg-error-foreground rounded-full animate-pulse" />
                      <span>EN DIRECT</span>
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(webinar?.level)}`}>
                    {webinar?.level}
                  </span>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white text-sm font-medium mb-1">
                    {formatDate(webinar?.date)} • {webinar?.time}
                  </div>
                  <div className="text-white/80 text-xs">
                    {webinar?.duration} • {webinar?.attendees}/{webinar?.maxAttendees} inscrits
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {webinar?.title}
                </h4>
                
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image 
                      src={webinar?.instructorAvatar}
                      alt={webinar?.instructor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{webinar?.instructor}</div>
                    <div className="text-xs text-muted-foreground">{webinar?.instructorTitle}</div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {webinar?.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {webinar?.topics?.map((topic, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Users" size={14} />
                    <span>{webinar?.attendees} inscrits</span>
                  </div>
                  
                  <Button 
                    variant={webinar?.isLive ? "default" : "outline"}
                    size="sm"
                    iconName={webinar?.isLive ? "Video" : "Calendar"}
                    disabled={!webinar?.registrationOpen}
                  >
                    {webinar?.isLive ? "Rejoindre" : "S'inscrire"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Past Webinars */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Replays Disponibles</h3>
          <Button variant="outline" iconName="Archive" size="sm">
            Voir Tous les Replays
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastWebinars?.map((webinar) => (
            <div key={webinar?.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={webinar?.thumbnail}
                    alt={webinar?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                  {webinar?.duration}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="default" size="sm" iconName="Play">
                    Regarder
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {webinar?.title}
                </h4>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{webinar?.instructor}</span>
                  <span>{formatDate(webinar?.date)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{webinar?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <span>{webinar?.rating}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="xs" iconName="Bookmark">
                    Sauvegarder
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <Icon name="Video" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Vous souhaitez animer un webinaire ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Partagez votre expertise avec la communauté Usine Jack. 
            Proposez un sujet et devenez formateur expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" iconName="Plus">
              Proposer un Webinaire
            </Button>
            <Button variant="outline" iconName="MessageCircle">
              Contacter l'Équipe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveWebinarSection;