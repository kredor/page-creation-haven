const FooterDE = () => {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Land und Wasser Büro</h3>
          <p className="mb-6">Experten für Wiedervernässung und Umweltüberwachung in Mittelschweden</p>
          <div className="flex flex-wrap justify-center space-x-6 mb-8">
            <span className="text-sm opacity-80 my-1">Wiedervernässung</span>
            <span className="text-sm opacity-80 my-1">Torfmoorrestaurierung</span>
            <span className="text-sm opacity-80 my-1">Naturwiederherstellungsverordnung</span>
            <span className="text-sm opacity-80 my-1">NWV</span>
            <span className="text-sm opacity-80 my-1">Torfmoore</span>
            <span className="text-sm opacity-80 my-1">Feuchtgebiete</span>
            <span className="text-sm opacity-80 my-1">Torfboden</span>
            <span className="text-sm opacity-80 my-1">Feuchtgebietsrestaurierung</span>
            <span className="text-sm opacity-80 my-1">Mittelschweden</span>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/mark-och-vattenbyr%C3%A5n/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LinkedIn</a>
            <a href="mailto:kontakt@markovattenbyran.se" className="hover:text-secondary transition-colors">E-Mail</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDE;