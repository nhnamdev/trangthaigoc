import sharedImage from "../../../image/image.png";
import "./HeroSection.css";

function HeroSection({ pressLogos }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="hero section">
      <div className="container hero-top">
        <div className="hero-copy">
          <h1>Tri thức vượt thời gian cho công việc và cuộc sống</h1>
        </div>
        <div className="hero-side">
          <p>
            Gần 1 triệu người bắt đầu tuần mới với một bản tin miễn phí. Đọc trọn
            nội dung chỉ trong chưa đầy 5 phút.
          </p>
        </div>
      </div>

      <div className="container newsletter-cta" id="newsletter">
        <div className="newsletter-cover">
          <img src={sharedImage} alt="Những cuốn sách xếp chồng trên bàn" />
        </div>
        <div className="newsletter-form-wrap">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Địa chỉ email"
              aria-label="Địa chỉ email"
            />
            <button className="btn" type="submit">
              Gửi bản tin cho tôi
            </button>
          </form>
          <p className="bonus-text">
            <strong>Quà tặng:</strong> Tải Chương 1 của cuốn sách bán chạy mới nhất
            về tư duy rõ ràng và ra quyết định tốt hơn.
          </p>
        </div>
      </div>

      <div className="container press-strip">
        <span>Xuất hiện trên:</span>
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
