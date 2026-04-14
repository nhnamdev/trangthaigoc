import "./HeroSection.css";

function HeroSection({ heroContent, pressLogos }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="hero section">
      <div className="container hero-top">
        <div className="hero-copy">
          <h1>{heroContent.title}</h1>
        </div>
        <div className="hero-side">
          <p>{heroContent.description}</p>
        </div>
      </div>

      <div className="container newsletter-cta" id="newsletter">
        <div className="newsletter-cover">
          <img src={heroContent.image} alt={heroContent.imageAlt} />
        </div>
        <div className="newsletter-form-wrap">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={heroContent.formPlaceholder}
              aria-label={heroContent.formPlaceholder}
            />
            <button className="btn" type="submit">
              {heroContent.formButton}
            </button>
          </form>
          <p className="bonus-text">{heroContent.bonus}</p>
        </div>
      </div>

      <div className="container press-strip">
        <span>Từ dữ liệu cốt lõi:</span>
        <div className="press-logos">
          {pressLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
