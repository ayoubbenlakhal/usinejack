import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';


const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Accueil',
      path: '/homepage-industrial-sewing-e-commerce-hub',
      icon: 'Home',
      description: 'Tableau de bord principal'
    },
    {
      name: 'Machines',
      path: '/machine-marketplace-interactive-product-catalog',
      icon: 'Settings',
      description: 'Catalogue des équipements'
    },
    {
      name: 'Formation',
      path: '/learning-academy-comprehensive-education-hub',
      icon: 'GraduationCap',
      description: 'Académie d\'apprentissage'
    },
    {
      name: 'Maintenance',
      path: '/maintenance-command-center-service-hub',
      icon: 'Wrench',
      description: 'Centre de service'
    },
    {
      name: 'Tableau de Bord',
      path: '/user-dashboard-personal-command-center',
      icon: 'LayoutDashboard',
      description: 'Espace personnel'
    },
    {
      name: 'Communauté',
      path: '/community-workshop-user-engagement-hub',
      icon: 'Users',
      description: 'Atelier communautaire'
    }
  ];

  const quickActions = [
    { name: 'SOS Dépannage', icon: 'AlertTriangle', color: 'text-error' },
    { name: 'Nouvelle Commande', icon: 'ShoppingCart', color: 'text-accent' },
    { name: 'Planifier Service', icon: 'Calendar', color: 'text-success' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const shouldExpand = isCollapsed && isHovered;
  const sidebarWidth = isCollapsed && !isHovered ? 'w-16' : 'w-64';

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 z-40 ${sidebarWidth} bg-card border-r border-border shadow-industrial transition-all duration-300 ease-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {(!isCollapsed || shouldExpand) && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Zap" size={16} color="white" />
              </div>
              <span className="font-semibold text-sm text-foreground">Navigation</span>
            </div>
          )}
          
          {onToggle && (
            <button
              onClick={onToggle}
              className="p-1 rounded-md hover:bg-muted transition-micro"
            >
              <Icon 
                name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
                size={16} 
                className="text-muted-foreground"
              />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2">
          <div className="space-y-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`group flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-micro ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={20} 
                  className={`flex-shrink-0 ${
                    isActivePath(item?.path) ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'
                  }`}
                />
                
                {(!isCollapsed || shouldExpand) && (
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{item?.name}</div>
                    {shouldExpand && (
                      <div className="text-xs text-muted-foreground truncate mt-0.5">
                        {item?.description}
                      </div>
                    )}
                  </div>
                )}
                
                {isCollapsed && !shouldExpand && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover border border-border rounded-md shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-meaningful whitespace-nowrap z-50">
                    <div className="text-xs font-medium">{item?.name}</div>
                    <div className="text-xs text-muted-foreground">{item?.description}</div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Quick Actions */}
        <div className="p-4 border-t border-border">
          {(!isCollapsed || shouldExpand) && (
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Actions Rapides
              </h3>
            </div>
          )}
          
          <div className="space-y-2">
            {quickActions?.map((action, index) => (
              <button
                key={index}
                className={`group flex items-center space-x-3 w-full px-3 py-2 rounded-md text-sm font-medium transition-micro hover:bg-muted ${
                  isCollapsed && !shouldExpand ? 'justify-center' : ''
                }`}
              >
                <Icon 
                  name={action?.icon} 
                  size={18} 
                  className={`flex-shrink-0 ${action?.color} group-hover:scale-110 transition-transform`}
                />
                
                {(!isCollapsed || shouldExpand) && (
                  <span className="text-foreground group-hover:text-primary truncate">
                    {action?.name}
                  </span>
                )}
                
                {isCollapsed && !shouldExpand && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover border border-border rounded-md shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-meaningful whitespace-nowrap z-50">
                    <div className="text-xs font-medium">{action?.name}</div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <div className={`flex items-center space-x-3 ${isCollapsed && !shouldExpand ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Icon name="User" size={16} color="white" />
            </div>
            
            {(!isCollapsed || shouldExpand) && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  Utilisateur Pro
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  Compte Premium
                </div>
              </div>
            )}
            
            {(!isCollapsed || shouldExpand) && (
              <button className="p-1 rounded-md hover:bg-muted transition-micro">
                <Icon name="Settings" size={16} className="text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;