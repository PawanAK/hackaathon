import React from "react";

const sizeClasses = {
  txtQuantaGroteskProSemiBold48: "font-quantagroteskpro font-semibold",
  txtSpaceGroteskMedium18: "font-medium font-spacegrotesk",
  txtQuantaGroteskProSemiBold36: "font-quantagroteskpro font-semibold",
  txtQuantaGroteskProSemiBold36WhiteA700: "font-quantagroteskpro font-semibold",
  txtSpaceGroteskMedium16: "font-medium font-spacegrotesk",
  txtQuantaGroteskProSemiBold24: "font-quantagroteskpro font-semibold",
  txtSpaceGroteskMedium18WhiteA7007f: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium18Gray900: "font-medium font-spacegrotesk",
  txtSpaceGroteskBold18Purple900: "font-bold font-spacegrotesk",
  txtSpaceGroteskBold24: "font-bold font-spacegrotesk",
  txtSpaceGroteskBold36: "font-bold font-spacegrotesk",
  txtSpaceGroteskRegular20: "font-normal font-spacegrotesk",
  txtQuantaGroteskProRegular32: "font-normal font-quantagroteskpro",
  txtSpaceGroteskBold18: "font-bold font-spacegrotesk",
  txtSpaceGroteskRegular24: "font-normal font-spacegrotesk",
  txtQuantaGroteskProMedium2336: "font-medium font-quantagroteskpro",
  txtSpaceGroteskMedium20: "font-medium font-spacegrotesk",
  txtSpaceGroteskRegular16: "font-normal font-spacegrotesk",
  txtQuantaGroteskProSemiBold20: "font-quantagroteskpro font-semibold",
  txtSpaceGroteskMedium16WhiteA700: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium24: "font-medium font-spacegrotesk",
  txtQuantaGroteskProMedium30: "font-medium font-quantagroteskpro",
  txtSpaceGroteskRegular18: "font-normal font-spacegrotesk",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
