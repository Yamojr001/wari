
import React from 'react';
import { NavItem, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'Dependable coverage for cars, trucks, and commercial vehicles, so you can drive with confidence.',
    icon: '🚗'
  },
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Protect your home and personal belongings from unexpected damage, loss, or liability.',
    icon: '🏠'
  },
  {
    id: 'business',
    title: 'Business Insurance',
    description: 'Practical coverage tailored for small and mid-sized businesses, including property and liability protection.',
    icon: '💼'
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Help secure your family’s financial future with term and permanent life insurance options.',
    icon: '🌳'
  },
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Individual and family health plans designed to meet your medical needs and budget.',
    icon: '🏥'
  },
];

export const AGENCY_INFO = {
  name: 'Wari Insurance Agency',
  tagline: 'Reliable coverage for every stage of life and business.',
  email: 'quote@wariinsurance.com',
  phone: ' 973-810-6762',
  location: '675 Bergen Street, Newark, NJ 07108',
  logoUrl: 'https://drive.google.com/uc?id=1z7Zh7YjUDJYLwfTe0Qp1hP47jTaRNofk'
};
