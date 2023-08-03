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
  const desktopMode = [
    {
      name: "Light",
      image: lightMode,
    },
    {
      name: "Dark",
      image: darkMode,
    },
    {
      name: "Deem",
      image: deemMode,
    },
  ];

  const mobileMode = [
    {
      name: "Light",
      image: lightModeMobile,
    },
    {
      name: "Dark",
      image: darkModeMobile,
    },
    {
      name: "Deem",
      image: deemModeMobile,
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

        <div className="themes">
          {/* desktop mode */}
          <div className="desktop_mode flex col">
            {desktopMode.map((mode, _key) => (
              <div
                title={mode.name}
                className="individual flex col"
                onClick={() => {
                  handleThemeChange(mode.name.toLowerCase());
                  setTimeout(() => {
                    setOpenThemeContainer(false);
                  }, 1000);
                }}
                key={_key}
              >
                <div className="theme_image">
                  <LazyComponent src={mode.image} alt={mode.name} />
                </div>
              </div>
            ))}
          </div>

          {/* mobile mode */}
          <div className="mobile_mode flex col">
            {mobileMode.map((mode, _key) => (
              <div
                title={mode.name}
                className="individual flex col"
                onClick={() => {
                  handleThemeChange(mode.name.toLowerCase());
                  setTimeout(() => {
                    setOpenThemeContainer(false);
                  }, 1000);
                }}
                key={_key}
              >
                <div className="theme_image">
                  <LazyComponent src={mode.image} alt={mode.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
