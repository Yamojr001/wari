
import React from 'react';
import { AGENCY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
        <div>
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase rounded mb-6">
            Trusted Protection
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Protecting What Matters <span className="text-blue-700">Most</span> to You.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Wari Insurance Agency provides reliable coverage for every stage of life and business. Local expertise, personalized service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#quote" 
              className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition-all hover:-translate-y-0.5 text-center inline-block"
            >
              Get a Personalized Quote
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i}/40/40`} 
                  alt="Client" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">500+</span> families and businesses protected.
            </p>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Newark, NJ Insurance" 
            className="rounded-2xl shadow-2xl relative z-10"
          />
          {/* Decorative floating card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs animate-bounce-slow">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quote Ready</p>
                <p className="text-sm font-bold text-slate-800">New Policy Confirmed</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Wari Insurance helped us save 15% on our commercial bundle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
