"use client";

import { Activity, Ear, Hammer, Handshake} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Profil from "../public/assets/profil.jpg";

export default function About() {
  const highlights = [
    {
      icon: Activity,
      title: "Esprit d’analyse et de synthèse",
      description: "Capacité à résoudre des problèmes complexes",
    },
    {
      icon: Handshake,
      title: "Travail en équipe",
      description: "Capacité à collaborer efficacement",
    },
    {
      icon: Hammer,
      title: "Adaptabilité",
      description: "Capacité à s'adapter aux besoins des clients",
    },
    {
      icon: Ear,
      title: "Communication",
      description: "Capacité à communiquer clairement et efficacement",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            A propos de moi
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={Profil}
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {
                  "Titulaire d’une formation en Génie Mécanique et Industriel, j’ai acquis de solides bases en conception industrielle. "
                }
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {
                  " Aujourd’hui, je me suis spécialisé dans l’utilisation de logiciels 2D/3D tels qu’AutoCAD, Inventor et SolidWorks pour la modélisation et la réalisation de projets techniques."
                }
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {
                  " Passionné par le monde du bureau d’études et par la conception innovante, je conçois des solutions performantes et adaptées aux besoins des utilisateurs. Par ailleurs, j’ai développé des compétences en gestion de projets et en relations avec les fournisseurs, assurant la coordination efficace entre les équipes techniques et les partenaires externes."
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-blue-50"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
