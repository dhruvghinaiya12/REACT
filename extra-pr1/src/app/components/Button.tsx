import React, { FC } from "react";

interface BtnProps {
  onclick: () => void;
}

const Button: FC<BtnProps> = ({ onclick }) => {
  return (
    <div>
      <button onClick={onclick}>Add</button>
    </div>
  );
};

export default Button;
