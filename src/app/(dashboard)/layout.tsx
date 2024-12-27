"use client";

import { Flex, Layout } from "antd";
import Navbar from "@/app/(dashboard)/_components/Navbar";
import Sidebar from "@/app/(dashboard)/_components/Sidebar";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "var(--primary)",
  height: 50,
  paddingInline: 10,
  backgroundColor: "var(--white-background)",
  lineHeight: "50px",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  color: "var(--foreground)",
  backgroundColor: "var(--background)",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "16px",
  color: "var(--text-white)",
  backgroundColor: "var(--bg-primary)",
};

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Navbar/>
        </Header>
        <Layout>
          <Sider width="209px" style={siderStyle}>
            <Sidebar/>
          </Sider>
          <Content style={contentStyle}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
}