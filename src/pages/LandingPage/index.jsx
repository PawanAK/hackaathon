import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-spacegrotesk h-[1934px] items-center justify-end mx-auto pt-[41px] w-full"
        style={{ backgroundImage: "url('images/img_landingpage.png')" }}
      >
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex md:flex-col flex-row md:gap-10 gap-60 items-center justify-center md:px-5 w-full">
            <div className="flex flex-row font-quantagroteskpro gap-2 items-center justify-center w-[199px]">
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
            <ul className="flex flex-row font-spacegrotesk gap-[29px] sm:hidden items-center justify-center w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtSpaceGroteskRegular18">About</Text>
                </a>
              </li>
              <li>
                <a className="text-lg text-white-A700">
                  <Text
                    className="common-pointer"
                    size="txtSpaceGroteskRegular18"
                    onClick={() => navigate("/explorepage")}
                  >
                    Explore
                  </Text>
                </a>
              </li>
              <li>
                <a className="text-lg text-white-A700">
                  <Text
                    className="common-pointer"
                    size="txtSpaceGroteskRegular18"
                    onClick={() => navigate("/createeventpage")}
                  >
                    Create Event
                  </Text>
                </a>
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
          <div className="flex flex-col items-center justify-start mt-[87px] md:px-5 w-[79%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
              <div
                className="bg-cover bg-no-repeat h-[218px] md:mt-0 mt-[299px] relative rounded-[16px] w-[218px]"
                style={{ backgroundImage: "url('images/img_image1.png')" }}
              >
                <Img
                  className="absolute h-[204px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[204px]"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[131px] relative rounded-[24px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2 right-[4%]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  size="md"
                  variant="gradient"
                  color="white_A700_white_A700_cc"
                >
                  <div className="font-bold text-left text-lg">Attend</div>
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[99px] justify-start mb-[15px] w-[81%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-6 h-[287px] md:h-auto items-center justify-start md:mt-0 mt-[65px] w-auto md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                      <Text
                        className="leading-[100.00%] max-w-[597px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-purple-400"
                        size="txtQuantaGroteskProSemiBold48"
                      >
                        <span className="text-purple-400 font-quantagroteskpro font-semibold">
                          <>
                            Elevate Events
                            <br />
                          </>
                        </span>
                        <span className="text-purple-400 font-quantagroteskpro font-semibold">
                          Own Experiences
                        </span>
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[584px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtSpaceGroteskRegular24"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum diam justo, varius non sapien id.
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-auto sm:w-full">
                      <Button
                        className="common-pointer cursor-pointer font-medium min-w-[169px] rounded-[25px] text-center text-lg"
                        onClick={() => navigate("/landingpagecreateoption")}
                        color="purple_400"
                        size="lg"
                        variant="fill"
                      >
                        Create Event
                      </Button>
                      <Button
                        className="common-pointer cursor-pointer flex items-center justify-center min-w-[204px] rounded-[25px]"
                        onClick={() => navigate("/explorepage")}
                        rightIcon={
                          <Img
                            className="h-6 mb-px ml-[11px]"
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="outline"
                      >
                        <div className="font-medium text-left text-lg">
                          Explore Events
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="md:h-[271px] h-[298px] mb-[53px] relative rotate-[-60deg] w-[298px]">
                    <div className="m-auto w-[218px]">
                      <Img
                        className="h-[218px] m-auto object-cover rounded-[16px] w-[218px]"
                        src="images/img_imagecontainer.png"
                        alt="imagecontainer"
                      />
                      <Img
                        className="absolute h-[204px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[204px]"
                        src="images/img_rectangle1_204x204.png"
                        alt="rectangleOne_One"
                      />
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[129px] rounded-[24px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2 right-[3%] absolute"
                          src="images/img_add_add_square.svg"
                          alt="Add/Add Square"
                        />
                      }
                      size="md"
                      variant="gradient"
                      color="white_A700_white_A700_cc"
                    >
                      <div className="!text-purple-900 font-bold rotate-[60deg] text-left text-lg">
                        Create
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[252px] w-auto">
                  <a
                    href="javascript:"
                    className="text-lg text-white-A700 w-auto"
                  >
                    <Text size="txtSpaceGroteskMedium18">LEARN MORE</Text>
                  </a>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_white_a700.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-quantagroteskpro items-start justify-start mt-[113px] w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-auto md:w-full">
              <Text
                className="bg-clip-text bg-gradient1  text-3xl sm:text-[26px] md:text-[28px] text-center text-transparent w-auto"
                size="txtQuantaGroteskProMedium30"
              >
                BUILT UPON
              </Text>
              <Img
                className="h-[100px] w-[1440px]"
                src="images/img_sponsorscroll.svg"
                alt="sponsorscroll"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[251px] items-center justify-center max-w-[1094px] mt-[124px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-1 flex-col gap-5 h-[237px] md:h-auto items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-purple-400 w-auto"
                  size="txtQuantaGroteskProSemiBold36"
                >
                  About Us
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[585px] md:max-w-full text-white-A700 text-xl"
                  size="txtSpaceGroteskMedium20"
                >
                  Embark on a revolutionary journey with Fanaticks – your
                  ultimate NFT ticketing platform. Elevate your events, sell
                  tickets effortlessly, and incentivize your audience according
                  to their interest & interaction. Unleash the power of NFTs in
                  ticketing. Join us, where innovation meets seamless event
                  experiences
                </Text>
              </div>
              <Img
                className="sm:flex-1 h-[202px] md:h-auto object-cover w-[258px] sm:w-full"
                src="images/img_image1_202x258.png"
                alt="imageOne"
              />
            </div>
            <Footer className="flex items-center justify-center mt-[212px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
