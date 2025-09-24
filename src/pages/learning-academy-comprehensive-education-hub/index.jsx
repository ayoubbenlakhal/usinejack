import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';

// Import components
import LearningPathCard from './components/LearningPathCard';
import TutorialCard from './components/TutorialCard';
import DiagnosticWizard from './components/DiagnosticWizard';
import ProgressDashboard from './components/ProgressDashboard';
import LiveWebinarSection from './components/LiveWebinarSection';
import TechnicalLibrary from './components/TechnicalLibrary';

const LearningAcademyPage = () => {
  const [activeTab, setActiveTab] = useState('paths');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Mock user progress data
  const userProgress = {
    completedLessons: 47,
    certificates: 8,
    studyHours: 156,
    totalPoints: 2840,
    currentStreak: 12,
    level: 'Intermédiaire'
  };

  // Mock learning paths data
  const learningPaths = [
    {
      id: 1,
      title: "Débutant Professionnel",
      difficulty: "Débutant",
      duration: "8-12 semaines",
      progress: 75,
      completedLessons: 18,
      totalLessons: 24,
      videoCount: 32,
      documentCount: 15,
      certificateCount: 3,
      icon: "BookOpen",
      iconBg: "bg-success/10",
      iconColor: "text-success",
      description: `Maîtrisez les fondamentaux de la couture industrielle avec ce parcours complet. De l'installation des machines aux premières réalisations, développez une base solide pour votre carrière professionnelle.`
    },
    {
      id: 2,
      title: "Techniques Avancées",
      difficulty: "Avancé",
      duration: "12-16 semaines",
      progress: 35,
      completedLessons: 12,
      totalLessons: 34,
      videoCount: 48,
      documentCount: 22,
      certificateCount: 5,
      icon: "Zap",
      iconBg: "bg-error/10",
      iconColor: "text-error",
      description: `Perfectionnez vos compétences avec des techniques avancées de couture industrielle. Surpiqûres complexes, assemblages spécialisés et finitions haut de gamme.`
    },
    {
      id: 3,
      title: "Maintenance Préventive",
      difficulty: "Intermédiaire",
      duration: "6-8 semaines",
      progress: 60,
      completedLessons: 15,
      totalLessons: 25,
      videoCount: 28,
      documentCount: 18,
      certificateCount: 4,
      icon: "Wrench",
      iconBg: "bg-warning/10",
      iconColor: "text-warning",
      description: `Apprenez à maintenir vos machines en parfait état. Lubrification, réglages, diagnostic précoce et planification de maintenance pour optimiser la durée de vie.`
    },
    {
      id: 4,
      title: "Efficacité Business",
      difficulty: "Intermédiaire",
      duration: "4-6 semaines",
      progress: 0,
      completedLessons: 0,
      totalLessons: 16,
      videoCount: 20,
      documentCount: 12,
      certificateCount: 2,
      icon: "TrendingUp",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: `Optimisez votre productivité et rentabilité. Organisation d'atelier, gestion des flux, calcul des coûts et amélioration continue des processus.`
    }
  ];

  // Mock tutorials data
  const tutorials = [
    {
      id: 1,
      title: "Réglage Tension Fil Supérieur - Machine Droite",
      description: "Apprenez à régler parfaitement la tension du fil supérieur pour éviter les cassures et obtenir des points réguliers.",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop",
      duration: "12:34",
      instructor: "Marie Dubois",
      rating: 4.8,
      views: "2.1k",
      status: "available",
      progress: 0,
      hasDownload: true,
      category: "maintenance",
      level: "Débutant"
    },
    {
      id: 2,
      title: "Diagnostic Bruit Anormal - Surjeteuse",
      description: "Identifiez et résolvez les problèmes de bruit sur votre surjeteuse grâce à ce guide diagnostic complet.",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
      duration: "18:45",
      instructor: "Jean-Pierre Martin",
      rating: 4.9,
      views: "1.8k",
      status: "in-progress",
      progress: 65,
      hasDownload: true,
      category: "troubleshooting",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "Techniques Surpiqûre Professionnelle",
      description: "Maîtrisez les techniques de surpiqûre pour des finitions parfaites et durables sur tous types de tissus.",
      thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=225&fit=crop",
      duration: "25:12",
      instructor: "Sophie Leroy",
      rating: 4.7,
      views: "3.2k",
      status: "completed",
      progress: 100,
      hasDownload: true,
      category: "techniques",
      level: "Avancé"
    },
    {
      id: 4,
      title: "Sécurité Atelier - Protocoles Essentiels",
      description: "Découvrez les protocoles de sécurité indispensables pour un environnement de travail sûr et conforme.",
      thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=225&fit=crop",
      duration: "15:28",
      instructor: "Michel Rousseau",
      rating: 4.9,
      views: "1.5k",
      status: "locked",
      progress: 0,
      hasDownload: false,
      category: "safety",
      level: "Tous niveaux"
    }
  ];

  const levelOptions = [
    { value: 'all', label: 'Tous niveaux' },
    { value: 'beginner', label: 'Débutant' },
    { value: 'intermediate', label: 'Intermédiaire' },
    { value: 'advanced', label: 'Avancé' }
  ];

  const tabs = [
    { id: 'paths', label: 'Parcours', icon: 'Map', count: learningPaths?.length },
    { id: 'tutorials', label: 'Tutoriels', icon: 'Play', count: tutorials?.length },
    { id: 'progress', label: 'Progression', icon: 'TrendingUp', count: null },
    { id: 'webinars', label: 'Webinaires', icon: 'Video', count: 3 },
    { id: 'library', label: 'Bibliothèque', icon: 'BookOpen', count: 156 }
  ];

  const handleStartPath = (pathId) => {
    console.log('Starting learning path:', pathId);
  };

  const handlePlayTutorial = (tutorialId) => {
    console.log('Playing tutorial:', tutorialId);
  };

  const filteredTutorials = tutorials?.filter(tutorial => {
    const matchesSearch = tutorial?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         tutorial?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || tutorial?.level?.toLowerCase()?.includes(selectedLevel);
    return matchesSearch && matchesLevel;
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'paths':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Parcours d'Apprentissage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Suivez nos parcours structurés pour développer vos compétences étape par étape. 
                Chaque parcours combine vidéos, guides pratiques et évaluations.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {learningPaths?.map((path) => (
                <LearningPathCard
                  key={path?.id}
                  path={path}
                  onStartPath={handleStartPath}
                />
              ))}
            </div>
          </div>
        );

      case 'tutorials':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Tutoriels Vidéo</h2>
                <p className="text-muted-foreground">
                  Apprenez avec nos experts à travers des tutoriels détaillés et pratiques.
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Input
                  type="search"
                  placeholder="Rechercher un tutoriel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-64"
                />
                <Select
                  options={levelOptions}
                  value={selectedLevel}
                  onChange={setSelectedLevel}
                  placeholder="Niveau"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials?.map((tutorial) => (
                <TutorialCard
                  key={tutorial?.id}
                  tutorial={tutorial}
                  onPlayTutorial={handlePlayTutorial}
                />
              ))}
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Votre Progression</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Suivez vos progrès, découvrez vos réalisations et planifiez votre apprentissage.
              </p>
            </div>
            
            <ProgressDashboard userProgress={userProgress} />
          </div>
        );

      case 'webinars':
        return <LiveWebinarSection />;

      case 'library':
        return <TechnicalLibrary />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <main className={`pt-16 transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="p-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-primary rounded-full">
                  <Icon name="GraduationCap" size={32} color="white" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Académie de Formation Usine Jack
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Développez votre expertise en couture industrielle avec nos formations complètes. 
                De l'apprentissage des bases à la maîtrise des techniques avancées.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                >
                  Commencer l'Apprentissage
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Search"
                  iconPosition="left"
                  onClick={() => setIsDiagnosticOpen(true)}
                >
                  Diagnostic Intelligent
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Webinaires Live
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Icon name="Users" size={20} className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">12,847</div>
                  <div className="text-sm text-muted-foreground">Apprenants Actifs</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="Play" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">340+</div>
                  <div className="text-sm text-muted-foreground">Tutoriels Vidéo</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Icon name="Award" size={20} className="text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2,156</div>
                  <div className="text-sm text-muted-foreground">Certificats Délivrés</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Icon name="Clock" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">45,000+</div>
                  <div className="text-sm text-muted-foreground">Heures de Formation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-card border border-border rounded-lg mb-8">
            <div className="flex overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                  {tab?.count && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                      {tab?.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </main>
      {/* Diagnostic Wizard */}
      <DiagnosticWizard 
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
      {/* Footer */}
      <footer className={`bg-card border-t border-border mt-16 transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Formation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary transition-colors">Parcours Débutant</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Techniques Avancées</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Maintenance</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Certifications</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary transition-colors">Bibliothèque Technique</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Guides PDF</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Diagnostic</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Communauté</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary transition-colors">Forums</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Webinaires</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Projets Partagés</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Experts</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary transition-colors">Centre d'Aide</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Contact Expert</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Assistance Technique</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Feedback</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} Usine Jack. Tous droits réservés. Votre partenaire en formation industrielle.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearningAcademyPage;