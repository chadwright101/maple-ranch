export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  color?: "red" | "gold";
  hoverTextColor?: "blue" | "white";
  href?: string;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "submit" | "reset" | "button";
  target?: "_self" | "_blank";
}
