import Link from "next/link";

import { buttonStyles } from "@/_styles/button-styles";
import { ButtonProps } from "@/_types/button-types";

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  color = "red",
  href = "#",
  disabled,
  ariaLabel,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(color, cssClasses, disabled)}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
