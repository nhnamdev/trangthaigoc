import "./SponsorStrip.css";

function SponsorStrip({ primaryResource }) {
  return (
    <section className="sponsor-strip" id="sponsor">
      <div className="container sponsor-inner">
        <p>Thư mục data đang đóng vai trò như kho nội dung gốc cho toàn bộ landing page này.</p>
        <a className="text-link" href={primaryResource.href} target="_blank" rel="noreferrer">
          {primaryResource.title}
        </a>
      </div>
    </section>
  );
}

export default SponsorStrip;
