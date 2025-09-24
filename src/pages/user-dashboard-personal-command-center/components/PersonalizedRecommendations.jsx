import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PersonalizedRecommendations = ({ recommendations, onViewProduct, onAddToCart }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Machines': return 'Settings';
      case 'Accessoires': return 'Wrench';
      case 'Formation': return 'GraduationCap';
      case 'Pièces': return 'Package';
      default: return 'Star';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Machines': return 'text-primary bg-primary/10';
      case 'Accessoires': return 'text-accent bg-accent/10';
      case 'Formation': return 'text-success bg-success/10';
      case 'Pièces': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="Sparkles" size={24} className="text-accent" />
          <span>Recommandations Personnalisées</span>
        </h2>
        <Button variant="outline" iconName="RefreshCw" size="sm">
          Actualiser
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations?.map((recommendation) => (
          <div key={recommendation?.id} className="border border-border rounded-lg p-4 hover:shadow-elevated transition-industrial">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={recommendation?.image} 
                  alt={recommendation?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(recommendation?.category)}`}>
                      <Icon name={getCategoryIcon(recommendation?.category)} size={12} className="inline mr-1" />
                      {recommendation?.category}
                    </span>
                    {recommendation?.isNew && (
                      <span className="px-2 py-1 bg-success/10 text-success rounded-full text-xs font-medium">
                        Nouveau
                      </span>
                    )}
                  </div>
                  {recommendation?.discount && (
                    <span className="text-xs font-medium text-error">
                      -{recommendation?.discount}%
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-foreground mb-1 truncate">
                  {recommendation?.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {recommendation?.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {recommendation?.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {recommendation?.originalPrice}€
                      </span>
                    )}
                    <span className="text-lg font-bold text-foreground">
                      {recommendation?.price}€
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-sm text-muted-foreground">
                      {recommendation?.rating}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                    <Icon name="Target" size={12} />
                    <span>Recommandé car: {recommendation?.reason}</span>
                  </div>
                  
                  {recommendation?.compatibility && (
                    <div className="flex items-center space-x-2 text-xs text-success">
                      <Icon name="CheckCircle" size={12} />
                      <span>Compatible avec vos machines</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    iconName="Eye"
                    onClick={() => onViewProduct(recommendation?.id)}
                    className="flex-1"
                  >
                    Voir Détails
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    iconName="ShoppingCart"
                    onClick={() => onAddToCart(recommendation?.id)}
                  >
                    Ajouter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Recommendation Categories */}
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Explorer par Catégorie</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['Machines', 'Accessoires', 'Formation', 'Pièces']?.map((category) => (
            <button
              key={category}
              className={`flex items-center justify-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted/50 transition-micro ${getCategoryColor(category)}`}
            >
              <Icon name={getCategoryIcon(category)} size={18} />
              <span className="font-medium text-sm">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;