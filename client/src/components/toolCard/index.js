/* eslint-disable jsx-a11y/heading-has-content */
import "./toolCard.scss";

export const ToolCardComponent = ({ title, items }) => {
  return (
    <div className="tool_card flex items-start">
      <div className="tool_card-left">
        <h2>{title}</h2>
      </div>
      <div className="tool_card-right flex col">
        {items?.map((item) => (
          <div key={item?._key} className="flex col">
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LoadingToolCardComponent = () => {
  return Array.from({ length: 3 }).map((_, _key) => (
    <div className="tool_card flex items-start loading" key={_key}>
      <div className="tool_card-left">
        <h2 className="isLoading" />
      </div>
      <div className="tool_card-right">
        <div>
          <h3 className="isLoading" />
          <p className="isLoading" />
          <p className="isLoading" />
          <p className="isLoading" />
          <p className="isLoading" />
          <p className="isLoading" />
        </div>
      </div>
    </div>
  ));
};
