import "./theme.scss";
import {
  darkMode,
  lightMode,
  deemMode,
  darkModeMobile,
  lightModeMobile,
  deemModeMobile,
} from "assets";
import { CloseIcon } from "constants/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          <p>Personalize your view</p>
          <CloseIcon onClick={() => setOpenThemeContainer(false)} />
        </div>

        <div className="themes">
          <p>To view the theme, please click on any of the images.</p>

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
                  <LazyLoadImage
                    src={mode.image}
                    alt={mode.name}
                    effect="blur"
                  />
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
                  <LazyLoadImage
                    src={mode.image}
                    alt={mode.name}
                    effect="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
