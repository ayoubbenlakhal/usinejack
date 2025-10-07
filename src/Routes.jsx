// src/Routes.jsx
import React from "react";
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import RequireAuth from "./components/RequireAuth";
import RequireAuthMec from "./components/RequireAuthMec";

import NotFound from "./pages/NotFound";
import Login from "./pages/loginPage";
import MachineMarketplace from "./pages/machine-marketplace-interactive-product-catalog";
import LearningAcademyPage from "./pages/learning-academy-comprehensive-education-hub";
import HomepageIndustrialSewing from "./pages/homepage-industrial-sewing-e-commerce-hub";
import UserDashboard from "./pages/user-dashboard-personal-command-center";
import CommunityWorkshopUserEngagementHub from "./pages/community-workshop-user-engagement-hub";
import MaintenanceCommandCenter from "./pages/maintenance-command-center-service-hub";
import AcademyGate from "./pages/AcademyGate";

import AcademyGateMec from "./pages/AcademyGateMec";
import LoginPageMec from "./pages/LoginPageMec";

const Routes = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Homepage */}
        <Route index element={<HomepageIndustrialSewing />} />
        <Route
          path="/homepage-industrial-sewing-e-commerce-hub"
          element={<HomepageIndustrialSewing />}
        />

        {/* Public pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/academy-gate" element={<AcademyGate />} />

        {/* Mechanic flow */}
        <Route path="/academy-gate-mec" element={<AcademyGateMec />} />
        <Route path="/login-mec" element={<LoginPageMec />} />
        <Route
          path="/maintenance-command-center-service-hub"
          element={
            <RequireAuthMec>
              <MaintenanceCommandCenter />
            </RequireAuthMec>
          }
        />

        {/* Redirect How To Use → Academy Gate */}
        <Route
          path="/how-to-use"
          element={<Navigate to="/academy-gate" replace />}
        />

        {/* Protected Learning page */}
        <Route
          path="/learning-academy-comprehensive-education-hub"
          element={
            <RequireAuth>
              <LearningAcademyPage />
            </RequireAuth>
          }
        />

        {/* Other public pages */}
        <Route
          path="/machine-marketplace-interactive-product-catalog"
          element={<MachineMarketplace />}
        />
        <Route
          path="/user-dashboard-personal-command-center"
          element={<UserDashboard />}
        />
        <Route
          path="/community-workshop-user-engagement-hub"
          element={<CommunityWorkshopUserEngagementHub />}
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Routes;
