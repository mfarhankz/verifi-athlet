"use client";

import { data } from "@/apis/data";
import MultipleContainers from "@/app/dndkit/presets/Sortable/MultipleContainers";
import { Flex, Typography } from "antd";

export default function RecruitingBoard() {
  return (
    <div className="main-container">
      <Flex className="card mb-4 items-center justify-between">
        <Flex>
          <h4 style={{ marginBottom: 0 }}>
            Athlete Chart
          </h4>
        </Flex>
        <Flex>
          <Typography.Paragraph
            style={{ marginBottom: 0 }}
            className="flex items-center justify-center mr-6"
          >
            <span className="bg-[#7363BC] w-[20px] h-[20px] flex mr-2"></span>
            Teir 1
          </Typography.Paragraph>

          <Typography.Paragraph
            style={{ marginBottom: 0 }}
            className="flex items-center justify-center mr-6"
          >
            <span className="bg-[#36C5F0] w-[20px] h-[20px] flex mr-2"></span>
            Teir 2
          </Typography.Paragraph>

          <Typography.Paragraph
            style={{ marginBottom: 0 }}
            className="flex items-center justify-center"
          >
            <span className="bg-[#FF24BA] w-[20px] h-[20px] flex mr-2"></span>
            Teir 3
          </Typography.Paragraph>
        </Flex>
      </Flex>
      <div className="w-[100%] overflow-auto flex">
        <MultipleContainers data={data} handle={true} />
      </div>
    </div>
  );
}
