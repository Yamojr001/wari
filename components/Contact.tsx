
import React from 'react';
import { AGENCY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions or need assistance? We’re here to help. Reach out to us via phone, email, or visit our office in Newark.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${AGENCY_INFO.email}`} className="text-lg font-medium text-slate-800 hover:text-blue-700 transition-colors">
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                  <a href={`tel:${AGENCY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-lg font-medium text-slate-800 hover:text-blue-700 transition-colors">
                    {AGENCY_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                  <address className="text-lg font-medium text-slate-800 not-italic">
                    {AGENCY_INFO.location}
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] bg-slate-100 rounded-2xl overflow-hidden relative shadow-inner">
            {/* Embedded map placeholder */}
            <iframe 
              src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${encodeURIComponent(AGENCY_INFO.location)}`}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 pointer-events-none">
              <div className="text-center p-8">
                <p className="font-bold text-slate-500 mb-2">Google Maps View</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">675 Bergen Street, Newark, NJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
