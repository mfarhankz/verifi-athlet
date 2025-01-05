import React from "react";
import { Button, Dropdown, Flex, Input, MenuProps, Typography } from "antd";

export default function CommentBox() {
  const items: MenuProps["items"] = [
    {
      label: <a href="#">Edit</a>,
      key: "0",
      icon: <i className="icon-edit-2"></i>,
    },
    {
      type: "divider",
    },
    {
      label: <a href="#">Remove</a>,
      key: "1",
      icon: <i className="icon-trash"></i>,
    },
  ];
  return (
    <Flex vertical className="comment-box">
      <Flex className="mb-3 relative">
        <Input placeholder="Write new..." className="w-full m-auto" />
        <i className="icon-send-1 absolute text-lg"></i>
      </Flex>
      <ul className="comments">
        <li>
          <Flex>
            <Typography.Paragraph className="jm mr-3">JM</Typography.Paragraph>
          </Flex>
          <Flex vertical className="w-full">
            <Flex justify="space-between">
              <h5>Jason Masum</h5>
              <Typography.Text className="edit-menu">
                Edited 04/19/2024 4:59 PM
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button className="menu-dropdown">
                    <i className="icon-menu-1"></i>
                  </Button>
                </Dropdown>
              </Typography.Text>
            </Flex>
            <Flex>
              <Typography.Paragraph className="jm-p">
                Adding a subtle animation here could help highlight important
                actions and make it more engaging.
              </Typography.Paragraph>
            </Flex>
          </Flex>
        </li>
        <li>
          <Flex>
            <Typography.Paragraph className="jm mr-3">JM</Typography.Paragraph>
          </Flex>
          <Flex vertical className="w-full">
            <Flex justify="space-between">
              <h5>Jason Masum</h5>
              <Typography.Text className="edit-menu">
                Edited 04/19/2024 4:59 PM
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button className="menu-dropdown">
                    <i className="icon-menu-1"></i>
                  </Button>
                </Dropdown>
              </Typography.Text>
            </Flex>
            <Flex>
              <Typography.Paragraph className="jm-p">
                I am a fan! <br />
                These work better than i thought they would. I have never been
                big into the Kardashian brands so i was hesitant to try, but I
                am glad I did. I take two capsules with breakfast and i dont
                have the urge to snack throughout the day. Also has me eating
                lunch later and eating something small for dinner. I am still on
                my first month but did the subscription for three months for the
                discount. I have got there
              </Typography.Paragraph>
            </Flex>
          </Flex>
        </li>
      </ul>
    </Flex>
  );
}
