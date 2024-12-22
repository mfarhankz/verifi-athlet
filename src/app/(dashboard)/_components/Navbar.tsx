"use client";

import type { MenuProps } from "antd";
import { Input, Dropdown, Typography, Avatar, Flex } from "antd";
import Link from 'next/link'

const { Paragraph } = Typography;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/profile">Profile</Link>,
  },
  {
    key: "2",
    label: <Link href="/settings">Settings</Link>,
  },
  {
    key: "3",
    label: <Link href="">Logout</Link>,
  },
];

const { Search } = Input;

export default function Navbar() {
  return (
    <Flex align="center" justify="space-between" className="navbar">
      <Typography.Title
        level={1}
        className="brand-title"
        style={{ margin: "0" }}
      >
        <a href="javascript:"></a>
      </Typography.Title>

      <Paragraph style={{ margin: "0" }} className="player-list">
        <i className="icon-menu-1"></i>
        <span>Player List /</span> Bryce Underwood
      </Paragraph>

      <Search
        style={{ width: "300px" }}
        placeholder="Search here..."
        allowClear
      />

      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
        }}
      >
        <Typography.Link>
          <Avatar size={34} src="/user.svg">
            J
          </Avatar>
          Jimmy Scape
          <i className="icon-arrow-down-1"></i>
        </Typography.Link>
      </Dropdown>
    </Flex>
  );
}
