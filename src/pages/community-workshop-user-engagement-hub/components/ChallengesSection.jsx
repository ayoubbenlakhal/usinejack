import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ChallengesSection = ({ searchQuery }) => {
  const [selectedFilter, setSelectedFilter] = useState('active');

  const filters = [
    { id: 'active', name: 'Défis Actifs', count: 8 },
    { id: 'upcoming', name: 'À Venir', count: 4 },
    { id: 'completed', name: 'Terminés', count: 24 },
    { id: 'my-challenges', name: 'Mes Défis', count: 3 }
  ];

  const challenges = [
    {
      id: 1,
      title: "Défi Cuir Créatif - Septembre 2024",
      description: "Créez un accessoire en cuir original en utilisant uniquement des chutes de cuir. Montrez votre créativité et vos techniques de récupération !",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      category: "Créativité",
      difficulty: "Intermédiaire",
      prize: "500€ + Machine Brother",
      startDate: "2024-09-01",
      endDate: "2024-09-30",
      status: "active",
      participants: 156,
      submissions: 89,
      daysLeft: 14,
      organizer: {
        name: "Usine Jack",
        avatar: "hc",
        isOfficial: true
      },
      requirements: [
        "Utiliser uniquement des chutes de cuir",
        "Documenter le processus avec photos",
        "Partager les techniques utilisées",
        "Respecter les dimensions max 30x30cm"
      ],
      tags: ["Cuir", "Récupération", "Créativité", "Accessoires"],
      winners: []
    },
    {
      id: 2,
      title: "Speed Sewing Challenge",
      description: "Cousez un sac cabas complet en moins de 2 heures ! Défi de rapidité et de précision pour tester vos compétences.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      category: "Vitesse",
      difficulty: "Avancé",
      prize: "300€ + Kit d'outils",
      startDate: "2024-09-15",
      endDate: "2024-09-22",
      status: "active",
      participants: 89,
      submissions: 34,
      daysLeft: 6,
      organizer: {
        name: "Marie Dubois",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        isOfficial: false
      },
      requirements: [
        "Temps maximum : 2 heures",
        "Filmer le processus en time-lapse",
        "Sac cabas dimensions standard",
        "Finitions professionnelles exigées"
      ],
      tags: ["Vitesse", "Sac", "Time-lapse", "Précision"],
      winners: []
    },
    {
      id: 3,
      title: "Défi Éco-Responsable",
      description: "Créez une pièce vestimentaire à partir de matériaux 100% recyclés ou upcyclés. Montrez que la mode peut être durable !",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
      category: "Écologie",
      difficulty: "Débutant",
      prize: "200€ + Formation gratuite",
      startDate: "2024-10-01",
      endDate: "2024-10-31",
      status: "upcoming",
      participants: 0,
      submissions: 0,
      daysLeft: 15,
      organizer: {
        name: "Usine Jack",
        avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150",
        isOfficial: true
      },
      requirements: [
        "Matériaux 100% recyclés/upcyclés",
        "Documenter la provenance des matériaux",
        "Expliquer le processus de transformation",
        "Vêtement portable et fonctionnel"
      ],
      tags: ["Écologie", "Recyclage", "Upcycling", "Vêtement"],
      winners: []
    },
    {
      id: 4,
      title: "Maîtrise des Surpiqûres Décoratives",
      description: "Réalisez une pièce mettant en valeur différentes techniques de surpiqûres décoratives. Technique et esthétique au rendez-vous !",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      category: "Technique",
      difficulty: "Avancé",
      prize: "400€ + Masterclass privée",
      startDate: "2024-08-15",
      endDate: "2024-09-15",
      status: "completed",
      participants: 67,
      submissions: 45,
      daysLeft: 0,
      organizer: {
        name: "Jean-Pierre Martin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        isOfficial: false
      },
      requirements: [
        "Minimum 5 types de surpiqûres différentes",
        "Pièce fonctionnelle (vêtement ou accessoire)",
        "Photos détaillées des techniques",
        "Tutoriel des étapes principales"
      ],
      tags: ["Surpiqûre", "Technique", "Décoration", "Maîtrise"],
      winners: [
        {
          position: 1,
          name: "Sophie Laurent",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
          project: "Veste en jean avec 8 types de surpiqûres"
        },
        {
          position: 2,
          name: "Pierre Moreau",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          project: "Sac en cuir avec surpiqûres géométriques"
        }
      ]
    }
  ];

  const filteredChallenges = challenges?.filter(challenge => {
    const matchesSearch = searchQuery === '' || 
      challenge?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      challenge?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      challenge?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'active' ? challenge?.status === 'active' :
                         selectedFilter === 'upcoming' ? challenge?.status === 'upcoming' :
                         selectedFilter === 'completed' ? challenge?.status === 'completed' :
                         selectedFilter === 'my-challenges' ? [1, 3]?.includes(challenge?.id) : true;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10 border-success/20';
      case 'upcoming': return 'text-warning bg-warning/10 border-warning/20';
      case 'completed': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Débutant': return 'text-green-600 bg-green-50';
      case 'Intermédiaire': return 'text-yellow-600 bg-yellow-50';
      case 'Avancé': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'En Cours';
      case 'upcoming': return 'À Venir';
      case 'completed': return 'Terminé';
      default: return status;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Défis Mensuels</h2>
          <p className="text-muted-foreground">
            Participez aux défis communautaires et gagnez des prix !
          </p>
        </div>
        
        <Button variant="default" iconName="Plus" size="sm">
          Créer un Défi
        </Button>
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
      {/* Challenges Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredChallenges?.map((challenge) => (
          <div
            key={challenge?.id}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-meaningful"
          >
            {/* Challenge Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={challenge?.image}
                alt={challenge?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(challenge?.status)}`}>
                  {getStatusText(challenge?.status)}
                </span>
                {challenge?.organizer?.isOfficial && (
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Officiel
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge?.difficulty)}`}>
                  {challenge?.difficulty}
                </span>
              </div>
              {challenge?.status === 'active' && challenge?.daysLeft > 0 && (
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {challenge?.daysLeft} jour{challenge?.daysLeft > 1 ? 's' : ''} restant{challenge?.daysLeft > 1 ? 's' : ''}
                </div>
              )}
            </div>

            {/* Challenge Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {challenge?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {challenge?.description}
                  </p>
                </div>
              </div>

              {/* Prize */}
              <div className="flex items-center space-x-2 mb-4 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                <Icon name="Trophy" size={18} className="text-accent" />
                <span className="text-sm font-medium text-foreground">Prix : {challenge?.prize}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-lg font-semibold text-foreground">{challenge?.participants}</div>
                  <div className="text-xs text-muted-foreground">Participants</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-lg font-semibold text-foreground">{challenge?.submissions}</div>
                  <div className="text-xs text-muted-foreground">Soumissions</div>
                </div>
              </div>

              {/* Requirements Preview */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Exigences :</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {challenge?.requirements?.slice(0, 2)?.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                  {challenge?.requirements?.length > 2 && (
                    <li className="text-primary text-xs">
                      +{challenge?.requirements?.length - 2} autres exigences...
                    </li>
                  )}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge?.tags?.slice(0, 3)?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
                {challenge?.tags?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                    +{challenge?.tags?.length - 3}
                  </span>
                )}
              </div>

              {/* Winners (for completed challenges) */}
              {challenge?.status === 'completed' && challenge?.winners?.length > 0 && (
                <div className="mb-4 p-3 bg-success/5 border border-success/20 rounded-lg">
                  <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                    <Icon name="Crown" size={16} className="text-yellow-500 mr-2" />
                    Gagnants
                  </h4>
                  <div className="space-y-2">
                    {challenge?.winners?.map((winner) => (
                      <div key={winner?.position} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {winner?.position}
                        </div>
                        <Image
                          src={winner?.avatar}
                          alt={winner?.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground">{winner?.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{winner?.project}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Organizer */}
              <div className="flex items-center space-x-3 mb-4 pt-4 border-t border-border">
                <Image
                  src={challenge?.organizer?.avatar}
                  alt={challenge?.organizer?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Organisé par {challenge?.organizer?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {challenge?.startDate} - {challenge?.endDate}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                {challenge?.status === 'active' && (
                  <Button variant="default" fullWidth iconName="Play">
                    Participer
                  </Button>
                )}
                {challenge?.status === 'upcoming' && (
                  <Button variant="outline" fullWidth iconName="Bell">
                    Me Notifier
                  </Button>
                )}
                {challenge?.status === 'completed' && (
                  <Button variant="outline" fullWidth iconName="Eye">
                    Voir les Résultats
                  </Button>
                )}
                <Button variant="ghost" iconName="Share" size="sm">
                  <span className="sr-only">Partager</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" iconName="ChevronDown">
          Charger Plus de Défis
        </Button>
      </div>
    </div>
  );
};

export default ChallengesSection;