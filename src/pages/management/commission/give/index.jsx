import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const Give = () => {
    const [name, setName] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '成功' },
        { value: '2', label: '失败' },
    ];
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 80,
        }, {
            title: '邀请时间',
            dataIndex: 'date',
            width: 140,
        }, {
            title: '邀请人',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '被邀请人',
            dataIndex: 'assistantName',
        }, {
            title: '邀请结果',
            dataIndex: 'payResult',
        }, {
            title: '获得灵感值',
            dataIndex: 'balance',
        }
    ];
    const pagination = useMemo(
        () => ({
            pageSize: 6,
        }),
        []
    );
    const searchOpe = () => {
        console.log('search')
    }
    const resertOpe = () => {
        console.log('resert')
    }
    const setTime = (e) => {
        let time = timestampConversion(e);
        console.log(time)
    }
    const setValue = (e) => {
        console.log(e)
    }
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="邀请时间" />
                    <Input prefix="邀请人" placeholder="请输入邀请人" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="费用情况" defaultValue={'0'}></Select>
                </div>
                <div className='' style={{display:'flex',justifyContent: 'end'}}>
                    <Button theme='solid' type='primary' style={{ marginRight: 8 }} onClick={searchOpe}>
                        <IconSearch />
                        搜索
                    </Button>
                    <Button theme='solid' type='tertiary' onClick={resertOpe}>
                        <IconRefresh />
                        重置
                    </Button>
                </div>
            </Card>
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default Give;