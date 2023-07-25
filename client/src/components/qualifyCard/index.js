import { Link } from "react-router-dom";
import "./qualifyCard.scss";

export const QualifyCardComponent = ({
  company,
  job,
  description,
  date,
  url,
}) => {
  return (
    <div className="qualification_card relative">
      <div className="qualification_card-container flex col">
        <div className="date">
          <span>{date}</span>
        </div>

        <h2>
          <Link to={url} target="_blank">
            {job} at {company}
          </Link>
        </h2>

        <p>{description}</p>
      </div>
    </div>
  );
};
