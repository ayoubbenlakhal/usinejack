import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Accueil',
      path: '/homepage-industrial-sewing-e-commerce-hub',
      icon: 'Home'
    },
    {
      name: 'Machines',
      path: '/machine-marketplace-interactive-product-catalog',
      icon: 'Settings'
    },
    {
      name: 'How To Use',
      path: '/how-to-use',
      icon: 'GraduationCap'
    },
    {
      name: 'Maintenance',
      path: "/academy-gate-mec",
      icon: 'Wrench'
    },
    {
      name: 'Réclamation',
      path: '/community-workshop-user-engagement-hub',
      icon: 'Users'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-industrial">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link 
          to="/homepage-industrial-sewing-e-commerce-hub" 
          className="flex items-center space-x-3"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-lg overflow-hidden">
            <img 
              src="https://jackstore.ma/wp-content/uploads/2024/03/cropped-HEADER-1.png" 
              alt="Jackstore Logo" 
              className="h-20 w-auto" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">Usine Jack</span>
            <span className="text-xs text-muted-foreground font-mono">Couture Industrielle</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-micro hover:bg-muted ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Icon name={item?.icon} size={18} />
              <span>{item?.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" iconName="Search" size="sm">
            Rechercher
          </Button>
          <Button variant="outline" iconName="Phone" size="sm">
            Support
          </Button>
          <Button variant="default" iconName="Calendar" size="sm">
            Démonstration
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-micro"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-elevated">
          <div className="px-4 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-micro ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <hr className="my-3 border-border" />
            
            <div className="space-y-2">
              <Button variant="outline" fullWidth iconName="Search" iconPosition="left">
                Rechercher
              </Button>
              <Button variant="outline" fullWidth iconName="Phone" iconPosition="left">
                Support
              </Button>
              <Button variant="default" fullWidth iconName="Calendar" iconPosition="left">
                Démonstration
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
