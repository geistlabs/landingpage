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
      <>
        <Sidebar isMobileMenuOpen={false} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="lg:ml-48">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className={`lg:ml-48 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'transform translate-x-64 lg:translate-x-0' : ''
      }`}>
        {children}
      </div>
    </>
  );
}