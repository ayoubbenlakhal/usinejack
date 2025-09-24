import React from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ 
  products, 
  loading, 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  onCompare,
  comparedProducts,
  onQuickView,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const sortOptions = [
    { value: 'relevance', label: 'Pertinence' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'rating', label: 'Mieux notés' },
    { value: 'newest', label: 'Plus récents' },
    { value: 'popular', label: 'Plus populaires' }
  ];

  const viewModes = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grille' },
    { value: 'list', icon: 'List', label: 'Liste' }
  ];

  if (loading) {
    return (
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)]?.map((_, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
              <div className="aspect-[4/3] bg-muted"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
                <div className="h-6 bg-muted rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header with Controls */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">Machines Industrielles</h1>
            <span className="text-muted-foreground">
              {products?.length} résultats
            </span>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            {viewModes?.map((mode) => (
              <button
                key={mode?.value}
                onClick={() => onViewModeChange(mode?.value)}
                className={`p-2 rounded-md transition-micro ${
                  viewMode === mode?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                title={mode?.label}
              >
                <Icon name={mode?.icon} size={18} />
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Sort Controls */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Trier par:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e?.target?.value)}
              className="px-3 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Comparison Status */}
          {comparedProducts?.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">
                {comparedProducts?.length} machine{comparedProducts?.length > 1 ? 's' : ''} sélectionnée{comparedProducts?.length > 1 ? 's' : ''}
              </span>
              <Button
                variant="primary"
                size="sm"
                iconName="GitCompare"
                iconPosition="left"
                disabled={comparedProducts?.length < 2}
              >
                Comparer
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Products Grid/List */}
      <div className="flex-1 p-6">
        {products?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Icon name="Search" size={48} className="text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Aucun résultat trouvé
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Essayez d'ajuster vos filtres ou votre recherche pour trouver ce que vous cherchez.
            </p>
            <Button variant="outline" className="mt-4">
              Effacer les filtres
            </Button>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products?.map((product) => (
                  <ProductCard
                    key={product?.id}
                    product={product}
                    onCompare={onCompare}
                    isComparing={comparedProducts?.some(p => p?.id === product?.id)}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products?.map((product) => (
                  <div key={product?.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Image */}
                      <div className="aspect-[4/3] lg:aspect-square overflow-hidden rounded-md bg-muted">
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="lg:col-span-2 space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                            {product?.name}
                          </h3>
                          <button
                            onClick={() => onCompare(product)}
                            className={`p-2 rounded-md border-2 transition-all ${
                              comparedProducts?.some(p => p?.id === product?.id)
                                ? 'bg-primary border-primary text-primary-foreground'
                                : 'border-border hover:border-primary'
                            }`}
                          >
                            <Icon name="Plus" size={16} />
                          </button>
                        </div>
                        
                        <p className="text-muted-foreground line-clamp-2">
                          {product?.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="Settings" size={14} />
                            <span>{product?.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Zap" size={14} />
                            <span>{product?.power}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Gauge" size={14} />
                            <span>{product?.maxSpeed}</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
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
                          <span className="font-medium">{product?.rating}</span>
                          <span className="text-muted-foreground">({product?.reviews} avis)</span>
                        </div>
                      </div>
                      
                      {/* Price and Actions */}
                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-foreground">
                            {new Intl.NumberFormat('fr-FR', {
                              style: 'currency',
                              currency: 'EUR'
                            })?.format(product?.price)}
                          </div>
                          {product?.monthlyPayment && (
                            <div className="text-sm text-muted-foreground">
                              ou {new Intl.NumberFormat('fr-FR', {
                                style: 'currency',
                                currency: 'EUR'
                              })?.format(product?.monthlyPayment)}/mois
                            </div>
                          )}
                          <div className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${
                            product?.availability === 'En stock' ?'text-success bg-success/10'
                              : product?.availability === 'Sur commande' ?'text-warning bg-warning/10' :'text-error bg-error/10'
                          }`}>
                            {product?.availability}
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Button
                            variant="default"
                            size="sm"
                            iconName="ShoppingCart"
                            iconPosition="left"
                            fullWidth
                          >
                            Ajouter
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="Eye"
                            iconPosition="left"
                            onClick={() => onQuickView(product)}
                            fullWidth
                          >
                            Aperçu
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            iconName="Calendar"
                            iconPosition="left"
                            fullWidth
                          >
                            Démo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ChevronLeft"
                  disabled={currentPage === 1}
                  onClick={() => onPageChange(currentPage - 1)}
                >
                  Précédent
                </Button>
                
                <div className="flex items-center space-x-1">
                  {[...Array(Math.min(5, totalPages))]?.map((_, index) => {
                    const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + index;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`w-8 h-8 rounded-md text-sm font-medium transition-micro ${
                          currentPage === pageNum
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ChevronRight"
                  disabled={currentPage === totalPages}
                  onClick={() => onPageChange(currentPage + 1)}
                >
                  Suivant
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;