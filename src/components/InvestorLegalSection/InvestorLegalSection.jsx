import "./InvestorLegalSection.css";

function InvestorLegalSection({ investorLegalContent }) {
  const { eyebrow, title, description, cards } = investorLegalContent;

  return (
    <section className="section investor-legal-section" id="investor-legal">
      <div className="container investor-legal-header">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="container investor-legal-grid">
        {cards.map((card) => (
          <article className="investor-legal-card" key={card.title}>
            <span>{card.kicker}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a className="text-link" href={card.href} target="_blank" rel="noreferrer">
              {card.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InvestorLegalSection;
