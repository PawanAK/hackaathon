import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    purple_400: "bg-purple-400 text-gray-900",
    purple_900: "bg-purple-900 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    white_A700_19: "bg-white-A700_19 text-white-A700",
  },
  gradient: { white_A700_white_A700_cc: "bg-gradient  shadow-bs text-red-500" },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
  color: PropTypes.oneOf([
    "purple_400",
    "purple_900",
    "white_A700",
    "white_A700_19",
    "white_A700_white_A700_cc",
  ]),
};

export { Button };
