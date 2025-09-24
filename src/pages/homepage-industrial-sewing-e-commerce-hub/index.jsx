import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedMachines from './components/FeaturedMachines';
import LearningPathways from './components/LearningPathways';
import MaintenanceDashboard from './components/MaintenanceDashboard';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CommunitySpotlight from './components/CommunitySpotlight';
import TrustIndicators from './components/TrustIndicators';
import MobileServicePortal from './components/MobileServicePortal';

const HomepageIndustrialSewing = () => {
  return (
    <>
      <Helmet>
        <title>Usine Jack - Votre partenaire complet en couture industrielle</title>
        <meta name="description" content="Découvrez notre écosystème complet : machines industrielles de pointe, formation professionnelle, maintenance experte et communauté active pour exceller dans la couture industrielle." />
        <meta name="keywords" content="machines à coudre industrielles, formation couture, maintenance textile, JACK, BROTHER, JUKI, TAJIMA" />
        <meta property="og:title" content="Usine Jack - De l'achat à la maîtrise" />
        <meta property="og:description" content="Votre partenaire complet en couture industrielle avec 10+ années d'expertise" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-industrial-sewing-e-commerce-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Machines Showcase */}
          <FeaturedMachines />

          {/* Learning Pathways */}
          <LearningPathways />

          {/* Maintenance Dashboard */}
          <MaintenanceDashboard />

          {/* Customer Testimonials */}
          <TestimonialsCarousel />

          {/* Community Spotlight */}
          <CommunitySpotlight />

          {/* Trust Indicators */}
          <TrustIndicators />

          {/* Mobile Service Portal */}
          <MobileServicePortal />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Usine Jack</div>
                    <div className="text-sm text-slate-400">Couture Industrielle</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Votre partenaire de confiance pour l'équipement, la formation et la maintenance en couture industrielle depuis 2014.
                </p>
                <div className="text-sm text-slate-400">
                  <p>© {new Date()?.getFullYear()} Usine Jack. Tous droits réservés.</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="/machine-marketplace-interactive-product-catalog" className="hover:text-white transition-colors">Machines</a></li>
                  <li><a href="/learning-academy-comprehensive-education-hub" className="hover:text-white transition-colors">Formation</a></li>
                  <li><a href="/maintenance-command-center-service-hub" className="hover:text-white transition-colors">Maintenance</a></li>
                  <li><a href="/community-workshop-user-engagement-hub" className="hover:text-white transition-colors">Communauté</a></li>
                  <li><a href="/user-dashboard-personal-command-center" className="hover:text-white transition-colors">Mon Compte</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Garanties</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pièces détachées</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Manuels PDF</a></li>
                  <li className="text-orange-400 font-medium">Urgence: +33 1 23 45 67 89</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div>
                    <p className="font-medium text-white">Showroom hay mohammadi</p>
                    <p>123 Avenue de l'Industrie</p>
                    <p>69000 Lyon, France</p>
                  </div>
                  <div>
                    <p>Tél: +33 4 78 90 12 34</p>
                    <p>Email: contact@usine-jack.fr</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Horaires</p>
                    <p>Lun-Ven: 8h-18h</p>
                    <p>Sam: 9h-12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="#" className="hover:text-white transition-colors">CGV</a>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-slate-400">Suivez-nous:</span>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageIndustrialSewing;