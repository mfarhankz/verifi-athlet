import React from "react";
import { Button, Dropdown, Flex, Input, Typography } from "antd";
import Link from "next/link";

export default function TableView() {
      const dropdownContent = () => (
        <div className="compare-player">
          <div className="input-field">
            <Input type="text" placeholder="Search Player..." />
            <i className="icon-search-normal-1 text-xl flex"></i>
          </div>
          <Flex justify="space-between" className="px-3 py-2">
            <Typography.Text>2 Selected (max 3)</Typography.Text>
            <Link href="/">Select all</Link>
          </Flex>
          <ul>
            <li>test</li>
          </ul>
        </div>
      );
  return (
    <Flex>
      <Dropdown dropdownRender={dropdownContent} trigger={["click"]}>
            <Button className="select-dropdown">
              <i className="icon-setting-4"></i> Table View <i className="icon-arrow-down-1"></i>
            </Button>
          </Dropdown>
    </Flex>
  );
}