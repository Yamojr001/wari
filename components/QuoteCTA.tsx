
import React from 'react';

const QuoteCTA: React.FC = () => {
  return (
    <div className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get a Personalized Insurance Quote</h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Speak directly with a licensed agent to review your coverage needs and explore the right insurance options for you.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="tel:9733919595" 
            className="flex items-center gap-3 px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
             973-810-6762
          </a>
          <span className="text-blue-300 font-medium">or</span>
          <a 
            href="mailto:quote@wariinsurance.com" 
            className="flex items-center gap-3 px-8 py-4 bg-blue-700 text-white border border-blue-600 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email for a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteCTA;
