import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-nord-dark">
      {/* Contact Hero Section */}
      <div className="relative py-24 md:py-32 flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-nord-dark via-nord-dark/70 to-nord-dark/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-nord-accent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kontaktiere uns
            </motion.h1>
            
            <motion.p 
              className="text-xl text-nord-light/90 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Der schnellste Weg, um mit uns in Kontakt zu treten, ist über unseren Discord Server. Unser Team steht dir dort für alle Fragen zur Verfügung.
            </motion.p>
            
            <motion.div
              className="bg-nord-dark-lighter/60 p-8 md:p-12 rounded-xl backdrop-blur-sm border border-nord-accent/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="bg-[#5865F2] w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 15, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.393-.403.850-.548 1.227a16.318 16.318 0 0 0-4.93 0 10.55 10.55 0 0 0-.554-1.227.077.077 0 0 0-.079-.036 16.677 16.677 0 0 0-4.885 1.491.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 16.966 16.966 0 0 0 5.122 2.594.077.077 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.995.021-.041.001-.09-.046-.106a11.03 11.03 0 0 1-1.565-.752.077.077 0 0 1-.008-.128 8.585 8.585 0 0 0 .372-.291.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.35 12.35 0 0 1-1.566.752.077.077 0 0 0-.045.107c.36.698.772 1.363 1.225 1.994a.076.076 0 0 0 .084.028 16.964 16.964 0 0 0 5.122-2.594.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.011 0-1.843-.926-1.843-2.066 0-1.14.822-2.066 1.843-2.066 1.03 0 1.843.927 1.85 2.066 0 1.14-.82 2.066-1.85 2.066zm6.843 0c-1.011 0-1.843-.926-1.843-2.066 0-1.14.822-2.066 1.843-2.066 1.03 0 1.843.927 1.85 2.066 0 1.14-.82 2.066-1.85 2.066z"/>
                  </svg>
                </motion.div>
                
                <h2 className="text-2xl font-bold text-nord-light mb-3">Discord</h2>
                <p className="text-nord-light/80 mb-8 text-center">
                  Tritt unserem Discord bei, um mit uns und der Community in Kontakt zu treten.
                  Unser Support-Team ist dort täglich erreichbar.
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Support Hours Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-nord-accent mb-6">Support-Zeiten</h2>
            <p className="text-nord-light/80 mb-8">
              Unser Team ist zu folgenden Zeiten aktiv im Discord verfügbar:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold text-nord-light mb-3">Wochentags</h3>
                <p className="text-nord-light/70">15:00 - 22:00 Uhr</p>
              </motion.div>
              
              <motion.div 
                className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold text-nord-light mb-3">Wochenende</h3>
                <p className="text-nord-light/70">12:00 - 23:00 Uhr</p>
              </motion.div>
            </div>
            
            <p className="mt-8 text-nord-light/60 text-sm">
              Außerhalb dieser Zeiten kannst du eine Nachricht im Support-Kanal hinterlassen, 
              und wir werden uns schnellstmöglich bei dir melden.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;