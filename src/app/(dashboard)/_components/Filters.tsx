import React from "react";
import { Button, Dropdown, Flex, Input, Radio, Typography } from "antd";
import type { CollapseProps, RadioChangeEvent } from "antd";
import { Collapse } from "antd";

export default function Filters() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <h6>Type</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">Active</Radio.Button>
            <Radio.Button value="b">No-Active</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
    {
      key: "2",
      label: <h6>Age</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">15-20</Radio.Button>
            <Radio.Button value="b">25-35</Radio.Button>
            <Radio.Button value="c">25-35</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
    {
      key: "3",
      label: <h6>Size</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">Test</Radio.Button>
            <Radio.Button value="b">Test</Radio.Button>
            <Radio.Button value="c">Test</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
    {
      key: "4",
      label: <h6>Features</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">Test</Radio.Button>
            <Radio.Button value="b">Test</Radio.Button>
            <Radio.Button value="c">Test</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
    {
      key: "5",
      label: <h6>School</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">Test</Radio.Button>
            <Radio.Button value="b">Test</Radio.Button>
            <Radio.Button value="c">Test</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
    {
      key: "6",
      label: <h6>Rating</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">Test</Radio.Button>
            <Radio.Button value="b">Test</Radio.Button>
            <Radio.Button value="c">Test</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
    {
      key: "7",
      label: <h6>Date</h6>,
      children: (
        <Flex vertical className="mb-3">
          <Radio.Group
            onChange={onChange}
            defaultValue="a"
            className="rating-type"
          >
            <Radio.Button value="a">Test</Radio.Button>
            <Radio.Button value="b">Test</Radio.Button>
            <Radio.Button value="c">Test</Radio.Button>
          </Radio.Group>
        </Flex>
      ),
    },
  ];

  const dropdownContent = () => (
    <Flex vertical className="filter-screen p-4">
      <Flex justify="space-between">
        <h4>Saved</h4>
        <i className="icon-arrow-down-1"></i>
      </Flex>
      <Flex className="session">
        <p>My-Search-Session 2025</p>
        <i className="icon-arrow-down-1"></i>
      </Flex>
      <Flex className="session mb-3">
        <p>Filters 10/20/2024</p>
        <i className="icon-arrow-down-1"></i>
      </Flex>
      <h4>All Filters</h4>
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
      <Flex vertical className="filter-input">
          <h6 className="mb-1">Save or create an alert</h6>
          <Input type="text" />
      </Flex>
      <Flex className="flex justify-center gap-2">
        <Button size="large">Reset</Button>
        <Button type="primary" size="large">
          Apply Filters
        </Button>
      </Flex>
    </Flex>
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
