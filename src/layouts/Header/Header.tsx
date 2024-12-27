import { FC } from "react";
import { Layout } from "antd";

import logo from '../../assets/logo.svg';

export const Header: FC = () => {
  return (
    <Layout.Header className="header">
      <img src={logo} className="logo" alt="JSON logo" />
      <h1 style={{ marginLeft: '32px', color: 'white' }}>JSON validator</h1>
    </Layout.Header>
  );
}
