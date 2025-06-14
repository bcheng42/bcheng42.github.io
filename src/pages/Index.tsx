
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-lexend">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header with full-width hello section */}
        <header className="mb-12">
          {/* Hello section taking full width */}
          <div className="mb-10">
            <p className="text-base mb-6">
              👋 <strong className="text-xl">Hello! I'm Brittany Cheng Betten</strong><br /> Here is my (partially) AI-generated website with links to help you thoroughly stalk my web presence...
            </p>
          </div>

          {/* Photo and content section */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
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
                <div className="space-y-4">
                  {/* Day job section */}
                  <div>
                    <div className="font-bold text-base mb-1">My day job</div>
                    <p className="text-base leading-tight">
                      I'm the Head of Product at{' '}
                      <a
                        href="https://www.briskteaching.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Brisk Teaching
                      </a>
                      {' '}✨ where we're building an AI Assistant for every teacher and classroom. Previously, I led product teams at{' '}
                      <a
                        href="https://seesaw.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Seesaw Learning
                      </a>{' '}🍎
                      and{' '}
                      <a
                        href="https://www.yelp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Yelp
                      </a>
                      {' '}🔎
                    </p>
                  </div>

                  {/* Evenings and weekends section */}
                  <div>
                    <div className="font-bold text-base mb-1">My evenings and weekends</div>
                    <p className="text-base leading-tight">
                      Outside of work, I {' '}
                      <a
                        href="https://opendoorlegal.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        volunteer
                      </a>
                      {' '}🤝,{' '}
                      <a
                        href="https://www.yelp.com/biz/fort-mason-san-francisco-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        run
                      </a>
                      {' '}🏃, and{' '}
                      <a
                        href="https://www.yelp.com/biz/dogpatch-boulders-san-francisco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        climb
                      </a>
                      {' '}🧗
                    </p>
                  </div>

                  {/* Favorites section */}
                  <div>
                    <div className="font-bold text-base mb-1">My favorites</div>
                    <p className="text-base leading-tight">
                      I especially love{' '}
                      <a
                        href="https://www.instagram.com/blooms_end/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        croissants
                      </a>
                      {' '}🥐 and{' '}
                      <a
                        href="https://www.instagram.com/ashateahouse/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        tea
                      </a>
                      {' '}🍵
                    </p>
                  </div>

                  {/* Alma mater section */}
                  <div>
                    <div className="font-bold text-base mb-1">My alma mater</div>
                    <p className="text-base leading-tight">
                      I graduated from{' '}
                      <a
                        href="https://engineering.berkeley.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        UC Berkeley
                      </a>
                      {' '}🐻 with a degree in Electrical Engineering & Computer Science and a certificate in Human-Centered Design
                    </p>
                  </div>

                  {/* Resume section */}
                  <div>
                    <div className="font-bold text-base mb-1">My resume</div>
                    <p className="text-base leading-tight">
                      I list my professional activities on{' '}
                      <a
                        href="https://www.linkedin.com/in/bcheng42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        LinkedIn
                      </a>{' '}💼
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs border-t border-gray-200 pt-8 mt-16">
          <p>🍵 Created with Lovable by Brittany Cheng Betten</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
