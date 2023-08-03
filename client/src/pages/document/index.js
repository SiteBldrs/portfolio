import { EmailIcon } from "constants/icons";
import "./document.scss";
import { socials, about_content } from "constants";
import { Link } from "react-router-dom";
import { me } from "assets";
import { LazyComponent } from "components";

export const DocumentPage = () => {
  return (
    <div className="document_container flex justify-between">
      <div className="image_holder mobile_img">
        <LazyComponent src={me} alt="Abdullahi Salihu" />
      </div>

      <div className="document_container-left">
        <h1 className="title">
          Hello, my name is Abdullahi Salihu, and I'm a React Developer
        </h1>
        <div className="about_me">
          {about_content.map((content, _id) => (
            <p className="subtitle" key={_id}>
              {content}
            </p>
          ))}
        </div>
      </div>

      <div className="document_container-right flex col">
        <div className="image_holder desktop_img">
          <LazyComponent src={me} alt="Abdullahi Salihu" />
        </div>
        <div className="socials flex col">
          <div className="socials_top flex col">
            {socials.map((media, _id) => (
              <Link
                to={media.path}
                target="_blank"
                className="media_link flex items-center"
                key={_id}
                title={media.title}
              >
                {media.icon}
                <span>{media.title}</span>
              </Link>
            ))}
          </div>
          <div className="socials_bottom">
            <Link
              to="mailto:abdullahisalihuinusa@gmail.com"
              target="_blank"
              title="Send me a Message"
              className="media_link flex items-center"
            >
              <EmailIcon />
              <span>Send me a Message</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
