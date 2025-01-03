"use client";

import { Flex } from "antd";
import Image from "next/image";

import ServeyStart from "@/app/survey/_components/SurveyStart";
import Step1 from "@/app/survey/_components/Step1";
import Step2 from "@/app/survey/_components/Step2";
import Step3 from "@/app/survey/_components/Step3";
import IdealDevision from "@/app/survey/_components/IdealDevision";

export default function Survey() {
  return (
    <div className="main-container mobile-survey">
      <Flex vertical className="gap-3">
        <div className="card">
          <Flex vertical className="w-[100%] m-auto">
            <Flex align="center" justify="center">
              <Image src={"/logo.svg"} alt={"logo"} height={31} width={192} />
            </Flex>
            <ServeyStart />
            <Step1 />
            <Step2 />
            <IdealDevision />
            <Step3 />
          </Flex>
        </div>
      </Flex>
    </div>
  );
}
