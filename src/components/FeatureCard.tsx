import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconBgColor = 'bg-nord-blue',
  delay = 0,
}) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: delay
      }
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  return (
    <motion.div
      className="bg-nord-dark-lighter/40 rounded-xl p-6 shadow-md border border-nord-accent/10"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
    >
      {icon && (
        <motion.div
          className={`${iconBgColor} w-14 h-14 rounded-lg flex items-center justify-center text-nord-light mb-4 shadow-sm`}
          variants={iconVariants}
        >
          {icon}
        </motion.div>
      )}
      
      <h3 className="text-xl font-bold text-nord-accent mb-3">{title}</h3>
      
      <p className="text-nord-light/70">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;