import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen || !product) return null;

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
                        ? 'border-primary'
                        : 'border-border hover:border-muted-foreground'
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
                <h1 className="text-2xl font-bold text-foreground">{product?.name}</h1>
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
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default QuickViewModal;
