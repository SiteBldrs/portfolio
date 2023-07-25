import { HeaderComponent, FooterComponent } from "components";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`app ${theme ? "dark" : ""}`}>
      <div className="app_container">
        <HeaderComponent setTheme={setTheme} theme={theme} />
        <main>
          <Outlet />
        </main>
        <FooterComponent />
      </div>
    </div>
  );
};
