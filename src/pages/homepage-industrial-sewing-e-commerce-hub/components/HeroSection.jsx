import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Couturière professionnelle utilisant une machine industrielle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Icon name="Award" size={16} className="text-orange-400" />
                <span className="text-sm font-medium">10+ années d'expertise industrielle</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Votre partenaire complet en{' '}
                  <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    couture industrielle
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 font-medium">
                  De l'achat à la maîtrise
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
                Découvrez notre écosystème complet : machines industrielles de pointe, formation professionnelle, maintenance experte et communauté active. Tout ce dont vous avez besoin pour exceller dans la couture industrielle.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="bg-orange-600 hover:bg-orange-700 text-white border-0"
                >
                  <Link to="/machine-marketplace-interactive-product-catalog" className="flex items-center space-x-2">
                    <span>Découvrir les Machines</span>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Play" 
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Voir la Démonstration
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-slate-300">Machines vendues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">1200+</div>
                  <div className="text-sm text-slate-300">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-slate-300">Support technique</div>
                </div>
              </div>
            </div>

            {/* Right Content - Navigation Cards */}
            <div className="space-y-6">
              <div className="grid gap-4">
                {/* Formation Card */}
                <Link 
                  to="/learning-academy-comprehensive-education-hub"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="GraduationCap" size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Centre de Formation</h3>
                      <p className="text-slate-300 text-sm">Tutoriels vidéo, guides pratiques et parcours d'apprentissage personnalisés</p>
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>

                {/* Maintenance Card */}
                <Link 
                  to="/maintenance-command-center-service-hub"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Wrench" size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Service & Maintenance</h3>
                      <p className="text-slate-300 text-sm">Dépannage rapide, maintenance préventive et pièces détachées</p>
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>

                {/* Community Card */}
                <Link 
                  to="/community-workshop-user-engagement-hub"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Users" size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Communauté Active</h3>
                      <p className="text-slate-300 text-sm">Échangez avec des experts, partagez vos projets et trouvez l'inspiration</p>
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;