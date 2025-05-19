export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  color?: "red" | "gold";
  href?: string;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "submit" | "reset" | "button";
}
