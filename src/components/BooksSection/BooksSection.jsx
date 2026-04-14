import sharedImage from "../../../image/image.png";
import "./BooksSection.css";

function BooksSection({ bookFeatures }) {
  return (
    <section className="section books-section" id="articles">
      <div className="container books-header">
        <p className="eyebrow">Sách</p>
        <h2>Tri thức vượt thời gian giúp bạn thành công trong cuộc sống và công việc.</h2>
      </div>

      <div className="container feature-list">
        {bookFeatures.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-cover">
              <img src={sharedImage} alt={feature.alt} />
            </div>
            <div className="feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-actions">
                <a className="btn" href="#articles">
                  Đặt mua ngay
                </a>
                <span>hoặc</span>
                <a className="text-link" href="#articles">
                  Tìm hiểu thêm
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
