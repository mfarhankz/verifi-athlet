"use client";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from 'next/link'


type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <i className="icon-cup"></i>,
    label: <Link href="/mens-soccer-portal">Men’s Soccer Portal</Link>,
  },
  {
    key: "2",
    icon: <i className="icon-user-search"/>,
    label: <Link href="/pre-portal-search">Pre-Portal Search</Link>,
  },
  {
    key: "3",
    icon: <i className="icon-presention-chart" />,
    label: <Link href="/recruiting-board">Recruiting Board</Link>,
  },
  {
    key: "4",
    icon: <i className="icon-ranking-1" />,
    label: <Link href="/athlete-compare">Athlete Compare</Link>,
  },
];

export default function Sidebar() {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      className="sidebar-menu"
    />
  );
}
