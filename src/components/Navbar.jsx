import React, { useMemo, useState, useEffect } from 'react';
import { Nav, Avatar } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import routerJson from '../router/router';
import { Sortable } from '@douyinfe/semi-ui/lib/es/_sortable';
import level from '../router/level';

const Navbar = (props) => {
    const [navHeight, setNavHei ] = useState(0)
    let pathName = window.location.pathname 
    if(pathName[0] === '/' && level === 1){
        pathName = pathName.slice(1);
    }
    const [selectedKeys, setSelectedKeys] = useState([pathName||'']);
    const navigate = useNavigate();
    const onSelect = data => {
        setSelectedKeys([...data.selectedKeys]);
        props.onParentMethod(data.itemKey);
        navigate(data.itemKey)
    };
    const onOpenChange = data => {
        console.log('trigger onOpenChange: ', data);
        setOpenKeys([...data.openKeys]);
    };
    const onCollapseChange = isCollapsed => {
        setIsCollapsed(isCollapsed);
    };
    let json = []
    for(let i=0; i<routerJson.length; i++){
        let obj = new Object();
        obj.itemKey = '/' + routerJson[i].path;
        obj.text = routerJson[i].text;
        obj.icon = routerJson[i].icon;
        if(routerJson[i].items != undefined) {
            obj.items = routerJson[i].items
        }
        json.push(obj)
    }
    const items = useMemo(() => json, []);

    const goRoute = (e) => {
        navigate(e)
    }

    useEffect(() => {
        const body = document.body;
        setNavHei(window.innerHeight)
    }, []);


    return (
        <Nav
            // isCollapsed={isCollapsed}
            // openKeys={openKeys}
            selectedKeys={selectedKeys}
            bodyStyle={{ height: '100%' }}
            items={items}
            // header={
            //     <>
            //         <div className='user_info'>
            //             <Avatar size="small" color='light-blue' style={{ margin: 4 }}>田亮</Avatar>
            //             <div className='avatar_font'>
            //                 <p>166****4141</p>
            //                 <p>企业用户</p>
            //             </div>
            //         </div>
            //         <p>灵感值: 18304</p>
            //         <p>会员有效期：2025.11.22</p>
            //     </>
            // }
            // footer={{
            //     collapseButton: true
            // }}
            // onOpenChange={onOpenChange}
            onCollapseChange={onCollapseChange}
            onSelect={onSelect}
        />
    );
}
export default Navbar;