export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-black mb-4 sm:mb-6 tracking-tight">
          Geist AI
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
          Your privacy-focused AI companion that keeps your conversations secure and your data yours
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 text-xs px-3 py-1 rounded-full font-medium shadow-sm animate-pulse">
              Coming Soon
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 w-[220px] h-[64px] justify-center">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download for iOS</span>
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 text-xs px-3 py-1 rounded-full font-medium shadow-sm animate-pulse">
              Coming Soon
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 w-[220px] h-[64px] justify-center">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Download for Android</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
