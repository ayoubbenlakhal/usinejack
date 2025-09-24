import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningProgress = ({ learningData, onContinueCourse, onViewCertificate }) => {
  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'text-warning bg-warning/10';
      case 'Intermédiaire': return 'text-primary bg-primary/10';
      case 'Avancé': return 'text-success bg-success/10';
      case 'Expert': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="GraduationCap" size={24} className="text-success" />
          <span>Progression d'Apprentissage</span>
        </h2>
        <Button variant="outline" iconName="BookOpen" size="sm">
          Voir Tous les Cours
        </Button>
      </div>
      {/* Current Skill Level */}
      <div className="mb-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">Niveau Actuel</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillLevelColor(learningData?.currentLevel)}`}>
            {learningData?.currentLevel}
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div 
            className="bg-success h-2 rounded-full transition-all duration-500"
            style={{ width: `${learningData?.overallProgress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {learningData?.overallProgress}% vers le niveau suivant
        </p>
      </div>
      {/* Current Courses */}
      <div className="space-y-4 mb-6">
        <h3 className="font-semibold text-foreground">Cours en Cours</h3>
        {learningData?.currentCourses?.map((course) => (
          <div key={course?.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{course?.title}</h4>
                <p className="text-sm text-muted-foreground">{course?.description}</p>
              </div>
              <span className="text-xs text-muted-foreground ml-4">
                {course?.progress}% terminé
              </span>
            </div>
            
            <div className="w-full bg-border rounded-full h-1.5 mb-3">
              <div 
                className="bg-primary h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${course?.progress}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{course?.timeRemaining}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="PlayCircle" size={12} />
                  <span>{course?.lessonsCompleted}/{course?.totalLessons} leçons</span>
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                iconName="Play"
                onClick={() => onContinueCourse(course?.id)}
              >
                Continuer
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Completed Certificates */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Certificats Obtenus</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learningData?.certificates?.map((cert) => (
            <div key={cert?.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-micro">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="Award" size={20} className="text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">{cert?.name}</p>
                <p className="text-xs text-muted-foreground">{cert?.completedDate}</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                iconName="Download"
                onClick={() => onViewCertificate(cert?.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;