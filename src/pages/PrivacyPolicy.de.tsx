import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicyDE = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/de" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Datenschutzerklärung
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Einführung</h2>
              <p className="text-lg mb-4">
                Land und Wasser Büro (Mark och Vattenbyrån) verpflichtet sich, Ihre Privatsphäre und persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Informationen in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) und den schwedischen Datenschutzgesetzen sammeln, verwenden und schützen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Datenverantwortlicher</h2>
              <p className="text-lg mb-4">
                <strong>Datenverantwortlicher:</strong> Mark och Vattenbyrån<br/>
                <strong>E-Mail:</strong> kontakt@markovattenbyran.se
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Personenbezogene Daten, die wir sammeln</h2>
              <p className="text-lg mb-4">Wir können folgende Arten von personenbezogenen Daten sammeln:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Kontaktinformationen:</strong> Name, E-Mail-Adresse, Telefonnummer, Postanschrift</li>
                <li><strong>Projektinformationen:</strong> Eigentumsdetails, Projektanforderungen, technische Daten im Zusammenhang mit Wiedervernässungsprojekten</li>
                <li><strong>Kommunikationsdaten:</strong> Korrespondenz, Besprechungsnotizen, Projektdiskussionen</li>
                <li><strong>Website-Nutzungsdaten:</strong> IP-Adresse, Browser-Informationen, besuchte Seiten (durch Cookies und Analysen)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Rechtsgrundlage für die Verarbeitung</h2>
              <p className="text-lg mb-4">Wir verarbeiten Ihre personenbezogenen Daten basierend auf:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Einverständnis:</strong> Wenn Sie uns kontaktieren oder unseren Newsletter abonnieren</li>
                <li><strong>Vertragserfüllung:</strong> Um Beratungsdienstleistungen und Wiedervernässungsprojekte zu liefern</li>
                <li><strong>Berechtigtes Interesse:</strong> Um unsere Dienstleistungen zu verbessern und Kundenbeziehungen zu pflegen</li>
                <li><strong>Rechtliche Verpflichtung:</strong> Um Buchhaltungs- und Umweltberichtspflichten zu erfüllen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Wie wir Ihre Daten verwenden</h2>
              <p className="text-lg mb-4">Wir verwenden Ihre personenbezogenen Daten, um:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Beratungsdienstleistungen und Projektmanagement für Wiedervernässungsprojekte anzubieten</li>
                <li>Mit Ihnen über Projekte, Dienstleistungen und Anfragen zu kommunizieren</li>
                <li>Vertragspflichten zu erfüllen und vereinbarte Dienstleistungen zu liefern</li>
                <li>Unsere Dienstleistungen zu verbessern und neue Angebote zu entwickeln</li>
                <li>Gesetzliche und regulatorische Anforderungen zu erfüllen</li>
                <li>Marketing-Kommunikation zu senden (mit Ihrer Einverständnis)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Datenweitergabe und -übertragungen</h2>
              <p className="text-lg mb-4">Wir können Ihre personenbezogenen Daten teilen mit:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Dienstleistern:</strong> Technische Berater, Subunternehmer und professionelle Berater</li>
                <li><strong>Behörden:</strong> Umweltbehörden, Gemeinden und Aufsichtsbehörden wenn erforderlich</li>
                <li><strong>Partnern:</strong> Kooperationspartner in Wiedervernässungsprojekten (mit Ihrer Einverständnis)</li>
              </ul>
              <p className="text-lg mb-4">
                Wir verkaufen, vermieten oder handeln Ihre personenbezogenen Daten nicht an Dritte. Alle Datenweitergaben erfolgen in Übereinstimmung mit DSGVO-Anforderungen und mit angemessenen Schutzmaßnahmen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Datenspeicherung</h2>
              <p className="text-lg mb-4">Wir speichern Ihre personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Projektdaten:</strong> Für die Dauer des Projekts plus 7 Jahre für Buchhaltungszwecke</li>
                <li><strong>Kontaktinformationen:</strong> Bis Sie die Einverständnis widerrufen oder Löschung beantragen</li>
                <li><strong>Marketing-Daten:</strong> Bis Sie sich abmelden oder die Einverständnis widerrufen</li>
                <li><strong>Website-Analysen:</strong> Daten werden nach 26 Monaten anonymisiert</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Ihre Rechte unter der DSGVO</h2>
              <p className="text-lg mb-4">Sie haben das Recht auf:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Zugang:</strong> Informationen darüber anzufordern, wie wir Ihre personenbezogenen Daten verarbeiten</li>
                <li><strong>Berichtigung:</strong> Unrichtige oder unvollständige personenbezogene Daten zu korrigieren</li>
                <li><strong>Löschung:</strong> Löschung Ihrer personenbezogenen Daten zu beantragen ("Recht auf Vergessenwerden")</li>
                <li><strong>Einschränkung:</strong> Die Art der Verarbeitung Ihrer personenbezogenen Daten zu begrenzen</li>
                <li><strong>Portabilität:</strong> Ihre Daten in einem strukturierten, maschinenlesbaren Format zu erhalten</li>
                <li><strong>Widerspruch:</strong> Der Verarbeitung basierend auf berechtigten Interessen zu widersprechen</li>
                <li><strong>Einverständnis widerrufen:</strong> Die Einverständnis jederzeit zu widerrufen, wo die Verarbeitung auf Einverständnis basiert</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Cookies und Website-Analysen</h2>
              <p className="text-lg mb-4">
                Unsere Website verwendet Cookies, um die Funktionalität zu verbessern und die Nutzung zu analysieren. Wir verwenden Google Analytics, um zu verstehen, wie Besucher mit unserer Site interagieren. Sie können Cookie-Präferenzen in Ihren Browser-Einstellungen verwalten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Datensicherheit</h2>
              <p className="text-lg mb-4">
                Wir implementieren angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung. Dies umfasst Verschlüsselung, Zugriffskontrollen und regelmäßige Sicherheitsbewertungen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Kontakt und Beschwerden</h2>
              <p className="text-lg mb-4">
                Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns unter:
              </p>
              <p className="text-lg mb-4">
                <strong>E-Mail:</strong> kontakt@markovattenbyran.se
              </p>
              <p className="text-lg mb-4">
                Sie haben auch das Recht, eine Beschwerde bei der schwedischen Datenschutzbehörde (IMY) einzureichen, wenn Sie glauben, dass wir Ihre personenbezogenen Daten nicht korrekt behandelt haben.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Änderungen an dieser Richtlinie</h2>
              <p className="text-lg mb-4">
                Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die aktuelle Version ist immer auf unserer Website verfügbar. Bedeutende Änderungen werden Ihnen direkt mitgeteilt.
              </p>
              <p className="text-lg">
                <strong>Zuletzt aktualisiert:</strong> {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyDE;