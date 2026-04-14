import sharedImage from "../../../image/image.png";
import "./PodcastSection.css";

function PodcastSection({ podcastEpisodes, podcastPlatforms }) {
  return (
    <section className="section section-alt" id="podcast">
      <div className="container podcast-grid">
        <div className="podcast-card">
          <img src={sharedImage} alt="Micro podcast trong phòng thu" />
          <blockquote>
            "Mỗi tập đều chứa mật độ tri thức thuộc hàng cao nhất trong thế giới
            podcast."
          </blockquote>
          <p>
            The Knowledge Project khám phá cách những con người xuất sắc suy nghĩ,
            ra quyết định và giải quyết vấn đề.
          </p>
          <div className="podcast-actions">
            <a className="btn btn-secondary" href="#podcast">
              Nghe trên Apple Podcasts
            </a>
            <details>
              <summary>Thêm lựa chọn</summary>
              <ul>
                {podcastPlatforms.map((platform) => (
                  <li key={platform}>
                    <a href="#podcast">{platform}</a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>

        <div className="podcast-list">
          <h2>Các tập podcast gần đây:</h2>
          {podcastEpisodes.map((episode) => (
            <article key={episode}>
              <a href="#podcast">{episode}</a>
            </article>
          ))}
          <a className="text-link" href="#podcast">
            Xem tất cả các tập
          </a>
        </div>
      </div>
    </section>
  );
}

export default PodcastSection;
