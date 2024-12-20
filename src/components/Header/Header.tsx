import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import cn from "classnames";
import logo from "../../images/logo/logo.svg";
import { useState } from "react";

const NavLinks = [
  { title: "Contact us", path: "/contact-us" },
  { title: "About us", path: "/about-us" },
  { title: "Packages", path: "/packages" },
  { title: "Products", path: "/products" },
  { title: "Book a demo", path: "/book-a-demo" },
];

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);
  const closeMenu = () => setMenuOpened(false);

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles["header__logo--link"]}>
          <img className={styles.header__logo} src={logo} alt="logo" />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navigation__list}>
            {NavLinks.map(({ title, path }) => (
              <li key={title} className={styles.navigation__item}>
                <NavLink
                  className={({ isActive }) =>
                    cn(styles.navigation__link, {
                      [styles["navigation__link--active"]]: isActive,
                    })
                  }
                  to={path}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles["burger-menu"]}
          onClick={toggleMenu}
          aria-label={menuOpened ? "Close menu" : "Open menu"}
          aria-expanded={menuOpened}
        >
          ☰
        </button>
      </header>

      <div
        className={cn(styles.overlay, {
          [styles["overlay--active"]]: menuOpened,
        })}
        onClick={closeMenu}
      ></div>

      <nav
        className={cn(styles["mobile-nav"], {
          [styles["mobile-nav--active"]]: menuOpened,
        })}
      >
        <button
          className={styles["close-button"]}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <ul className={styles.mobile__list}>
          {NavLinks.map(({ title, path }) => (
            <li key={title} className={styles.mobile__item}>
              <NavLink
                className={({ isActive }) =>
                  cn(styles.mobile__link, {
                    [styles["mobile__link--active"]]: isActive,
                  })
                }
                to={path}
                onClick={closeMenu}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
