"use client";

import { Flex, Typography } from "antd";
import ServeyStart from "@/app/(dashboard)/survey/_components/SurveyStart";
import Step1 from "@/app/(dashboard)/survey/_components/Step1";
import Step2 from "@/app/(dashboard)/survey/_components/Step2";
import Step3 from "@/app/(dashboard)/survey/_components/Step3";

export default function Survey() {
  return (
    <div className="main-container">
      <Flex vertical className="gap-3">
        <div className="card">
          <Typography.Title
            level={2}
            className="setting-heading"
            style={{ marginBottom: 0 }}
          >
            Survey
          </Typography.Title>
        </div>
        <div className="card">
          <Flex vertical className="w-[100%] m-auto">
            <ServeyStart />
            <Step1 />
            <Step2 />
            <Step3 />
          </Flex>
        </div>
      </Flex>
    </div>
  );
}
