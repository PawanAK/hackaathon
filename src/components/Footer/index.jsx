import React from "react";

import { Button, Img, Input, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[399px] md:h-[465px] sm:h-[724px] relative w-full">
          <div className="absolute bg-gray-900_02 flex flex-col gap-3 h-max inset-[0] items-center justify-center m-auto p-[74px] md:px-10 sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1188px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                    Fanaticks
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[291px]">
                  <Text
                    className="sm:text-[19.36px] md:text-[21.36px] text-[23.36px] text-center text-white-A700 w-auto"
                    size="txtQuantaGroteskProMedium2336"
                  >
                    Buit at{" "}
                  </Text>
                  <Img
                    className="h-[42px] w-[183px]"
                    src="images/img_ethindia2023.svg"
                    alt="ethindia2023"
                  />
                </div>
              </div>
              <ul className="flex md:flex-1 flex-col gap-1 items-end justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-center text-lg text-white-A700"
                    size="txtSpaceGroteskRegular18"
                  >
                    About
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-center text-lg text-white-A700"
                    size="txtSpaceGroteskRegular18"
                  >
                    Discover
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-center text-lg text-white-A700"
                    size="txtSpaceGroteskRegular18"
                  >
                    Create Event
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-center text-lg text-white-A700"
                    size="txtSpaceGroteskRegular18"
                  >
                    Connect Wallet
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[561px] items-end justify-between mb-[35px] w-auto md:w-full">
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-center text-lg text-white-A700 w-auto"
                  size="txtSpaceGroteskMedium18"
                >
                  Follow us
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="flex items-center justify-center w-[41px]"
                    shape="round"
                    color="white_A700_19"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  </Button>
                  <Img
                    className="h-10 w-[41px]"
                    src="images/img_socialicon1.svg"
                    alt="socialiconOne"
                  />
                  <Button
                    className="flex items-center justify-center w-[41px]"
                    shape="round"
                    color="white_A700_19"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_fadiscord.svg"
                      alt="fadiscord"
                    />
                  </Button>
                  <Button
                    className="flex items-center justify-center w-[41px]"
                    shape="round"
                    color="white_A700_19"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_fayoutube.svg"
                      alt="fayoutube"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-1 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <Input
                    name="frameNineteen"
                    placeholder="Your email address"
                    className="font-spacegrotesk p-0 placeholder:text-white-A700_7f text-left text-sm w-full"
                    wrapClassName="rounded-[9px] w-full"
                    shape="round"
                    color="white_A700_19"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium font-spacegrotesk rounded-[9px] text-center text-sm w-[81px]"
                    shape="round"
                    color="purple_900"
                    size="md"
                    variant="fill"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border-solid border-t border-white-A700_19 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto w-auto md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[674px] items-start justify-between w-auto md:w-full">
              <Text
                className="text-center text-lg text-white-A700 w-auto"
                size="txtSpaceGroteskRegular18"
              >
                © 2023 Fanaticks
              </Text>
              <div className="flex flex-row gap-[23px] items-start justify-start w-auto">
                <Text
                  className="text-center text-lg text-white-A700 underline w-auto"
                  size="txtSpaceGroteskRegular18"
                >
                  Copyrights Reserved
                </Text>
                <Text
                  className="text-center text-lg text-white-A700 underline w-auto"
                  size="txtSpaceGroteskRegular18"
                >
                  Terms & Condition
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
