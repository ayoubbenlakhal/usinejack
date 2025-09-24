import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Directrice, Atelier Couture Plus",
      company: "Lyon, France",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      quote: `Grâce à Usine Jack, nous avons triplé notre production en 18 mois. Leurs machines JACK JK-8720 sont d'une fiabilité exceptionnelle, et le support technique est toujours disponible quand nous en avons besoin.`,
      metrics: {
        before: "150 pièces/jour",
        after: "450 pièces/jour",
        improvement: "+200%"
      },
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      badge: "Croissance Exceptionnelle"
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      role: "Fondateur, Confection Moderne",
      company: "Marseille, France",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      quote: `La formation dispensée par Usine Jack a transformé notre équipe. Nos opérateurs maîtrisent maintenant des techniques avancées qui nous permettent de répondre à des commandes plus complexes et mieux rémunérées.`,
      metrics: {
        before: "2 types de produits",
        after: "12 types de produits",
        improvement: "+500%"
      },
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      badge: "Diversification Réussie"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "Responsable Production, TextilePro",
      company: "Toulouse, France",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      quote: `Le service de maintenance préventive d'Usine Jack nous a fait économiser des milliers d'euros en temps d'arrêt évité. Leurs techniciens connaissent parfaitement nos machines et interviennent avec une efficacité remarquable.`,
      metrics: {
        before: "48h d\'arrêt/mois",
        after: "4h d\'arrêt/mois",
        improvement: "-92%"
      },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      badge: "Maintenance Excellence"
    },
    {
      id: 4,
      name: "Pierre Moreau",
      role: "Gérant, Broderie Artistique",
      company: "Nantes, France",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      quote: `Nous avons démarré avec une seule machine de broderie TAJIMA. Aujourd'hui, nous en avons cinq et notre chiffre d'affaires a été multiplié par 8. L'accompagnement d'Usine Jack a été déterminant dans notre réussite.`,
      metrics: {
        before: "1 machine",
        after: "5 machines",
        improvement: "x8 CA"
      },
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      badge: "Expansion Spectaculaire"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials?.[currentSlide];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Croissance Exceptionnelle': return 'bg-emerald-600 text-white';
      case 'Diversification Réussie': return 'bg-blue-600 text-white';
      case 'Maintenance Excellence': return 'bg-orange-600 text-white';
      case 'Expansion Spectaculaire': return 'bg-purple-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-4">
            <Icon name="Users" size={16} />
            <span className="text-sm font-medium">Témoignages Clients</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ils ont transformé leur business avec Usine Jack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos clients ont multiplié leur productivité et développé leur activité
          </p>
        </div>

        {/* Main Testimonial */}
        <div 
          className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-elevated"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className={`inline-flex items-center space-x-2 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit ${getBadgeColor(currentTestimonial?.badge)}`}>
                <Icon name="TrendingUp" size={14} />
                <span>{currentTestimonial?.badge}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                "{currentTestimonial?.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Avant</div>
                  <div className="font-semibold text-foreground">{currentTestimonial?.metrics?.before}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Après</div>
                  <div className="font-semibold text-foreground">{currentTestimonial?.metrics?.after}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Amélioration</div>
                  <div className="font-bold text-emerald-600">{currentTestimonial?.metrics?.improvement}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <Image
                  src={currentTestimonial?.avatar}
                  alt={currentTestimonial?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-foreground">{currentTestimonial?.name}</div>
                  <div className="text-muted-foreground text-sm">{currentTestimonial?.role}</div>
                  <div className="text-muted-foreground text-sm">{currentTestimonial?.company}</div>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-64 lg:h-full">
              <Image
                src={currentTestimonial?.image}
                alt={`${currentTestimonial?.name} workspace`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-foreground hover:bg-white transition-all duration-300 shadow-lg"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-foreground hover:bg-white transition-all duration-300 shadow-lg"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials?.map((testimonial, index) => (
            <button
              key={testimonial?.id}
              onClick={() => goToSlide(index)}
              className={`text-left p-4 rounded-lg border transition-all duration-300 ${
                index === currentSlide
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-card hover:border-primary/50 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm text-foreground">{testimonial?.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial?.company}</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {testimonial?.quote?.substring(0, 80)}...
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;