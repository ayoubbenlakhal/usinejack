import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ComparisonModal = ({ products, isOpen, onClose, onRemoveProduct }) => {
  if (!isOpen || products?.length === 0) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    })?.format(price);
  };

  const comparisonSpecs = [
    { key: 'type', label: 'Type de Machine' },
    { key: 'power', label: 'Puissance' },
    { key: 'maxSpeed', label: 'Vitesse Maximum' },
    { key: 'stitchesPerMin', label: 'Points par Minute' },
    { key: 'needleSystem', label: 'Système d\'Aiguille' },
    { key: 'threadTension', label: 'Tension du Fil' },
    { key: 'footLift', label: 'Levée du Pied' },
    { key: 'warranty', label: 'Garantie' },
    { key: 'weight', label: 'Poids' },
    { key: 'dimensions', label: 'Dimensions' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-lg shadow-elevated max-w-7xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground flex items-center space-x-2">
            <Icon name="GitCompare" size={24} />
            <span>Comparateur Intelligent</span>
            <span className="text-sm text-muted-foreground">
              ({products?.length}/3 machines)
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-micro"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Comparison Content */}
        <div className="overflow-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            {/* Product Headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products?.map((product) => (
                <div key={product?.id} className="bg-muted rounded-lg p-4 relative">
                  <button
                    onClick={() => onRemoveProduct(product?.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-error text-error-foreground rounded-full flex items-center justify-center hover:bg-error/80 transition-micro"
                  >
                    <Icon name="X" size={12} />
                  </button>
                  
                  <div className="aspect-[4/3] mb-4 overflow-hidden rounded-md">
                    <Image
                      src={product?.image}
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product?.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={12}
                          className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                        />
                      ))}
                    </div>
                    <span className="text-sm">{product?.rating}</span>
                    <span className="text-xs text-muted-foreground">({product?.reviews})</span>
                  </div>
                  
                  <div className="text-lg font-bold text-foreground mb-4">
                    {formatPrice(product?.price)}
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="default" size="sm" fullWidth iconName="ShoppingCart">
                      Ajouter au Panier
                    </Button>
                    <Button variant="outline" size="sm" fullWidth iconName="Calendar">
                      Demander une Démo
                    </Button>
                  </div>
                </div>
              ))}
              
              {/* Add More Slot */}
              {products?.length < 3 && (
                <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-4 flex flex-col items-center justify-center min-h-[300px]">
                  <Icon name="Plus" size={32} className="text-muted-foreground mb-2" />
                  <p className="text-muted-foreground text-center">
                    Ajoutez une machine pour comparer
                  </p>
                  <Button variant="outline" size="sm" className="mt-3" onClick={onClose}>
                    Parcourir
                  </Button>
                </div>
              )}
            </div>

            {/* Specifications Comparison */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border">
                <h3 className="font-semibold text-foreground">Spécifications Techniques</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-foreground min-w-[200px]">
                        Caractéristique
                      </th>
                      {products?.map((product) => (
                        <th key={product?.id} className="text-center p-4 font-medium text-foreground min-w-[200px]">
                          {product?.brand}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonSpecs?.map((spec, index) => (
                      <tr key={spec?.key} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}>
                        <td className="p-4 font-medium text-foreground border-r border-border">
                          {spec?.label}
                        </td>
                        {products?.map((product) => (
                          <td key={product?.id} className="p-4 text-center text-foreground">
                            {product?.specs?.[spec?.key] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="mt-6 bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border">
                <h3 className="font-semibold text-foreground">Fonctionnalités</h3>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products?.map((product) => (
                    <div key={product?.id}>
                      <h4 className="font-medium text-foreground mb-3">{product?.brand}</h4>
                      <div className="space-y-2">
                        {product?.features?.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Demonstrations */}
            <div className="mt-6 bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border">
                <h3 className="font-semibold text-foreground">Démonstrations Vidéo</h3>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products?.map((product) => (
                    <div key={product?.id} className="space-y-3">
                      <h4 className="font-medium text-foreground">{product?.brand}</h4>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                        <Button variant="default" iconName="Play">
                          Voir la Démo
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Durée: 3:45 • Vue d'ensemble des fonctionnalités
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;