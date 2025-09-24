import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import MachineMarketplace from './pages/machine-marketplace-interactive-product-catalog';
import LearningAcademyPage from './pages/learning-academy-comprehensive-education-hub';
import HomepageIndustrialSewing from './pages/homepage-industrial-sewing-e-commerce-hub';
import UserDashboard from './pages/user-dashboard-personal-command-center';
import CommunityWorkshopUserEngagementHub from './pages/community-workshop-user-engagement-hub';
import MaintenanceCommandCenter from './pages/maintenance-command-center-service-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CommunityWorkshopUserEngagementHub />} />
        <Route path="/machine-marketplace-interactive-product-catalog" element={<MachineMarketplace />} />
        <Route path="/learning-academy-comprehensive-education-hub" element={<LearningAcademyPage />} />
        <Route path="/homepage-industrial-sewing-e-commerce-hub" element={<HomepageIndustrialSewing />} />
        <Route path="/user-dashboard-personal-command-center" element={<UserDashboard />} />
        <Route path="/community-workshop-user-engagement-hub" element={<CommunityWorkshopUserEngagementHub />} />
        <Route path="/maintenance-command-center-service-hub" element={<MaintenanceCommandCenter />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
