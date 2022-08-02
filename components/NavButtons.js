import { useState } from "react";

const ButtonType = ({ buttons, getId }) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (event, id) => {
    setClickedId(id);
    getId(event);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          id={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={`btn ${i === clickedId ? `btnSelect` : `btnNav`}
          `}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonType;
