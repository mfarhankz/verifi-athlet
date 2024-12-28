"use client";

import { Button, Flex, Typography } from "antd";

export default function Survey() {
  return (
    <div className="main-container">
      <Flex vertical className="gap-3">
        <div className="card">
          <Typography.Title level={2} className="setting-heading" style={{marginBottom:0}}>
            Survey
          </Typography.Title>
        </div>
        <div className="card">
            <Flex vertical className="w-[800px] m-auto">
                <Flex vertical className="servey-box">
                    <Flex className="gray">
                        COMPLETE SURVEY FORM
                    </Flex>

                    <Button type="link">Start Servey</Button>
                </Flex>
            </Flex>
        </div>
      </Flex>
    </div>
  );
}
