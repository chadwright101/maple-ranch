import Link from "next/link";

import { buttonStyles } from "@/_styles/button-styles";
import { ButtonProps } from "@/_types/button-types";

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  color = "red",
  hoverTextColor = "blue",
  href = "#",
  disabled,
  ariaLabel,
  target = "_self",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(color, hoverTextColor, cssClasses, disabled)}
      aria-label={ariaLabel}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
