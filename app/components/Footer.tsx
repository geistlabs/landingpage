import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/imprint" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Imprint
          </Link>
          <Link 
            href="/privacy-policy" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}