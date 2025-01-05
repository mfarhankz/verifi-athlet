/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Flex, Typography } from "antd";
import Image from "next/image";
import ImageWithAverage from "./ImageWithAverage";

interface UserShortInfoProps {
  src: string;
  height: number;
  width: number;
  fName: string;
  lName: string;
  title: string;
  average: number;
  rating: number;
  school: string;
  schoolIcon: string;
}

export default function UserShortInfo({
  src,
  fName,
  lName,
  height,
  width,
  average,
  rating,
  title,
  school,
  schoolIcon,
}: UserShortInfoProps) {
  return (
    <Flex vertical className="player-short-info">
      <Flex>
        <ImageWithAverage
          src={src}
          alt={fName}
          width={width}
          height={height}
          size="small"
          average={average}
        />
        <div className="ml-2 user-detail">
          <Flex gap={12}>
            <Typography.Title level={4}>
              <span>{fName}</span>
              {lName}
            </Typography.Title>
            <Flex align="center" justify="center">
              <Image
                src={
                  rating < 2
                    ? "/error-star.svg"
                    : rating > 4
                    ? "/success-star.svg"
                    : "/warning-star.svg"
                }
                alt={""}
                height={20}
                width={20}
                className="mr-1"
              />
              <Typography.Title level={5}>{rating}</Typography.Title>
            </Flex>
          </Flex>
          <Typography.Paragraph>{title}</Typography.Paragraph>
          <Typography.Paragraph>
            <Image src={schoolIcon} alt="School Icon" width={15} height={18} />
            {school}
          </Typography.Paragraph>
        </div>
      </Flex>
      <Flex className="justify-between pr-2 pl-1 w-[97%]">
        <Typography.Text>6'.2", 225 lbs</Typography.Text>
        <Typography.Text><span className="user-icon">JA</span> James Alex</Typography.Text>
      </Flex>
    </Flex>
  );
}
