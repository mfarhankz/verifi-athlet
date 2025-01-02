"use client";

import { Flex, Select, Typography } from "antd";
import Image from "next/image";

export default function AthleteCompare() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="main-container">
      <Flex vertical className="gap-3">
        <Flex className="card items-center justify-between">
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            Compare Athlete
          </Typography.Title>

          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Flex>
        <Flex className="grid grid-cols-12 gap-4">
          <Flex className="col-span-4 card" align="center" vertical>
            <Flex className="user-avg">
              <Image
                src={"/servey-img.png"}
                alt={"logo"}
                height={250}
                width={250}
              />
              <span>85.7</span>
            </Flex>
            <Flex align="center" justify="center" className="name uppercase">
                <Typography.Title level={2} className="mr-3">
                Jason Shaun
                </Typography.Title>
                  <Image className="mr-2" src={"/warning-star.svg"} alt={""} height={22} width={22} />
                  <Typography.Text>4.2</Typography.Text>
            </Flex>
          </Flex>
          <Flex className="col-span-4 card">Athlete Compare</Flex>
          <Flex className="col-span-4 card">Athlete Compare</Flex>
        </Flex>
      </Flex>
    </div>
  );
}
