import "./Footer.css";

function Footer({ footerMenus }) {
  return (
    <footer className="site-footer">
      <div className="container footer-menus">
        {footerMenus.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("#") ? undefined : "_blank"}
                rel={link.href.startsWith("#") ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <div className="footer-brand">
          <span className="brand-mark small">FS</span>
          <p>
            Website hiện đã được đổi nội dung theo bộ dữ liệu trong thư mục data,
            bao gồm tài liệu giới thiệu nền tảng, hồ sơ BlindSpot AI TTG, bài viết
            chuyên đề và các file PDF tham chiếu.
          </p>
        </div>
        <p className="footer-note">
          Trục nội dung chính: BlindSpot AI TTG, Trạng Thái Gốc và các điểm mù của ngành AI.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
