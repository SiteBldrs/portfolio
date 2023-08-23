import { banner } from "assets";
import {
  HeaderComponent,
  FooterComponent,
  ThemeComponent,
  ScrollToTopComponent,
} from "components";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openThemeContainer, setOpenThemeContainer] = useState(false);
  // State to track the current theme preference
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  // Function to handle button click and update the theme preference in local storage
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    window.addEventListener("scroll", () => {
      setToggleMenu(false);
    });

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`app ${theme === "light" ? "" : theme}`}>
      <img src={banner} alt="" className="fixed banner" />

      <div className="app_container">
        <HeaderComponent
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
          setOpenThemeContainer={setOpenThemeContainer}
        />
        <ThemeComponent
          setOpenThemeContainer={setOpenThemeContainer}
          openThemeContainer={openThemeContainer}
          handleThemeChange={handleThemeChange}
        />
        <main>
          <Outlet />
        </main>
        <FooterComponent />
        <ScrollToTopComponent />
      </div>
    </div>
  );
};
