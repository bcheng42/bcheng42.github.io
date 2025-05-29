
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header with photo on left and content on right */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-40 md:w-40 md:h-52 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/9c3d84a3-a916-46f2-b339-905004a35b2a.png" 
                  alt="Brittany Cheng Betten" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6">
                  👋 <strong>Hello! I'm Brittany Cheng Betten.</strong> Here is my (mostly) AI-generated website with links to help you thoroughly stalk my web presence:
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-semibold mb-3">
                      🍎 <strong>My day job:</strong> I lead a team of Product Managers at{' '}
                      <a 
                        href="https://web.seesaw.me/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        Seesaw Learning
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {' '}responsible for Teacher & Family Engagement, Learning Insights & Reporting, and Setup & Integrations.
                    </p>
                    
                    <ul className="ml-6 space-y-2 text-gray-700">
                      <li>
                        • As a PM at{' '}
                        <a 
                          href="https://seesaw.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                        >
                          Seesaw
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        , I was responsible for messaging & family engagement as well as schools & admins products.
                      </li>
                      <li>
                        • Before that, I worked on the core search experience (#searchUX) and international product (#i18n) at{' '}
                        <a 
                          href="https://www.yelp.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                        >
                          Yelp
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        {' '}🔎
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-lg mb-3">
                      <strong>✨ My evenings and weekends:</strong> I{' '}
                      <a 
                        href="http://www.ycore.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        volunteer
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      {' '}🤝,{' '}
                      <a 
                        href="https://www.yelp.com/biz/fort-mason-san-francisco-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        run
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      {' '}🏃, and{' '}
                      <a 
                        href="http://www.yelp.com/biz/dogpatch-boulders-san-francisco" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        climb
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      {' '}🧗
                    </p>
                  </div>

                  <div>
                    <p className="text-lg mb-3">
                      <strong>🐻 My alma mater:</strong> I graduated from{' '}
                      <a 
                        href="http://engineering.berkeley.edu/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        UC Berkeley
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      {' '}with a degree in Electrical Engineering & Computer Science and a certificate in Human-Centered Design
                    </p>
                  </div>

                  <div>
                    <p className="text-lg">
                      👩‍💻 <strong>My resume:</strong> I list my professional activities on{' '}
                      <a 
                        href="http://www.linkedin.com/in/bcheng42" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        LinkedIn
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8 mt-16">
          <p>© 2025 Brittany Cheng Betten</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
