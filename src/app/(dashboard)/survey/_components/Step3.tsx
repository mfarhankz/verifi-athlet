"use client";

import { Flex, Typography } from "antd";
import Image from "next/image";

export default function Setp3() {
    return(
        <Flex vertical className="servey-box">
        <Flex className="survey-head justify-between items-center mb-5">
        <Typography.Title level={3} className="italic">
          Survey
        </Typography.Title>
        <Flex className="items-center">
          <Flex vertical className="items-end mr-3">
            <Typography.Title level={5} className="margin-0">2 out of 3</Typography.Title>
            <Typography.Text>Completed 66%</Typography.Text>
          </Flex>
          <Image src={"/graph.svg"} alt={""} height={32} width={32} />
        </Flex>
      </Flex>
      <Flex vertical className="py-4 px-5 mb-5 h-80 survey-banner">
      <Flex className="mb-10">
        <Image
          className="mr-7"
          src={"/paper.svg"}
          alt={""}
          height={52}
          width={52}
        />
        <Flex vertical>
          <Typography.Title level={4} className="italic margin-0">
          Survey Completed Successfully
          </Typography.Title>
          <Typography.Text>
          Now you can share your completed survey to your “X Account”
          </Typography.Text>
        </Flex>
      </Flex>
        <Flex justify="center">
        <Flex className="transferred">
        <Image className="mr-2" src={"/transferred.svg"} alt={""} height={92} width={92} />
        <Flex vertical className="gap-1">
        <Typography.Title level={4} className="italic uppercase margin-0">Jason Shaun</Typography.Title>
        <Typography.Title level={5} className="verified flex items-center rounded-full italic margin-0">
            <i className="icon-verify text-[12.5px] flex"></i>Verified Transferred
        </Typography.Title>
        <Flex align="flex-start" className="gap-1">
            <Image src={"/b.svg"} alt={""} height={20} width={16} className="mt-[6px]"/>
            <Typography.Text className="italic">Kansas City School (FL) 2024</Typography.Text>
        </Flex>
        </Flex>
        </Flex>
        </Flex>
      </Flex>
      </Flex>
    );
}