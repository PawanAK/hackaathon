import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import CreateEventPageColumnedit from "components/CreateEventPageColumnedit";
import Footer from "components/Footer";
import Header from "components/Header";

const CreateEventPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-spacegrotesk gap-[39px] items-center justify-end mx-auto pt-[41px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-60 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[515px] h-[589px] md:px-5 relative w-full">
            <div className="absolute bg-blue_gray-900_87 flex flex-col inset-x-[0] items-end justify-end mx-auto pt-[127px] md:px-10 sm:px-5 px-[127px] rounded-tl-lg rounded-tr-lg top-[0] w-full">
              <div className="flex flex-col items-center justify-start mt-[308px] w-[21%] md:w-full">
                <CreateEventPageColumnedit className="flex flex-col gap-2.5 items-start justify-start p-5 w-auto" />
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[182px] left-[9%] rounded-[50%] w-[182px]"
              src="images/img_profilepicture.png"
              alt="profilepicture"
            />
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1185px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtSpaceGroteskMedium24"
              >
                @username
              </Text>
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Text
                  className="text-lg text-white-A700_7f w-[188px]"
                  size="txtSpaceGroteskMedium18WhiteA7007f"
                >
                  0x09750ad...360fdb7
                </Text>
                <Text
                  className="text-lg text-white-A700 w-[155px]"
                  size="txtSpaceGroteskMedium18"
                >
                  Joined June 2023
                </Text>
              </div>
            </div>
            <Img
              className="h-10 w-[98px]"
              src="images/img_user.svg"
              alt="user"
            />
          </div>
          <Line className="bg-gray-600_87 h-px mt-11 w-full" />
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[714px] items-center justify-between max-w-[1185px] mt-[49px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
              size="txtQuantaGroteskProSemiBold36WhiteA700"
            >
              Manage your events
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[141px] rounded-bl-[21px] rounded-br-[20px] rounded-tl-[21px] rounded-tr-[20px]"
              leftIcon={
                <Img
                  className="h-6"
                  src="images/img_filter_horizontal.svg"
                  alt="Filter/Horizontal"
                />
              }
              color="white_A700_19"
              size="sm"
              variant="fill"
            >
              <div className="font-spacegrotesk text-base text-left">
                Filter
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1183px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-full">
                <div
                  className="common-pointer border-2 border-dashed border-gray-600 flex sm:flex-1 flex-col gap-2.5 sm:h-auto items-start justify-start p-2.5 rounded-[16px] w-[385px] sm:w-full"
                  onClick={() => navigate("/createeventpagecreateoption")}
                >
                  <Img
                    className="h-12 w-12"
                    src="images/img_addaddsquare_gray_600.svg"
                    alt="addaddsquare"
                  />
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtSpaceGroteskMedium16"
                  >
                    Create an Event
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-3.5 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue_gray-900_01 flex flex-col gap-2.5 sm:h-auto items-start justify-start sm:ml-[0] rounded-[16px] w-full">
                    <Img
                      className="h-[223px] md:h-auto object-cover rounded-[12px] w-[356px]"
                      src="images/img_eventimage.png"
                      alt="eventimage"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtSpaceGroteskBold18"
                      >
                        Purple Night by Farcaster & Lighthouse
                      </Text>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_mappin.svg"
                            alt="mappin"
                          />
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSpaceGroteskRegular16"
                          >
                            Zodak Pub And Brew House
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-center w-6">
                            <Img
                              className="h-6 w-6"
                              src="images/img_calendarfilled.svg"
                              alt="calendarfilled"
                            />
                          </div>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSpaceGroteskRegular16"
                          >
                            Sunday, December 10
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[101px]"
                      rightIcon={
                        <Img
                          className="h-5 mb-0.5 ml-[3px]"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="white_A700_19"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        Manage
                      </div>
                    </Button>
                  </div>
                  <div className="bg-blue_gray-900_01 flex flex-col gap-2.5 sm:h-auto items-start justify-start sm:ml-[0] rounded-[16px] w-full">
                    <Img
                      className="h-[223px] md:h-auto object-cover rounded-[12px] w-[356px]"
                      src="images/img_eventimage_223x356.png"
                      alt="eventimage"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtSpaceGroteskBold18"
                      >
                        Web3 re:invent
                      </Text>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_mappin.svg"
                            alt="mappin"
                          />
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSpaceGroteskRegular16"
                          >
                            Bengaluru Marriott Hotel Whitefield
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-center w-6">
                            <Img
                              className="h-6 w-6"
                              src="images/img_calendarfilled.svg"
                              alt="calendarfilled"
                            />
                          </div>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtSpaceGroteskRegular16"
                          >
                            Saturday, December 9
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[101px]"
                      rightIcon={
                        <Img
                          className="h-5 ml-[3px]"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="white_A700_19"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        Manage
                      </div>
                    </Button>
                  </div>
                </List>
              </div>
              <div className="bg-blue_gray-900_01 flex flex-col gap-2.5 sm:h-auto items-start justify-start rounded-[16px] w-[385px] sm:w-full">
                <Img
                  className="h-[223px] md:h-auto object-cover rounded-[12px] w-[356px]"
                  src="images/img_eventimage_1.png"
                  alt="eventimage"
                />
                <div className="flex flex-col gap-1 items-start justify-center w-auto">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtSpaceGroteskBold18"
                  >
                    Polygon Connect - INDIA
                  </Text>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_mappin.svg"
                        alt="mappin"
                      />
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtSpaceGroteskRegular16"
                      >
                        Bengaluru Marriott Hotel Whitefield
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-center w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_calendarfilled.svg"
                          alt="calendarfilled"
                        />
                      </div>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtSpaceGroteskRegular16"
                      >
                        Thursday, December 7
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[101px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-0.5 ml-[3px]"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="white_A700_19"
                  size="xs"
                  variant="fill"
                >
                  <div className="font-medium text-base text-left">Manage</div>
                </Button>
              </div>
            </div>
          </div>
          <Footer className="flex font-quantagroteskpro items-center justify-center mt-[307px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CreateEventPagePage;
