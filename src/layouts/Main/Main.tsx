import { FC } from "react";
import { Layout } from "antd";
import { Validator } from "../../components";

export const Main: FC = () => {
  return (
    <Layout.Content>
      <Validator />
    </Layout.Content>
  )
}
