"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showTypeform, setShowTypeform] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showTypeform) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [showTypeform]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center justify-center">
          <main className="text-center max-w-4xl mx-auto">
            <div className="block sm:hidden mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-200 to-slate-200 bg-[length:200%_200%] rounded-full animate-gradient-xy opacity-80 blur-sm"></div>
                <div className="relative bg-black px-3 py-1 rounded-full border border-gray-800">
                  <span className="text-white text-xs font-medium">
                    Join Waitlist
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white mb-4 sm:mb-6 tracking-tight">
              Geist AI
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
              A private AI companion that keeps every conversation secure and your
              data in your hands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-black/80 backdrop-blur-sm border border-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  Coming Soon
                </div>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 w-[220px] h-[64px] justify-center">
                  <svg
                    className="w-6 h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span>Download for iOS</span>
                </button>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="bg-black/80 backdrop-blur-sm border border-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  Coming Soon
                </div>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 w-[220px] h-[64px] justify-center">
                  <svg
                    className="w-6 h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Download for Android</span>
                </button>
              </div>
            </div>
          </main>
        </div>
        
        {/* Footer */}
        <div className="max-w-4xl mx-auto w-full pb-8">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
            <a
              href="/imprint"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Imprint
            </a>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex items-center justify-center">
        <main className="text-center max-w-4xl mx-auto">
          <div className="block sm:hidden mb-6">
            <button
              onClick={() => setShowTypeform(true)}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-200 to-slate-200 bg-[length:200%_200%] rounded-full animate-gradient-xy opacity-80 blur-sm"></div>
              <div className="relative bg-black px-3 py-1 rounded-full border border-gray-800">
                <span className="text-white text-xs font-medium">
                  Join Waitlist
                </span>
              </div>
            </button>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white mb-4 sm:mb-6 tracking-tight">
            Geist AI
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            A private AI companion that keeps every conversation secure and your
            data in your hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-black/80 backdrop-blur-sm border border-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                Coming Soon
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 w-[220px] h-[64px] justify-center">
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Download for iOS</span>
              </button>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="bg-black/80 backdrop-blur-sm border border-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                Coming Soon
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 w-[220px] h-[64px] justify-center">
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full pb-8">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <a
            href="/imprint"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Imprint
          </a>
          <a
            href="/privacy-policy"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>

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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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
    </div>
  );
}
