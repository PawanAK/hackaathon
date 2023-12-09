import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import CreateEventPageColumnedit from "components/CreateEventPageColumnedit";
import ExplorePageEventTwoNavbar from "components/ExplorePageEventTwoNavbar";

const CreateEventPageCreateOptionPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-spacegrotesk items-center justify-end mx-auto pt-[41px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="sm:h-[600px] h-[710px] md:h-[744px] md:px-5 relative w-full">
            <div className="absolute sm:h-[600px] h-[674px] md:h-[744px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col gap-[39px] justify-start w-full">
                  <ExplorePageEventTwoNavbar className="flex md:flex-col flex-row md:gap-10 gap-60 items-center justify-between md:ml-[0] ml-[169px] w-auto md:w-full" />
                  <div className="bg-blue_gray-900_5e flex flex-col items-end justify-end pt-[127px] md:px-10 sm:px-5 px-[127px] rounded-tl-lg rounded-tr-lg w-full">
                    <div className="flex flex-col items-center justify-start mt-[308px] w-[21%] md:w-full">
                      <CreateEventPageColumnedit
                        className="flex flex-col gap-2.5 items-start justify-start p-5 w-auto"
                        editimage="images/img_edit.svg"
                        changebackgroundtext="Change Background"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[182px] left-[9%] rounded-[50%] w-[182px]"
                src="images/img_profilepicture.png"
                alt="profilepicture"
              />
            </div>
            <div className="absolute font-quantagroteskpro md:h-[518px] h-[710px] inset-[0] justify-center m-auto w-[69%] md:w-full">
              <div className="absolute bg-blue_gray-900_01 flex flex-col h-full inset-[0] justify-center m-auto rounded-[20px] w-full">
                <Text
                  className="ml-6 md:ml-[0] mr-[774px] mt-[26px] text-white-A700 text-xl"
                  size="txtQuantaGroteskProSemiBold20"
                >
                  Upload Event Details
                </Text>
                <div className="flex font-spacegrotesk mb-[19px] mr-4 mt-[3px] relative w-[99%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-col sm:h-auto items-start justify-start p-3 w-[416px] sm:w-full">
                      <Img
                        className="h-[392px] md:h-auto object-cover rounded-[12px] w-[392px]"
                        src="images/img_rectangle5.png"
                        alt="rectangleFive"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between px-5 w-[439px] sm:w-full">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtSpaceGroteskMedium20"
                      >
                        <span className="text-white-A700 font-spacegrotesk text-left font-medium">
                          Upload Event Image
                        </span>
                        <span className="text-red-A700 font-spacegrotesk text-left font-normal">
                          *
                        </span>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[98px]"
                        rightIcon={
                          <Img
                            className="h-6 mb-px ml-[3px]"
                            src="images/img_upload_02.svg"
                            alt="Upload/02"
                          />
                        }
                        shape="round"
                        color="white_A700_19"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          Upload
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col font-quantagroteskpro gap-2 items-start justify-start ml-[undefinedpx] mr-[3px] mt-auto w-[55%] z-[1]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtQuantaGroteskProSemiBold24"
                    >
                      Event Details
                    </Text>
                    <div className="bg-white-A700_19 flex flex-col font-spacegrotesk items-center justify-center rounded-[12px] w-auto sm:w-full">
                      <div className="flex flex-col gap-5 items-center justify-center py-3 w-auto sm:w-full">
                        <div className="flex flex-row gap-[329px] items-center justify-between w-auto sm:w-full">
                          <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_frame.svg"
                              alt="frame"
                            />
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtSpaceGroteskMedium16WhiteA700"
                            >
                              Tickets
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[93px]"
                            rightIcon={
                              <Img
                                className="h-[19px] ml-2.5"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="outline"
                          >
                            <div className="text-left text-sm">Select </div>
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[289px] items-center justify-between w-auto sm:w-full">
                          <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_checkmark_white_a700.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtSpaceGroteskMedium16WhiteA700"
                            >
                              Require Approval
                            </Text>
                          </div>
                          <Switch
                            onColor="#ffffff19"
                            offColor="#ffffff19"
                            onHandleColor="#d9d9d9"
                            offHandleColor="#d9d9d9"
                            value={false}
                            className="gap-3 px-[19px] py-1.5 w-auto"
                          />
                        </div>
                        <List
                          className="flex flex-col gap-5 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex sm:flex-1 flex-row gap-[318px] items-center justify-between w-auto sm:w-full">
                            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_frame_white_a700.svg"
                                alt="frame"
                              />
                              <Text
                                className="text-base text-white-A700 w-auto"
                                size="txtSpaceGroteskMedium16WhiteA700"
                              >
                                Capacity
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[93px]"
                              rightIcon={
                                <Img
                                  className="h-[19px] ml-2.5"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="sm"
                              variant="outline"
                            >
                              <div className="text-left text-sm">Select </div>
                            </Button>
                          </div>
                          <Line className="self-center h-px bg-gray-600 w-full" />
                          <div className="flex sm:flex-1 flex-row items-center justify-between w-[509px] sm:w-full">
                            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_frame_white_a700_24x24.svg"
                                alt="frame"
                              />
                              <Text
                                className="text-base text-white-A700 w-auto"
                                size="txtSpaceGroteskMedium16WhiteA700"
                              >
                                Visibility
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[93px]"
                              rightIcon={
                                <Img
                                  className="h-[19px]"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="sm"
                              variant="outline"
                            >
                              <div className="text-left text-sm">Select </div>
                            </Button>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-spacegrotesk gap-[13px] items-center justify-start ml-[undefinedpx] mt-auto w-[41%] z-[1]">
                    <Button
                      className="cursor-pointer flex items-center justify-center rounded-[24px] w-[394px]"
                      rightIcon={
                        <Img
                          className="h-6 ml-2.5 my-px"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      }
                      color="white_A700"
                      size="xl"
                      variant="outline"
                    >
                      <div className="text-left text-xl">
                        Link Your Anon Aadhar
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center rounded-[24px] w-[394px]"
                      rightIcon={
                        <Img
                          className="h-6 ml-2.5 my-px"
                          src="images/img_add_add_square_black_900.svg"
                          alt="Add/Add Square"
                        />
                      }
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      <div className="text-left text-xl">Create the event</div>
                    </Button>
                  </div>
                  <Line className="bg-gray-600 h-px ml-[-1px] mt-[262px] w-[55%] z-[1]" />
                </div>
              </div>
              <div className="absolute flex flex-col font-spacegrotesk gap-5 h-[235px] md:h-auto items-center justify-start right-[0] top-[9%] w-[549px] sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[546px] sm:w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtSpaceGroteskRegular20"
                  >
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      Enter Event Name
                    </span>
                    <span className="text-red-A700 font-spacegrotesk text-left font-normal">
                      *
                    </span>
                  </Text>
                  <div className="flex flex-col items-start justify-start px-4 w-auto sm:w-full">
                    <Input
                      name="frameNineteen"
                      placeholder="Event Name"
                      className="p-0 placeholder:text-white-A700_7f text-left text-sm w-full"
                      wrapClassName="w-full"
                      type="text"
                      shape="round"
                      color="white_A700_19"
                      size="xs"
                      variant="outline"
                    ></Input>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[546px] sm:w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtSpaceGroteskRegular20"
                  >
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      Enter Event Description
                    </span>
                    <span className="text-red-A700 font-spacegrotesk text-left font-normal">
                      *
                    </span>
                  </Text>
                  <div className="flex flex-col items-start justify-start px-4 w-auto sm:w-full">
                    <Input
                      name="frameNineteen_One"
                      placeholder="Event Description"
                      className="p-0 placeholder:text-white-A700_7f text-left text-sm w-full"
                      wrapClassName="w-full"
                      shape="round"
                      color="white_A700_19"
                      size="xs"
                      variant="outline"
                    ></Input>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[102px] items-start justify-start sm:pr-5 pr-[35px] w-auto sm:w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtSpaceGroteskRegular20"
                  >
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      Add Date & Time
                    </span>
                    <span className="text-red-A700 font-spacegrotesk text-left font-normal">
                      *
                    </span>
                  </Text>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer min-w-[55px] text-center text-sm"
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="outline"
                      >
                        Start
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[46px] text-center text-sm"
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="outline"
                      >
                        End
                      </Button>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-3 grid grid-cols-2 w-[73%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[83px]"
                          rightIcon={
                            <Img
                              className="h-[19px] ml-3"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700_19"
                          size="sm"
                          variant="fill"
                        >
                          <div className="text-left text-sm">Date</div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[83px]"
                          rightIcon={
                            <Img
                              className="h-[19px] ml-3"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700_19"
                          size="sm"
                          variant="fill"
                        >
                          <div className="text-left text-sm">Date</div>
                        </Button>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[83px]"
                          rightIcon={
                            <Img
                              className="h-[19px] ml-3"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700_19"
                          size="sm"
                          variant="fill"
                        >
                          <div className="text-left text-sm">Time</div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[83px]"
                          rightIcon={
                            <Img
                              className="h-[19px] ml-3"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700_19"
                          size="sm"
                          variant="fill"
                        >
                          <div className="text-left text-sm">Time</div>
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[546px] sm:w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtSpaceGroteskRegular20"
                  >
                    <span className="text-white-A700 font-spacegrotesk text-left font-normal">
                      Enter Location Name
                    </span>
                    <span className="text-red-A700 font-spacegrotesk text-left font-normal">
                      *
                    </span>
                  </Text>
                  <div className="flex flex-col items-start justify-start px-4 w-auto sm:w-full">
                    <Input
                      name="frameNineteen_Two"
                      placeholder="Offline location or virtual link"
                      className="p-0 placeholder:text-white-A700_7f text-left text-sm w-full"
                      wrapClassName="w-full"
                      shape="round"
                      color="white_A700_19"
                      size="xs"
                      variant="outline"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1185px] mt-[3px] mx-auto md:px-5 w-full">
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
          <Line className="bg-gray-600_5e h-px mt-11 w-[92%]" />
          <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start max-w-[1184px] mt-[43px] mx-auto md:px-5 w-full">
            <div className="border-2 border-dashed border-gray-600_5e flex sm:flex-1 flex-col gap-2.5 sm:h-auto items-start justify-start p-2.5 rounded-[16px] w-[385px] sm:w-full">
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
              <div className="bg-blue_gray-900_5e flex flex-col gap-2.5 sm:h-auto items-start justify-start rounded-[16px] w-full">
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
              <div className="bg-blue_gray-900_5e flex flex-col gap-2.5 sm:h-auto items-start justify-start rounded-[16px] w-full">
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
                  <div className="font-medium text-base text-left">Manage</div>
                </Button>
              </div>
            </List>
          </div>
          <div className="bg-blue_gray-900_5e flex flex-col gap-2.5 sm:h-auto items-start justify-start ml-32 md:ml-[0] mt-[15px] md:px-5 rounded-[16px] w-[385px] sm:w-full">
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
              <div className="font-medium text-base text-left">Manage</div>
            </Button>
          </div>
          <footer className="flex font-quantagroteskpro items-center justify-center mt-[45px] md:px-5 w-full">
            <div className="h-[399px] md:h-[465px] sm:h-[724px] relative w-full">
              <div className="absolute bg-gray-900_02 flex flex-col gap-3 h-max inset-[0] items-center justify-center m-auto p-[75px] md:px-10 sm:px-5 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1188px] w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center w-[199px]">
                      <Img
                        className="h-[34px] md:h-auto object-cover rounded-sm w-[59px]"
                        src="images/img_logo.png"
                        alt="logo_One"
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
                  <ul className="flex md:flex-1 flex-col font-spacegrotesk gap-1 items-end justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-center text-lg text-white-A700"
                      >
                        <Text size="txtSpaceGroteskRegular18">About</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-center text-lg text-white-A700"
                      >
                        <Text size="txtSpaceGroteskRegular18">Discover</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-center text-lg text-white-A700"
                      >
                        <Text size="txtSpaceGroteskRegular18">
                          Create Event
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-center text-lg text-white-A700"
                      >
                        <Text size="txtSpaceGroteskRegular18">
                          Connect Wallet
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-col flex-row font-spacegrotesk md:gap-10 gap-[561px] items-end justify-between mb-[34px] w-auto md:w-full">
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
                        name="frameNineteen_Three"
                        placeholder="Your email address"
                        className="p-0 placeholder:text-white-A700_7f text-left text-sm w-full"
                        wrapClassName="rounded-[9px] w-full"
                        type="email"
                        shape="round"
                        color="white_A700_19"
                        size="xs"
                        variant="outline"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium rounded-[9px] text-center text-sm w-[81px]"
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
              <div className="absolute border-solid border-t border-white-A700_19 bottom-[0] flex flex-col font-spacegrotesk inset-x-[0] items-center justify-center mx-auto w-auto md:w-full">
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
        </div>
      </div>
    </>
  );
};

export default CreateEventPageCreateOptionPage;
