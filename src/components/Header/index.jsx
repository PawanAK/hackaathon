import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[199px]"
          onClick={() => navigate("/")}
          leftIcon={
            <div className="mt-[3px] mr-2 bg-gradient1  rounded-sm">
              <Img
                className="rounded-sm"
                src="images/img_logo.png"
                alt="Logo"
              />
            </div>
          }
        >
          <div className="font-quantagroteskpro leading-[normal] md:text-3xl sm:text-[28px] text-[32px] text-left text-purple-400">
            Fanaticks
          </div>
        </Button>
        <ul className="flex flex-row gap-[29px] sm:hidden items-center justify-center w-auto common-row-list">
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtSpaceGroteskRegular18"
            >
              About
            </Text>
          </li>
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtSpaceGroteskRegular18"
            >
              Explore
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-lg text-white-A700"
              size="txtSpaceGroteskRegular18"
              onClick={() => navigate("/createeventpage")}
            >
              Create Event
            </Text>
          </li>
        </ul>
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
            Connect Wallet
          </div>
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
