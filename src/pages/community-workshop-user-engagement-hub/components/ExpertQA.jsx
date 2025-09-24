import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ExpertQA = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { id: 'all', name: 'Toutes les Questions', count: 456 },
    { id: 'machines', name: 'Machines & Équipements', count: 178 },
    { id: 'techniques', name: 'Techniques de Couture', count: 134 },
    { id: 'maintenance', name: 'Maintenance & Réparation', count: 89 },
    { id: 'business', name: 'Conseils Business', count: 55 }
  ];

  const sortOptions = [
    { id: 'recent', name: 'Plus Récentes' },
    { id: 'popular', name: 'Plus Populaires' },
    { id: 'unanswered', name: 'Sans Réponse' },
    { id: 'answered', name: 'Résolues' }
  ];

  const experts = [
    {
      id: 1,
      name: "Dr. Michel Rousseau",
      title: "Ingénieur Textile Senior",
      company: "Usine Jack",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      specialties: ["Machines Industrielles", "Innovation Textile"],
      rating: 4.9,
      answersCount: 234,
      isOnline: true
    },
    {
      id: 2,
      name: "Marie-Claire Dubois",
      title: "Maître Artisan Couture",
      company: "Atelier Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      specialties: ["Techniques Avancées", "Formation"],
      rating: 4.8,
      answersCount: 189,
      isOnline: false
    },
    {
      id: 3,
      name: "Jean-Luc Martin",
      title: "Technicien Maintenance",
      company: "Service Pro Couture",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      specialties: ["Réparation", "Diagnostic"],
      rating: 4.7,
      answersCount: 156,
      isOnline: true
    }
  ];

  const questions = [
    {
      id: 1,
      title: "Comment régler la tension sur une Brother DB2-B755-3 pour coudre du cuir épais ?",
      description: "J'ai des problèmes de tension lors de la couture de cuir épais (3-4mm). Les points ne sont pas réguliers et le fil casse souvent. Quels sont les réglages recommandés ?",
      author: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        level: "Professionnel"
      },
      category: "Machines & Équipements",
      tags: ["Brother", "DB2-B755", "Cuir", "Tension"],
      stats: {
        views: 1234,
        votes: 23,
        answers: 5
      },
      hasExpertAnswer: true,
      expertAnswer: {
        expert: experts?.[0],
        content: `Pour coudre du cuir épais sur une Brother DB2-B755-3, voici les réglages recommandés :\n\n1. **Tension du fil supérieur** : Réduisez à 3-4 (au lieu de 5-6 pour tissus normaux)\n2. **Pression du pied** : Augmentez légèrement pour maintenir le cuir\n3. **Aiguille** : Utilisez une aiguille cuir 110/18 ou 120/19\n4. **Fil** : Fil polyester haute résistance ou fil spécial cuir\n\nAssurez-vous également que la canette est correctement enfilée et que la tension de canette est adaptée.`,
        createdAt: "2024-09-15",
        votes: 45
      },
      createdAt: "2024-09-14",
      isUrgent: false,
      bounty: 50
    },
    {
      id: 2,
      title: "Quelle machine choisir pour démarrer un atelier de maroquinerie ?",
      description: "Je souhaite ouvrir un petit atelier de maroquinerie. Budget 15000€. Quelles machines recommandez-vous pour commencer ? Priorité : qualité et polyvalence.",
      author: {
        name: "Pierre Moreau",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        level: "Débutant"
      },
      category: "Conseils Business",
      tags: ["Maroquinerie", "Démarrage", "Budget", "Machines"],
      stats: {
        views: 892,
        votes: 18,
        answers: 3
      },
      hasExpertAnswer: true,
      expertAnswer: {
        expert: experts?.[1],
        content: `Pour un budget de 15000€ en maroquinerie, je recommande :\n\n**Machine principale (8000€)** :\n- Juki DNU-1541 ou Consew 206RB-5 pour la polyvalence\n\n**Machine spécialisée (4000€)** :\n- Singer 111W155 pour les épaisseurs importantes\n\n**Équipements complémentaires (3000€)** :\n- Presse à oeillets, emporte-pièces, outils de finition\n\nCette combinaison vous permettra de traiter 90% des projets maroquinerie avec une excellente qualité.`,
        createdAt: "2024-09-13",
        votes: 32
      },
      createdAt: "2024-09-12",
      isUrgent: false,
      bounty: 100
    },
    {
      id: 3,
      title: "Problème de bourrage constant sur Juki DDL-8700",
      description: "Ma machine Juki DDL-8700 fait des bourrages de fil en permanence depuis hier. J'ai nettoyé, changé l'aiguille, vérifié l'enfilage. Le problème persiste. Urgent !",
      author: {
        name: "Emma Rousseau",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        level: "Intermédiaire"
      },
      category: "Maintenance & Réparation",
      tags: ["Juki", "DDL-8700", "Bourrage", "Urgent"],
      stats: {
        views: 567,
        votes: 12,
        answers: 2
      },
      hasExpertAnswer: true,
      expertAnswer: {
        expert: experts?.[2],
        content: `Bourrage constant sur DDL-8700 = problème de synchronisation probable.\n\n**Vérifications immédiates** :\n1. Timing aiguille/crochet (position haute aiguille)\n2. Hauteur de barre à aiguille\n3. Usure du crochet rotatif\n\n**Solution temporaire** :\nRéduisez la vitesse à 2000 tr/min max\n\n**Recommandation** : Intervention technicien nécessaire pour réglage timing. Ne forcez pas, risque d'endommager le mécanisme.`,
        createdAt: "2024-09-16",
        votes: 28
      },
      createdAt: "2024-09-16",
      isUrgent: true,
      bounty: 0
    },
    {
      id: 4,
      title: "Techniques pour coudre des matériaux composites techniques",
      description: "Je travaille avec des tissus techniques (Gore-Tex, Cordura) pour équipements outdoor. Quelles sont les meilleures pratiques pour éviter les perforations et garantir l'étanchéité ?",
      author: {
        name: "Alexandre Petit",avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",level: "Expert"
      },
      category: "Techniques de Couture",
      tags: ["Gore-Tex", "Cordura", "Étanchéité", "Techniques"],
      stats: {
        views: 445,
        votes: 15,
        answers: 1
      },
      hasExpertAnswer: false,
      createdAt: "2024-09-15",
      isUrgent: false,
      bounty: 75
    }
  ];

  const filteredQuestions = questions?.filter(question => {
    const matchesSearch = searchQuery === '' || 
      question?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      question?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      question?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
      question?.category?.toLowerCase()?.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const sortedQuestions = [...filteredQuestions]?.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b?.stats?.votes - a?.stats?.votes;
      case 'unanswered':
        return a?.stats?.answers - b?.stats?.answers;
      case 'answered':
        return b?.stats?.answers - a?.stats?.answers;
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Experts en Ligne */}
          <div className="bg-card rounded-lg border border-border p-4 mb-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Users" size={18} className="mr-2" />
              Experts en Ligne
            </h3>
            <div className="space-y-3">
              {experts?.filter(expert => expert?.isOnline)?.map((expert) => (
                <div key={expert?.id} className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={expert?.avatar}
                      alt={expert?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">
                      {expert?.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {expert?.title}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Icon name="Star" size={12} className="text-yellow-500" />
                      <span className="text-xs text-muted-foreground">{expert?.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-card rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Catégories</h3>
            <div className="space-y-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-md text-sm transition-micro ${
                    selectedCategory === category?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="truncate">{category?.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category?.id
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {category?.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Questions & Réponses d'Experts</h2>
              <p className="text-muted-foreground">
                {sortedQuestions?.length} question{sortedQuestions?.length > 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e?.target?.value)}
                className="px-3 py-2 border border-border rounded-md text-sm bg-background"
              >
                {sortOptions?.map((option) => (
                  <option key={option?.id} value={option?.id}>
                    {option?.name}
                  </option>
                ))}
              </select>
              
              <Button variant="default" iconName="Plus" size="sm">
                Poser une Question
              </Button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-6">
            {sortedQuestions?.map((question) => (
              <div
                key={question?.id}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-elevated transition-meaningful"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {question?.isUrgent && (
                        <span className="px-2 py-1 bg-error text-error-foreground text-xs font-medium rounded-full">
                          Urgent
                        </span>
                      )}
                      {question?.bounty > 0 && (
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          Prime {question?.bounty}€
                        </span>
                      )}
                      {question?.hasExpertAnswer && (
                        <span className="px-2 py-1 bg-success text-success-foreground text-xs font-medium rounded-full">
                          Réponse Expert
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">{question?.category}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                      {question?.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {question?.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {question?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Question Stats */}
                  <div className="flex-shrink-0 text-right ml-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{question?.stats?.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="ThumbsUp" size={14} />
                        <span>{question?.stats?.votes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageSquare" size={14} />
                        <span>{question?.stats?.answers}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={question?.author?.avatar}
                    alt={question?.author?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {question?.author?.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {question?.author?.level} • {question?.createdAt}
                    </div>
                  </div>
                </div>

                {/* Expert Answer Preview */}
                {question?.hasExpertAnswer && question?.expertAnswer && (
                  <div className="bg-success/5 border border-success/20 rounded-lg p-4 mt-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} color="white" />
                      </div>
                      <span className="text-sm font-medium text-success">Réponse d'Expert</span>
                      <div className="flex items-center space-x-1 ml-auto">
                        <Icon name="ThumbsUp" size={14} className="text-success" />
                        <span className="text-sm text-success">{question?.expertAnswer?.votes}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <Image
                        src={question?.expertAnswer?.expert?.avatar}
                        alt={question?.expertAnswer?.expert?.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {question?.expertAnswer?.expert?.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {question?.expertAnswer?.expert?.title} • {question?.expertAnswer?.expert?.company}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-foreground whitespace-pre-line line-clamp-4">
                      {question?.expertAnswer?.content}
                    </div>
                    
                    <button className="text-sm text-primary hover:underline mt-2">
                      Voir la réponse complète →
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" iconName="ThumbsUp">
                      Utile
                    </Button>
                    <Button variant="ghost" size="sm" iconName="MessageSquare">
                      Répondre
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Share">
                      Partager
                    </Button>
                  </div>
                  
                  <Button variant="ghost" size="sm" iconName="Bookmark">
                    Sauvegarder
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" iconName="ChevronDown">
              Charger Plus de Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertQA;