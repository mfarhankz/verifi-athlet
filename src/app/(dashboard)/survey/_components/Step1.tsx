"use client";

import { Button, Flex, Input, Radio, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import Link from "next/link";

export default function Setp1() {
  return (
    <Flex vertical className="servey-box">
      <Flex className="survey-head justify-between items-center mb-5">
        <Typography.Title level={3} className="italic">
          Survey
        </Typography.Title>
        <Flex className="items-center">
          <Flex vertical className="items-end mr-3">
            <Typography.Title level={5} className="margin-0">1 out of 3</Typography.Title>
            <Typography.Text>Completed 33%</Typography.Text>
          </Flex>
          <Image src={"/graph.svg"} alt={""} height={32} width={32} />
        </Flex>
      </Flex>
      <Flex className="py-4 px-5 mb-5 survey-banner">
        <Image
          className="mr-7"
          src={"/paper.svg"}
          alt={""}
          height={52}
          width={52}
        />
        <Flex vertical>
          <Typography.Title level={4} className="italic margin-0">
            Start your survey
          </Typography.Title>
          <Typography.Text>
            Upon completion of this survey, your profile will be accessible to
            thousands of college coaches
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex vertical className="items-center">
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>
            In a short words tell us why are you transferring?
          </Typography.Title>
          <TextArea rows={4} />
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>
            What is important to you as you look for your next school?
          </Typography.Title>
          <TextArea rows={4} />
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>
            What games should a coach watch when evaluating you?
          </Typography.Title>
          <Input />
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>College GPA</Typography.Title>
          <Input />
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Major</Typography.Title>
          <Flex>
          <Radio.Group name="radiogroup" defaultValue={1} className="survey-radio-group radio-group">
            <Radio className="radio-item" value={1}>Not Important</Radio>
            <Radio className="radio-item" value={2}>Very Important</Radio>
            <Radio className="radio-item" value={3}>Not sure</Radio>
          </Radio.Group>
          </Flex>
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>How important is your major?</Typography.Title>
          <Input />
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>HS GPA</Typography.Title>
          <Input />
        </Flex>
        <Flex vertical className="py-4 px-5 mb-5 optional-banner" align="center">
          <Typography.Title level={4}>
          Optional - Coaches like to see college transcription if you have
          </Typography.Title>
          <Button>Upload Transcription</Button>
      </Flex>
      </Flex>
      <Link href="/survey/step1" className="next-servey">Next</Link>
    </Flex>
  );
}
