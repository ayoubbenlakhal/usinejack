import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const RecentPurchases = ({ purchases, onViewInvoice, onReorder, onTrackOrder }) => {
  const getOrderStatusColor = (status) => {
    switch (status) {
      case 'Livré': return 'text-success bg-success/10';
      case 'En transit': return 'text-primary bg-primary/10';
      case 'Préparation': return 'text-warning bg-warning/10';
      case 'Annulé': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-industrial">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="ShoppingCart" size={24} className="text-accent" />
          <span>Mes Achats Récents</span>
        </h2>
        <Button variant="outline" iconName="Receipt" size="sm">
          Tous les Achats
        </Button>
      </div>
      <div className="space-y-4">
        {purchases?.map((purchase) => (
          <div key={purchase?.id} className="border border-border rounded-lg p-4 hover:shadow-elevated transition-industrial">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={purchase?.image} 
                  alt={purchase?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground truncate">{purchase?.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Commande #{purchase?.orderNumber}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(purchase?.status)}`}>
                    {purchase?.status}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{purchase?.orderDate}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Package" size={12} />
                    <span>Qté: {purchase?.quantity}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Euro" size={12} />
                    <span>{purchase?.totalAmount}€</span>
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    iconName="FileText"
                    onClick={() => onViewInvoice(purchase?.id)}
                  >
                    Facture
                  </Button>
                  
                  {purchase?.status === 'En transit' && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      iconName="Truck"
                      onClick={() => onTrackOrder(purchase?.id)}
                    >
                      Suivre
                    </Button>
                  )}
                  
                  {purchase?.status === 'Livré' && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      iconName="RotateCcw"
                      onClick={() => onReorder(purchase?.id)}
                    >
                      Recommander
                    </Button>
                  )}
                  
                  <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
                </div>
              </div>
            </div>
            
            {purchase?.trackingInfo && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    {purchase?.trackingInfo}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Quick Reorder Section */}
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Recommander Rapidement</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {purchases?.slice(0, 3)?.map((item) => (
            <button
              key={`reorder-${item?.id}`}
              onClick={() => onReorder(item?.id)}
              className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-micro text-left"
            >
              <div className="w-10 h-10 bg-muted rounded-lg overflow-hidden">
                <Image 
                  src={item?.image} 
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">{item?.name}</p>
                <p className="text-xs text-muted-foreground">{item?.totalAmount}€</p>
              </div>
              <Icon name="Plus" size={16} className="text-primary" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPurchases;