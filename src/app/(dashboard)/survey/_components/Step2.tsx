"use client";

import { Flex, Radio, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import Image from "next/image";

export default function Setp2() {
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
              2 out of 3
            </Typography.Title>
            <Typography.Text>Completed 66%</Typography.Text>
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
          className="mb-2"
          src={"/paper.svg"}
          alt={""}
          height={52}
          width={52}
        />
        <Flex vertical justify="center" align="center" className="text-center">
          <Typography.Title level={4} className="italic">
            Reason for Leaving
          </Typography.Title>
          <Typography.Text>
            Upon completion of this survey, your profile will be accessible to
            thousands of college coaches
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex vertical className="items-center">
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Playing time</Typography.Title>
          <Flex>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="radio-group"
            >
              <Radio className="radio-item" value={1}>
                Major Reason
              </Radio>
              <Radio className="radio-item" value={2}>
                Minor Reason
              </Radio>
              <Radio className="radio-item" value={3}>
                Not a Reason
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
            <Typography.Title level={4}>Choose Your Ideal Devision</Typography.Title>
            <Select
            className="w-full"
              defaultValue="D2/NAIA"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "P5", label: "FBS P5" },
                { value: "G5", label: "FBS G5" },
                { value: "FCS", label: "FCS"},
                { value: "D2/NAIA", label: "D2/NAIA" },
                { value: "D3", label: "D3"},
                { value: "JUCO", label: "JUCO"},
              ]}
            />
          </Flex>
          <Flex vertical className="mb-5 survey-textarea">
            <Typography.Title level={4}>Cost vs Academic Reputation.</Typography.Title>
            <Select
            className="w-full"
              defaultValue="Cost is way more imporant"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "blank", label: "(Leave blank)" },
                { value: "Cost is way more imporant", label: "Cost is way more imporant" },
                { value: "Cost is more important", label: "Cost is more important" },
                { value: "Cost is a little more important", label: "Cost is a little more important"},
                { value: "They are the same in importance", label: "They are the same in importance"},
                { value: "Academics are a little more important", label: "Academics are a little more important"},
                { value: "Academics are more important", label: "Academics are more important"},
                { value: "Academics are way more important", label: "Academics are way more important"},
              ]}
            />
          </Flex>
        {/* <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Want a higher Level</Typography.Title>
          <Flex>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="radio-group"
            >
              <Radio className="radio-item" value={1}>
                Yes
              </Radio>
              <Radio className="radio-item" value={2}>
                No
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex> */}
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Closer to home</Typography.Title>
          <Flex>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="radio-group"
            >
              <Radio value={1} className="radio-item">
                Yes
              </Radio>
              <Radio value={2} className="radio-item">
                No
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex>
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Coaches</Typography.Title>
          <Flex>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="radio-group"
            >
              <Radio className="radio-item" value={1}>
                Yes
              </Radio>
              <Radio className="radio-item" value={2}>
                No
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex>
        {/* <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Ineligible Academics</Typography.Title>
          <Flex>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="radio-group"
            >
              <Radio className="radio-item" value={1}>
                Yes
              </Radio>
              <Radio className="radio-item" value={2}>
                No
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex> */}
        {/* <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Better Academics</Typography.Title>
          <Flex>
            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="radio-group"
            >
              <Radio className="radio-item" value={1}>
                Value
              </Radio>
              <Radio className="radio-item" value={2}>
                Some Info
              </Radio>
              <Radio className="radio-item" value={3}>
                Value
              </Radio>
            </Radio.Group>
          </Flex>
        </Flex> */}
        
        <Flex vertical className="mb-5 survey-textarea">
          <Typography.Title level={4}>Add some information</Typography.Title>
          <TextArea rows={4} />
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Link href="/survey/step1" className="back-servey">
          Back
        </Link>
        <Link href="/survey/step1" className="next-servey">
          Submit
        </Link>
      </Flex>
    </Flex>
  );
}
