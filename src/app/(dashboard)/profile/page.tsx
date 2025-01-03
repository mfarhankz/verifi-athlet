/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button, Flex, Input, Select, Switch, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import ImageWithAverage from "../_components/ImageWithAverage";

export default function Profile() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="main-container">
      <Flex vertical className="profile card">
        <div className="grid grid-cols-12 w-full mb-5 gap-4">
          <div className="col-span-4">
            <Flex vertical className="user-container">
              <ImageWithAverage
                src="/profile-img.png"
                alt="Survey Image"
                height={250}
                width={250}
                containerWidth="100%"
                average={85.7}
              />
              <Flex className="w-[100%]">
                <ul>
                  <li>
                    <i className="icon-teacher"></i> Jackson HS
                  </li>
                  <li>
                    <i className="icon-receipt-item"></i> 6&apos;2&quot;, 225
                    lbs
                  </li>
                  <li>
                    <i className="icon-calendar-1"></i> RFR
                  </li>
                  <li>
                    <i className="icon-location"></i> New York, NY
                  </li>
                </ul>
              </Flex>
            </Flex>
          </div>
          <div className="col-span-8">
            <Flex vertical>
              <Flex className="justify-between items-center">
                <Flex className="status">
                  <span className="badge">
                    <i className="icon-check-2 flex mr-1"></i>
                    Active
                  </span>
                  <Typography.Text>ID AX30902</Typography.Text>
                </Flex>
                <Flex>
                  <Button>
                    <Image src={"/arrow.svg"} alt={""} height={20} width={20} />
                    Profile
                  </Button>
                </Flex>
              </Flex>
              <Flex align="center" className="mb-3">
                <Typography.Title
                  level={1}
                  className="uppercase italic primary mr-9"
                >
                  Jason Shaun
                </Typography.Title>
                <Typography.Text className="uppercase flex font-medium text-2xl gap-1">
                  <Image
                    src={"/warning-star.svg"}
                    alt={""}
                    height={22}
                    width={22}
                  />
                  4.2
                </Typography.Text>
              </Flex>
              <div className="grid grid-cols-2 gap-5 selec-group">
                <Flex vertical>
                  <Typography.Text className="opacity-50 mb-1">
                    Position
                  </Typography.Text>
                  <Select
                    defaultValue="WR (0)"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                    ]}
                  />
                </Flex>
                <Flex vertical>
                  <Typography.Text className="opacity-50 mb-1">
                    Eligibility Remaining
                  </Typography.Text>
                  <Select
                    defaultValue="2"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                    ]}
                  />
                </Flex>
                <Flex vertical>
                  <Typography.Text className="opacity-50 mb-1">
                    Year
                  </Typography.Text>
                  <Select
                    defaultValue="2"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                    ]}
                  />
                </Flex>
                <Flex vertical>
                  <Typography.Text className="opacity-50 mb-1">
                    Scholarship %
                  </Typography.Text>
                  <Select
                    defaultValue="100"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                    ]}
                  />
                </Flex>
                <Flex vertical>
                  <Typography.Text className="opacity-50 mb-1">
                    Redshirt Status
                  </Typography.Text>
                  <Select
                    defaultValue="Has not used"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                    ]}
                  />
                </Flex>
                <Flex vertical>
                  <Typography.Text className="opacity-50 mb-1">
                    Tier
                  </Typography.Text>
                  <Select
                    defaultValue="1"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                    ]}
                  />
                </Flex>
                <Flex
                  className="linear-gradient px-2 items-center"
                  justify="space-between"
                >
                  <Image src={"/bandage.svg"} alt={""} height={51} width={51} />
                  <Typography.Text className="items-center flex">
                    <Switch
                      className="mr-3"
                      defaultChecked
                      onChange={onChange}
                    />
                    Injured
                  </Typography.Text>
                </Flex>
                <Flex align="center">
                  <Link href={""}>Remove player before eligibility is up</Link>
                </Flex>
              </div>
            </Flex>
          </div>
          <div className="col-span-12 mt-3">
            <Flex className="mb-3">
              <Input placeholder="Write new..." className="w-full m-auto" />
            </Flex>
            <ul className="comments">
              <li>
                <Flex>
                  <Typography.Text className="jm mr-3">JM</Typography.Text>
                </Flex>
                <Flex vertical className="w-full">
                  <Flex justify="space-between">
                    <Typography.Title level={4}>Jason Masum</Typography.Title>
                    <Typography.Text className="edit-menu">
                      Edited 04/19/2024 4:59 PM
                      <i className="icon-menu-1 ms-2 text-xl"></i>
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Typography.Paragraph className="jm-p">
                      Adding a subtle animation here could help highlight
                      important actions and make it more engaging.
                    </Typography.Paragraph>
                  </Flex>
                </Flex>
              </li>
              <li>
                <Flex>
                  <Typography.Text className="jm mr-3">JM</Typography.Text>
                </Flex>
                <Flex vertical className="w-full">
                  <Flex justify="space-between">
                    <Typography.Title level={4}>Jason Masum</Typography.Title>
                    <Typography.Text className="edit-menu">
                      Edited 04/19/2024 4:59 PM
                      <i className="icon-menu-1 ms-2 text-xl"></i>
                    </Typography.Text>
                  </Flex>
                  <Flex>
                    <Typography.Paragraph className="jm-p">
                      I am a fan! <br />
                      These work better than i thought they would. I have never
                      been big into the Kardashian brands so i was hesitant to
                      try, but I am glad I did. I take two capsules with
                      breakfast and i dont have the urge to snack throughout the
                      day. Also has me eating lunch later and eating something
                      small for dinner. I am still on my first month but did the
                      subscription for three months for the discount. I have got
                      there
                    </Typography.Paragraph>
                  </Flex>
                </Flex>
              </li>
            </ul>
          </div>
        </div>
        <Flex className="flex justify-center gap-2">
          <Button size="large">Cancel</Button>
          <Button type="primary" size="large">
            Save Changes
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
