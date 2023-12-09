import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ExplorePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-spacegrotesk items-center justify-end mx-auto pt-[41px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-60 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-0.5 items-start justify-start max-w-[1186px] mt-[141px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
            size="txtQuantaGroteskProSemiBold36WhiteA700"
          >
            Explore Different Events
          </Text>
          <Text
            className="max-w-[1186px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
            size="txtSpaceGroteskRegular24"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            diam justo, varius non sapien id.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum diam justo, varius non
            sapien id.
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mt-[115px] w-full">
          <Line className="bg-gray-600_87 h-px w-full" />
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1185px] mt-[47px] mx-auto md:px-5 w-full">
            <div className="flex flex-row font-quantagroteskpro gap-1 items-center justify-start w-[230px]">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtQuantaGroteskProSemiBold24"
              >
                Upcoming Events
              </Text>
              <Img
                className="h-9 w-9"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
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
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1185px] mt-[52px] mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1185px] w-full"
              orientation="horizontal"
            >
              <div className="bg-blue_gray-900_01 flex flex-1 flex-col gap-2.5 sm:h-auto items-start justify-start rounded-[16px] w-full">
                <div className="relative w-[93%]">
                  <Img
                    className="absolute h-[223px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[356px]"
                    src="images/img_eventimage_223x356.png"
                    alt="eventimage"
                  />
                  <Img
                    className="absolute h-[223px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[356px]"
                    src="images/img_eventimage_1.png"
                    alt="eventimage_One"
                  />
                </div>
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
                        Saturday, December 7
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[113px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-[3px]"
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
                    More Info
                  </div>
                </Button>
              </div>
              <div className="bg-blue_gray-900_01 flex flex-1 flex-col gap-2.5 sm:h-auto items-start justify-start rounded-[16px] w-full">
                <div className="relative w-[93%]">
                  <Img
                    className="absolute h-[223px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[356px]"
                    src="images/img_eventimage_2.png"
                    alt="eventimage"
                  />
                  <Img
                    className="absolute h-[223px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[356px]"
                    src="images/img_eventimage_223x356.png"
                    alt="eventimage_One"
                  />
                </div>
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
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[113px]"
                  onClick={() => navigate("/explorepageeventtwo")}
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-[3px]"
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
                    More Info
                  </div>
                </Button>
              </div>
              <div className="bg-blue_gray-900_01 flex flex-1 flex-col gap-2.5 sm:h-auto items-start justify-start rounded-[16px] w-full">
                <div className="relative w-[93%]">
                  <Img
                    className="absolute h-[223px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[356px]"
                    src="images/img_eventimage_223x356.png"
                    alt="eventimage"
                  />
                  <Img
                    className="absolute h-[223px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[356px]"
                    src="images/img_eventimage.png"
                    alt="eventimage_One"
                  />
                </div>
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
                  className="cursor-pointer flex items-center justify-center min-w-[113px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-[3px]"
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
                    More Info
                  </div>
                </Button>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtSpaceGroteskMedium18"
              >
                FIND MORE
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrowdown_One"
              />
            </div>
          </div>
          <Footer className="flex font-quantagroteskpro items-center justify-center mt-[242px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ExplorePagePage;
