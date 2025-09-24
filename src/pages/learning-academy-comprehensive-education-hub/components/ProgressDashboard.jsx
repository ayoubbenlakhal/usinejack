import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgressDashboard = ({ userProgress }) => {
  const achievements = [
    { id: 1, name: 'Premier Pas', description: 'Première leçon terminée', icon: 'Award', earned: true, date: '15 Sep 2025' },
    { id: 2, name: 'Débutant Certifié', description: '10 leçons complétées', icon: 'Medal', earned: true, date: '10 Sep 2025' },
    { id: 3, name: 'Technicien Junior', description: 'Parcours maintenance terminé', icon: 'Wrench', earned: false, progress: 75 },
    { id: 4, name: 'Expert Couture', description: '50 heures de formation', icon: 'Crown', earned: false, progress: 45 },
    { id: 5, name: 'Mentor Communauté', description: '5 réponses utiles', icon: 'Users', earned: false, progress: 20 }
  ];

  const skillLevels = [
    { skill: 'Opération Machine', level: 85, maxLevel: 100, color: 'bg-success' },
    { skill: 'Maintenance Préventive', level: 65, maxLevel: 100, color: 'bg-warning' },
    { skill: 'Techniques Avancées', level: 40, maxLevel: 100, color: 'bg-primary' },
    { skill: 'Diagnostic Problèmes', level: 30, maxLevel: 100, color: 'bg-accent' }
  ];

  const recentActivity = [
    { id: 1, type: 'completed', title: 'Réglage Tension Fil Supérieur', date: '16 Sep 2025', points: 50 },
    { id: 2, type: 'started', title: 'Maintenance Préventive Hebdomadaire', date: '15 Sep 2025', points: 0 },
    { id: 3, type: 'certificate', title: 'Certificat Opérateur Niveau 2', date: '14 Sep 2025', points: 200 },
    { id: 4, type: 'completed', title: 'Diagnostic Bruit Anormal', date: '13 Sep 2025', points: 75 }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'completed': return 'CheckCircle';
      case 'started': return 'Play';
      case 'certificate': return 'Award';
      default: return 'Circle';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'completed': return 'text-success';
      case 'started': return 'text-primary';
      case 'certificate': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="BookOpen" size={20} className="text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{userProgress?.completedLessons}</div>
              <div className="text-sm text-muted-foreground">Leçons Terminées</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <Icon name="Award" size={20} className="text-success" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{userProgress?.certificates}</div>
              <div className="text-sm text-muted-foreground">Certificats Obtenus</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Icon name="Clock" size={20} className="text-warning" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{userProgress?.studyHours}h</div>
              <div className="text-sm text-muted-foreground">Temps d'Étude</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Icon name="Zap" size={20} className="text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{userProgress?.totalPoints}</div>
              <div className="text-sm text-muted-foreground">Points XP</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Levels */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Niveaux de Compétence</h3>
            <Button variant="ghost" size="sm" iconName="TrendingUp">
              Détails
            </Button>
          </div>
          
          <div className="space-y-4">
            {skillLevels?.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">{skill?.skill}</span>
                  <span className="text-muted-foreground">{skill?.level}/{skill?.maxLevel}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${skill?.color}`}
                    style={{ width: `${skill?.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Réalisations</h3>
            <Button variant="ghost" size="sm" iconName="Trophy">
              Voir Tout
            </Button>
          </div>
          
          <div className="space-y-3">
            {achievements?.slice(0, 4)?.map((achievement) => (
              <div key={achievement?.id} className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  achievement?.earned ? 'bg-warning/10' : 'bg-muted'
                }`}>
                  <Icon 
                    name={achievement?.icon} 
                    size={16} 
                    className={achievement?.earned ? 'text-warning' : 'text-muted-foreground'} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      achievement?.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement?.name}
                    </span>
                    {achievement?.earned && (
                      <Icon name="Check" size={14} className="text-success" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {achievement?.description}
                  </p>
                  {!achievement?.earned && achievement?.progress && (
                    <div className="w-full bg-muted rounded-full h-1 mt-1">
                      <div 
                        className="h-1 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${achievement?.progress}%` }}
                      />
                    </div>
                  )}
                </div>
                {achievement?.earned && (
                  <span className="text-xs text-muted-foreground">
                    {achievement?.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Activité Récente</h3>
          <Button variant="ghost" size="sm" iconName="History">
            Historique Complet
          </Button>
        </div>
        
        <div className="space-y-3">
          {recentActivity?.map((activity) => (
            <div key={activity?.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`p-1.5 rounded-full bg-muted`}>
                <Icon 
                  name={getActivityIcon(activity?.type)} 
                  size={14} 
                  className={getActivityColor(activity?.type)} 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  {activity?.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {activity?.date}
                </div>
              </div>
              {activity?.points > 0 && (
                <div className="flex items-center space-x-1 text-xs font-medium text-accent">
                  <Icon name="Plus" size={12} />
                  <span>{activity?.points} XP</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;