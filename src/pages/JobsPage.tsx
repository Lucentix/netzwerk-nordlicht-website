import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JobCardProps {
  title: string;
  description: string;
  type: 'legal' | 'illegal' | 'neutral';
  icon: React.ReactNode;
  details?: string[];
}

const JobCard: React.FC<JobCardProps> = ({ title, description, type, icon, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let borderColor = 'border-nord-accent/30';
  let titleColor = 'text-nord-accent';
  
  if (type === 'illegal') {
    borderColor = 'border-nord-red/30';
    titleColor = 'text-nord-red';
  } else if (type === 'neutral') {
    borderColor = 'border-nord-light/30';
    titleColor = 'text-nord-light';
  }
  
  return (
    <motion.div 
      className={`bg-nord-dark-lighter/30 p-6 rounded-lg border ${borderColor} hover:shadow-lg transition-all duration-300`}
      whileHover={{ y: -5 }}
      layout
    >
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className={`${titleColor} mb-4`}>{icon}</div>
          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nord-light/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
        <h3 className={`text-xl font-semibold ${titleColor} mb-3`}>{title}</h3>
        <p className="text-nord-light/80">{description}</p>
      </div>
      
      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-nord-light/10">
              <h4 className="text-lg font-medium text-nord-light/90 mb-2">Job Details:</h4>
              <ul className="list-disc list-inside text-nord-light/70 space-y-1">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const JobsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'legal' | 'illegal' | 'neutral'>('all');
  
  const jobData = {
    legal: [
      { 
        title: "Polizei", 
        description: "Sorge für Recht und Ordnung in der Stadt, führe Verkehrskontrollen durch, nimm Anzeigen auf und verfolge Kriminelle.",
        details: [
          "Verfolgung von Straftätern und Verkehrssündern",
          "Aufnahme von Anzeigen und Ermittlungen",
          "Spezialeinheiten für besondere Einsätze",
          "Aufstiegsmöglichkeiten vom Anwärter bis zum Polizeichef"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      { 
        title: "Sanitäter", 
        description: "Rette Leben! Versorge Verletzte, transportiere Patienten und arbeite eng mit der Polizei zusammen.",
        details: [
          "Notfallversorgung und Transport von Verletzten",
          "Zusammenarbeit mit dem Krankenhaus",
          "Rettungshubschrauber für schnelle Einsätze",
          "Medizinische Ausbildungsmöglichkeiten"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )
      },
      { 
        title: "Mechaniker", 
        description: "Repariere und tune Fahrzeuge, betreibe eine eigene Werkstatt und biete spezielle Dienstleistungen an.",
        details: [
          "Reparatur und Wartung von Fahrzeugen",
          "Tuningmöglichkeiten und Sonderumbauten",
          "Eigene Werkstatt mit Geschäftsmodell",
          "Abschleppdienst für liegengebliebene Fahrzeuge"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 00-1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
    ],
    illegal: [
      { 
        title: "Drogenschmuggel", 
        description: "Beschaffe, verarbeite und verkaufe verschiedene Substanzen - aber hüte dich vor der Polizei.",
        details: [
          "Anbau und Verarbeitung von illegalen Substanzen",
          "Vertriebsnetzwerk und Handel",
          "Territoriale Konflikte mit anderen Kartellen",
          "Hohe Risiken, aber auch hohe Gewinne"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      },
      { 
        title: "Bankraub", 
        description: "Plane und führe hochriskante Raubüberfälle auf Banken durch - aber rechne mit starkem Polizeieinsatz.",
        details: [
          "Komplexe Planungsphase und Vorbereitung",
          "Benötigt mehrere Teilnehmer mit verschiedenen Fähigkeiten",
          "Flucht- und Verkleidungsstrategien",
          "Extreme polizeiliche Verfolgung"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      },
    ],
    neutral: [
      { 
        title: "Immobilienmakler", 
        description: "Kaufe, verkaufe und vermiete Immobilien in der ganzen Stadt und baue dir ein Imperium auf.",
        details: [
          "Vermittlung von Immobilien an Spieler und Fraktionen",
          "Verwaltung von Mietobjekten",
          "Entwicklung ganzer Stadtteile",
          "Legale Geschäfte mit potentiell schattigen Kunden"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      },
      { 
        title: "Reporter", 
        description: "Berichte über aktuelle Ereignisse, führe Interviews und decke Skandale auf - deine Kamera ist deine Waffe.",
        details: [
          "Berichterstattung von kriminellen und polizeilichen Aktivitäten",
          "Enthüllung von Korruption und Skandalen",
          "Moderation von Debatten und Interviews",
          "Neutralität kann gefährlich sein, bietet aber Zugang zu allen Fraktionen"
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      },
    ]
  };

  const filterVariants = {
    active: { 
      backgroundColor: "rgba(136, 192, 208, 0.2)",
      color: "#88C0D0",
      border: "1px solid rgba(136, 192, 208, 0.5)"
    },
    inactive: { 
      backgroundColor: "rgba(59, 66, 82, 0.3)",
      color: "#E5E9F0",
      border: "1px solid rgba(229, 233, 240, 0.1)"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const filteredJobs = activeFilter === 'all' 
    ? [...jobData.legal, ...jobData.illegal, ...jobData.neutral]
    : jobData[activeFilter];

  return (
    <div className="bg-nord-dark min-h-screen relative">
      <div className="absolute top-0 inset-x-0 h-64 overflow-hidden z-0 pointer-events-none">
        <div 
          className="absolute top-0 inset-x-0 h-40 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(136, 192, 208, 0.3) 20%, rgba(94, 129, 172, 0.2) 50%, rgba(136, 192, 208, 0.3) 80%, transparent 100%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-nord-accent mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jobs & Aktivitäten
        </motion.h1>
        
        <motion.p 
          className="text-xl text-nord-light/90 mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Netzwerk Nordlicht bietet eine Vielzahl von Jobs und Aktivitäten, die für ein abwechslungsreiches 
          Spielerlebnis sorgen. Entdecke die verschiedenen Möglichkeiten, deinen Charakter zu entwickeln 
          und deinen Platz in der Welt zu finden.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-3 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg text-nord-light transition-all"
            animate={activeFilter === 'all' ? 'active' : 'inactive'}
            variants={filterVariants}
            onClick={() => setActiveFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alle Jobs
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-nord-light transition-all"
            animate={activeFilter === 'legal' ? 'active' : 'inactive'}
            variants={filterVariants}
            onClick={() => setActiveFilter('legal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Legale Jobs
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-nord-light transition-all"
            animate={activeFilter === 'illegal' ? 'active' : 'inactive'}
            variants={filterVariants}
            onClick={() => setActiveFilter('illegal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Illegale Jobs
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-nord-light transition-all"
            animate={activeFilter === 'neutral' ? 'active' : 'inactive'}
            variants={filterVariants}
            onClick={() => setActiveFilter('neutral')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Neutrale Jobs
          </motion.button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          {filteredJobs.map((job, index) => (
            <JobCard 
              key={`${job.title}-${index}`}
              title={job.title}
              description={job.description}
              type={job.title === "Drogenschmuggel" || job.title === "Bankraub" || job.title === "Waffentransport" ? 'illegal' : 
                     job.title === "Immobilienmakler" || job.title === "Reporter" || job.title === "Privatdetektiv" ? 'neutral' : 'legal'}
              icon={job.icon}
              details={job.details}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-nord-accent mb-4">Weitere Jobs und Aktivitäten</h3>
          <p className="text-nord-light/90 mb-4">
            Die hier aufgelisteten Jobs sind nur ein kleiner Ausschnitt der vielfältigen Möglichkeiten auf unserem Server. 
            In der Spielwelt warten noch viele weitere legale und illegale Tätigkeiten auf dich. 
            Erkunde die Welt und finde deinen Platz in der Gesellschaft von Netzwerk Nordlicht.
          </p>
          <div className="mt-4">
            <motion.a 
              href="#" 
              className="btn bg-gradient-to-r from-nord-accent to-nord-blue text-nord-dark inline-flex items-center hover:shadow-glow-blue transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Mehr Jobs entdecken
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobsPage;