import { Nav, Avatar, Dropdown, Button } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';
import { IconTreeSelect, IconBreadcrumb, IconBadge, IconSteps } from '@douyinfe/semi-icons-lab';
import { useEffect } from 'react';

const AppHeader = () => {
    const navigate = useNavigate();
    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    };
    useEffect(() => {
        const body = document.body;
        body.setAttribute('theme-mode', 'dark');
    },[])
    return (
        <Nav
            mode={'horizontal'}
            items={[]}
            onSelect={key => console.log(key)}
            header={{
                logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
                text: 'Semi 运营后台'
            }}
            footer={
            <>
                <Button
                    onClick={switchMode}
                    style={{marginRight: '24px'}}
                >🌗开关</Button>
                <Dropdown
                    position="bottomRight"
                    render={
                        <Dropdown.Menu>
                            <Dropdown.Item>详情</Dropdown.Item>
                            <Dropdown.Item onClick={() => {navigate('/')}}>退出</Dropdown.Item>
                        </Dropdown.Menu>
                    }
                >
                    <Avatar size="small" color='light-blue' style={{ margin: 4 }}>BD</Avatar>
                    <span>Bytedancer</span>
                </Dropdown>
            </>
            }
        />
    );
}
export default AppHeader