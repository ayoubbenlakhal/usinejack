import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MentorshipSection = ({ searchQuery }) => {
  const [activeTab, setActiveTab] = useState('find-mentor');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const tabs = [
    { id: 'find-mentor', name: 'Trouver un Mentor', icon: 'Search' },
    { id: 'become-mentor', name: 'Devenir Mentor', icon: 'UserPlus' },
    { id: 'my-mentorships', name: 'Mes Mentorats', icon: 'Users' },
    { id: 'success-stories', name: 'Témoignages', icon: 'Heart' }
  ];

  const specialties = [
    { id: 'all', name: 'Toutes Spécialités', count: 89 },
    { id: 'industrial-machines', name: 'Machines Industrielles', count: 23 },
    { id: 'leather-work', name: 'Maroquinerie', count: 18 },
    { id: 'fashion-design', name: 'Stylisme', count: 15 },
    { id: 'pattern-making', name: 'Patronage', count: 12 },
    { id: 'business', name: 'Business Textile', count: 10 },
    { id: 'maintenance', name: 'Maintenance', count: 11 }
  ];

  const mentors = [
    {
      id: 1,
      name: "Marie-Claire Dubois",
      title: "Maître Artisan Couture",
      company: "Atelier Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      specialties: ["Maroquinerie", "Techniques Avancées", "Formation"],
      experience: "25 ans",
      rating: 4.9,
      reviewsCount: 47,
      studentsCount: 156,
      languages: ["Français", "Anglais"],
      location: "Paris, France",
      hourlyRate: "75€/h",
      responseTime: "< 2h",
      availability: "Disponible",
      bio: "Maître artisan avec 25 ans d\'expérience en maroquinerie haut de gamme. Spécialisée dans les techniques traditionnelles et l\'innovation. J\'accompagne les artisans dans leur montée en compétences.",
      achievements: [
        "Meilleur Ouvrier de France 2018",
        "Formatrice certifiée CMA",
        "150+ étudiants formés"
      ],
      isOnline: true,
      isPremium: true
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      title: "Ingénieur Textile Senior",
      company: "Textile Innovation Lab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      specialties: ["Machines Industrielles", "Innovation", "R&D"],
      experience: "20 ans",
      rating: 4.8,
      reviewsCount: 32,
      studentsCount: 89,
      languages: ["Français", "Anglais", "Allemand"],
      location: "Lyon, France",
      hourlyRate: "85€/h",
      responseTime: "< 4h",
      availability: "Disponible",
      bio: "Ingénieur spécialisé dans l\'innovation textile et les machines industrielles. Expert en optimisation de production et nouvelles technologies.",
      achievements: [
        "15 brevets déposés",
        "Consultant international",
        "Auteur de 3 ouvrages techniques"
      ],
      isOnline: false,
      isPremium: true
    },
    {
      id: 3,
      name: "Sophie Laurent",
      title: "Styliste & Patronnière",
      company: "Laurent Design Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      specialties: ["Stylisme", "Patronage", "Mode Durable"],
      experience: "12 ans",
      rating: 4.7,
      reviewsCount: 28,
      studentsCount: 67,
      languages: ["Français", "Italien"],
      location: "Nice, France",
      hourlyRate: "60€/h",
      responseTime: "< 6h",
      availability: "Occupée",
      bio: "Styliste passionnée par la mode durable et éthique. Spécialisée dans le patronage sur mesure et l\'accompagnement de créateurs émergents.",
      achievements: [
        "Prix Jeune Créateur 2020",
        "Marque éco-responsable certifiée",
        "Collaborations avec 50+ marques"
      ],
      isOnline: true,
      isPremium: false
    },
    {
      id: 4,
      name: "Pierre Moreau",
      title: "Consultant Business Textile",
      company: "Textile Business Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      specialties: ["Business Textile", "Stratégie", "Export"],
      experience: "18 ans",
      rating: 4.6,
      reviewsCount: 21,
      studentsCount: 45,
      languages: ["Français", "Anglais", "Espagnol"],
      location: "Toulouse, France",
      hourlyRate: "90€/h",
      responseTime: "< 8h",
      availability: "Disponible",
      bio: "Consultant spécialisé dans le développement business du secteur textile. Accompagnement stratégique et développement international.",
      achievements: [
        "100+ entreprises accompagnées",
        "Expert-comptable textile",
        "Formateur CCI certifié"
      ],
      isOnline: false,
      isPremium: true
    }
  ];

  const mentorships = [
    {
      id: 1,
      mentor: mentors?.[0],
      student: {
        name: "Emma Rousseau",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
      },
      subject: "Techniques de maroquinerie avancées",
      startDate: "2024-08-15",
      progress: 75,
      nextSession: "2024-09-18 14:00",
      totalSessions: 12,
      completedSessions: 9,
      status: "active"
    },
    {
      id: 2,
      mentor: mentors?.[2],
      student: {
        name: "Alexandre Petit",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
      },
      subject: "Création de collection capsule",
      startDate: "2024-07-01",
      progress: 100,
      nextSession: null,
      totalSessions: 8,
      completedSessions: 8,
      status: "completed"
    }
  ];

  const successStories = [
    {
      id: 1,
      student: {
        name: "Emma Rousseau",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        before: "Débutante en maroquinerie",
        after: "Artisan indépendante"
      },
      mentor: mentors?.[0],
      duration: "6 mois",
      achievement: "Ouverture de son propre atelier",
      testimonial: `Grâce à Marie-Claire, j'ai pu maîtriser les techniques traditionnelles de maroquinerie et développer mon style unique. Son accompagnement bienveillant et ses conseils pratiques m'ont permis d'ouvrir mon atelier en toute confiance.`,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      date: "2024-08-30"
    },
    {
      id: 2,
      student: {
        name: "Alexandre Petit",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        before: "Passionné autodidacte",
        after: "Créateur de mode reconnu"
      },
      mentor: mentors?.[2],
      duration: "4 mois",
      achievement: "Première collection présentée en salon",
      testimonial: `Sophie m'a aidé à structurer ma créativité et à professionnaliser mon approche. Grâce à ses conseils en patronage et stylisme, j'ai pu présenter ma première collection au salon Who's Next.`,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
      date: "2024-09-10"
    }
  ];

  const filteredMentors = mentors?.filter(mentor => {
    const matchesSearch = searchQuery === '' || 
      mentor?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      mentor?.specialties?.some(spec => spec?.toLowerCase()?.includes(searchQuery?.toLowerCase())) ||
      mentor?.bio?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === 'all' || 
      mentor?.specialties?.some(spec => spec?.toLowerCase()?.includes(selectedSpecialty?.replace('-', ' ')));
    
    return matchesSearch && matchesSpecialty;
  });

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Disponible': return 'text-success bg-success/10';
      case 'Occupée': return 'text-warning bg-warning/10';
      case 'Indisponible': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const renderFindMentor = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {specialties?.map((specialty) => (
          <button
            key={specialty?.id}
            onClick={() => setSelectedSpecialty(specialty?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-micro ${
              selectedSpecialty === specialty?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <span>{specialty?.name}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              selectedSpecialty === specialty?.id
                ? 'bg-primary-foreground text-primary'
                : 'bg-background text-muted-foreground'
            }`}>
              {specialty?.count}
            </span>
          </button>
        ))}
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMentors?.map((mentor) => (
          <div
            key={mentor?.id}
            className="bg-card rounded-lg border border-border p-6 hover:shadow-elevated transition-meaningful"
          >
            {/* Mentor Header */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <Image
                  src={mentor?.avatar}
                  alt={mentor?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                {mentor?.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-card"></div>
                )}
                {mentor?.isPremium && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Crown" size={12} color="white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{mentor?.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(mentor?.availability)}`}>
                    {mentor?.availability}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{mentor?.title}</p>
                <p className="text-muted-foreground text-xs">{mentor?.company} • {mentor?.location}</p>
              </div>
            </div>

            {/* Rating & Stats */}
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={16} className="text-yellow-500" />
                <span className="font-medium">{mentor?.rating}</span>
                <span className="text-muted-foreground">({mentor?.reviewsCount})</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={16} className="text-muted-foreground" />
                <span>{mentor?.studentsCount} étudiants</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span>{mentor?.responseTime}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-4">
              {mentor?.specialties?.map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {mentor?.bio}
            </p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground mb-2">Réalisations :</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {mentor?.achievements?.slice(0, 2)?.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Award" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages & Rate */}
            <div className="flex items-center justify-between mb-4 pt-4 border-t border-border">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Langues</div>
                <div className="text-sm">{mentor?.languages?.join(', ')}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground mb-1">Tarif</div>
                <div className="text-lg font-semibold text-foreground">{mentor?.hourlyRate}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button variant="default" fullWidth iconName="MessageSquare">
                Contacter
              </Button>
              <Button variant="outline" iconName="Calendar" size="sm">
                <span className="sr-only">Planifier</span>
              </Button>
              <Button variant="ghost" iconName="Heart" size="sm">
                <span className="sr-only">Favoris</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMyMentorships = () => (
    <div className="space-y-6">
      {mentorships?.map((mentorship) => (
        <div
          key={mentorship?.id}
          className="bg-card rounded-lg border border-border p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Image
                src={mentorship?.mentor?.avatar}
                alt={mentorship?.mentor?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-foreground">{mentorship?.subject}</h3>
                <p className="text-muted-foreground text-sm">
                  avec {mentorship?.mentor?.name}
                </p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              mentorship?.status === 'active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
            }`}>
              {mentorship?.status === 'active' ? 'En cours' : 'Terminé'}
            </span>
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progression</span>
              <span className="text-sm font-medium">{mentorship?.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${mentorship?.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Sessions */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-semibold text-foreground">
                {mentorship?.completedSessions}/{mentorship?.totalSessions}
              </div>
              <div className="text-xs text-muted-foreground">Sessions</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-semibold text-foreground">
                {mentorship?.nextSession ? '18 Sep' : 'Terminé'}
              </div>
              <div className="text-xs text-muted-foreground">Prochaine session</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            {mentorship?.status === 'active' && (
              <>
                <Button variant="default" iconName="Video">
                  Rejoindre Session
                </Button>
                <Button variant="outline" iconName="MessageSquare">
                  Messages
                </Button>
              </>
            )}
            {mentorship?.status === 'completed' && (
              <>
                <Button variant="outline" iconName="Star">
                  Évaluer
                </Button>
                <Button variant="ghost" iconName="Download">
                  Certificat
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderSuccessStories = () => (
    <div className="space-y-6">
      {successStories?.map((story) => (
        <div
          key={story?.id}
          className="bg-card rounded-lg border border-border overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src={story?.image}
                alt={story?.achievement}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={story?.student?.avatar}
                  alt={story?.student?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{story?.student?.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {story?.student?.before} → {story?.student?.after}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="User" size={14} />
                  <span>Mentor: {story?.mentor?.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>Durée: {story?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Trophy" size={14} />
                  <span>{story?.achievement}</span>
                </div>
              </div>

              <blockquote className="text-foreground italic mb-4 border-l-4 border-primary pl-4">
                "{story?.testimonial}"
              </blockquote>

              <div className="text-xs text-muted-foreground">
                Témoignage publié le {story?.date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">Programme de Mentorat</h2>
        <p className="text-muted-foreground">
          Connectez-vous avec des experts pour accélérer votre apprentissage
        </p>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 overflow-x-auto">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-micro ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.name}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {activeTab === 'find-mentor' && renderFindMentor()}
      {activeTab === 'become-mentor' && (
        <div className="text-center py-12">
          <Icon name="UserPlus" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Devenir Mentor</h3>
          <p className="text-muted-foreground mb-6">
            Partagez votre expertise et aidez la nouvelle génération d'artisans
          </p>
          <Button variant="default" iconName="Plus">
            Candidater comme Mentor
          </Button>
        </div>
      )}
      {activeTab === 'my-mentorships' && renderMyMentorships()}
      {activeTab === 'success-stories' && renderSuccessStories()}
    </div>
  );
};

export default MentorshipSection;