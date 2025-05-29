
import React from 'react';
import { MapPin, Mail, Linkedin, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const experiences = [
    {
      company: "Brisk Teaching",
      role: "Head of Product",
      period: "2025 - Present",
      description: "Leading product strategy and development for innovative educational technology solutions that empower teachers and enhance student learning experiences."
    },
    {
      company: "Educational Technology Sector",
      role: "Senior Product Manager",
      period: "2020 - 2024",
      description: "Drove product strategy and execution for EdTech platforms, focusing on user-centered design and data-driven product decisions to improve educational outcomes."
    },
    {
      company: "Product Leadership",
      role: "Product Manager",
      period: "2018 - 2020",
      description: "Built and scaled educational technology products, working closely with educators and students to develop solutions that address real classroom needs."
    }
  ];

  const skills = [
    { name: "Product Strategy & Roadmapping", level: 95 },
    { name: "User Research & Analytics", level: 92 },
    { name: "Cross-functional Team Leadership", level: 94 },
    { name: "Educational Technology", level: 98 },
    { name: "Agile/Scrum Methodologies", level: 90 },
    { name: "Data-Driven Decision Making", level: 88 }
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
                  Product Leader passionate about educational technology and building products that transform teaching and learning experiences.
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
              I'm a passionate Product Leader with extensive experience in educational technology, dedicated to creating 
              products that make a meaningful impact on teaching and learning. As the incoming Head of Product at Brisk Teaching, 
              I focus on building innovative solutions that empower educators and enhance student outcomes.
            </p>
            <p>
              My approach to product leadership centers around user-centered design, data-driven decision making, and 
              collaborative cross-functional team leadership. I believe that the best educational technology products 
              are born from deep understanding of educator and student needs, combined with strategic product vision 
              and execution excellence.
            </p>
            <p>
              When I'm not building products, you can find me staying current with the latest EdTech trends, mentoring 
              emerging product managers, or exploring the beautiful outdoors of the San Francisco Bay Area. I'm always 
              excited to connect with fellow educators and product enthusiasts.
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
            I'm always interested in new opportunities and collaborations in educational technology.
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
        <p className="opacity-80">© 2024 Brittany Cheng. Building the future of educational technology.</p>
      </footer>
    </div>
  );
};

export default Index;
