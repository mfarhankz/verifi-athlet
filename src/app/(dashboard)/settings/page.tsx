"use client";

import React, { useState } from "react";
import { Button, Flex, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import PlayerProfile from "@/app/(dashboard)/settings/_components/PlayerProfile";
import SystemSettings from "@/app/(dashboard)/settings/_components/SystemSettings";
import ReferralProgram from "@/app/(dashboard)/settings/_components/ReferralProgram";


const MyTeam = () => (
  <div className="My Team">
    <h3>team</h3>
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
    const [activeTab, setActiveTab] = useState("1");

  const onChange = (key: React.SetStateAction<string>) => {
    setActiveTab(key); // Update the active tab when changed
  };
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
        {activeTab !== "4" && (
        <Flex className="flex justify-center gap-2">
          <Button size="large">Cancel</Button>
          <Button type="primary" size="large">
            Save Changes
          </Button>
        </Flex>
        )}
      </div>
    </div>
  );
}
