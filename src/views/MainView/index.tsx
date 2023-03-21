import { Button, Layout, Space, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

export const MainView = () => {
  return (
    <Space
      direction='vertical'
      style={{ width: '100%', height: '100%' }}
      size={[0, 48]}
    >
      <Header style={{ display: 'flex' }}>
        <Typography.Title style={{ color: '#fff' }}>gnNews</Typography.Title>
        <UnorderedListOutlined />
        <AppstoreOutlined />
        <Button>Open pop-up</Button>
      </Header>

      <Layout>
        <Sider>
          <h1>Menu</h1>
        </Sider>

        <Content>
          <h1>Content</h1>
        </Content>
      </Layout>

      <Footer />
    </Space>
  );
};
