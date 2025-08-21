"use client";

import { Code, Coffee, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimizing for speed and efficiency' },
    { icon: Heart, title: 'User-Focused', description: 'Creating delightful user experiences' },
    { icon: Coffee, title: 'Always Learning', description: 'Staying current with new technologies' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience 
                building web applications that make a difference. I love turning complex 
                problems into simple, beautiful solutions.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or hiking in the mountains. 
                I believe in continuous learning and sharing knowledge with the community.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently focused on React, Node.js, and cloud technologies, 
                I'm always excited to take on new challenges and collaborate 
                on innovative projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}