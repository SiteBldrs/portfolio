import { HeaderComponent, FooterComponent, ThemeComponent } from "components";
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

  // useEffect to apply the saved theme preference when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOpenThemeContainer(false);
      setToggleMenu(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`app ${theme === "light" ? "" : theme}`}>
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
      </div>
    </div>
  );
};
