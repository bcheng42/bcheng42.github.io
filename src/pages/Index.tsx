
import React from 'react';
import { MapPin, Mail, Linkedin, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const experiences = [
    {
      company: "Apple",
      role: "Senior UX Designer",
      period: "2022 - Present",
      description: "Leading design initiatives for consumer-facing products, focusing on user experience optimization and design system development."
    },
    {
      company: "Microsoft",
      role: "UX Designer",
      period: "2020 - 2022",
      description: "Designed user interfaces for enterprise software solutions, conducted user research, and collaborated with cross-functional teams."
    },
    {
      company: "Previous Experience",
      role: "UI/UX Designer",
      period: "2018 - 2020",
      description: "Developed digital experiences for various clients, specializing in responsive web design and mobile applications."
    }
  ];

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Figma", level: 98 },
    { name: "Adobe Creative Suite", level: 90 },
    { name: "Prototyping", level: 92 },
    { name: "User Research", level: 88 },
    { name: "Design Systems", level: 94 }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Brittany Cheng</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Brittany</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  UX/UI Designer crafting meaningful digital experiences at the intersection of user needs and business goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>San Francisco Bay Area</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                BC
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I'm a passionate UX/UI designer with a strong background in creating user-centered digital experiences. 
              Currently working at Apple, I focus on designing intuitive interfaces that solve real user problems 
              while meeting business objectives.
            </p>
            <p>
              My design philosophy centers around empathy, iteration, and collaboration. I believe that great design 
              happens when we truly understand our users and work closely with cross-functional teams to bring 
              innovative solutions to life.
            </p>
            <p>
              When I'm not designing, you can find me exploring the latest design trends, mentoring upcoming designers, 
              or enjoying the beautiful outdoors of the San Francisco Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                      <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:brittany@example.com" 
              className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email Me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/bcheng42/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
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
        <p className="opacity-80">© 2024 Brittany Cheng. Designed with passion and precision.</p>
      </footer>
    </div>
  );
};

export default Index;
