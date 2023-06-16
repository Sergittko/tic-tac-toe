import style from "./Modal.module.scss";

const Modal = ({ message, setShowModal }) => {
  return (
    <div className={style.modalContainer}>
      <div
        className={style.modalBackground}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={style.modalContent}>
        <p>{message.gameStatus}</p>
        <p>{message.message}</p>
        <button onClick={() => setTimeout(() => setShowModal(false), 200)}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
