import "./Footer.css";

function Footer({ footerMenus }) {
  return (
    <footer className="site-footer">
      <div className="container footer-menus">
        {footerMenus.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((label) => (
              <a key={label} href={group.href}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <div className="footer-brand">
          <span className="brand-mark small">FS</span>
          <p>
            Bản quyền 2026 Farnam Street Media Inc. Mọi quyền được bảo lưu. Đây là
            một bản demo được lập trình độc lập, lấy cảm hứng từ bố cục tổng thể
            của trang tham chiếu.
          </p>
        </div>
        <p className="footer-note">
          Chúng tôi đầu tư vào những doanh nghiệp xuất sắc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
