"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Ingenieur Industriel";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-emerald-50"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto pt-20">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            {"Bonjour, Je suis"}
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            
            <span className="">
              RAMANANIAINA Nomenjanahary {" "}
            </span>
            <span className="text-blue-700">
              Mialy Tahiana Ambinintsoa{" "}
            </span>
          
          </h1>

          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {"Je suis un genie industriel , speciliser dans le modelisation 3D"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir mes travaux
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Aller en contact
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://www.linkedin.com/in/mialytahiana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ramananiainamialy@gmail.com"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-700 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
