import { pathNames } from "constants";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export const FooterComponent = () => {
  return (
    <footer>
      <div className="footer_container flex items-center justify-between">
        <div className="left_footer flex items-center">
          {pathNames.map((path, _id) => (
            <NavLink
              to={path.path}
              className="footer_links"
              title={path.element}
              key={_id}
            >
              <span>{path.element}</span>
            </NavLink>
          ))}
        </div>
        <p>© 2023 Abdullahi Salihu. All rights reserved.</p>
      </div>
    </footer>
  );
};
