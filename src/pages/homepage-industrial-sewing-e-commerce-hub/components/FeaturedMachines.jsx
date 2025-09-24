import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedMachines = () => {
  const [activeTab, setActiveTab] = useState('industrial');

  const machineCategories = [
    { id: 'industrial', name: 'Industrielles', icon: 'Settings' },
    { id: 'overlock', name: 'Surjeteuses', icon: 'Zap' },
    { id: 'embroidery', name: 'Broderie', icon: 'Sparkles' },
    { id: 'cutting', name: 'Découpe', icon: 'Scissors' }
  ];

  const featuredMachines = {
    industrial: [
      {
        id: 1,
        name: "JACK JK-8720",
        category: "Machine industrielle droite",
        price: "2,890",
        originalPrice: "3,200",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Moteur servo", "Coupe-fil automatique", "Réglage électronique"],
        rating: 4.8,
        reviews: 156,
        badge: "Bestseller",
        videoUrl: "#"
      },
      {
        id: 2,
        name: "BROTHER S-7300A",
        category: "Machine haute vitesse",
        price: "4,250",
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["5000 points/min", "Système anti-vibration", "Interface tactile"],
        rating: 4.9,
        reviews: 89,
        badge: "Nouveau",
        videoUrl: "#"
      },
      {
        id: 3,
        name: "JUKI DDL-8700",
        category: "Machine universelle",
        price: "3,450",
        originalPrice: "3,800",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Éclairage LED", "Lubrification automatique", "Pédale ergonomique"],
        rating: 4.7,
        reviews: 203,
        badge: "Promo",
        videoUrl: "#"
      }
    ],
    overlock: [
      {
        id: 4,
        name: "PEGASUS M752",
        category: "Surjeteuse 5 fils",
        price: "1,890",
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Coupe différentielle", "Enfilage simplifié", "Réglage pneumatique"],
        rating: 4.6,
        reviews: 124,
        badge: "Fiable",
        videoUrl: "#"
      }
    ],
    embroidery: [
      {
        id: 5,
        name: "TAJIMA TMAR-1501",
        category: "Brodeuse mono-tête",
        price: "12,500",
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["15 aiguilles", "Écran couleur 10\"", "Logiciel inclus"],
        rating: 4.9,
        reviews: 67,
        badge: "Premium",
        videoUrl: "#"
      }
    ],
    cutting: [
      {
        id: 6,
        name: "EASTMAN KM-625",
        category: "Découpeuse droite",
        price: "890",
        originalPrice: "1,050",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Lame octogonale", "Affûtage automatique", "Poignée ergonomique"],
        rating: 4.5,
        reviews: 98,
        badge: "Économique",
        videoUrl: "#"
      }
    ]
  };

  const currentMachines = featuredMachines?.[activeTab] || [];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Bestseller': return 'bg-orange-600 text-white';
      case 'Nouveau': return 'bg-emerald-600 text-white';
      case 'Promo': return 'bg-red-600 text-white';
      case 'Premium': return 'bg-purple-600 text-white';
      case 'Fiable': return 'bg-blue-600 text-white';
      case 'Économique': return 'bg-green-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
            <Icon name="Star" size={16} />
            <span className="text-sm font-medium">Machines Vedettes</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Découvrez nos machines industrielles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sélection d'équipements professionnels avec démonstrations interactives et spécifications détaillées
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {machineCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveTab(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === category?.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Machines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentMachines?.map((machine) => (
            <div key={machine?.id} className="group bg-card border border-border rounded-xl overflow-hidden shadow-industrial hover:shadow-elevated transition-all duration-300">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={machine?.image}
                  alt={machine?.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(machine?.badge)}`}>
                  {machine?.badge}
                </div>

                {/* Video Preview Button */}
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} color="white" />
                  </div>
                </button>

                {/* 360° View Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="RotateCcw" size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{machine?.category}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{machine?.rating}</span>
                      <span className="text-xs text-muted-foreground">({machine?.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{machine?.name}</h3>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {machine?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={14} className="text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">{machine?.price}€</span>
                    {machine?.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{machine?.originalPrice}€</span>
                    )}
                  </div>
                  {machine?.originalPrice && (
                    <div className="text-sm font-medium text-emerald-600">
                      -{Math.round(((machine?.originalPrice - machine?.price) / machine?.originalPrice) * 100)}%
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="default" size="sm" iconName="ShoppingCart" className="flex-1">
                    Ajouter
                  </Button>
                  <Button variant="outline" size="sm" iconName="Eye">
                    Détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" iconName="ArrowRight" iconPosition="right">
            <Link to="/machine-marketplace-interactive-product-catalog">
              Voir toutes les machines
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMachines;