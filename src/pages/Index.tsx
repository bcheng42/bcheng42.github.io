import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt="Brittany Cheng Betten" />
              <AvatarFallback className="text-lg font-semibold">BCB</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-gray-900">Brittany Cheng Betten</h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Product Leader at Seesaw Learning, a learning experience platform for elementary education. 
            Passionate about building great teams and creating products that deliver meaningful impact for 
            students, educators, and families.
          </p>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Me</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Currently leading teams responsible for Core Experience, Instruction & Learning Insights, and 
              Setup & Integrations at Seesaw Learning.
            </p>
            <p>
              Excited about how people and organizations can work together more effectively. 
              Fueled by copious amounts of oolong and green tea. 🍵
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Head of Product</h3>
              <p className="text-gray-600 mb-2">Brisk Teaching • June 2025 - Present</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">🚀</span>
                  <span>Leading product strategy and innovation in educational technology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">👥</span>
                  <span>Building and scaling product teams for rapid growth</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Senior Manager, Product Management</h3>
              <p className="text-gray-600 mb-2">Seesaw Learning • Sep 2023 - June 2025</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">🚀</span>
                  <span>Led launch of new packaging tier with 50%+ high-value business expansion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">👥</span>
                  <span>Managing team responsible for core platform experience</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Senior Product Manager</h3>
              <p className="text-gray-600 mb-2">Seesaw Learning • Oct 2018 - Sep 2023</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">📈</span>
                  <span>20+ percentage point increase in teacher usage with redesigned communication product</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">📊</span>
                  <span>Supported 5-7x customer base growth over 1.5 years</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Product Manager, Search Experience</h3>
              <p className="text-gray-600 mb-2">Yelp • Dec 2016 - Sep 2018</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">🔍</span>
                  <span>Led UX overhaul increasing app usage and engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">⚡</span>
                  <span>Shipped core improvements to navigation and search</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Product Manager, International</h3>
              <p className="text-gray-600 mb-2">Yelp • Aug 2014 - Nov 2016</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">🌏</span>
                  <span>Led new market launches in Taiwan, Malaysia, Philippines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">🔧</span>
                  <span>Built localization infrastructure for global expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Core Expertise</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">🎯</span>
              <span>Product Strategy & Leadership</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">👥</span>
              <span>Cross-functional Team Management</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">📊</span>
              <span>Growth & Analytics</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🏆</span>
              <span>Educational Technology</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h2>
          <a 
            href="https://www.linkedin.com/in/bcheng42/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>© 2025 Brittany Cheng Betten</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
