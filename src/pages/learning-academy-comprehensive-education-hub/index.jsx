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
      description: `Maîtrisez les fondamentaux de la couture industrielle avec ce parcours complet.`
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
      description: `Perfectionnez vos compétences avec des techniques avancées de couture industrielle.`
    }
  ];

  // Mock tutorials data
  const tutorials = [
    {
      id: 1,
      title: "Réglage Tension Fil Supérieur - Machine Droite",
      description: "Apprenez à régler parfaitement la tension du fil supérieur.",
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
      description: "Identifiez et résolvez les problèmes de bruit.",
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
    { id: 'library', label: 'Bibliothèque', icon: 'BookOpen', count: 156 },
    { id: 'diagnostic', label: 'Diagnostic', icon: 'SearchCheck', count: null }, // 🔹 ajouté
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
            <h2 className="text-2xl font-bold text-foreground">Parcours d'Apprentissage</h2>
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
            <h2 className="text-2xl font-bold text-foreground">Tutoriels Vidéo & PDF</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials?.map((tutorial) => (
                <div key={tutorial?.id} className="bg-card border border-border rounded-lg p-4">
                  <TutorialCard
                    tutorial={tutorial}
                    onPlayTutorial={handlePlayTutorial}
                  />
                  {/* 🔹 Ajouter bouton PDF */}
                  {tutorial?.hasDownload && (
                    <a
                      href={`/pdfs/${tutorial.id}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline mt-2"
                    >
                      <Icon name="Download" size={16} className="mr-1" />
                      Télécharger le PDF
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'progress':
        return <ProgressDashboard userProgress={userProgress} />;

      case 'webinars':
        return <LiveWebinarSection />;

      case 'library':
        return <TechnicalLibrary />;

      case 'diagnostic':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">Diagnostic Intelligent</h2>
            <p className="text-muted-foreground text-center">
              Identifiez vos lacunes et recevez des recommandations personnalisées.
            </p>
            <DiagnosticWizard isOpen={true} onClose={() => setActiveTab('paths')} />
          </div>
        );

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
      <main className={`pt-16 transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="p-6">
         
        
{/* Hero Section */}
<div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-lg p-8 mb-8 text-center">
  <h1 className="text-3xl font-bold text-foreground mb-4">
    Académie de Formation Usine Jack
  </h1>
  <p className="text-lg text-muted-foreground mb-6">
    Développez votre expertise avec des vidéos, PDF , aider par diagnostic intelligent.
  </p>

  {/* 🔽 Flèche au-dessus */}
  <div className="flex justify-center mb-3">
    <Icon
      name="ArrowDown"
      size={28}
      className="text-primary animate-bounce"
    />
  </div>

  {/* 🔹 Bouton Diagnostic Intelligent */}
  <button
    onClick={() => setActiveTab('diagnostic')}
    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary/90 transition"
  >
    <Icon name="SearchCheck" size={20} className="mr-2" />
    Diagnostic Intelligent
  </button>
</div>





          {/* Tabs */}
          <div className="bg-card border border-border rounded-lg mb-8">
            <div className="flex overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
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

          {/* Content */}
          <div className="min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningAcademyPage;
