import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Input, Button, Toast } from '@douyinfe/semi-ui';
import { loginSelect, addLogin } from '../utils/userHelper';
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
            navigate('/personalUser')
        } else {
            Toast.error('登录失败,请联系管理员')
        }
    }

    const signInOpe = () => {
        if(code === 'WL9HT') {
            let temp = {
                account: signInAccount,
                password: signInPassword,
                id: Date.now()
            }
            addLogin(temp).then((res) => {
                console.log(res)
                if(res) {
                    loginChange()
                }
            })
            // await addLogin(temp)
        } else {
            alert('邀请码错误,请联系管理员')
        }
    }

    const loginChange = () => {
        setAccount('');
        setPassword('');
        setSignInAccount('');
        setSignInPassword('');
        setCode('');
        setSignBol(!signBol)
    }

    return (
        <div className='login'>
            <div className='login_con'>
                <img src="/src/assets/logo.png" className='login_logo' alt="" />
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
                        <Button onClick={loginChange} theme='solid' type='tertiary' style={{ marginRight: 8 }} >已有账号,返回登陆</Button>
                    </div>
                </>
                }
            </div>
            <div className='login_box'>
            </div>
        </div>
    );
}
export default Login;
