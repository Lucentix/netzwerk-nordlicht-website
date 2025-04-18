import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    scrolled ? 'bg-nord-dark/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'
  }`;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Über uns' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/contact', label: 'Kontakt' },
  ];

  const menuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      transition: { 
        duration: 0.2
      } 
    },
    open: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.2,
        staggerChildren: 0.07
      } 
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.header 
      className={navbarClasses}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          variants={headerVariants}
        >
          <Link to="/" className="flex items-center">
            {/* Logo gradient instead of image */}
            <div className="h-12 w-12 mr-3 rounded-full bg-gradient-to-br from-nord-accent to-nord-blue flex items-center justify-center shadow-md">
              <div className="h-8 w-8 bg-nord-dark rounded-full flex items-center justify-center">
                <span className="text-nord-light font-bold">NN</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-2xl font-bold text-nord-accent">Netzwerk</span>
              <span className="text-2xl font-bold text-nord-light ml-2">Nordlicht</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex space-x-1 lg:space-x-2" variants={headerVariants}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              variants={headerVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-nord-accent'
                    : 'text-nord-light hover:text-nord-accent'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="h-0.5 bg-nord-accent mt-1 mx-auto"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile menu button */}
        <motion.div 
          className="md:hidden"
          variants={headerVariants}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-nord-light p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-nord-dark/95 backdrop-blur-md py-2 shadow-lg"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="container mx-auto px-4">
            {navItems.map((item) => (
              <motion.div key={item.path} variants={menuItemVariants}>
                <Link
                  to={item.path}
                  className={`block py-3 border-b border-nord-light/10 ${
                    location.pathname === item.path
                      ? 'text-nord-accent font-medium'
                      : 'text-nord-light'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={menuItemVariants}>
              <a
                href="#"
                className="flex items-center py-3 text-nord-accent"
              >
                {/* Simplified Discord icon */}
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.393-.403.850-.548 1.227a16.318 16.318 0 0 0-4.93 0 10.55 10.55 0 0 0-.554-1.227.077.077 0 0 0-.079-.036 16.677 16.677 0 0 0-4.885 1.491.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 16.966 16.966 0 0 0 5.122 2.594.077.077 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.995.021-.041.001-.09-.046-.106a11.03 11.03 0 0 1-1.565-.752.077.077 0 0 1-.008-.128 8.585 8.585 0 0 0 .372-.291.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.35 12.35 0 0 1-1.566.752.077.077 0 0 0-.045.107c.36.698.772 1.363 1.225 1.994a.076.076 0 0 0 .084.028 16.964 16.964 0 0 0 5.122-2.594.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.011 0-1.843-.926-1.843-2.066 0-1.14.822-2.066 1.843-2.066 1.03 0 1.843.927 1.85 2.066 0 1.14-.82 2.066-1.85 2.066zm6.843 0c-1.011 0-1.843-.926-1.843-2.066 0-1.14.822-2.066 1.843-2.066 1.03 0 1.843.927 1.85 2.066 0 1.14-.82 2.066-1.85 2.066z"/>
                </svg>
                Discord beitreten
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;