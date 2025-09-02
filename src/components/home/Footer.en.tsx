const FooterEN = () => {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Land and Water Bureau</h3>
          <p className="mb-6">Experts in rewetting and environmental monitoring in Central Sweden</p>
          <div className="flex flex-wrap justify-center space-x-6 mb-8">
            <span className="text-sm opacity-80 my-1">rewetting</span>
            <span className="text-sm opacity-80 my-1">peatland restoration</span>
            <span className="text-sm opacity-80 my-1">nature restoration regulation</span>
            <span className="text-sm opacity-80 my-1">NRR</span>
            <span className="text-sm opacity-80 my-1">peatlands</span>
            <span className="text-sm opacity-80 my-1">wetlands</span>
            <span className="text-sm opacity-80 my-1">peat soil</span>
            <span className="text-sm opacity-80 my-1">wetland restoration</span>
            <span className="text-sm opacity-80 my-1">Central Sweden</span>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/mark-och-vattenbyr%C3%A5n/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LinkedIn</a>
            <a href="mailto:kontakt@markovattenbyran.se" className="hover:text-secondary transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEN;