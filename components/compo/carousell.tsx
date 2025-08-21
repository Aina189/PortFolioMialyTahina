import { useRef } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-6 px-6 snap-x snap-mandatory  scroll-smooth"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={100}   // largeur fixe
              height={100}  // hauteur fixe
              className="object-contain w-full h-96 rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
