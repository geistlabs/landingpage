'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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