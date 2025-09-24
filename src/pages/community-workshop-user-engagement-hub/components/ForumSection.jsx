import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ForumSection = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les Forums', icon: 'Grid3X3', count: 1247 },
    { id: 'machines', name: 'Machines Industrielles', icon: 'Settings', count: 456 },
    { id: 'techniques', name: 'Techniques de Couture', icon: 'Scissors', count: 321 },
    { id: 'maintenance', name: 'Maintenance & Réparation', icon: 'Wrench', count: 234 },
    { id: 'business', name: 'Conseils Business', icon: 'Briefcase', count: 156 },
    { id: 'beginners', name: 'Débutants', icon: 'GraduationCap', count: 80 }
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Problème de tension sur machine Brother DB2-B755-3",
      category: "Maintenance & Réparation",
      author: {
        name: "Marie Dubois",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        level: "Expert",
        reputation: 2847
      },
      stats: {
        replies: 23,
        views: 1456,
        likes: 12
      },
      lastActivity: "Il y a 2 heures",
      isPinned: true,
      hasAnswer: true,
      tags: ["Brother", "Tension", "DB2-B755"]
    },
    {
      id: 2,
      title: "Techniques avancées pour coudre le cuir épais",
      category: "Techniques de Couture",
      author: {
        name: "Jean-Pierre Martin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        level: "Maître Artisan",
        reputation: 4521
      },
      stats: {
        replies: 45,
        views: 3421,
        likes: 67
      },
      lastActivity: "Il y a 4 heures",
      isPinned: false,
      hasAnswer: true,
      tags: ["Cuir", "Techniques", "Avancé"]
    },
    {
      id: 3,
      title: "Comparaison machines surjeteuses industrielles 2024",
      category: "Machines Industrielles",
      author: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        level: "Professionnel",
        reputation: 1923
      },
      stats: {
        replies: 18,
        views: 892,
        likes: 34
      },
      lastActivity: "Il y a 6 heures",
      isPinned: false,
      hasAnswer: false,
      tags: ["Surjeteuse", "Comparaison", "2024"]
    },
    {
      id: 4,
      title: "Comment démarrer son atelier de couture industrielle ?",
      category: "Conseils Business",
      author: {
        name: "Pierre Moreau",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        level: "Entrepreneur",
        reputation: 3156
      },
      stats: {
        replies: 67,
        views: 5234,
        likes: 89
      },
      lastActivity: "Il y a 8 heures",
      isPinned: true,
      hasAnswer: true,
      tags: ["Business", "Démarrage", "Atelier"]
    },
    {
      id: 5,
      title: "Aide pour choisir ma première machine industrielle",
      category: "Débutants",
      author: {
        name: "Emma Rousseau",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        level: "Débutant",
        reputation: 156
      },
      stats: {
        replies: 12,
        views: 456,
        likes: 8
      },
      lastActivity: "Il y a 1 jour",
      isPinned: false,
      hasAnswer: false,
      tags: ["Débutant", "Choix", "Machine"]
    }
  ];

  const filteredTopics = forumTopics?.filter(topic => {
    const matchesSearch = searchQuery === '' || 
      topic?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      topic?.category?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      topic?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
      topic?.category?.toLowerCase()?.includes(categories?.find(c => c?.id === selectedCategory)?.name?.toLowerCase() || '');
    
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'Maître Artisan': return 'text-yellow-600 bg-yellow-50';
      case 'Expert': return 'text-purple-600 bg-purple-50';
      case 'Professionnel': return 'text-blue-600 bg-blue-50';
      case 'Entrepreneur': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
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
                  <div className="flex items-center space-x-2">
                    <Icon name={category?.icon} size={16} />
                    <span className="truncate">{category?.name}</span>
                  </div>
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

            {/* Quick Stats */}
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground mb-3">Statistiques</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Membres actifs</span>
                  <span className="font-medium">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posts aujourd'hui</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nouveaux membres</span>
                  <span className="font-medium">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forum Topics */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {categories?.find(c => c?.id === selectedCategory)?.name || 'Tous les Forums'}
              </h2>
              <p className="text-muted-foreground">
                {filteredTopics?.length} discussion{filteredTopics?.length > 1 ? 's' : ''}
              </p>
            </div>
            <Button variant="default" iconName="Plus" size="sm">
              Nouvelle Discussion
            </Button>
          </div>

          <div className="space-y-4">
            {filteredTopics?.map((topic) => (
              <div
                key={topic?.id}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-elevated transition-meaningful"
              >
                <div className="flex items-start space-x-4">
                  {/* Author Avatar */}
                  <div className="flex-shrink-0">
                    <Image
                      src={topic?.author?.avatar}
                      alt={topic?.author?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>

                  {/* Topic Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {topic?.isPinned && (
                            <Icon name="Pin" size={14} className="text-accent" />
                          )}
                          {topic?.hasAnswer && (
                            <Icon name="CheckCircle" size={14} className="text-success" />
                          )}
                          <span className="text-xs text-muted-foreground">{topic?.category}</span>
                        </div>
                        
                        <h3 className="text-lg font-medium text-foreground mb-2 hover:text-primary cursor-pointer">
                          {topic?.title}
                        </h3>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-foreground">
                              {topic?.author?.name}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(topic?.author?.level)}`}>
                              {topic?.author?.level}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Icon name="Star" size={12} className="text-yellow-500" />
                              <span className="text-xs text-muted-foreground">
                                {topic?.author?.reputation}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {topic?.tags?.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Topic Stats */}
                      <div className="flex-shrink-0 text-right">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="MessageSquare" size={14} />
                            <span>{topic?.stats?.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={14} />
                            <span>{topic?.stats?.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Heart" size={14} />
                            <span>{topic?.stats?.likes}</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          {topic?.lastActivity}
                        </div>
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
              Charger Plus de Discussions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumSection;