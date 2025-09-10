'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Manifesto', href: '/manifesto' },
  { name: 'For Business', href: '/for-business' },
];

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();
  const [showTypeform, setShowTypeform] = useState(false);

  useEffect(() => {
    if (showTypeform) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [showTypeform]);

  const openWaitlist = () => {
    setShowTypeform(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger button with horizontal background */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 z-50 lg:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="ml-4 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="fixed left-0 top-0 h-full w-48 flex items-center justify-center hidden lg:flex">
        <nav className="space-y-4">
          {pathname !== '/' && (
            <Link
              href="/"
              className="block text-sm font-medium transition-colors duration-200 hover:text-white text-white"
            >
              Home
            </Link>
          )}
          <button
            onClick={openWaitlist}
            className="block text-sm font-medium transition-colors duration-200 hover:text-white text-white"
          >
            Waitlist
          </button>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-sm font-medium transition-colors duration-200 hover:text-white ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black flex items-center justify-center lg:hidden transform transition-transform duration-300 ease-in-out z-40 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <nav className="space-y-6">
          {pathname !== '/' && (
            <Link
              href="/"
              className="block text-lg font-medium transition-colors duration-200 hover:text-white text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          )}
          <button
            onClick={openWaitlist}
            className="block text-lg font-medium transition-colors duration-200 hover:text-white text-white"
          >
            Waitlist
          </button>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-lg font-medium transition-colors duration-200 hover:text-white ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Typeform Modal */}
      {showTypeform && (
        <>
          <div 
            className="fixed inset-0 bg-black/80 z-50"
            onClick={() => setShowTypeform(false)}
          />
          <div className="fixed top-8 left-8 right-8 bottom-8 max-w-4xl max-h-[90vh] mx-auto z-50 bg-white rounded-lg overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setShowTypeform(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div 
              data-tf-live="01K4TM96YA9Y11JRFY4HTEKQ41"
              className="w-full h-full"
            ></div>
          </div>
        </>
      )}
    </>
  );
}