
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 section-animate">
        <h2 className="section-title text-center">Kontakta oss</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          Är ni redo att återställa värdefulla våtmarker och ta del av de möjligheter som ges? Tveka inte att kontakta oss.
        </p>
        <div className="max-w-md mx-auto mt-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Namn</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">E-post</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Meddelande</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>
            <button type="submit" className="hero-button w-full">
              Skicka meddelande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
