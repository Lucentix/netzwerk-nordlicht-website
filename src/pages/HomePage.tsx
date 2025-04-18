import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero title={''} />
      
      {/* Features Section */}
      <section className="section bg-nord-dark py-16 lg:py-24 relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-nord-accent mb-2">Warum Netzwerk Nordlicht?</h2>
            <p className="text-nord-light/80 text-xl mb-12 max-w-2xl mx-auto">
              Entdecke was unseren FiveM Server besonders macht
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Hardcore RP" 
                description="Erlebe realistisches Rollenspiel mit strengen Regeln für eine immersive Spielerfahrung."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                }
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Deutsche Settings" 
                description="Ein vollständig deutschsprachiger Server mit deutschem Ambiente und authentischer Community."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                }
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Freundliches Team" 
                description="Unser engagiertes Admin-Team steht dir stets zur Seite und sorgt für ein angenehmes Spielerlebnis."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Ausgewogene Wirtschaft" 
                description="Durchdachtes Wirtschaftssystem, das Spielern faire Chancen und ein realistisches Erlebnis bietet."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Vielfältige Jobs" 
                description="Zahlreiche legale und illegale Berufe und Nebenaktivitäten für abwechslungsreiches Gameplay."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Strikte RP Regeln" 
                description="Klare Regeln sorgen für ein faires Spielerlebnis und qualitativ hochwertiges Rollenspiel."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="section py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-nord-accent mb-6">Bereit für echtes Roleplay?</h2>
            <p className="text-nord-light/80 text-lg mb-8 max-w-2xl mx-auto">
              Tritt unserer Community bei und entdecke ein einzigartiges Spielerlebnis in einer lebendigen, realistischen Welt.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/rules" className="btn btn-primary">
                  Regelwerk lesen
                </Link>
              </motion.div>
            </div>
          </motion.div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;