import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Input, Button } from '@douyinfe/semi-ui';
import { getUsers, getLogin, loginSelect, addLogin } from '../utils/userHelper';
import '../style/login.less';
const Login = () => {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [signBol, setSignBol] = useState(true);
    const [signInAccount, setSignInAccount] = useState();
    const [signInPassword, setSignInPassword] = useState();
    // const [signInPas, setSignInPas] = useState();
    const [code, setCode] = useState();

    const navigate = useNavigate();
    const loginOpe = async() => {
        let temp = {
            account: account,
            password: password
        }
        if(( await loginSelect(temp) ).length > 0 ){
            navigate('/data')
        } else {
            console.log('错误')
        }
    }

    const signInOpe = async() => {
        if(code === 'WL9HT') {
            let temp = {
                account: signInAccount,
                password: signInPassword,
                id: Date.now()
            }
            await addLogin(temp)
        } else {
            alert('邀请码错误,请联系管理员')
        }
    }

    const loginChange = () => {
        setSignBol(!signBol)
    }

    return (
        <div className='login_box'>
            <div className='login_con'>
                <p className='tit'>{signBol ? '登 陆':'注 册'}</p>
                {signBol ? 
                <>
                    <Input placeholder='请输入账号' onChange={(e) => {setAccount(e)}} value={account} />
                    <Input placeholder='请输入密码' onChange={(e) => {setPassword(e)}} value={password} mode="password" />
                    <div>
                        <Button onClick={loginOpe} theme='solid' type='primary' style={{ marginRight: 8 }} >登陆</Button>
                        <Button onClick={loginChange} theme='solid' type='tertiary' style={{ marginRight: 8 }}>注册</Button>
                    </div>
                </> : <>
                    <Input placeholder='请输入账号' onChange={(e) => {setSignInAccount(e)}} value={signInAccount} />
                    <Input placeholder='请输入密码' onChange={(e) => {setSignInPassword(e)}} value={signInPassword} mode="password" />
                    <Input placeholder='请输入邀请码' onChange={(e) => {setCode(e)}} value={code} />
                    {/* <Input placeholder='确认密码' onChange={(e) => {setSignInPas(e)}} mode="password" /> */}
                    <div>
                        <Button onClick={signInOpe} theme='solid' type='primary' style={{ marginRight: 8 }} >注册</Button>
                        <Button onClick={loginChange} theme='solid' type='primary' style={{ marginRight: 8 }} >已有账号,返回登陆</Button>
                    </div>
                </>
                }
            </div>
        </div>
    );
}
export default Login;
