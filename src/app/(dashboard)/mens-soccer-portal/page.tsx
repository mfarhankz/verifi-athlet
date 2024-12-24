"use client";

import React, { useState } from "react";
import {
  Flex,
  Table,
  Select,
  Typography,
  Space,
  Modal,
  Input,
  Button,
  Divider,
  Mentions,
} from "antd";
import type { TableProps } from "antd";
import type { TableColumnsType } from "antd";
import Image from "next/image";
import Link from "next/link";

interface DataType {
  key: string;
  name: string;
  image: string;
  imageLarge: string;
  unread: number;
  rating: number;
  avg: string;
  school: string;
  schoolIcon: string;
  academy: string;
  academyIcon: string;
  date: string;
  evaluation: string;
  div: string;
  yr: string;
  $: string;
  ht: string;
  high_school: string;
  st: string;
  wt: string;
  s: string;
  h: string;
  direction: string;
}
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    image: "/player1.png",
    imageLarge: "/plyer-b.png",
    rating: 5.0,
    unread: 2,
    avg: "58.9",
    school: "Kansas City School",
    schoolIcon: "/b.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/a.svg",
    date: "07/05/2016",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "2",
    name: "Abigail Wright",
    image: "/player2.png",
    imageLarge: "/plyer-b.png",
    rating: 1.5,
    unread: 0,
    avg: "39.9",
    school: "Stanford University",
    schoolIcon: "/b.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/kg.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "3",
    name: "Michael Johnson",
    image: "/player3.png",
    imageLarge: "/plyer-b.png",
    rating: 4.2,
    unread: 0,
    avg: "99.7",
    school: "University of Melbourne",
    schoolIcon: "/cap.svg",
    academy: "",
    academyIcon: "/kg.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "4",
    name: "Michael Johnson",
    image: "/player4.png",
    imageLarge: "/plyer-b.png",
    rating: 3,
    unread: 0,
    avg: "88.3",
    school: "University of Melbourne",
    schoolIcon: "/eg.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/a.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "5",
    name: "John Brown",
    image: "/player1.png",
    imageLarge: "/plyer-b.png",
    rating: 5.0,
    unread: 2,
    avg: "58.9",
    school: "Kansas City School",
    schoolIcon: "/b.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/a.svg",
    date: "07/05/2016",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "6",
    name: "Abigail Wright",
    image: "/player2.png",
    imageLarge: "/plyer-b.png",
    rating: 1.5,
    unread: 0,
    avg: "39.9",
    school: "Stanford University",
    schoolIcon: "/b.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/kg.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "7",
    name: "Michael Johnson",
    image: "/player3.png",
    imageLarge: "/plyer-b.png",
    rating: 4.2,
    unread: 0,
    avg: "99.7",
    school: "University of Melbourne",
    schoolIcon: "/cap.svg",
    academy: "",
    academyIcon: "/kg.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "8",
    name: "Michael Johnson",
    image: "/player4.png",
    imageLarge: "/plyer-b.png",
    rating: 3,
    unread: 0,
    avg: "88.3",
    school: "University of Melbourne",
    schoolIcon: "/eg.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/a.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "9",
    name: "John Brown",
    image: "/player1.png",
    imageLarge: "/plyer-b.png",
    rating: 5.0,
    unread: 2,
    avg: "58.9",
    school: "Kansas City School",
    schoolIcon: "/b.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/a.svg",
    date: "07/05/2016",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "10",
    name: "Abigail Wright",
    image: "/player2.png",
    imageLarge: "/plyer-b.png",
    rating: 1.5,
    unread: 0,
    avg: "39.9",
    school: "Stanford University",
    schoolIcon: "/b.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/kg.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "11",
    name: "Michael Johnson",
    image: "/player3.png",
    imageLarge: "/plyer-b.png",
    rating: 4.2,
    unread: 0,
    avg: "99.7",
    school: "University of Melbourne",
    schoolIcon: "/cap.svg",
    academy: "",
    academyIcon: "/kg.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
  {
    key: "12",
    name: "Michael Johnson",
    image: "/player4.png",
    imageLarge: "/plyer-b.png",
    rating: 3,
    unread: 0,
    avg: "88.3",
    school: "University of Melbourne",
    schoolIcon: "/eg.svg",
    academy: "Andover Philips Academy",
    academyIcon: "/a.svg",
    date: "12/06/2020",
    evaluation: "Some Info",
    div: "D2",
    yr: "Jr",
    $: "Yes",
    wt: "215",
    ht: "1374",
    high_school: "Sidwell Friends School",
    st: "NV",
    s: "540",
    h: "Y",
    direction: "Flat",
  },
];

const boxStyle: React.CSSProperties = {
  width: "100%",
  padding: "20px 0 20px 20px",
  flexDirection: "column",
};
const headerBox: React.CSSProperties = {
  padding: " 0 20px 0 0",
  marginBottom: "10px",
};

const { Title } = Typography;

export default function MensSoccerPortal() {
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");

  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [selectedPlyer, setSelectedPlyer] = useState<DataType | null>(null);
  const [value, setValue] = useState("");

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
      fixed: "left",
      onCell: (record) => ({
        onClick: () => handlePlyarProfile(record),
      }),
      render: (_, record) => (
        <div className="profile-list">
          <div className="pro-image">
            <Image
              src={record.image as string}
              alt={record.name}
              width={90}
              height={90}
            />
            <span>{record.avg}</span>
          </div>
          <div className="pro-detail">
            <h6 className="flex">
              {record.name}
              <span className="flex ml-3">
                <Image
                  src={
                    record.rating < 2
                      ? "/start-red.svg"
                      : record.rating > 4
                      ? "/start.svg"
                      : "/start-avg.svg"
                  }
                  alt={record.name}
                  width={18}
                  height={18}
                  className="mr-1"
                />
                {record.rating.toFixed(1)}
              </span>
            </h6>
            <div className="school">
              <Image
                src={record.schoolIcon as string}
                alt={record.school}
                width={20}
                height={20}
              />
              {record.school}
            </div>
            {record.academy && (
              <div className="academy">
                <Image
                  src={record.academyIcon as string}
                  alt={record.academy}
                  width={20}
                  height={20}
                />
                {record.academy}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: true,
    },
    {
      title: "Evaluation",
      dataIndex: "evaluation",
      key: "evaluation",
    },
    {
      title: "Div",
      dataIndex: "div",
      key: "div",
      width: 70,
      sorter: true,
    },
    {
      title: "Yr",
      dataIndex: "yr",
      key: "yr",
      width: 70,
      sorter: true,
    },
    {
      title: "$",
      dataIndex: "$",
      key: "$",
      width: 60,
    },
    {
      title: "Ht",
      dataIndex: "ht",
      key: "ht",
      width: 70,
      sorter: true,
    },
    {
      title: "High School",
      dataIndex: "high_school",
      key: "high_school",
      sorter: true,
    },
    {
      title: "St",
      dataIndex: "st",
      key: "st",
      width: 70,
    },
    {
      title: "Wt",
      dataIndex: "wt",
      key: "wt",
      width: 70,
      sorter: true,
    },
    {
      title: "S",
      dataIndex: "s",
      key: "s",
      width: 60,
      sorter: true,
    },
    {
      title: "H",
      dataIndex: "h",
      key: "h",
      width: 60,
      sorter: true,
    },
    {
      title: "Direction",
      dataIndex: "direction",
      key: "direction",
      width: 100,
    },
    {
      title: "Other Detail",
      dataIndex: "high_school",
      key: "high_school",
      sorter: true,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 60,
      render: (record) => (
        <div className="flex flex-col items-center justify-center action-icons">
          <Link href="" className="icon-menu-1"></Link>
          <Link
            href=""
            className="icon-message"
            onClick={(e) => {
              e.preventDefault();
              handleChat(record);
            }}
          >
            {record.unread > 0 && <span>{record.unread}</span>}
          </Link>
        </div>
      ),
    },
  ];

  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleCancel = () => {
    setIsProfileVisible(false);
    setIsChatVisible(false);
  };

  const handlePlyarProfile = (record: DataType) => {
    setSelectedPlyer(record);
    setIsProfileVisible(true);
  };

  const handleChat = (record: DataType) => {
    setSelectedPlyer(record);
    setIsChatVisible(true);
  };

  return (
    <Flex style={boxStyle}>
      <Flex style={headerBox} justify="space-between" align="center">
        <Title level={2} className="page-heading">Available Players</Title>

        <Space>
          <div className="selectbox-ui">
            <i className="icon-filter-1"></i>
            <Select
              suffixIcon={<i className="icon-arrow-down-1"></i>}
              defaultValue="Filters"
              style={{ width: 134 }}
              onChange={handleChange}
              options={[
                { value: "filters", label: "Filters" },
                { value: "jack", label: "Type" },
                { value: "lucy", label: "Age" },
                { value: "Yiminghe", label: "Height" },
              ]}
            />
          </div>
          <div className="selectbox-ui">
            <i className="icon-setting-4"></i>
            <Select
              suffixIcon={<i className="icon-arrow-down-1"></i>}
              defaultValue="Table View"
              style={{ width: 134 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Table View" },
                { value: "lucy", label: "Gride View" },
                { value: "Yiminghe", label: "Celander View" },
              ]}
            />
          </div>
        </Space>
      </Flex>
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        style={{ width: "100%" }}
        scroll={{ x: "max-content", y: 785 }}
      />
      <Modal
        open={isProfileVisible}
        onCancel={handleCancel}
        className="profile-modal"
        width={442}
        footer={null}
      >
        {selectedPlyer && (
          <Flex vertical>
            <Image
              src={selectedPlyer.imageLarge}
              alt={selectedPlyer.name}
              width={412}
              height={330}
            />

            <Flex justify="space-between" className="main-heading">
              <Typography.Paragraph>Bryce Underwood</Typography.Paragraph>
              <Flex className="rating">
                <Image
                  src="/start.svg"
                  alt="start"
                  width={25}
                  height={25}
                  className="mr-1"
                />
                5.6
              </Flex>
            </Flex>

            <Typography.Paragraph className="flex">
              <span>
                <Image
                  src="/b.svg"
                  alt={selectedPlyer.name}
                  width={18}
                  height={18}
                />
              </span>
              Duke University
            </Typography.Paragraph>

            <Typography.Paragraph>Belleville, ML</Typography.Paragraph>

            <Flex className="player-cost" justify="space-between">
              <Typography.Paragraph className="cut-ui">
                <small className="flex">
                  <Image
                    src="/player-icon.svg"
                    alt={selectedPlyer.name}
                    width={18}
                    height={18}
                    className="mr-1"
                  />
                  PLAYER
                </small>
                RANK LEVEL
                <span>99.7</span>
              </Typography.Paragraph>
              <Typography.Paragraph className="price">
                <small>NILL Value</small>
                <span>$1.3M</span>
              </Typography.Paragraph>
            </Flex>

            <Flex className="list">
              <Typography.Paragraph>
                <small>Pos</small>
                QB
              </Typography.Paragraph>
              <Typography.Paragraph>
                <small>Ht</small>
                6.4”
              </Typography.Paragraph>
              <Typography.Paragraph>
                <small>Wt</small>
                215lb
              </Typography.Paragraph>
              <Typography.Paragraph>
                <small>Commit Status</small>
                LSU
              </Typography.Paragraph>
            </Flex>
          </Flex>
        )}
      </Modal>

      <Modal
        title={
          <div>
            <i className="icon-message-text-1"></i>
            Comment
          </div>
        }
        width={370}
        footer={null}
        open={isChatVisible}
        onCancel={handleCancel}
        className="comment-modal"
      >
        <Flex vertical>
          <Input
            placeholder="Write new..."
            prefix={<Button icon={<i className="icon-send-1"></i>}></Button>}
          ></Input>
          <Typography.Paragraph>
            Adding a subtle animation here could help highlight important
            actions and make it more engaging.
            <a href="">Edited</a>
          </Typography.Paragraph>
          <Flex justify="space-between" className="messinger-name">
            <Typography.Paragraph>
              Jason Masum 04/19/2024 4:59 PM
            </Typography.Paragraph>
            <Space>
              <i className="icon-edit-2"></i>
              <i className="icon-trash"></i>
            </Space>
          </Flex>
          <Divider />

          <Mentions value={value} onChange={setValue} rows={3} />
          <Flex justify="flex-end">
            <Button type="link" className="cancel">
              Cancel
            </Button>
            <Button type="link">Save</Button>
          </Flex>
        </Flex>
      </Modal>
    </Flex>
  );
}