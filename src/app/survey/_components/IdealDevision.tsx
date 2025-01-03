/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Flex, Typography } from "antd";
import Image from "next/image";

export default function IdealDevision() {
  return (
    <Flex vertical className="servey-box">
      <Flex justify="space-between" className="mb-3">
        <i className="icon-arrow-left-2 text-lg"></i>
        <Image src={"/logo.svg"} alt={""} height={24} width={147} />
        <i></i>
      </Flex>

      <Flex vertical className="border devision">
        <Typography.Title level={4} className="py-4 px-3 gray bg-[#1C1D4D0F]">
          Choose Your Ideal Devision
        </Typography.Title>
        <ul>
          <li>FBS P5</li>
          <li>FBS G5</li>
          <li>FCS</li>
          <li>D2/NAIA</li>
          <li>D3</li>
          <li>JUCO</li>
        </ul>
      </Flex>
    </Flex>
  );
}
