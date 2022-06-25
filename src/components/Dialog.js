import { useState, useEffect, useRef } from "react";

const DialogModal = ({ isOpened, onClose, info }) => {

  const ref = useRef(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // open modal logic
    if (isOpened) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
    setLoading(true);
  })

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog ref={ref} onCancel={onClose} className="dialog" onClick={onClose}>
      <div onClick={preventAutoClose}>
        <h3>{info.name}</h3>
        <div>
          <button onClick={onClose}>x</button>
        </div>
        <div className="card-info">
          <div>Gender: {info.gender}</div>
          <div>Location: {info.location.name}</div>
          <div>Origin: {info.origin.name}</div>
          <div>Status: {info.status}</div>
          <div>Specie: {info.species}</div>
        </div>

      </div>
    </dialog>
  );
};

export default DialogModal;


