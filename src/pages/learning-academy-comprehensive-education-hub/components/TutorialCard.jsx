import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const TutorialCard = ({ tutorial, onPlayTutorial }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10';
      case 'in-progress':
        return 'text-warning bg-warning/10';
      case 'locked':
        return 'text-muted-foreground bg-muted/50';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'in-progress':
        return 'Clock';
      case 'locked':
        return 'Lock';
      default:
        return 'Play';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'En cours';
      case 'locked':
        return 'Verrouillé';
      default:
        return 'Disponible';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 group">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image 
            src={tutorial?.thumbnail}
            alt={tutorial?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tutorial?.status)}`}>
            <Icon name={getStatusIcon(tutorial?.status)} size={12} className="inline mr-1" />
            {getStatusText(tutorial?.status)}
          </span>
        </div>
        
        <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
          {tutorial?.duration}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="default"
            size="sm"
            iconName="Play"
            disabled={tutorial?.status === 'locked'}
            onClick={() => onPlayTutorial(tutorial?.id)}
          >
            Regarder
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {tutorial?.title}
          </h4>
          <div className="flex items-center space-x-1 ml-2">
            <Icon name="Star" size={14} className="text-warning fill-current" />
            <span className="text-xs text-muted-foreground">{tutorial?.rating}</span>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {tutorial?.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{tutorial?.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="User" size={12} />
              <span>{tutorial?.instructor}</span>
            </div>
          </div>
          
          {tutorial?.hasDownload && (
            <Button variant="ghost" size="xs" iconName="Download">
              PDF
            </Button>
          )}
        </div>
        
        {tutorial?.progress > 0 && tutorial?.status !== 'completed' && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Progression</span>
              <span>{tutorial?.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="h-1 bg-primary rounded-full transition-all duration-500"
                style={{ width: `${tutorial?.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialCard;