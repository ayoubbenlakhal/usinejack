import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';

const HomepageIndustrialSewing = () => {
  return (
    <>
      <Helmet>
        <title>Usine Jack - Votre partenaire complet en couture industrielle</title>
        <meta
          name="description"
          content="Découvrez notre écosystème complet : machines industrielles de pointe, formation professionnelle, maintenance experte et communauté active pour exceller dans la couture industrielle."
        />
        <meta
          name="keywords"
          content="machines à coudre industrielles, formation couture, maintenance textile, JACK, BROTHER, JUKI, TAJIMA"
        />
        <meta property="og:title" content="Usine Jack - De l'achat à la maîtrise" />
        <meta
          property="og:description"
          content="Votre partenaire complet en couture industrielle avec 10+ années d'expertise"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-industrial-sewing-e-commerce-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          <HeroSection />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <img
                  src="https://jackstore.ma/wp-content/uploads/2024/03/cropped-HEADER-1.png"
                  alt="Usine Jack Logo"
                  className="h-12 w-auto object-contain mb-4"
                />
                <p className="text-slate-300 text-sm mb-4">
                  Votre partenaire de confiance pour l'équipement, la formation et la maintenance en
                  couture industrielle depuis 2014.
                </p>
                <p className="text-sm text-slate-400">
                  © {new Date().getFullYear()} Usine Jack. Tous droits réservés.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <a
                      href="/machine-marketplace-interactive-product-catalog"
                      className="hover:text-white transition-colors"
                    >
                      Machines
                    </a>
                  </li>
                  <li>
                    <a href="/how-to-use" className="hover:text-white transition-colors">
                      How to use
                    </a>
                  </li>
                  <li>
                    <a href="/academy-gate-mec" className="hover:text-white transition-colors">
                      Maintenance
                    </a>
                  </li>
                  <li>
                    <a
                      href="/community-workshop-user-engagement-hub"
                      className="hover:text-white transition-colors"
                    >
                      Réclamation
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Centre d'aide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Garanties
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pièces détachées
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Manuels PDF
                    </a>
                  </li>
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
                <a href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  CGV
                </a>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-slate-400">Suivez-nous:</span>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    FB
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    TW
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    IN
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
