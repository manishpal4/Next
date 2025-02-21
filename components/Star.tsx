import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface RotatingImageProps {
  src: string;
  className?: string; // Optional
}

// Wrap next/image with motion
const MotionImage = motion(Image);

const RotatingImage: React.FC<RotatingImageProps> = ({ src, className }) => {
  return (
    <MotionImage
      src={src}
      width={100}
      height={100}
      className={className} // Apply optional className
      animate={{ rotate: 360 }} // Full rotation
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Infinite loop
      alt="Rotating Image"
    />
  );
};

export default RotatingImage;
