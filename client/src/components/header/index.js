import {
  ROOT,
  ABOUT,
  PROJECTS,
  TOOLS,
  REVIEWS,
  QUALIFICATIONS,
} from "constants";
import {
  DownArrow,
  UpArrow,
  CloseIcon,
  ErrorPageIcon,
  QualificationsPageIcon,
  ReviewsPageIcon,
  ToolsPageIcon,
  ProjectsPageIcon,
  AboutPageIcon,
  HomePageIcon,
  AdjustmentIcon,
} from "constants/icons";
import "./header.scss";
import { pathNames } from "constants";
import { NavLink, useLocation } from "react-router-dom";

export const HeaderComponent = ({
  setOpenThemeContainer,
  toggleMenu,
  setToggleMenu,
}) => {
  const { pathname } = useLocation();

  const selectedPath =
    pathname === ROOT ? (
      <HomePageIcon />
    ) : pathname.startsWith(ABOUT) ? (
      <AboutPageIcon />
    ) : pathname.startsWith(PROJECTS) ? (
      <ProjectsPageIcon />
    ) : pathname.startsWith(TOOLS) ? (
      <ToolsPageIcon />
    ) : pathname.startsWith(REVIEWS) ? (
      <ReviewsPageIcon />
    ) : pathname.startsWith(QUALIFICATIONS) ? (
      <QualificationsPageIcon />
    ) : (
      <ErrorPageIcon />
    );

  return (
    <header className="sticky">
      <div className="nav_wrapper flex items-center justify-between">
        <div className="nav_logo">{selectedPath}</div>
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
            onClick={() => setOpenThemeContainer(true)}
          >
            <AdjustmentIcon />
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
            <p>{selectedPath}</p>
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
