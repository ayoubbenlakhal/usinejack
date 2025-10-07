import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onCompare, isComparing, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    if (!price || isNaN(price)) return null; // ✅ Prevent NaN €
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

  return (
    <div 
      className="group bg-card border border-border rounded-lg shadow-industrial hover:shadow-elevated transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center space-x-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="sm"
            iconName="Eye"
            onClick={() => onQuickView(product)}
          >
            Aperçu
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
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

        {/* Compare Checkbox */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => onCompare(product)}
            className={`w-8 h-8 rounded-md border-2 flex items-center justify-center transition-all ${
              isComparing 
                ? 'bg-primary border-primary text-primary-foreground' 
                : 'bg-white/90 border-white/90 text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground'
            }`}
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product?.name}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-md ${getAvailabilityColor(product?.availability)}`}>
              {product?.availability}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {product?.description}
          </p>
          
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Icon name="Settings" size={12} />
              <span>{product?.type}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Icon name="Zap" size={12} />
              <span>{product?.power}</span>
            </span>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Vitesse max:</span>
              <span className="font-medium">{product?.maxSpeed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Points/min:</span>
              <span className="font-medium">{product?.stitchesPerMin}</span>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1">
            {product?.features?.slice(0, 3)?.map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {product?.features?.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{product?.features?.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{product?.rating}</span>
          <span className="text-xs text-muted-foreground">({product?.reviews} avis)</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {/* ✅ Only main price */}
            {product?.price && !isNaN(product?.price) && (
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product?.price)}
              </span>
            )}
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button
              variant="default"
              size="sm"
              iconName="FileText"   // 📄 icon for PDF
              iconPosition="left"
            >
              PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
