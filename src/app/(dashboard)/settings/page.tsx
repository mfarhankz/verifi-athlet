"use client";

import React, { useState } from "react";
import { Button, Flex, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import PlayerProfile from "@/app/(dashboard)/settings/_components/PlayerProfile";
import SystemSettings from "@/app/(dashboard)/settings/_components/SystemSettings";
import ReferralProgram from "@/app/(dashboard)/settings/_components/ReferralProgram";
import MyTeam from "@/app/(dashboard)/settings/_components/MyTeam";

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
    setActiveTab(key);
  };

  const headingText: { [key: string]: string } = {
    "1": "Settings",
    "2": "Team Settings",
    "3": "System Settings",
    "4": "Referral Program",
  };

  return (
    <div className="main-container">
      <div className={`${activeTab !== "2" ? "card" : "setting-head"} c-height`}>
        <Typography.Title level={4} className="setting-heading">
          {headingText[activeTab] || "Default Settings"}
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
