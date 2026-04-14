import "./PodcastSection.css";

function PodcastSection({ blindSpotCard, podcastEpisodes, podcastPlatforms }) {
  return (
    <section className="section section-alt" id="podcast">
      <div className="container podcast-grid">
        <div className="podcast-card">
          <img src={blindSpotCard.image} alt={blindSpotCard.imageAlt} />
          <blockquote>"{blindSpotCard.quote}"</blockquote>
          <p>{blindSpotCard.description}</p>
          <div className="podcast-actions">
            <a
              className="btn btn-secondary"
              href={blindSpotCard.primaryAction.href}
              target="_blank"
              rel="noreferrer"
            >
              {blindSpotCard.primaryAction.label}
            </a>
            <details>
              <summary>5 điểm mù chính</summary>
              <ul>
                {podcastPlatforms.map((platform) => (
                  <li key={platform}>
                    <span>{platform}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>

        <div className="podcast-list">
          <h2>5 điểm mù lớn nhất trong ngành AI toàn cầu</h2>
          {podcastEpisodes.map((episode) => (
            <article key={episode}>
              <p>{episode}</p>
            </article>
          ))}
          <a className="text-link" href={blindSpotCard.primaryAction.href} target="_blank" rel="noreferrer">
            Mở tài liệu phân tích đầy đủ
          </a>
        </div>
      </div>
    </section>
  );
}

export default PodcastSection;
