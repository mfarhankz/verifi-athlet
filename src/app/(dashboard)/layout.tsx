"use client";

import { Flex, Layout } from "antd";
import Navbar from "@/app/(dashboard)/_components/Navbar";
import Sidebar from "@/app/(dashboard)/_components/Sidebar";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#1C1D4D",
  height: 50,
  paddingInline: 10,
  backgroundColor: "#FFF",
  lineHeight: "50px",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#1C1D4D",
  backgroundColor: "#F2F2F2",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "16px",
  color: "#fff",
  backgroundColor: "#1C1D4D",
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