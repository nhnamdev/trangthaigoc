import "./BooksSection.css";

function BooksSection({ bookFeatures }) {
  return (
    <section className="section books-section" id="articles">
      <div className="container books-header">
        <p className="eyebrow">Kiến trúc</p>
        <h2>Nội dung trang được tái cấu trúc từ tài liệu DOCX và PDF trong thư mục data.</h2>
      </div>

      <div className="container feature-list">
        {bookFeatures.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-cover">
              <img src={feature.image} alt={feature.alt} />
            </div>
            <div className="feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-actions">
                <a className="btn" href={feature.primaryAction.href} target="_blank" rel="noreferrer">
                  {feature.primaryAction.label}
                </a>
                <span>hoặc</span>
                <a className="text-link" href={feature.secondaryAction.href} target="_blank" rel="noreferrer">
                  {feature.secondaryAction.label}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BooksSection;
