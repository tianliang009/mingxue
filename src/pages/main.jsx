import AppHeader from "../components/AppHeader";
import Navbar from "../components/Navbar";
import { Layout } from '@douyinfe/semi-ui';
// import AppContent from "../components/AppContent";
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Main = () => {
  const { Header, Sider, Content } = Layout;
  
  return(
        <Layout>
            {/* <Header>
                <AppHeader />
            </Header> */}

            <Layout>
                <Sider>
                    <Navbar />
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default Main;