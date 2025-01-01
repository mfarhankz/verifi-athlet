"use client";

import { Button, Flex, Input, Radio, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import Link from "next/link";

export default function Setp1() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  return (
    <Flex vertical className="servey-box">
      <Flex className="survey-head justify-between items-center mb-5">
        <Typography.Title level={3} className="italic">
          Survey
        </Typography.Title>
        <Flex className="items-center">
          <Flex vertical className="items-end mr-3">
            <Typography.Title level={5} className="margin-0">
              1 out of 3
            </Typography.Title>
            <Typography.Text>Completed 33%</Typography.Text>
          </Flex>
          <Image src={"/graph.svg"} alt={""} height={32} width={32} />
        </Flex>
      </Flex>
      <Flex
        vertical
        justify="center"
        align="center"
        className="py-4 px-5 mb-5 survey-banner"
      >
        <Image
          className="mr-7"
          src={"/paper.svg"}
          alt={""}
          height={52}
          width={52}
        />
        <Flex vertical justify="center" align="center" className="text-center">
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
          <Typography.Title level={4}>Address</Typography.Title>
          <Input />
        </Flex>
        <div className="grid grid-cols-2 w-full gap-6">
          <Flex vertical className="mb-5 survey-textarea w-full">
            <Typography.Title level={4}>City</Typography.Title>
            <Input />
          </Flex>
          <Flex vertical className="mb-5 survey-textarea">
            <Typography.Title level={4}>State</Typography.Title>
            <Select
            className="w-full"
              defaultValue="QB"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
            />
          </Flex>
        </div>
        <Flex vertical className="mb-5 survey-textarea">
            <Typography.Title level={4}>State</Typography.Title>
            <Select
            className="w-full"
              defaultValue="Uni"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "harvard", label: "Harvard University" },
                { value: "stanford", label: "Stanford University" },
                { value: "massachusetts", label: "Massachusetts Institute of Technology (MIT)" },
                { value: "california", label: "University of California, Berkeley (UC Berkeley)"},
                { value: "princeton", label: "Princeton University"},
                { value: "columbia", label: "Columbia University"},
                { value: "Chicago", label: "University of Chicago"},
                { value: "Yale", label: "Yale University"},
              ]}
            />
          </Flex>
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
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="survey-radio-group radio-group"
            >
              <Radio className="radio-item" value={1}>
                Not Important
              </Radio>
              <Radio className="radio-item" value={2}>
                Very Important
              </Radio>
              <Radio className="radio-item" value={3}>
                Not sure
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>
            How important is your major?
          </Typography.Title>
          <Input />
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>HS GPA</Typography.Title>
          <Input />
        </Flex>
        <Flex
          vertical
          className="py-4 px-5 mb-5 optional-banner"
          align="center"
        >
          <Typography.Title level={4}>
            Optional - Coaches like to see college transcription if you have
          </Typography.Title>
          <Button>Upload Transcription</Button>
        </Flex>
      </Flex>
      <Link href="/survey/step1" className="next-servey">
        Next
      </Link>
    </Flex>
  );
}
