import React from "react";

import { Img, Text } from "components";

const CreateEventPageColumnedit = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_19 flex flex-row gap-1 items-start justify-start px-3 py-2 rounded-[20px] w-auto">
          {!!props?.editimage ? (
            <Img className="h-6 w-6" alt="edit" src={props?.editimage} />
          ) : null}
          {!!props?.changebackgroundtext ? (
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtSpaceGroteskMedium16"
            >
              {props?.changebackgroundtext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

CreateEventPageColumnedit.defaultProps = {};

export default CreateEventPageColumnedit;
