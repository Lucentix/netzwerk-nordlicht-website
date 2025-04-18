import React from 'react';
import { motion } from 'framer-motion';

const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-nord-dark">
      <div className="pt-24 pb-16">
        {/* Gradient background instead of image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-nord-dark via-nord-dark-lighter/20 to-nord-dark opacity-80 pointer-events-none"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(nord-accent 1px, transparent 1px)`, 
              backgroundSize: '20px 20px' 
            }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-nord-accent mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none text-nord-light/90">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p><strong>Netzwerk Nordlicht</strong></p>
                  <p>Mustermann GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Kontakt</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p>Telefon: +49 123 456789</p>
                  <p>E-Mail: info@netzwerk-nordlicht.de</p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Vertretungsberechtigte</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p>Geschäftsführer: Max Mustermann</p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Registereintrag</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Amtsgericht Musterstadt</p>
                  <p>Registernummer: HRB 12345</p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Umsatzsteuer-ID</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p>DE123456789</p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Verantwortlich für den Inhalt</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p>Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-6 mb-4">Streitschlichtung</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                  <p><a href="https://ec.europa.eu/consumers/odr/" className="text-nord-accent hover:text-nord-light transition-colors">https://ec.europa.eu/consumers/odr/</a></p>
                  <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
