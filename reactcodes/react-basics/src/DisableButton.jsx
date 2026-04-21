import { useState } from "react";

function DisableButton() {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={disabled}>
        Click Me
      </button>
    </div>
  );
}

export default DisableButton;