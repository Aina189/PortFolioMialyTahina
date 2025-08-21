"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Conception 2D et 3D ',
      color: 'bg-blue-100 text-blue-700',
      skills: ["AutoCad", "SolidWork", "Inventor"]
    },
    {
      title: 'Topographie et de génie civil',
      color: 'bg-emerald-100 text-emerald-700',
      skills: ["Covadis"]
    },
    {
      title: ' Logiciel ERP',
      color: 'bg-orange-100 text-orange-700',
      skills: ['Navision']
    },
    {
      title: 'logiciel',
      color: 'bg-purple-100 text-purple-700',
      skills: ["Word", "Excel", "PowerPoint"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Mes compétences
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
              {"Continuer d'apprendre et d'évoluer"}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {"Je suis toujours à la recherche de nouvelles opportunités pour apprendre et me perfectionner dans le domaine de la conception et de l'ingénierie. Mon objectif est de rester à jour avec les dernières technologies et méthodologies pour offrir des solutions innovantes et efficaces."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}