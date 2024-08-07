import AppHeader from "../components/AppHeader";
import Navbar from "../components/Navbar";
import { Layout, Typography } from '@douyinfe/semi-ui';
// import AppContent from "../components/AppContent";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import routerJson from "../router/router";
import { useState, useEffect } from "react";

const Main = () => {
  const { Header, Sider, Content, Footer } = Layout;
  const { Title } = Typography;
  const [titFont, setTitFont] = useState();
  const handleParentMethod = (route) => {
    setTitFont(fontJudge(route))
  }
  const fontJudge = (str) => {
    if(str[0] === '/'){
        str = str.slice(1);
    }
    for(let i=0;i<routerJson.length;i++) {
        if(routerJson[i].items != undefined) {
            for(let j=0; j<routerJson[i].items.length; j++) {
                if(routerJson[i].items[j].itemKey === str) {
                    return(routerJson[i].items[j].text)
                }
            }
        } else {
            if(routerJson[i].path === str) {
                return(routerJson[i].text)
            }
        }
    }
  }
  const commonStyle = {
    height: 40,
    lineHeight: '40px',
    fontSize: '14px',
    background: '#fff',
    padding: '0 24px',
    borderTop: '1px solid var(--semi-color-fill-0)'
  };
  useEffect(()=>{setTitFont(fontJudge(window.location.pathname))},[])
  return(
        <Layout>
            {/* <Header>
                <AppHeader />
            </Header> */}

            <Layout>
                <Sider>
                    <Navbar onParentMethod={handleParentMethod} />
                </Sider>
                <Content>
                    <Title heading={2} style={{ margin: "8px 0" }}>{titFont || '详情页'}</Title>
                    <Outlet />
                </Content>
            </Layout>
            <Footer style={commonStyle}>© 2023 吉林省格远市场调研咨询有限公司</Footer>
        </Layout>
    );
};
export default Main;