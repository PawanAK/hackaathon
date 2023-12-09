import React from "react";

import { Button, Img, Text } from "components";

const ExplorePageEventTwoNavbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-center w-[199px]">
          <Img
            className="h-[34px] md:h-auto object-cover rounded-sm w-[59px]"
            src="images/img_logo.png"
            alt="logo"
          />
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-purple-400 w-auto"
            size="txtQuantaGroteskProRegular32"
          >
            {props?.fanatickstext}
          </Text>
        </div>
        <div className="flex flex-row gap-[29px] items-center justify-center w-auto">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtSpaceGroteskRegular18"
          >
            {props?.abouttext}
          </Text>
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtSpaceGroteskRegular18"
          >
            {props?.exploretext}
          </Text>
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtSpaceGroteskRegular18"
          >
            {props?.createeventtext}
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[204px] rounded-[23px]"
          leftIcon={
            <Img
              className="h-6 mr-2"
              src="images/img_walllet_wallet.svg"
              alt="Walllet/ Wallet"
            />
          }
          color="white_A700"
          size="md"
          variant="outline"
        >
          <div className="font-spacegrotesk text-left text-lg">
            {props?.connectwalletbutton}
          </div>
        </Button>
      </div>
    </>
  );
};

ExplorePageEventTwoNavbar.defaultProps = {
  fanatickstext: "Fanaticks",
  abouttext: "About",
  exploretext: "Explore",
  createeventtext: "Create Event",
  connectwalletbutton: "Connect Wallet",
};

export default ExplorePageEventTwoNavbar;
