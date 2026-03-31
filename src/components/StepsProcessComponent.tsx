/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { AvatarGroupCount } from "./ui/avatar";

export default function StepsProcessComponent({ cartPart, stepsList }: any) {
  return (
    <>
      {stepsList.map((stepItem: any, index: number) => (
        <div key={index} className="flex items-center ">
          <AvatarGroupCount
            className="mr-2 ml-4"
            active={cartPart === stepItem.linkTo}
          >
            {index + 1}
          </AvatarGroupCount>{" "}
          <span
            className={
              cartPart === stepItem.linkTo
                ? "text-black mr-4 font-bold"
                : "text-gray-500 mr-4  "
            }
          >
            {stepItem.name}
          </span>
          {index !== stepsList.length - 1 && (
            <div className="w-32 h-0.5 bg-gray-300 rounded-full"></div>
          )}
        </div>
      ))}
    </>
  );
}
