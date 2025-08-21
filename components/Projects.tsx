"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Project1 from "../public/assets/planDelevation.webp";
import Project2 from "../public/assets/Schémahydrauliqueréalisé.webp";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogTrigger } from "./ui/dialog";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ImageScroller from "./compo/carousell";

export default function Projects() {
  const projects = [
    {
      title:
        "Réalisation de plans 2D pour des sites d’électrification rurale à Madagascar",
      description:
        "Conception des plans d’avant-projet et des plans de récolement : plan de masse, plan d’implantation, plan de terrassement, plan d’élévation, disposition des équipements, plan de mise à la terre, courbes de niveau, profils de clôtures.",
      imagePlan: Project1,
      technologies: ["autocad", "covadis", "excel"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      imagesDetail: [Project1, Project2],
    },
    {
      title: "Conception et modélisation de systèmes hydrauliques",
      description:
        "Réalisation de plans 2D de centrales et circuits hydrauliques.\n Modélisation 3D de composants hydrauliques pour différents clients.\n Gestion des relations et communications avec les fournisseurs.",
      imagePlan: Project2,
      technologies: ["autocad (2d)", " inventor (3d)"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      imagesDetail: [],
    },
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const MotionImage = motion(Image);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    setCenterIndex(newIndex);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Mes Projets
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
                >
                  <div className="relative">
                    <Image
                      width={100}
                      height={100}
                      src={project.imagePlan as unknown as string}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-emerald-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-blue-100 text-blue-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Detail image
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="h-1/2 w-full md:w-1/2 flex items-center justify-center bg-slate-900">
                          <ImageScroller
                            images={project.imagesDetail.map(
                              (image) => image.src
                            )}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
