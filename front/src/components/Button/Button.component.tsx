import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.model";

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  to,
  type = "button",
  disabled = false
}) => (
  <>
    {type === "button" ||
      (type === "submit" && (
        <button
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={styles.button}
        >
          {text}
        </button>
      ))}
    {type === "link" && (
      <Link
        to={to}
        onClick={onClick}
        type={type}
        className={styles.button}
      >
        {text}
      </Link>
    )}
  </>
);
