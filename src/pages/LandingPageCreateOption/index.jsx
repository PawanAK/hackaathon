import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Switch,
  Text,
} from "components";
import ExplorePageEventTwoNavbar from "components/ExplorePageEventTwoNavbar";
import Footer from "components/Footer";

const LandingPageCreateOptionPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-spacegrotesk h-[1934px] mx-auto pt-[41px] relative w-full"
        style={{ backgroundImage: "url('images/img_landingpage.png')" }}
      >
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <ExplorePageEventTwoNavbar className="flex md:flex-col flex-row md:gap-10 gap-60 items-center justify-between max-w-[1169px] mx-auto md:px-5 w-full" />
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
                  <CheckBox
                    className="font-bold text-left text-lg"
                    inputClassName="mr-[5px] relative"
                    name="attend"
                    id="attend"
                    label="Attend"
                    color="white_A700_white_A700_cc"
                  ></CheckBox>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum diam justo, varius non sapien id.
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-auto sm:w-full">
                        <div className="bg-purple-400 flex flex-col items-center justify-center sm:px-5 px-[29px] py-3 rounded-[25px] w-auto">
                          <Text
                            className="text-gray-900 text-lg w-auto"
                            size="txtSpaceGroteskMedium18Gray900"
                          >
                            Create Event
                          </Text>
                        </div>
                        <div className="border border-solid border-white-A700 flex flex-row gap-[11px] items-center justify-center px-5 py-3 rounded-[25px] w-auto">
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtSpaceGroteskMedium18"
                          >
                            Discover Events
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-[53px] relative rotate-[-60deg] w-[298px]">
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
                      <div className="absolute bg-gradient  flex flex-row gap-2 items-center justify-center left-[22%] px-5 py-[11px] rotate-[60deg] rounded-[24px] shadow-bs top-[14%] w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_add_add_square.svg"
                          alt="addaddsquare"
                        />
                        <Text
                          className="text-lg text-purple-900 w-auto"
                          size="txtSpaceGroteskBold18Purple900"
                        >
                          Create
                        </Text>
                      </div>
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
                    tickets effortlessly, and incentivize your audience
                    according to their interest & interaction. Unleash the power
                    of NFTs in ticketing. Join us, where innovation meets
                    seamless event experiences
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
        <div className="absolute font-quantagroteskpro md:h-[518px] h-[710px] inset-x-[0] max-w-[989px] mx-auto md:px-5 top-[2%] w-full">
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
                  <div className="text-left text-xl">Link Your Anon Aadhar</div>
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
                  name="frameNineteen_One"
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
                  name="frameNineteen_Two"
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
                  name="frameNineteen_Three"
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
    </>
  );
};

export default LandingPageCreateOptionPage;
