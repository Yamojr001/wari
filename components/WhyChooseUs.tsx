
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://wariinsurance.com/girls.jpeg" 
              alt="Insurance Consultation" 
              className="rounded-2xl shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Reliable Service" 
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Choose Wari Insurance</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Wari Insurance Agency is a local, client-focused insurance provider committed to clear advice, competitive pricing, and responsive service.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Personalized Approach</h4>
                <p className="text-slate-600 text-sm">We take the time to understand your needs and explain your options clearly.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Competitive Pricing</h4>
                <p className="text-slate-600 text-sm">We shop across multiple carriers to find you the best value for your coverage.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Responsive Support</h4>
                <p className="text-slate-600 text-sm">Our licensed agents are always just a phone call or visit away when you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
