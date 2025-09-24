import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathCard = ({ path, onStartPath }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Débutant':
        return 'text-success bg-success/10';
      case 'Intermédiaire':
        return 'text-warning bg-warning/10';
      case 'Avancé':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    return 'bg-primary';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${path?.iconBg}`}>
            <Icon name={path?.icon} size={24} className={path?.iconColor} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {path?.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path?.difficulty)}`}>
                {path?.difficulty}
              </span>
              <span className="text-sm text-muted-foreground">
                {path?.duration}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-foreground">{path?.progress}%</div>
          <div className="text-xs text-muted-foreground">Complété</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {path?.description}
      </p>
      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Progression</span>
          <span>{path?.completedLessons}/{path?.totalLessons} leçons</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(path?.progress)}`}
            style={{ width: `${path?.progress}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Play" size={14} />
            <span>{path?.videoCount} vidéos</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="FileText" size={14} />
            <span>{path?.documentCount} guides</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Award" size={14} />
            <span>{path?.certificateCount} certificats</span>
          </div>
        </div>
        
        <Button 
          variant={path?.progress > 0 ? "default" : "outline"}
          size="sm"
          iconName={path?.progress > 0 ? "Play" : "BookOpen"}
          iconPosition="left"
          onClick={() => onStartPath(path?.id)}
        >
          {path?.progress > 0 ? "Continuer" : "Commencer"}
        </Button>
      </div>
    </div>
  );
};

export default LearningPathCard;