import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-nord-dark text-nord-light relative">
      {/* Northern Lights Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-nord-dark to-transparent z-10"></div>
        
        {/* Static Aurora layers */}
        <div 
          className="absolute top-[5%] left-0 right-0 h-64 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(136, 192, 208, 0.4) 20%, rgba(143, 188, 187, 0.3) 50%, rgba(163, 190, 140, 0.2) 80%, transparent 100%)',
            filter: 'blur(60px)',
            transform: 'rotate(-5deg)'
          }}
        />
        <div 
          className="absolute top-[15%] left-0 right-0 h-40 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 10%, rgba(94, 129, 172, 0.3) 40%, rgba(136, 192, 208, 0.4) 70%, transparent 100%)',
            filter: 'blur(50px)',
            transform: 'rotate(3deg)'
          }}
        />
        <div 
          className="absolute top-[30%] left-0 right-0 h-32 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, rgba(180, 142, 173, 0.3) 35%, rgba(94, 129, 172, 0.2) 75%, transparent 100%)',
            filter: 'blur(40px)',
            transform: 'rotate(-2deg)'
          }}
        />
      </div>
      
      {/* Subtle animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-5" 
          style={{ 
            backgroundImage: `radial-gradient(#88C0D0 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }}>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-nord-accent to-nord-blue">Über Netzwerk Nordlicht</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-nord-light/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Ein Einblick in unsere Community, unser Team und unsere Vision für FiveM Roleplay.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section with animated entrance */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-nord-dark-lighter/30 to-nord-dark relative">
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-nord-accent/40 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="w-full md:w-3/4 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-nord-accent mb-6"
              whileInView={{ 
                textShadow: ["0 0 0px rgba(136, 192, 208, 0)", "0 0 10px rgba(136, 192, 208, 0.5)", "0 0 0px rgba(136, 192, 208, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              Unsere Geschichte
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.3 }}
            >
              <p className="text-nord-light/80 leading-relaxed mb-4">
                Netzwerk Nordlicht entstand aus der Leidenschaft für qualitativ hochwertiges Roleplay. Was als kleine Idee begann, entwickelte sich schnell zu einem der führenden deutschen FiveM Server.
              </p>
              <p className="text-nord-light/80 leading-relaxed mb-4">
                Unser Ziel war es von Anfang an, eine Community zu schaffen, die Wert auf echtes Roleplay legt, in der Spieler ihre Charaktere frei entwickeln können und tiefgründige Geschichten entstehen.
              </p>
              <p className="text-nord-light/80 leading-relaxed">
                Heute sind wir stolz auf eine lebendige Community, die täglich wächst und gemeinsam eine einzigartige Spielwelt erschafft.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with card animations */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-nord-accent mb-4">Das Team hinter Netzwerk Nordlicht</h2>
            <p className="text-nord-light/80 max-w-2xl mx-auto">
              Unser engagiertes Team arbeitet täglich daran, den Server zu verbessern und für ein unvergessliches Spielerlebnis zu sorgen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Max", role: "Server Leitung", color: "from-nord-accent to-nord-blue" },
              { name: "Lisa", role: "Community Management", color: "from-nord-green to-nord-accent" },
              { name: "Tom", role: "Entwickler", color: "from-nord-blue to-nord-purple" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`p-1 bg-gradient-to-br ${member.color}`}>
                  <div className="bg-nord-dark-lighter/40 p-6 rounded-md">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-nord-dark-lighter to-nord-dark"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <span className="text-2xl font-bold text-nord-accent">{member.name.charAt(0)}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-nord-accent mb-2">{member.name}</h3>
                    <p className="text-nord-light/70">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community CTA with aurora effect */}
      <section className="py-16 md:py-24 relative">
        {/* Aurora effect for this section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-full opacity-10"
            style={{
              background: 'radial-gradient(ellipse at bottom, rgba(136, 192, 208, 0.3) 0%, rgba(46, 52, 64, 0) 70%)',
            }}
            animate={{ 
              opacity: [0.1, 0.15, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="bg-gradient-to-b from-nord-dark-lighter/10 to-nord-dark-lighter/30 rounded-xl mx-6 lg:mx-auto max-w-4xl p-8 md:p-12 relative z-10">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 opacity-30"
              style={{ 
                backgroundImage: `radial-gradient(circle at 50% 0%, #88C0D0 0%, transparent 60%)`, 
              }}
            />
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-nord-accent mb-6"
                animate={{ 
                  textShadow: ["0 0 0px rgba(136, 192, 208, 0)", "0 0 8px rgba(136, 192, 208, 0.5)", "0 0 0px rgba(136, 192, 208, 0)"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Werde Teil unserer Community
              </motion.h2>
              <p className="text-lg text-nord-light/80 mb-8">
                Du möchtest Teil von Netzwerk Nordlicht werden? Tritt unserem Discord Server bei und erlebe Roleplay auf einem neuen Niveau!
              </p>
              <motion.a 
                href="#" 
                className="btn bg-gradient-to-r from-nord-accent to-nord-blue text-nord-dark font-semibold px-8 py-3 rounded-lg hover:shadow-glow-blue transition-all"
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
