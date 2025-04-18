import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nord-dark border-t border-nord-accent/20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and short description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="text-center mb-4">
              <Link to="/" className="flex justify-center items-center">
              <span className="text-xl font-bold text-nord-accent">Netzwerk</span>
              <span className="text-xl font-bold text-nord-light ml-2">Nordlicht</span>
              </Link>
            </div>
            <p className="text-nord-light/70 text-center mb-4 text-sm">
              Der führende deutsche FiveM Hardcore Roleplay Server
            </p>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-1"
          >
            <h4 className="text-lg font-medium text-nord-accent mb-4">Seiten</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-nord-light/70 hover:text-nord-accent transition-colors">Home</Link>
              <Link to="/about" className="text-nord-light/70 hover:text-nord-accent transition-colors">Über uns</Link>
              <Link to="/jobs" className="text-nord-light/70 hover:text-nord-accent transition-colors">Jobs</Link>
              <Link to="/contact" className="text-nord-light/70 hover:text-nord-accent transition-colors">Kontakt</Link>
              <Link to="/rules" className="text-nord-light/70 hover:text-nord-accent transition-colors">Regelwerk</Link>
            </nav>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-1"
          >
            <h4 className="text-lg font-medium text-nord-accent mb-4">Community</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-nord-light/70 hover:text-nord-accent transition-colors">Server Status</a>
              <a href="#" className="text-nord-light/70 hover:text-nord-accent transition-colors">Forum</a>
            </nav>
          </motion.div>

          {/* Discord Join */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 md:col-span-1"
          >
            <h4 className="text-lg font-medium text-nord-accent mb-4">Jetzt mitmachen!</h4>
            <p className="text-nord-light/70 mb-4 text-sm">
              Tritt jetzt unserem Discord bei und werde Teil der Netzwerk Nordlicht Community!
            </p>
              <motion.a 
                href="#" 
                className="btn bg-[#5865F2] text-white hover:bg-opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.393-.403.850-.548 1.227a16.318 16.318 0 0 0-4.93 0 10.55 10.55 0 0 0-.554-1.227.077.077 0 0 0-.079-.036 16.677 16.677 0 0 0-4.885 1.491.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 16.966 16.966 0 0 0 5.122 2.594.077.077 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.995.021-.041.001-.09-.046-.106a11.03 11.03 0 0 1-1.565-.752.077.077 0 0 1-.008-.128 8.585 8.585 0 0 0 .372-.291.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.35 12.35 0 0 1-1.566.752.077.077 0 0 0-.045.107c.36.698.772 1.363 1.225 1.994a.076.076 0 0 0 .084.028 16.964 16.964 0 0 0 5.122-2.594.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.011 0-1.843-.926-1.843-2.066 0-1.14.822-2.066 1.843-2.066 1.03 0 1.843.927 1.85 2.066 0 1.14-.82 2.066-1.85 2.066zm6.843 0c-1.011 0-1.843-.926-1.843-2.066 0-1.14.822-2.066 1.843-2.066 1.03 0 1.843.927 1.85 2.066 0 1.14-.82 2.066-1.85 2.066z"/>
                </svg>
                Discord beitreten
              </motion.a>
          </motion.div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-nord-accent/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-nord-light/50 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} Netzwerk Nordlicht. Alle Rechte vorbehalten.
          </motion.p>
          <motion.div 
            className="mt-4 md:mt-0 flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/datenschutz" className="text-nord-light/50 hover:text-nord-accent text-sm">Datenschutz</Link>
            <Link to="/impressum" className="text-nord-light/50 hover:text-nord-accent text-sm">Impressum</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;