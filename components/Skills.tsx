"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'bg-blue-100 text-blue-700',
      skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+']
    },
    {
      title: 'Backend',
      color: 'bg-emerald-100 text-emerald-700',
      skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      title: 'Tools & DevOps',
      color: 'bg-orange-100 text-orange-700',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Jest', 'CI/CD', 'Linux']
    },
    {
      title: 'Design',
      color: 'bg-purple-100 text-purple-700',
      skills: ['Figma', 'UI/UX', 'Responsive Design', 'Accessibility', 'Design Systems', 'Prototyping']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <div className={`w-4 h-4 rounded-full ${category.color.split(' ')[0]} mr-3`}></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default px-3 py-1`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Always Learning
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends 
              and best practices. Currently exploring AI/ML integration, Web3 technologies, and 
              advanced cloud architecture patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}