
import React from 'react';
import { MapPin, Mail, Linkedin, ExternalLink, Download, Users, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const experiences = [
    {
      company: "Seesaw Learning",
      role: "Senior Manager, Product Management",
      period: "Sep 2023 - Present",
      description: "Leading Product Teams for Core Experience, Instruction & Learning Insights, and Setup & Integrations.",
      highlights: [
        "Led launch of new packaging tier with 50%+ high-value business expansion",
        "Managing team responsible for core platform experience"
      ]
    },
    {
      company: "Seesaw Learning",
      role: "Senior Product Manager",
      period: "Oct 2018 - Sep 2023",
      description: "Drove key product initiatives across messaging, family engagement, and admin experiences.",
      highlights: [
        "20+ percentage point increase in teacher usage with redesigned communication product",
        "Supported 5-7x customer base growth over 1.5 years"
      ]
    },
    {
      company: "Yelp",
      role: "Product Manager, Search Experience",
      period: "Dec 2016 - Sep 2018",
      description: "Owned core search experience across all platforms, driving user engagement and retention.",
      highlights: [
        "Led UX overhaul increasing app usage and engagement",
        "Shipped core improvements to navigation and search"
      ]
    },
    {
      company: "Yelp",
      role: "Product Manager, International",
      period: "Aug 2014 - Nov 2016",
      description: "Launched and grew Yelp across 18 languages and 32 international markets.",
      highlights: [
        "Led new market launches in Taiwan, Malaysia, Philippines",
        "Built localization infrastructure for global expansion"
      ]
    }
  ];

  const skills = [
    { name: "Product Strategy & Leadership", level: 95, icon: Target },
    { name: "Cross-functional Team Management", level: 92, icon: Users },
    { name: "Growth & Analytics", level: 90, icon: TrendingUp },
    { name: "Educational Technology", level: 98, icon: Award }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Product Leader at Seesaw Learning, a learning experience platform for elementary education. 
              Passionate about building great teams and creating products that deliver meaningful impact for 
              students, educators, and families.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Currently leading teams responsible for Core Experience, Instruction & Learning Insights, and 
              Setup & Integrations. Excited about how people and organizations can work together more effectively. 
              Fueled by copious amounts of oolong and green tea. 🍵
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-2">{exp.company}</h4>
                      <p className="text-gray-600 leading-relaxed mb-3">{exp.description}</p>
                    </div>
                    <span className="text-gray-500 font-medium lg:ml-6 flex-shrink-0">{exp.period}</span>
                  </div>
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Core Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <skill.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 opacity-90">
            Always interested in new opportunities and collaborations in educational technology.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/bcheng42/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="opacity-80">© 2024 Brittany Cheng Betten. Creating joyful learning experiences at Seesaw.</p>
      </footer>
    </div>
  );
};

export default Index;
