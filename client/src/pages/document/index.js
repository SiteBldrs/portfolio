import { EmailIcon } from "constants/icons";
import "./document.scss";
import { socials, about_content } from "constants";
import { Link } from "react-router-dom";
import { me } from "assets";
import { LazyComponent } from "components";
import { useEffect, useState } from "react";

export const DocumentPage = () => {
  const baseYear = 2019;
  const currentYear = new Date().getFullYear();
  const [yearsOfExperience, setYearsOfExperience] = useState(
    currentYear - baseYear
  );

  useEffect(() => {
    document.title = "Concerning myself";

    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      setYearsOfExperience(newYear - baseYear);
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);

  return (
    <div className="document_container flex justify-between">
      <div className="image_holder mobile_img">
        <LazyComponent src={me} alt="Abdullahi Salihu" />
      </div>

      <div className="document_container-left">
        <h1 className="title">
          Hi there 👋 <br /> I'm Abdullahi Salihu, a React Developer
        </h1>
        <p className="subtitle">
          I'm a solutions architect with over {yearsOfExperience} years of
          devoted experience in the web development industry. I love creating
          custom web applications that help businesses achieve their goals by
          adapting innovative solutions to their specific needs.
        </p>
        <div className="about_me flex col">
          {about_content.map((content, _key) => (
            <div key={_key} className="descriptions  flex col">
              <h3>{content.title}</h3>
              <p>{content.subtitle}</p>
              {content.lists && (
                <ul
                  style={{
                    display: content?.wrap ? "grid" : "flex",
                    flexDirection: !content?.wrap && "column",
                    gridTemplateColumns:
                      content?.wrap && "repeat(auto-fit, minmax(10rem, 1fr))",
                    gap: !content?.wrap && "0.5rem",
                    columnGap: content?.wrap && "1rem",
                    rowGap: content?.wrap && "0.5rem",
                  }}
                >
                  {content?.lists?.map((list, _key) => (
                    <li key={_key}>{list}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p>
            Let's collaborate on transforming your ideas into digital realities
            that not only meet your needs but exceed your expectations.
          </p>
        </div>
      </div>

      <div className="document_container-right flex col sticky">
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
