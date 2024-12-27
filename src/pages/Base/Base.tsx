import { FC } from "react";
import { Layout } from "antd";

import { Header, Main } from "../../layouts";

export const BasePage: FC = () => {
  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}
