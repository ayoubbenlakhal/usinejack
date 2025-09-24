import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PartsOrdering = () => {
  const [selectedMachine, setSelectedMachine] = useState('juki-ddl-8700');
  const [cart, setCart] = useState([]);

  const machines = [
    { id: 'juki-ddl-8700', name: 'JUKI DDL-8700', model: 'Piqueuse Plate' },
    { id: 'brother-s-7300a', name: 'Brother S-7300A', model: 'Surjeteuse' },
    { id: 'pfaff-1245', name: 'PFAFF 1245', model: 'Cuir Spécialisé' }
  ];

  const machineParts = {
    'juki-ddl-8700': [
      {
        id: 'needle-db1',
        name: 'Aiguille DB×1 #14',
        partNumber: 'DB1-14-100',
        price: 12.50,
        stock: 'En stock',
        category: 'Aiguilles',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=100&h=100&fit=crop',
        compatibility: 'Compatible avec tous les modèles DDL'
      },
      {
        id: 'bobbin-case',
        name: 'Boîtier de canette',
        partNumber: 'BC-DDL-001',
        price: 45.00,
        stock: 'Stock faible',
        category: 'Mécanisme',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
        compatibility: 'Spécifique DDL-8700'
      },
      {
        id: 'presser-foot',
        name: 'Pied presseur standard',
        partNumber: 'PF-STD-DDL',
        price: 28.00,
        stock: 'En stock',
        category: 'Accessoires',
        image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=100&h=100&fit=crop',
        compatibility: 'Compatible série DDL'
      },
      {
        id: 'tension-spring',
        name: 'Ressort de tension',
        partNumber: 'TS-DDL-002',
        price: 8.75,
        stock: 'En stock',
        category: 'Mécanisme',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=100&h=100&fit=crop',
        compatibility: 'Modèles DDL-8700/8900'
      }
    ]
  };

  const categories = ['Tous', 'Aiguilles', 'Mécanisme', 'Accessoires', 'Électronique'];

  const addToCart = (part) => {
    const existingItem = cart?.find(item => item?.id === part?.id);
    if (existingItem) {
      setCart(cart?.map(item =>
        item?.id === part?.id
          ? { ...item, quantity: item?.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...part, quantity: 1 }]);
    }
  };

  const removeFromCart = (partId) => {
    setCart(cart?.filter(item => item?.id !== partId));
  };

  const updateQuantity = (partId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(partId);
    } else {
      setCart(cart?.map(item =>
        item?.id === partId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart?.reduce((total, item) => total + (item?.price * item?.quantity), 0);
  };

  const getStockColor = (stock) => {
    switch (stock) {
      case 'En stock': return 'text-success bg-success/10 border-success/20';
      case 'Stock faible': return 'text-warning bg-warning/10 border-warning/20';
      case 'Rupture': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const currentParts = machineParts?.[selectedMachine] || [];

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
            <Icon name="Package" size={16} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Commande de Pièces</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {machines?.map((machine) => (
              <button
                key={machine?.id}
                onClick={() => setSelectedMachine(machine?.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-micro ${
                  selectedMachine === machine?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {machine?.name}
              </button>
            ))}
          </div>

          {cart?.length > 0 && (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="ShoppingCart" size={16} />
                <span>{cart?.length} article(s)</span>
              </div>
              <Button variant="default" size="sm" iconName="CreditCard" iconPosition="left">
                {getTotalPrice()?.toFixed(2)} €
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Parts List */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Rechercher une pièce par nom ou référence..."
                className="mb-4"
              />
              
              <div className="flex flex-wrap gap-2">
                {categories?.map((category) => (
                  <button
                    key={category}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-micro"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {currentParts?.map((part) => (
                <div key={part?.id} className="border border-border rounded-lg p-4 hover:shadow-industrial transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={part?.image}
                        alt={part?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-foreground">{part?.name}</h3>
                          <p className="text-sm text-muted-foreground font-mono">{part?.partNumber}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-foreground">{part?.price?.toFixed(2)} €</div>
                          <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getStockColor(part?.stock)}`}>
                            {part?.stock}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-3">{part?.compatibility}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          {part?.category}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Plus"
                          iconPosition="left"
                          onClick={() => addToCart(part)}
                          disabled={part?.stock === 'Rupture'}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 rounded-lg p-4 sticky top-4">
              <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="ShoppingCart" size={16} />
                <span>Panier ({cart?.length})</span>
              </h3>

              {cart?.length === 0 ? (
                <div className="text-center py-8">
                  <Icon name="ShoppingCart" size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Votre panier est vide</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cart?.map((item) => (
                      <div key={item?.id} className="flex items-center space-x-3 bg-card rounded-lg p-3">
                        <div className="w-8 h-8 bg-muted rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item?.image}
                            alt={item?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground truncate">{item?.name}</div>
                          <div className="text-xs text-muted-foreground">{item?.price?.toFixed(2)} €</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => updateQuantity(item?.id, item?.quantity - 1)}
                            className="w-6 h-6 rounded bg-muted hover:bg-muted/80 flex items-center justify-center"
                          >
                            <Icon name="Minus" size={12} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item?.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item?.id, item?.quantity + 1)}
                            className="w-6 h-6 rounded bg-muted hover:bg-muted/80 flex items-center justify-center"
                          >
                            <Icon name="Plus" size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-lg font-bold text-foreground">{getTotalPrice()?.toFixed(2)} €</span>
                    </div>
                    
                    <Button variant="default" fullWidth iconName="CreditCard" iconPosition="left">
                      Commander
                    </Button>
                    
                    <div className="mt-3 text-xs text-muted-foreground text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Icon name="Truck" size={12} />
                        <span>Livraison 24-48h</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsOrdering;