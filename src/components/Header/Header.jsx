import { useEffect, useState } from "react";
import "./Header.css";

function Header({ navLinks }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    document.body.classList.toggle("search-open", searchOpen);

    return () => {
      document.body.classList.remove("menu-open");
      document.body.classList.remove("search-open");
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSearchToggle() {
    setSearchOpen((current) => {
      const next = !current;
      if (next) {
        setMenuOpen(false);
      }
      return next;
    });
  }

  function handleMenuToggle() {
    setMenuOpen((current) => {
      const next = !current;
      if (next) {
        setSearchOpen(false);
      }
      return next;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Trang chủ">
          <span className="brand-mark">FS</span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#membership" className="btn btn-secondary">
            Đăng nhập
          </a>
          <a href="#membership" className="btn">
            Trở thành thành viên
          </a>
        </nav>

        <div className="mobile-actions">
          <button
            className="icon-button search-toggle"
            type="button"
            aria-expanded={searchOpen}
            aria-controls="search-panel"
            onClick={handleSearchToggle}
          >
            <span className="sr-only">Mở tìm kiếm</span>
            <span className="icon-search"></span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={handleMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="sr-only">Mở menu</span>
          </button>
        </div>
      </div>

      <div
        className={`search-panel${searchOpen ? " active" : ""}`}
        id="search-panel"
        hidden={!searchOpen}
      >
        <div className="container">
          <form className="search-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="search-input">
              Tìm kiếm
            </label>
            <input id="search-input" type="search" placeholder="Tìm kiếm..." />
            <button className="btn" type="submit">
              Tìm kiếm
            </button>
          </form>
        </div>
      </div>

      <div
        className={`mobile-menu${menuOpen ? " active" : ""}`}
        id="mobile-menu"
        hidden={!menuOpen}
      >
        <div className="container mobile-menu-inner">
          {navLinks.map((link) => (
            <a key={`${link.href}-mobile`} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#membership" onClick={closeMenu}>
            Đăng nhập
          </a>
          <a href="#membership" className="btn" onClick={closeMenu}>
            Trở thành thành viên
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
