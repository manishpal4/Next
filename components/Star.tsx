import { motion } from "framer-motion";

interface RotatingImageProps {
  src: string;
 
  className?: string; // Optional
}

const RotatingImage: React.FC<RotatingImageProps> = ({ src, className }) => {
  return (
    <motion.img
      src={src}
     
      className={className} // Apply optional className
      animate={{ rotate: 360 }} // Full rotation
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Infinite loop
    />
  );
};

export default RotatingImage;
