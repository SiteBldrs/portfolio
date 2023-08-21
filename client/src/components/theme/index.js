import "./theme.scss";
import {
  darkMode,
  lightMode,
  deemMode,
  darkModeMobile,
  lightModeMobile,
  deemModeMobile,
} from "assets";
import { LazyComponent } from "components/lazy";
import { CloseIcon } from "constants/icons";

export const ThemeComponent = ({
  setOpenThemeContainer,
  openThemeContainer,
  setTheme,
  handleThemeChange,
}) => {
  const themes = [
    {
      name: "Light",
      desktop: lightMode,
      mobile: lightModeMobile,
    },
    {
      name: "Dark",
      desktop: darkMode,
      mobile: darkModeMobile,
    },
    {
      name: "Deem",
      desktop: deemMode,
      mobile: deemModeMobile,
    },
  ];

  return (
    <div
      className={`theme_container fixed ${openThemeContainer && "open_theme"}`}
    >
      <div
        className="overlay fixed"
        onClick={() => setOpenThemeContainer(false)}
      />
      <div className="theme_content">
        <div className="theme_header flex items-center justify-between">
          <p>Modify the theme</p>
          <CloseIcon onClick={() => setOpenThemeContainer(false)} />
        </div>

        <div className="themes flex col justify-between">
          {themes.map((theme, _key) => (
            <div
              title={theme.name}
              className="theme_image relative"
              key={_key}
              onClick={() => {
                handleThemeChange(theme.name.toLowerCase());
                setTimeout(() => {
                  setOpenThemeContainer(false);
                }, 1000);
              }}
            >
              <LazyComponent src={theme.desktop} alt={theme.name} />

              <div className="theme_image-mobile absolute">
                <LazyComponent src={theme.mobile} alt={theme.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
