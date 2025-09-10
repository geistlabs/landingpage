'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Sidebar isMobileMenuOpen={false} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="lg:ml-48 flex-1">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className={`lg:ml-48 flex-1 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'transform translate-x-64 lg:translate-x-0' : ''
      }`}>
        {children}
      </div>
    </div>
  );
}