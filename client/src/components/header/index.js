import {
  DownArrow,
  UpArrow,
  DarkModeIcon,
  LightModeIcon,
  CloseIcon,
} from "constants/icons";
import "./header.scss";
import { useState } from "react";
import { pathNames } from "constants";
import { NavLink, useLocation } from "react-router-dom";

export const HeaderComponent = ({ setTheme, theme }) => {
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const formatPathname = (pathname) => {
    if (pathname === "/") {
      return "home";
    } else if (pathname.startsWith("/about")) {
      return pathname.replace("/about", "about");
    } else if (pathname.startsWith("/projects")) {
      return pathname.replace("/projects", "projects");
    } else if (pathname.startsWith("/tools")) {
      return pathname.replace("/tools", "tools");
    } else if (pathname.startsWith("/reviews")) {
      return pathname.replace("/reviews", "reviews");
    } else {
      return pathname;
    }
  };

  const formattedPathname = formatPathname(pathname);

  return (
    <header className="sticky">
      <div className="nav_wrapper flex items-center justify-between">
        <p className="nav_logo">current page - {formattedPathname}</p>
        <nav className="nav_container flex items-center">
          {pathNames.map((path, _id) => (
            <NavLink
              to={path.path}
              className={({ isActive }) =>
                `nav_link relative ${isActive && "active_link"}`
              }
              title={path.element}
              key={_id}
              onClick={() => setToggleMenu(false)}
            >
              <span>{path.element}</span>
            </NavLink>
          ))}
        </nav>
        <div className="right_nav flex items-center justify-end">
          <div
            className="menu flex items-center"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span>Menu</span>
            {toggleMenu ? <UpArrow /> : <DownArrow />}
          </div>
          <div
            className="mode_toggler flex items-center justify-center"
            onClick={() => setTheme(!theme)}
          >
            {theme ? <LightModeIcon /> : <DarkModeIcon />}
          </div>
        </div>
      </div>

      <div className={`mobile_menu fixed ${toggleMenu && "show_mobile-menu"}`}>
        <div
          className="overlay fixed"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        <div className="mobile_menu-container">
          <div className="mobile_menu-top flex items-center justify-between">
            <p>Navigation</p>
            <CloseIcon onClick={() => setToggleMenu(false)} />
          </div>

          <div className="mobile_menu-bottom flex col">
            {pathNames.map((path, _id) => (
              <NavLink
                to={path.path}
                className={({ isActive }) =>
                  `mobile_links ${isActive && "active_link"}`
                }
                title={path.element}
                key={_id}
                onClick={() => setToggleMenu(false)}
              >
                <span>{path.element}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
