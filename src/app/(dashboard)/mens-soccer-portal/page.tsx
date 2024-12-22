"use client";

import React, { useState } from "react";
import { Flex, Table } from "antd";
import type { TableProps } from "antd";
import type { TableColumnsType } from "antd";
import Image from "next/image";
import Link from "next/link";

interface DataType {
  key: string;
  name: string;
  image: string;
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

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
    fixed: "left",
    render: (
      text,
      record: {
        image: string;
        school: string;
        schoolIcon: string;
        academy: string;
        academyIcon: string;
        rating: number;
        avg: string;
        unread: number;
      }
    ) => (
      <div className="profile-list">
        <div className="pro-image">
          <Image
            src={record.image as string}
            alt={text}
            width={90}
            height={90}
          />
          <span>{record.avg}</span>
        </div>
        <div className="pro-detail">
          <h6 className="flex">
            {text}
            <span className="flex ml-3">
              <Image
                src={
                  record.rating < 2
                    ? "/start-red.svg"
                    : record.rating > 4
                    ? "/start.svg"
                    : "/start-avg.svg"
                }
                alt={text}
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
              alt={text}
              width={20}
              height={20}
            />
            {record.school}
          </div>
          {record.academy && 
          <div className="academy">
          <Image
            src={record.academyIcon as string}
            alt={text}
            width={20}
            height={20}
          />
          {record.academy}
        </div>
          }
          
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
    render: (record: { unread: number }) => (
      <div className="flex flex-col items-center justify-center action-icons">
        <Link href="" className="icon-menu-1"></Link>
        <Link href="" className="icon-message">
          {record.unread > 0 && <span>{record.unread}</span>}
        </Link>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    image: "/player1.png",
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

const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const boxStyle: React.CSSProperties = {
  width: "100%",
  padding: "20px 0 20px 20px",
};

export default function MensSoccerPortal() {
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");
  return (
    <Flex wrap style={boxStyle}>
        <h3>Available Players</h3>
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        style={{ width: "100%" }}
        scroll={{ x: "max-content", y: 785 }}
      />
    </Flex>
  );
}
