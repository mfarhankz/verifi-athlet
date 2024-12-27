"use client";

import React from "react";
import { Button, Flex, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import PlayerProfile from "@/app/(dashboard)/settings/_components/PlayerProfile";
import SystemSettings from "@/app/(dashboard)/settings/_components/_SystemSettings";

const onChange = (key: string) => {
  console.log("Active tab key:", key);
};

const MyTeam = () => (
  <div className="My Team">
    <h3>team</h3>
  </div>
);

const ReferralProgram = () => (
  <div className="referral-program">
    <Typography.Title level={3}>
      Invite Friends
    </Typography.Title>
    <Typography.Title level={4}>
      Get Rewards upto $500
    </Typography.Title>
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
    children: <ReferralProgram />,
    icon: <i className="icon-money-3" />,
  },
];

export default function Setting() {
  return (
    <div className="main-container">
      <div className="card c-height">
        <Typography.Title level={2} className="setting-heading">
          System Settings
        </Typography.Title>
        <Tabs
          defaultActiveKey="1"
          items={tabItems}
          onChange={onChange}
          className="setting-tabs"
        />
        <Flex className="flex justify-center gap-2">
          <Button size="large">Cancel</Button>
          <Button type="primary" size="large">
            Save Changes
          </Button>
        </Flex>
      </div>
    </div>
  );
}
