import "./modal.scss";

export const ModalComponent = () => {
  return (
    <div className="modal_container fixed">
      <div className="overlay fixed" />
      <div className="modal_content"></div>
    </div>
  );
};
