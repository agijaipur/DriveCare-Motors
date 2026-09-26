import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-brand-soft">
      <div className="max-w-2xl w-full text-center space-y-8 p-12 bg-white rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {title}
          </h1>
          <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-500 mb-8">
            We're currently crafting this page to bring you the best possible experience. Check back soon!
          </p>
          
          <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brand-accent bg-blue-50">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
