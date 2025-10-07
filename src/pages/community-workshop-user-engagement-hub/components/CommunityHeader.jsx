import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityHeader = () => {
  return (
    <div className="relative bg-card border-b border-border">
      {/* 🔹 Background image */}
      <div className="absolute inset-0">
        <img
          src="https://kb-oss-ali.chinajack.com/2025-06-06%2013%3A58%3A09%E8%BF%87EN.png"
          alt="Machine à coudre industrielle"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-blue-900/50"></div>
      </div>

      {/* 🔹 Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col items-center text-center space-y-2">
          {/* Icon */}
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <Icon name="Wrench" size={22} color="white" />
          </div>

          {/* Title + subtitle */}
          <h1 className="text-2xl font-bold text-white drop-shadow-sm">
            Forum de Réclamation
          </h1>
          <p className="text-slate-200 text-sm max-w-xl">
            Déposez vos réclamations et suivez leur traitement
          </p>

          {/* 🔹 Animated Down Arrow */}
          <div className="mt-6 animate-bounce">
            <Icon name="ArrowDown" size={28} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
