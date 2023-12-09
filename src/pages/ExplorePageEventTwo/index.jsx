import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import ExplorePageEventTwoNavbar from "components/ExplorePageEventTwoNavbar";
import Footer from "components/Footer";

const ExplorePageEventTwoPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-quantagroteskpro sm:gap-10 md:gap-10 gap-[188px] items-center justify-end mx-auto pt-[41px] w-full">
        <div className="sm:h-[1035px] h-[1036px] md:h-[1454px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[52px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <ExplorePageEventTwoNavbar className="flex md:flex-col flex-row md:gap-10 gap-60 items-center justify-between w-auto md:w-full" />
              <div className="flex flex-col gap-0.5 items-start justify-start mt-[141px] w-auto md:w-full">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum diam justo, varius non sapien id.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Vestibulum diam justo,
                  varius non sapien id.
                </Text>
              </div>
              <Line className="bg-gray-600_63 h-px mt-[115px] w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1185px] mt-[47px] w-full">
                <div className="flex flex-row gap-1 items-center justify-start w-[230px]">
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
                <div className="bg-white-A700_19 flex flex-row font-spacegrotesk gap-2.5 items-start justify-start rounded-bl-[21px] rounded-br-[20px] rounded-tl-[21px] rounded-tr-[20px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_filter_horizontal.svg"
                    alt="filterhorizonta"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtSpaceGroteskRegular16"
                  >
                    Filter
                  </Text>
                </div>
              </div>
            </div>
            <div className="font-spacegrotesk sm:h-[425px] h-[460px] md:h-[794px] relative w-[83%] md:w-full">
              <div className="bg-blue_gray-900_63 flex flex-col gap-2.5 sm:h-auto h-full items-start justify-start ml-auto rounded-[16px] w-[385px]">
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
                <div className="bg-white-A700_19 flex flex-row gap-[3px] items-center justify-center px-2 py-1 rounded-lg w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtSpaceGroteskMedium16WhiteA700"
                  >
                    More Info
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col gap-6 h-full inset-[0] items-center justify-start m-auto w-auto">
                <List
                  className="sm:flex-col flex-row gap-[15px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1185px] w-full"
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
                    <div className="bg-white-A700_19 flex flex-row gap-[3px] items-center justify-center px-2 py-1 rounded-lg w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtSpaceGroteskMedium16WhiteA700"
                      >
                        More Info
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrowleft"
                      />
                    </div>
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
                    <div className="bg-white-A700_19 flex flex-row gap-[3px] items-center justify-center px-2 py-1 rounded-lg w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtSpaceGroteskMedium16WhiteA700"
                      >
                        More Info
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrowleft"
                      />
                    </div>
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
            </div>
          </div>
          <div className="absolute bg-blue_gray-900_01 flex flex-col h-full inset-[0] items-start justify-center m-auto rounded-[20px] w-[69%]">
            <Text
              className="ml-6 md:ml-[0] mt-[38px] text-white-A700 text-xl"
              size="txtQuantaGroteskProSemiBold20"
            >
              Event Details
            </Text>
            <div className="flex flex-col items-start justify-start mt-4 p-3 w-auto md:w-full">
              <Img
                className="h-[392px] md:h-auto object-cover rounded-[12px] w-[961px]"
                src="images/img_eventimage_223x356.png"
                alt="rectangleFive"
              />
            </div>
            <div className="flex flex-col font-spacegrotesk gap-[27px] items-start justify-start ml-3 md:ml-[0] w-auto md:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                  size="txtSpaceGroteskBold36"
                >
                  Web3 re:invent
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtSpaceGroteskBold18"
                  >
                    Created by
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtSpaceGroteskRegular18"
                  >
                    0x0975...3fdb7
                  </Text>
                  <Img
                    className="h-9 w-9"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_Two"
                  />
                </div>
              </div>
              <Line className="bg-gray-600 h-px w-full" />
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_Three"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtSpaceGroteskBold24"
                    >
                      Event Info
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_mappin.svg"
                        alt="mappin_One"
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
                          alt="calendarfilled_One"
                        />
                      </div>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtSpaceGroteskRegular16"
                      >
                        Saturday, December 9
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtSpaceGroteskRegular16"
                      >
                        10:00 AM to 7:00 PM
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-28 md:h-auto items-start justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_file.svg"
                      alt="file"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtSpaceGroteskBold24"
                    >
                      Event Description
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] text-base text-white-A700"
                    size="txtSpaceGroteskRegular16"
                  >
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      ​🛠{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-white-A700 font-spacegrotesk text-left font-normal underline"
                    >
                      Re:Invent
                    </a>
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      <>
                        {" "}
                        is India&#39;s First Web3 Infrastructure Conference that
                        will be held on December 9, 2023, in Bangalore, India,
                        during ETHIndia’23. 💻
                        <br />
                        ​🔗 Find more details here
                      </>
                    </span>
                    <a
                      href="javascript:"
                      className="text-white-A700 font-spacegrotesk text-left font-normal underline"
                    >
                      : https://www.web3reinvent.
                    </a>
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      com
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center ml-6 md:ml-[0] my-[45px] rounded-[24px] w-[394px]"
              rightIcon={
                <Img
                  className="h-6 mb-[3px] ml-2.5"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="font-spacegrotesk text-left text-xl">
                Register for the Event
              </div>
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ExplorePageEventTwoPage;
