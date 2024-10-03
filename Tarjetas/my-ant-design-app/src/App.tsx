import { Layout } from 'antd';
import CustomCard from './components/CustomCard';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CustomCard />
      </Content>
    </Layout>
  );
};

export default App;
