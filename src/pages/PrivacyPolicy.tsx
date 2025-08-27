import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">Integritetspolicy</h1>
          <p className="text-center text-gray-600 mb-12">Uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Personuppgiftsansvarig</h2>
              <p>
                Mark- och vattenbyrån är personuppgiftsansvarig för behandlingen av dina personuppgifter. 
                Kontaktuppgifter finns på vår webbplats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Vilka personuppgifter samlar vi in?</h2>
              <p>Vi samlar in följande personuppgifter när du kontaktar oss:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Namn:</strong> För att kunna identifiera och svara dig</li>
                <li><strong>E-postadress:</strong> För att kunna återkoppla till dig</li>
                <li><strong>Meddelande:</strong> Det innehåll du skriver i kontaktformuläret</li>
                <li><strong>IP-adress:</strong> Samlas automatiskt för säkerhet och tekniska ändamål</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Varför behandlar vi dina personuppgifter?</h2>
              <p>Vi behandlar dina personuppgifter för följande ändamål:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Att svara på dina frågor och förfrågningar</li>
                <li>Att tillhandahålla våra tjänster inom återvätning och miljöövervakning</li>
                <li>Att följa upp potentiella affärsmöjligheter</li>
                <li>Att förebygga missbruk av våra tjänster</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Laglig grund för behandling</h2>
              <p>
                Vår behandling av dina personuppgifter grundar sig på <strong>berättigat intresse</strong> enligt 
                artikel 6.1 f i GDPR. Vårt berättigade intresse är att kunna bedriva vår verksamhet, 
                svara på förfrågningar och utveckla kundrelationer inom vårt expertområde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Hur länge sparar vi dina uppgifter?</h2>
              <p>
                Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla ändamålen 
                med behandlingen. Som regel gäller:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Kontaktförfrågningar:</strong> Raderas efter 24 månader om ingen affärsrelation uppstått</li>
                <li><strong>Kundrelationer:</strong> Sparas under hela kundrelationen plus 7 år enligt bokföringslagen</li>
                <li><strong>Tekniska loggar:</strong> Raderas efter 12 månader</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Delar vi dina uppgifter med andra?</h2>
              <p>
                Vi delar inte dina personuppgifter med tredje parter utan ditt samtycke, förutom i följande fall:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>När det krävs enligt lag</li>
                <li>Till våra tekniska leverantörer som hjälper oss med IT-drift (personuppgiftsbiträden)</li>
                <li>Vid företagsförvärv eller fusion (med föregående information till dig)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Överföring till tredje land</h2>
              <p>
                Vi strävar efter att hålla all behandling inom EU/EES. Om överföring till tredje land 
                skulle ske informerar vi dig separat och säkerställer adekvat skyddsnivå.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Dina rättigheter</h2>
              <p>Enligt GDPR har du följande rättigheter:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Rätt till information:</strong> Du har rätt att få information om hur vi behandlar dina uppgifter</li>
                <li><strong>Rätt till rättelse:</strong> Du kan begära att vi rättar felaktiga uppgifter</li>
                <li><strong>Rätt till radering:</strong> Du kan begära att vi raderar dina uppgifter ("rätten att bli bortglömd")</li>
                <li><strong>Rätt till begränsning:</strong> Du kan begära att vi begränsar behandlingen</li>
                <li><strong>Rätt till dataportabilitet:</strong> Du kan få ut dina uppgifter i maskinläsbart format</li>
                <li><strong>Rätt att invända:</strong> Du kan invända mot behandling som grundar sig på berättigat intresse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Säkerhet</h2>
              <p>
                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Obehörig åtkomst</li>
                <li>Oavsiktlig förlust eller förstöring</li>
                <li>Otillåten ändring eller spridning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Cookies och webbanalys</h2>
              <p>
                Vår webbplats kan använda cookies för att förbättra användarupplevelsen. 
                Du kan blockera cookies i din webbläsare, men vissa funktioner kan då påverkas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Klagomål</h2>
              <p>
                Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna klagomål 
                till Integritetsskyddsmyndigheten (IMY): 
                <a href="https://www.imy.se" className="text-primary underline hover:no-underline ml-1">
                  www.imy.se
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Kontakt</h2>
              <p>
                Har du frågor om denna integritetspolicy eller vill utöva dina rättigheter? 
                Kontakta oss via formuläret på webbplatsen eller e-post.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Ändringar av integritetspolicyn</h2>
              <p>
                Vi kan komma att uppdatera denna integritetspolicy. Vid väsentliga ändringar informerar vi dig 
                via e-post eller genom tydlig information på webbplatsen.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;