import classNames from "classnames";

export const buttonStyles = (
  color?: "red" | "gold",
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "flex text-subheading text-center py-1.5 px-4 justify-center duration-300 border-4 rounded-[6px] font-bold min-w-[100px] desktop:cursor-pointer",
    cssClasses,
    {
      "bg-gold text-blue border-gold": color === "gold",
      "desktop:hover:bg-transparent desktop:hover:text-white":
        color === "gold" && !disabled && !pending,
      "bg-red text-white border-red desktop:hover:bg-transparent desktop:hover:text-blue":
        color === "red",
      "opacity-50 cursor-not-allowed hover:none": pending,
    }
  );
