import React from "react";
import { Button, Dropdown, Flex } from "antd";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

export default function Filters() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];

  const dropdownContent = () => (
    <div className="filter-screen">
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        expandIcon={({ isActive }) =>
          isActive ? (
            <i className="icon-filter-1"></i>
          ) : (
            <i className="icon-arrow-down-1"></i>
          )
        }
        expandIconPosition="end"
      />
    </div>
  );
  return (
    <Flex>
      <Dropdown dropdownRender={dropdownContent} trigger={["click"]}>
        <Button className="select-dropdown">
          <i className="icon-filter-1"></i> Filters{" "}
          <i className="icon-arrow-down-1"></i>
        </Button>
      </Dropdown>
    </Flex>
  );
}
