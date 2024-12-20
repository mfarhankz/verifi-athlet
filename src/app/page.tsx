"use client";

import { Button, ConfigProvider, Flex, Layout, Space } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Home() {
  const { styles } = useStyle();

  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <ConfigProvider
          button={{
            className: styles.linearGradientButton,
          }}
        >
          <Space>
            <Button type="primary" size="large" href="/mens-soccer-portal">
              Login / Go to Dashboard
            </Button>
          </Space>
        </ConfigProvider>
      </Layout>
    </Flex>
  );
}
