import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onRequestDemo }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    })?.format(price);
  };

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'En stock': return 'text-success bg-success/10';
      case 'Sur commande': return 'text-warning bg-warning/10';
      case 'Épuisé': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  // Mock additional images
  const productImages = [
    product?.image,
    `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop`,
    `https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop`,
    `https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop`
  ];

  const keySpecs = [
    { label: 'Type', value: product?.type },
    { label: 'Puissance', value: product?.power },
    { label: 'Vitesse Max', value: product?.maxSpeed },
    { label: 'Points/min', value: product?.stitchesPerMin },
    { label: 'Garantie', value: product?.specs?.warranty || '2 ans' },
    { label: 'Poids', value: product?.specs?.weight || '25 kg' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-lg shadow-elevated max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Aperçu Rapide</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-micro"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-auto max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Images Section */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative">
                <Image
                  src={productImages?.[selectedImageIndex]}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
                
                {/* 360° Button */}
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground px-3 py-2 rounded-md text-sm font-medium transition-micro flex items-center space-x-2">
                  <Icon name="RotateCcw" size={16} />
                  <span>Vue 360°</span>
                </button>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product?.isNew && (
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
                      Nouveau
                    </span>
                  )}
                  {product?.isBestSeller && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                      Best Seller
                    </span>
                  )}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {productImages?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-micro ${
                      selectedImageIndex === index 
                        ? 'border-primary' :'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product?.name} vue ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-6">
              {/* Header Info */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h1 className="text-2xl font-bold text-foreground">{product?.name}</h1>
                  <span className={`px-3 py-1 text-sm font-medium rounded-md ${getAvailabilityColor(product?.availability)}`}>
                    {product?.availability}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{product?.description}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product?.rating}</span>
                  <span className="text-muted-foreground">({product?.reviews} avis)</span>
                  <button className="text-primary hover:underline text-sm">
                    Voir les avis
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {formatPrice(product?.price)}
                  </span>
                  {product?.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product?.originalPrice)}
                    </span>
                  )}
                </div>
                
                {product?.monthlyPayment && (
                  <div className="text-sm text-muted-foreground mb-3">
                    ou {formatPrice(product?.monthlyPayment)}/mois sur 36 mois
                  </div>
                )}
                
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Truck" size={16} className="text-success" />
                  <span className="text-success">Livraison gratuite</span>
                  <span className="text-muted-foreground">• Installation incluse</span>
                </div>
              </div>

              {/* Key Specifications */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Spécifications Clés</h3>
                <div className="grid grid-cols-2 gap-3">
                  {keySpecs?.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{spec?.label}:</span>
                      <span className="font-medium">{spec?.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Fonctionnalités</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product?.features?.slice(0, 6)?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {product?.features?.length > 6 && (
                    <button className="text-primary hover:underline text-sm text-left">
                      Voir toutes les fonctionnalités ({product?.features?.length})
                    </button>
                  )}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium text-foreground">Quantité:</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-micro"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-micro"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="default"
                    iconName="ShoppingCart"
                    iconPosition="left"
                    onClick={() => onAddToCart(product, quantity)}
                    fullWidth
                  >
                    Ajouter au Panier
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => onRequestDemo(product)}
                    fullWidth
                  >
                    Demander une Démo
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="ghost" iconName="Heart" iconPosition="left" fullWidth>
                    Favoris
                  </Button>
                  <Button variant="ghost" iconName="Share2" iconPosition="left" fullWidth>
                    Partager
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>Garantie constructeur 2 ans</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Headphones" size={16} className="text-primary" />
                  <span>Support technique inclus</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="BookOpen" size={16} className="text-accent" />
                  <span>Formation gratuite disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;