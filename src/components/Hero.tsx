import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLink?: string;
  ctaText?: string;
  height?: 'small' | 'medium' | 'large' | 'full';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaLink,
  ctaText,
  height = 'large',
}) => {
  const heightClasses = {
    small: 'h-[40vh]',
    medium: 'h-[60vh]',
    large: 'h-[80vh]',
    full: 'h-screen',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${heightClasses[height]}`}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-nord-dark via-nord-dark-lighter/30 to-nord-dark" />
      
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundImage: `radial-gradient(circle at center, #88C0D0 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-[20%] left-0 right-0 h-32 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(136, 192, 208, 0.4) 20%, rgba(143, 188, 187, 0.3) 50%, rgba(163, 190, 140, 0.2) 80%, transparent 100%)',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="absolute top-[30%] left-0 right-0 h-24 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(94, 129, 172, 0.3) 30%, rgba(136, 192, 208, 0.4) 60%, transparent 100%)',
            filter: 'blur(30px)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-6"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-nord-light mb-2">
              Netzwerk <span className="text-nord-accent">Nordlicht</span>
            </h1>
            {title && (
              <p className="text-2xl md:text-3xl text-nord-light/80 font-medium mt-4">
                {title}
              </p>
            )}
          </motion.div>

          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-nord-light/70 leading-relaxed mb-10"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

          {ctaLink && ctaText && (
            <motion.div variants={itemVariants} className="mt-10">
              <Link to={ctaLink}>
                <motion.button
                  className="bg-gradient-to-r from-nord-accent to-nord-blue text-nord-dark font-semibold px-10 py-4 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {ctaText}
                </motion.button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {height === 'full' && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.6 },
          }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-nord-light/50 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <motion.div className="w-1.5 h-1.5 bg-nord-light/80 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
