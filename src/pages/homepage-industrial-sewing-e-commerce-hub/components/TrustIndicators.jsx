import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const certifications = [
    {
      name: "CE Conformité Européenne",
      description: "Toutes nos machines respectent les normes européennes",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "ISO 9001:2015",
      description: "Système de management qualité certifié",
      icon: "Award",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Garantie 3 Ans",
      description: "Protection complète sur toutes nos machines",
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Service Agréé",
      description: "Techniciens certifiés par les fabricants",
      icon: "Wrench",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const partnerBrands = [
    { name: "JACK", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=JACK" },
    { name: "BROTHER", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=BROTHER" },
    { name: "JUKI", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=JUKI" },
    { name: "TAJIMA", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=TAJIMA" },
    { name: "PEGASUS", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=PEGASUS" },
    { name: "EASTMAN", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=EASTMAN" }
  ];

  const trustMetrics = [
    {
      value: "10+",
      label: "Années d\'expertise",
      description: "Une décennie au service de l\'industrie textile",
      icon: "Calendar"
    },
    {
      value: "1,200+",
      label: "Clients satisfaits",
      description: "Entreprises qui nous font confiance",
      icon: "Users"
    },
    {
      value: "500+",
      label: "Machines vendues",
      description: "Équipements installés et opérationnels",
      icon: "Settings"
    },
    {
      value: "24/7",
      label: "Support technique",
      description: "Assistance disponible en permanence",
      icon: "Phone"
    },
    {
      value: "98%",
      label: "Taux de satisfaction",
      description: "Clients recommandant nos services",
      icon: "Star"
    },
    {
      value: "< 4h",
      label: "Temps de réponse",
      description: "Intervention rapide garantie",
      icon: "Clock"
    }
  ];

  const warranties = [
    {
      title: "Garantie Constructeur",
      duration: "2-3 ans",
      coverage: "Pièces et main d\'œuvre",
      icon: "Shield",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Extension Garantie",
      duration: "Jusqu\'à 5 ans",
      coverage: "Protection étendue disponible",
      icon: "ShieldCheck",
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Garantie Pièces",
      duration: "10 ans",
      coverage: "Disponibilité des pièces détachées",
      icon: "Package",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Icon name="ShieldCheck" size={16} />
            <span className="text-sm font-medium">Confiance & Qualité</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Votre partenaire de confiance depuis 10+ ans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certifications, garanties et partenariats qui témoignent de notre engagement qualité
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {trustMetrics?.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric?.value}</div>
              <div className="font-semibold text-foreground mb-1">{metric?.label}</div>
              <div className="text-sm text-muted-foreground">{metric?.description}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Certifications & Agréments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-emerald-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Garanties & Protection
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {warranties?.map((warranty, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${warranty?.color}`}>
                    <Icon name={warranty?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">{warranty?.title}</h4>
                    <div className="text-lg font-semibold text-primary mb-2">{warranty?.duration}</div>
                    <p className="text-sm text-muted-foreground">{warranty?.coverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Brands */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Partenaires Officiels
          </h3>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partnerBrands?.map((brand, index) => (
                <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand?.logo}
                    alt={`${brand?.name} logo`}
                    className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1 mb-4">
                <Icon name="Building" size={14} />
                <span className="text-sm font-medium">Notre Histoire</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Une expertise forgée dans l'excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Depuis 2014, Usine Jack accompagne les professionnels de la couture industrielle dans leur développement. 
                Née de la passion de Jean-Claude Mercier, ancien ingénieur textile, notre entreprise s'est construite sur 
                des valeurs simples : qualité, proximité et expertise technique.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-foreground">Équipe de 15 techniciens certifiés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-foreground">Showroom de 500m² à Lyon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-foreground">Service après-vente dans toute la France</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-foreground">Centre de formation agréé</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Équipe Usine Jack"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-medium">Jean-Claude Mercier, Fondateur</p>
                <p className="text-sm text-white/80">"La qualité n'est pas un accident, c'est un choix"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;