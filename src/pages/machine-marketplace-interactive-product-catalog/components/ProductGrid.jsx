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
                {/* ... your list view code unchanged ... */}
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
