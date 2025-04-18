import React from 'react';
import { motion } from 'framer-motion';

const DatenschutzPage: React.FC = () => {
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
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-nord-accent mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none text-nord-light/90">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Allgemeine Hinweise</h3>
                  <p className="mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Datenerfassung auf dieser Website</h3>
                  <p className="mb-4">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  </p>
                  <p className="mb-6">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <p className="mb-4">
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                  </p>
                  <p className="mb-6">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                    Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="mb-6">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
                    Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                    Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                  
                  <p className="mb-4">
                    <strong>Wofür nutzen wir Ihre Daten?</strong>
                  </p>
                  <p className="mb-6">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  
                  <p className="mb-4">
                    <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                  </p>
                  <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                    Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
                    Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. 
                    Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-8 mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Externes Hosting</h3>
                  <p className="mb-4">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). 
                    Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. 
                    Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                    Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p className="mb-4">
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) 
                    und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p>
                    Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist 
                    und unsere Weisungen in Bezug auf diese Daten befolgen.
                  </p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Datenschutz</h3>
                  <p className="mb-6">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                    sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="mb-6">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                    Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. 
                    Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="mb-4">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="mb-4">
                    Netzwerk Nordlicht<br />
                    Mustermann GmbH<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </p>
                  <p className="mb-4">
                    Telefon: +49 123 456789<br />
                    E-Mail: info@netzwerk-nordlicht.de
                  </p>
                  <p className="mb-6">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, 
                    die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten 
                    (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-nord-accent mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
                <div className="bg-nord-dark-lighter/30 p-6 rounded-lg border border-nord-accent/20">
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Cookies</h3>
                  <p className="mb-4">
                    Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. 
                    Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                  </p>
                  <p className="mb-6">
                    Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). 
                    Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-nord-light mb-3">Server-Log-Dateien</h3>
                  <p className="mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                    Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – 
                    hierzu müssen die Server-Log-Files erfasst werden.
                  </p>
                </div>
              </section>
              
              <p className="mt-12 text-nord-light/70 text-sm">
                Diese Datenschutzerklärung wurde unter Verwendung von Vorlagen von <a href="https://www.e-recht24.de" className="text-nord-accent hover:text-nord-light transition-colors">e-recht24.de</a> erstellt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
