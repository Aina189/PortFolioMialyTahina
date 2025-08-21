import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function ImageScroller({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const handleScroll = () => {
      const centerPos = container.scrollLeft + container.offsetWidth / 2;
      setCenter(centerPos);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initialisation
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto space-x-6 snap-x snap-mandatory px-6 scrollbar-hide"
    >
      {images.map((src, index) => {
        let scale = 0.9;
        let opacity = 0.6;

        if (containerRef.current) {
          const imgWidth = 256; // correspond à w-64 (≈256px)
          const gap = 24; // space-x-6 = 1.5rem = 24px
          const imgCenter = index * (imgWidth + gap) + imgWidth / 2;
          const distance = Math.abs(center - imgCenter);

          // Ajuste selon la distance au centre
          scale = Math.max(0.9, 1.1 - distance / 800);
          opacity = Math.max(0.6, 1 - distance / 800);
        }

        return (
          <MotionImage
            key={index}
            src={src}
            alt={`Detail ${index}`}
            width={256}   // largeur fixe
            height={160}  // hauteur fixe
            className="snap-center rounded-xl object-cover w-64 h-40"
            animate={{ scale, opacity }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </div>
  );
}
