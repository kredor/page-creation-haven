
const Footer = () => {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Mark och Vattenbyrån</h3>
          <p className="mb-6">Experter på återvätning och miljöövervakning i Mellansverige</p>
          <div className="flex flex-wrap justify-center space-x-6 mb-8">
            <span className="text-sm opacity-80 my-1">återvätning</span>
            <span className="text-sm opacity-80 my-1">rewetting</span>
            <span className="text-sm opacity-80 my-1">naturrestaureringsfördordningen</span>
            <span className="text-sm opacity-80 my-1">NRF</span>
            <span className="text-sm opacity-80 my-1">Nature Restoration Law</span>
            <span className="text-sm opacity-80 my-1">torvmarker</span>
            <span className="text-sm opacity-80 my-1">våtmarker</span>
            <span className="text-sm opacity-80 my-1">torvjord</span>
            <span className="text-sm opacity-80 my-1">peatland restoration</span>
            <span className="text-sm opacity-80 my-1">wetland restoration</span>
            <span className="text-sm opacity-80 my-1">Mellansverige</span>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
            <a href="mailto:kontakt@markovattenbyran.se" className="hover:text-secondary transition-colors">E-post</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
