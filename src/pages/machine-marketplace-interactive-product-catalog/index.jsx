
import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import ComparisonModal from './components/ComparisonModal';
import QuickViewModal from './components/QuickViewModal';
import Button from '../../components/ui/Button';

const MachineMarketplace = () => {
  const [filters, setFilters] = useState({
    search: '',
    type: [],
    usage: [],
    brand: [],
    features: [],
    
  });

  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(8);

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Jack W4",
      description:
        "Machine à coudre industrielle haute vitesse pour couture générale avec coupe-fil automatique et système de lubrification optimisé.",
      image: "https://jackstore.ma/wp-content/uploads/2024/03/Untitled-design-25.png",
     
      originalPrice: 14000,
      monthlyPayment: 347,
      type: "industrielle",
      brand: "Brother",
      power: "550W",
      maxSpeed: "5000 tr/min",
      stitchesPerMin: "5000",
      rating: 4.8,
      reviews: 127,
      availability: "En stock",
      isNew: true,
      isBestSeller: false,
      features: [
        "Coupe-fil automatique",
        "Écran LCD",
        "Système de lubrification",
        "Variateur de vitesse",
        "Éclairage LED",
        "Port USB",
      ],
      specs: {
        needleSystem: "DB x 1",
        threadTension: "Automatique",
        footLift: "13mm",
        warranty: "3 ans",
        weight: "28 kg",
        dimensions: "65 x 30 x 55 cm",
      },
    },
    {
      id: 2,
      name: "Jack K5E",
      description:
        "Surjeteuse industrielle 4 fils avec système de coupe différentielle et contrôle pneumatique pour finitions parfaites.",
      image: "https://jackstore.ma/wp-content/uploads/2024/03/Untitled-design-48.png",
      
      monthlyPayment: 247,
      type: "surjeteuse",
      brand: "Juki",
      power: "400W",
      maxSpeed: "7000 tr/min",
      stitchesPerMin: "7000",
      rating: 4.6,
      reviews: 89,
      availability: "En stock",
      isNew: false,
      isBestSeller: true,
      features: [
        "4 fils simultanés",
        "Coupe différentielle",
        "Contrôle pneumatique",
        "Réglage micro-métrique",
        "Système anti-bourrage",
      ],
      specs: {
        needleSystem: "DC x 27",
        threadTension: "Manuel",
        footLift: "6mm",
        warranty: "2 ans",
        weight: "32 kg",
        dimensions: "70 x 35 x 60 cm",
      },
    },
    {
      id: 3,
      name: "Jack K6",
      description:
        "Machine à broder industrielle avec écran tactile 10 pouces, connectivité WiFi et bibliothèque de 500 motifs intégrés.",
      image: "https://jackstore.ma/wp-content/uploads/2024/03/Untitled-design-49.png",
      
      originalPrice: 21000,
      monthlyPayment: 521,
      type: "brodeuse",
      brand: "Singer",
      power: "750W",
      maxSpeed: "1200 tr/min",
      stitchesPerMin: "1200",
      rating: 4.9,
      reviews: 156,
      availability: "En stock",
      isNew: false,
      isBestSeller: true,
      features: [
        "Écran tactile 10\"",
        "Connectivité WiFi",
        "500 motifs intégrés",
        "Broderie multi-têtes",
        "Reconnaissance automatique",
        "Sauvegarde cloud",
      ],
      specs: {
        needleSystem: "Embroidery",
        threadTension: "Automatique",
        footLift: "20mm",
        warranty: "5 ans",
        weight: "45 kg",
        dimensions: "120 x 60 x 70 cm",
      },
    },
    {
      id: 4,
      name: "Jack E4S",
      description:
        "Machine recouvreuse spécialisée pour cuir et matériaux épais avec système d'entraînement triple et pied presseur renforcé.",
      image: "https://jackstore.ma/wp-content/uploads/2024/03/Untitled-design-23.png",
      
      monthlyPayment: 422,
      type: "recouvreuse",
      brand: "Pfaff",
      power: "600W",
      maxSpeed: "2500 tr/min",
      stitchesPerMin: "2500",
      rating: 4.7,
      reviews: 73,
      availability: "En stock",
      isNew: false,
      isBestSeller: false,
      features: [
        "Entraînement triple",
        "Pied presseur renforcé",
        "Réglage hauteur automatique",
        "Système anti-bourrage",
        "Lubrification centralisée",
      ],
      specs: {
        needleSystem: "134-35 LR",
        threadTension: "Manuel",
        footLift: "16mm",
        warranty: "3 ans",
        weight: "38 kg",
        dimensions: "75 x 40 x 65 cm",
      },
    },
    {
      id: 5,
      name: "JACK JK-58400 double",
      description:
        "Machine spécialisée boutonnière avec système de reconnaissance automatique et 12 types de boutonnières préprogrammées.",
      image: "https://jackstore.ma/wp-content/uploads/2024/03/1.png",
      
      monthlyPayment: 189,
      type: "boutonniere",
      brand: "Janome",
      power: "300W",
      maxSpeed: "3000 tr/min",
      stitchesPerMin: "3000",
      rating: 4.5,
      reviews: 45,
      availability: "En stock",
      isNew: false,
      isBestSeller: false,
      features: [
        "12 types de boutonnières",
        "Reconnaissance automatique",
        "Système de mesure laser",
        "Coupe automatique",
        "Programmation personnalisée",
      ],
      specs: {
        needleSystem: "DB x 1",
        threadTension: "Automatique",
        footLift: "8mm",
        warranty: "2 ans",
        weight: "22 kg",
        dimensions: "55 x 25 x 45 cm",
      },
    },
    {
      id: 6,
      name: "Jack C3",
      description:
        "Station de broderie professionnelle 10 aiguilles avec cadre géant 360x200mm et logiciel de création intégré.",
      image: "https://jackstore.ma/wp-content/uploads/2024/03/Untitled-design-20.png",
      
      originalPrice: 32000,
      monthlyPayment: 792,
      type: "brodeuse",
      brand: "Brother",
      power: "900W",
      maxSpeed: "1000 tr/min",
      stitchesPerMin: "1000",
      rating: 4.9,
      reviews: 203,
      availability: "En stock",
      isNew: false,
      isBestSeller: false,
      features: [
        "10 aiguilles simultanées",
        "Cadre géant 360x200mm",
        "Logiciel création intégré",
        "Caméra de positionnement",
        "Découpe laser intégrée",
        "Interface tactile 15\"",
      ],
      specs: {
        needleSystem: "Multi-needle",
        threadTension: "Automatique",
        footLift: "25mm",
        warranty: "5 ans",
        weight: "85 kg",
        dimensions: "180 x 80 x 90 cm",
      },
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...mockProducts];

    // Apply filters
    if (filters?.search) {
      filtered = filtered?.filter(
        (product) =>
          product?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
          product?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.type?.length > 0) {
      filtered = filtered?.filter((product) =>
        filters?.type?.includes(product?.type)
      );
    }

    if (filters?.brand?.length > 0) {
      filtered = filtered?.filter((product) =>
        filters?.brand?.includes(product?.brand?.toLowerCase())
      );
    }

    if (filters?.priceRange?.min || filters?.priceRange?.max) {
      filtered = filtered?.filter((product) => {
        const price = product?.price;
        const min = filters?.priceRange?.min ? parseInt(filters?.priceRange?.min) : 0;
        const max = filters?.priceRange?.max
          ? parseInt(filters?.priceRange?.max)
          : Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price-desc':
        filtered?.sort((a, b) => b?.price - a?.price);
        break;
      case 'rating':
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'newest':
        filtered?.sort((a, b) => b?.isNew - a?.isNew);
        break;
      case 'popular':
        filtered?.sort((a, b) => b?.reviews - a?.reviews);
        break;
      default:
        break; // relevance (keep original order)
    }

    setFilteredProducts(filtered);
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      type: [],
      usage: [],
      brand: [],
      features: [],
      priceRange: { min: '', max: '' },
    });
  };

  const handleCompare = (product) => {
    setComparedProducts((prev) => {
      const isAlreadyCompared = prev?.some((p) => p?.id === product?.id);
      if (isAlreadyCompared) {
        return prev?.filter((p) => p?.id !== product?.id);
      } else if (prev?.length < 3) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const handleRemoveFromComparison = (productId) => {
    setComparedProducts((prev) => prev?.filter((p) => p?.id !== productId));
  };

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product, quantity) => {
    console.log('Adding to cart:', product, quantity);
    // Implement cart functionality
  };

  const handleRequestDemo = (product) => {
    console.log('Requesting demo for:', product);
    // Implement demo request functionality
  };

  // Pagination
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-16 flex">
        <FilterSidebar
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onClearFilters={handleClearFilters}
          isCollapsed={isFilterCollapsed}
          onToggle={() => setIsFilterCollapsed(!isFilterCollapsed)}
        />

        <ProductGrid
          products={paginatedProducts}
          loading={loading}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onCompare={handleCompare}
          comparedProducts={comparedProducts}
          onQuickView={handleQuickView}
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts?.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Floating Comparison Button */}
      {comparedProducts?.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            variant="primary"
            size="lg"
            iconName="GitCompare"
            iconPosition="left"
            onClick={() => setIsComparisonOpen(true)}
            className="shadow-elevated"
          >
            Comparer ({comparedProducts?.length})
          </Button>
        </div>
      )}

      {/* Modals */}
      <ComparisonModal
        products={comparedProducts}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onRemoveProduct={handleRemoveFromComparison}
      />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
        onRequestDemo={handleRequestDemo}
      />
    </div>
  );
};

export default MachineMarketplace;
