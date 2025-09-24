import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import DashboardHeader from './components/DashboardHeader';
import QuickStatsCards from './components/QuickStatsCards';
import MachineOverview from './components/MachineOverview';
import LearningProgress from './components/LearningProgress';
import MaintenanceCalendar from './components/MaintenanceCalendar';
import RecentPurchases from './components/RecentPurchases';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import QuickActions from './components/QuickActions';
import WorkshopMetrics from './components/WorkshopMetrics';

const UserDashboard = () => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock user data
  const userData = {
    name: "Marie Dubois",
    accountType: "Compte Premium",
    memberSince: "Mars 2022",
    unreadNotifications: 3,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  };

  // Mock statistics data
  const statsData = {
    activeMachines: 5,
    learningHours: 47,
    scheduledMaintenance: 2,
    recentOrders: 8
  };

  // Mock machines data
  const machinesData = [
    {
      id: 1,
      name: "Brother PR-1050X",
      model: "PR-1050X",
      serialNumber: "BRO-2023-001",
      status: "Excellent",
      purchaseDate: "15/03/2023",
      hoursUsed: 1247,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Janome MB-7",
      model: "MB-7",
      serialNumber: "JAN-2023-002",
      status: "Bon",
      purchaseDate: "22/06/2023",
      hoursUsed: 892,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Singer Futura XL-580",
      model: "XL-580",
      serialNumber: "SIN-2022-003",
      status: "Attention",
      purchaseDate: "10/11/2022",
      hoursUsed: 2156,
      image: "https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Bernina B790 Plus",
      model: "B790 Plus",
      serialNumber: "BER-2023-004",
      status: "Excellent",
      purchaseDate: "05/08/2023",
      hoursUsed: 634,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop"
    }
  ];

  // Mock learning data
  const learningData = {
    currentLevel: "Intermédiaire",
    overallProgress: 68,
    currentCourses: [
      {
        id: 1,
        title: "Techniques de Broderie Avancées",
        description: "Maîtrisez les techniques de broderie professionnelle",
        progress: 75,
        timeRemaining: "2h 30min",
        lessonsCompleted: 12,
        totalLessons: 16
      },
      {
        id: 2,
        title: "Maintenance Préventive des Machines",
        description: "Apprenez à entretenir vos équipements",
        progress: 45,
        timeRemaining: "4h 15min",
        lessonsCompleted: 9,
        totalLessons: 20
      }
    ],
    certificates: [
      {
        id: 1,
        name: "Certification Broderie Industrielle",
        completedDate: "15/09/2024"
      },
      {
        id: 2,
        name: "Spécialiste Maintenance Niveau 1",
        completedDate: "22/08/2024"
      },
      {
        id: 3,
        name: "Techniques de Couture Avancées",
        completedDate: "10/07/2024"
      }
    ]
  };

  // Mock maintenance data
  const maintenanceData = {
    summary: {
      scheduled: 3,
      inProgress: 1,
      completed: 12
    },
    upcoming: [
      {
        id: 1,
        title: "Révision Générale",
        machine: "Brother PR-1050X",
        date: "20/09/2024",
        time: "09:00",
        technician: "Jean Martin",
        status: "Planifié",
        priority: "Moyenne",
        description: "Révision complète avec changement des pièces d\'usure",
        estimatedCost: 180
      },
      {
        id: 2,
        title: "Réparation Tension Fil",
        machine: "Singer Futura XL-580",
        date: "18/09/2024",
        time: "14:30",
        technician: "Sophie Laurent",
        status: "En cours",
        priority: "Haute",
        description: "Problème de tension du fil supérieur",
        estimatedCost: 95
      },
      {
        id: 3,
        title: "Calibrage Système",
        machine: "Janome MB-7",
        date: "25/09/2024",
        time: "11:00",
        technician: "Pierre Durand",
        status: "Planifié",
        priority: "Basse",
        description: "Calibrage du système de positionnement",
        estimatedCost: 120
      }
    ]
  };

  // Mock purchases data
  const purchasesData = [
    {
      id: 1,
      name: "Kit d\'Aiguilles Premium",
      orderNumber: "CMD-2024-0892",
      status: "Livré",
      orderDate: "12/09/2024",
      quantity: 2,
      totalAmount: 45,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Bobines de Fil Polyester",
      orderNumber: "CMD-2024-0891",
      status: "En transit",
      orderDate: "10/09/2024",
      quantity: 12,
      totalAmount: 89,
      trackingInfo: "Colis en cours de livraison - Arrivée prévue demain",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Pied Presseur Spécialisé",
      orderNumber: "CMD-2024-0890",
      status: "Préparation",
      orderDate: "08/09/2024",
      quantity: 1,
      totalAmount: 125,
      image: "https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Stabilisateur Broderie",
      orderNumber: "CMD-2024-0889",
      status: "Livré",
      orderDate: "05/09/2024",
      quantity: 5,
      totalAmount: 67,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop"
    }
  ];

  // Mock recommendations data
  const recommendationsData = [
    {
      id: 1,
      name: "Brother Innov-ís XP3",
      category: "Machines",
      description: "Machine à coudre et broder haut de gamme avec écran tactile 10.1 pouces",
      price: 4299,
      originalPrice: 4799,
      discount: 10,
      rating: 4.8,
      reason: "Compatible avec vos projets de broderie",
      compatibility: true,
      isNew: true,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Formation Broderie 3D",
      category: "Formation",
      description: "Cours avancé pour maîtriser les techniques de broderie en relief",
      price: 199,
      rating: 4.9,
      reason: "Basé sur votre niveau intermédiaire",
      compatibility: false,
      isNew: false,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Kit Maintenance Premium",
      category: "Accessoires",
      description: "Kit complet d\'outils et produits pour l\'entretien professionnel",
      price: 89,
      originalPrice: 119,
      discount: 25,
      rating: 4.7,
      reason: "Recommandé pour vos machines",
      compatibility: true,
      isNew: false,
      image: "https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Pièces de Rechange Brother",
      category: "Pièces",
      description: "Set de pièces détachées originales pour Brother PR-1050X",
      price: 156,
      rating: 4.6,
      reason: "Pour votre Brother PR-1050X",
      compatibility: true,
      isNew: false,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop"
    }
  ];

  // Mock workshop metrics data
  const metricsData = {
    keyMetrics: [
      {
        id: 1,
        type: "production",
        label: "Production Mensuelle",
        value: "2,847",
        change: "+12%",
        trend: "up",
        description: "Pièces produites"
      },
      {
        id: 2,
        type: "efficiency",
        label: "Efficacité",
        value: "94%",
        change: "+3%",
        trend: "up",
        description: "Taux d\'utilisation"
      },
      {
        id: 3,
        type: "quality",
        label: "Qualité",
        value: "98.5%",
        change: "0%",
        trend: "stable",
        description: "Taux de conformité"
      },
      {
        id: 4,
        type: "revenue",
        label: "Chiffre d'Affaires",
        value: "15,420€",
        change: "+8%",
        trend: "up",
        description: "Ce mois-ci"
      }
    ],
    machineUtilization: [
      { id: 1, name: "Brother PR-1050X", utilization: 87 },
      { id: 2, name: "Janome MB-7", utilization: 92 },
      { id: 3, name: "Singer XL-580", utilization: 76 },
      { id: 4, name: "Bernina B790", utilization: 89 }
    ],
    achievements: [
      {
        id: 1,
        title: "Record de Production",
        description: "Nouveau record mensuel atteint",
        date: "Septembre 2024"
      },
      {
        id: 2,
        title: "Zéro Défaut",
        description: "Semaine sans aucun défaut qualité",
        date: "Semaine 37"
      }
    ],
    successStories: [
      {
        id: 1,
        title: "Optimisation du Workflow",
        description: "Réorganisation de l'atelier qui a permis d'améliorer significativement la productivité",
        improvement: "15% productivité",
        revenue: "2,340",
        likes: 24,
        date: "Il y a 2 semaines"
      },
      {
        id: 2,
        title: "Nouveau Contrat Client",
        description: "Signature d\'un contrat majeur grâce à la qualité de nos finitions",
        improvement: "25% CA",
        revenue: "8,500",
        likes: 31,
        date: "Il y a 1 mois"
      }
    ]
  };

  // Event handlers
  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const handleViewManual = (machineId) => {
    console.log('View manual for machine:', machineId);
  };

  const handleScheduleMaintenance = (machineId) => {
    console.log('Schedule maintenance for machine:', machineId);
  };

  const handleContinueCourse = (courseId) => {
    console.log('Continue course:', courseId);
  };

  const handleViewCertificate = (certId) => {
    console.log('View certificate:', certId);
  };

  const handleScheduleService = () => {
    console.log('Schedule service clicked');
  };

  const handleViewMaintenanceDetails = (maintenanceId) => {
    console.log('View maintenance details:', maintenanceId);
  };

  const handleViewInvoice = (purchaseId) => {
    console.log('View invoice for purchase:', purchaseId);
  };

  const handleReorder = (purchaseId) => {
    console.log('Reorder purchase:', purchaseId);
  };

  const handleTrackOrder = (purchaseId) => {
    console.log('Track order:', purchaseId);
  };

  const handleViewProduct = (productId) => {
    console.log('View product:', productId);
  };

  const handleAddToCart = (productId) => {
    console.log('Add to cart:', productId);
  };

  const handleQuickAction = (actionId) => {
    console.log('Quick action:', actionId);
    switch (actionId) {
      case 'emergency-support': alert('Redirection vers le support d\'urgence...');
        break;
      case 'schedule-maintenance': alert('Ouverture du calendrier de maintenance...');
        break;
      case 'order-parts': alert('Redirection vers la boutique de pièces...');
        break;
      case 'download-manual':
        alert('Téléchargement du manuel...');
        break;
      case 'contact-support': alert('Ouverture du chat support...');
        break;
      case 'training-booking': alert('Redirection vers les formations...');
        break;
      default:
        console.log('Unknown action:', actionId);
    }
  };

  const handleShareSuccess = () => {
    console.log('Share success story');
  };

  const handleUpdateMetrics = () => {
    console.log('Update metrics configuration');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <DashboardHeader 
          user={userData}
          onNotificationClick={handleNotificationClick}
          onSettingsClick={handleSettingsClick}
        />
        
        <div className="max-w-7xl mx-auto p-6 space-y-8">
          <QuickStatsCards stats={statsData} />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <MachineOverview 
                machines={machinesData}
                onViewManual={handleViewManual}
                onScheduleMaintenance={handleScheduleMaintenance}
              />
              
              <LearningProgress 
                learningData={learningData}
                onContinueCourse={handleContinueCourse}
                onViewCertificate={handleViewCertificate}
              />
              
              <WorkshopMetrics 
                metricsData={metricsData}
                onShareSuccess={handleShareSuccess}
                onUpdateMetrics={handleUpdateMetrics}
              />
            </div>
            
            <div className="space-y-8">
              <QuickActions onAction={handleQuickAction} />
              
              <MaintenanceCalendar 
                maintenanceData={maintenanceData}
                onScheduleService={handleScheduleService}
                onViewDetails={handleViewMaintenanceDetails}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <RecentPurchases 
              purchases={purchasesData}
              onViewInvoice={handleViewInvoice}
              onReorder={handleReorder}
              onTrackOrder={handleTrackOrder}
            />
            
            <PersonalizedRecommendations 
              recommendations={recommendationsData}
              onViewProduct={handleViewProduct}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;