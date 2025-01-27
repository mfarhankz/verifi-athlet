"use client";

import ImageWithAverage from "@/app/(dashboard)/_components/ImageWithAverage";
import { Flex, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function SurveyStart() {
  return (
    <Flex vertical className="servey-box">
      <Flex className="gray" vertical align="center">
        {/* <Image
          src={"/logo.svg"}
          alt={"logo"}
          height={31}
          width={192}
          className="mt-3"
        /> */}
        <Flex>
          <Typography.Title level={2} className="main-heading">
            COMPLETE SURVEY FORM
            <span>ESTIMATE TIME 1:20m</span>
          </Typography.Title>
        </Flex>
        <ImageWithAverage
          src="/servey-img.png"
          alt="Survey Image"
          height={250}
          width={250}
          average={85.7}
        />
        <Flex vertical align="center">
          <Typography.Title level={3}>Jason Shaun</Typography.Title>
          <Typography.Paragraph className="text-center">
            Become more accessible to thousands <br /> for college coaches
          </Typography.Paragraph>
        </Flex>

        <Flex vertical align="center" className="mt-5 mb-5">
          <Image src={"/flag.svg"} alt={"flag"} height={116} width={147} />
          <Flex className="set-position">
            <Typography.Title level={3}>5,603</Typography.Title>
            <Typography.Paragraph className="ml-3">
              <span>Customers</span> <br />
              Across America
            </Typography.Paragraph>
          </Flex>
          <Image src={"/map.svg"} alt={"map"} height={116} width={310} />
        </Flex>
        <Flex className="mb-10">
          <Typography.Title
            level={3}
            className="flex items-center justify-center"
          >
            <Image
              src={"/video-play.svg"}
              alt={"logo"}
              height={47}
              width={47}
              className="mr-2"
            />
            <Link href="">Watch Important Video</Link>
          </Typography.Title>
        </Flex>
      </Flex>

      <Link href="/survey/step1" className="next-servey">
        Start Servey
      </Link>
    </Flex>
  );
}
