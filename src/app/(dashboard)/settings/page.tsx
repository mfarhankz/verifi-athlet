"use client";

import React from "react";
import { Tabs, Typography } from "antd";

// import { Button, Flex, Input, Layout, Select, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import Image from "next/image";
// import Link from "next/link";
import PlayerProfile from "@/app/(dashboard)/settings/_components/PlayerProfile";

const onChange = (key: string) => {
  console.log("Active tab key:", key);
};

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };

// const MyProfile = () => (
//   <Layout className="my-profile">
//     <Typography.Title level={3}><i className="icon-user"></i> Profile Info</Typography.Title>
//     <Flex vertical>
//       <Flex className="items-center justify-between mb-5">
//         <Flex className="items-center">
//           <Image
//             className="mr-2"
//             src={"/user.svg"}
//             alt={"Profile"}
//             height={110}
//             width={110}
//           />
//           <Flex className="flex-col items-start">
//             <Typography.Title level={4}>Your Photo</Typography.Title>
//             <Typography.Text>
//               Only jpg and png formats less than 2mb
//             </Typography.Text>

//             <Button type="link" icon={<i className="icon-trash"></i>}>
//               Remove
//             </Button>
//           </Flex>
//         </Flex>
//         <Flex>
//           <Button type="primary" size="large" icon={<i className="icon-camera"></i>}>
//             Upload
//           </Button>
//         </Flex>
//       </Flex>
//       <Flex className="grid grid-cols-2 gap-5 mb-2">
//         <div>
//           <Typography.Text>First Name</Typography.Text>
//           <Input placeholder="Jimmy" />
//         </div>
//         <div>
//           <Typography.Text>Last Name</Typography.Text>
//           <Input placeholder="Scape" />
//         </div>
//         <div>
//           <Typography.Text>
//             Email Address
//             <Link href="">+ Add Another</Link>
//           </Typography.Text>
//           <Input placeholder="Jimmy.scape@ixo.com" />
//         </div>
//         <div>
//           <Typography.Text>
//             Phone No.
//             <Link href="">+ Add Another</Link>
//           </Typography.Text>
//           <Input placeholder="(394) 928 2294" />
//         </div>
//         <div className="col-span-2">
//           <Typography.Text>Role</Typography.Text>

//           <Select
//             defaultValue="lucy"
//             onChange={handleChange}
//             style={{ width: "100%" }}
//             options={[
//               { value: "jack", label: "Senior Manager" },
//               { value: "lucy", label: "Senior Team Manager" },
//               { value: "Yiminghe", label: "Manager" },
//             ]}
//           />
//         </div>
//         <h3 className="col-span-2">
//           <i className="icon-lock-1"></i> Security
//         </h3>
//         <div className="col-span-2">
//           <Typography.Text>Current Password</Typography.Text>
//           <Input type="password" placeholder="Password" />
//         </div>
//         <div>
//           <Typography.Text>New Password</Typography.Text>
//           <Input type="password" placeholder="Password" />
//         </div>
//         <div>
//           <Typography.Text>Confirm New Password</Typography.Text>
//           <Input type="password" placeholder="Password" />
//         </div>
//       </Flex>
//       <Typography.Paragraph>
//         Password must be 8-60 characters and include at least two of the
//         following: uppercase, lowercase, number, or symbol.
//       </Typography.Paragraph>
//       <Flex className="flex justify-center  gap-2">
//         <Button size="large">Cancel</Button>
//         <Button type="primary" size="large">Save Changes</Button>
//       </Flex>
//     </Flex>
//   </Layout>
// );

const MyTeam = () => (
  <div className="My Team">
    <h3>team</h3>
  </div>
);

const SystemSettings = () => (
  <div className="system-setting">
    <h3>
      <i className="icon-notification-bing"></i>Notification
    </h3>
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="flex items-center text-lg font-medium">
          <i className="icon-sms flex text-xl mr-1"></i>Send me email
          notification when
        </h5>
        <span>Jimmy.scape@ixo.com</span>
      </div>
      <ul>
        <li className="flex items-center border-b py-4 justify-between">
          <h4 className="flex items-center">
            New Players joins the invitation
          </h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li className="flex items-center border-b py-4 justify-between">
          <h4 className="flex items-center">Player leaves the platform</h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li className="flex items-center border-b py-4 justify-between">
          <h4 className="flex items-center">New team created</h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li className="flex items-center border-b py-4 justify-between">
          <h4 className="flex items-center">Player rating is improved</h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li className="flex items-center mb-3 py-4 justify-between">
          <h4 className="flex items-center">
            Player is de-activated in the system
          </h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
      </ul>
      <div className="flex items-center justify-between mb-5">
        <h5 className="flex items-center text-lg font-medium">
          <i className="icon-keyboard-open flex text-xl mr-1"></i>Desktop push
          notification
        </h5>
      </div>
      <ul>
        <li className="flex items-center border-b py-4 justify-between">
          <h4 className="flex items-center">
            New Players joins the invitation
          </h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li className="flex items-center border-b py-4 justify-between">
          <h4 className="flex items-center">Player leaves the platform</h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
        <li className="flex items-center mb-3 py-4 justify-between">
          <h4 className="flex items-center">New team created</h4>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="" id="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-700 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </li>
      </ul>
    </div>
    <h3>
      <i className="icon-star"></i>Theme Settings
    </h3>
    <div className="grid grid-cols-3 gap-5">
      <div>
        <Image src={"/defualt.svg"} alt={""} height={126} width={157} />
        <div className="flex text-lg justify-center items-center ms">
          <input className="h-5 w-5" type="radio" name="defualt" id="" />
          <label htmlFor="defualt">Defualt</label>
        </div>
      </div>
      <div>
        <Image src={"/dark.svg"} alt={""} height={126} width={157} />
        <div className="flex text-lg justify-center items-center ms">
          <input className="h-5 w-5" type="radio" name="dark" id="" />
          <label htmlFor="dark">Dark</label>
        </div>
      </div>
      <div>
        <Image src={"/light.svg"} alt={""} height={126} width={157} />
        <div className="flex text-lg justify-center items-center ms">
          <input className="h-5 w-5" type="radio" name="light" id="" />
          <label htmlFor="light">Light</label>
        </div>
      </div>
    </div>
  </div>
);

const tabItems: TabsProps["items"] = [
  {
    key: "1",
    label: "My Profile",
    children: <PlayerProfile />,
    icon: <i className="icon-user-octagon" />,
  },
  {
    key: "2",
    label: "My Team",
    children: <MyTeam />,
    icon: <i className="icon-profile-2user" />,
  },
  {
    key: "3",
    label: "System Settings",
    children: <SystemSettings />,
    icon: <i className="icon-setting-2" />,
  },
  {
    key: "4",
    label: "Referral Program",
    children: <MyTeam />,
    icon: <i className="icon-money-3" />,
  },
];

export default function Setting() {
  return (
    <div className="main-container">
      <div className="card c-height">
      <Typography.Title level={2} className="setting-heading">System Settings</Typography.Title>
        <Tabs
          defaultActiveKey="1"
          items={tabItems}
          onChange={onChange}
          className="setting-tabs"
        />
      </div>
    </div>
  );
}
