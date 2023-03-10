import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Button, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React, { useState } from "react";
import ApiLogin from '../redux/Service/ApiLogin'
import {useRouter} from 'next/router'

const Login: NextPage = () => {
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]:any = useState([]);

  const Submit = async (e:any) => {
    e.preventDefault(); 
      const result = await ApiLogin.login(username, password);
    //   Successful login, redirect to dashboard
    if (username === ""){
        setError("Username Belum Di input")
    }
    else if (password === ""){
        setError("Password Belum Di input")
    }
    else{
    if (result !== 'Password salah') {
    if (result.message === 'Anda Berhasil Login') {
        // localStorage.setItem('token',result.token)
        router.push('/regions')
      } else {
        setError(result);
      }
    }else {
        setError(result)
    }
  }
}
    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="w-full h-screen ">
                <div className="flex justify-center ">
                    <div className="rounded-2xl mt-40 bg-gray-200 drop-shadow-xl flex w-1/2 overflow-hidden">
                        <div className="w-1/2">
                            <div className="flex items-center justify-center py-2 px-5">
                                <Image src="/assets/logo/codex.png" width={200} height={200} alt="Logo"/>
                            </div>
                            <div className="flex items-center justify-center py-2 px-5">
                                    <span className="font-bold">{"LOGIN"}</span>
                            </div>
                            <div className="py-5 px-5 ">
                                <form onSubmit={Submit}>
                                    <div >
                                    <Input value={username} 
                                            onChange={(e) => setUsername(e.target.value)}
                                            size={"large"} placeholder="Username" suffix={<UserOutlined />} className="mb-4 h-12"
                                            style={{borderRadius: '10px'}}/>
                                    <Input.Password value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    size={"large"} placeholder="Password" className="h-12"
                                                    style={{borderRadius: '10px'}}/>
                                </div>
                                  {error && <p>{error}</p>}
                                <div className="mt-5 flex items-center flex-col" >
                                    <span className="mb-2 text-blue-500 italic underline hover:cursor-pointer">
                                        Forgot your password?
                                    </span>
                                    <Button size={"large"} shape={"round"} type={"primary"} className="w-1/2" onClick={Submit}>Login</Button>
                                    <div className="mt-5 flex justify-center">
                                        <span>or</span>
                                    </div>
                                    <div className="mt-5 flex justify-center w-full">
                                        <Button size={"large"} shape={"round"} type={"dashed"} className="w-1/2">Register</Button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-1/2 h-full border-l-2 bg-cover bg-blue-600 p-2">
                            <div className="bg-[url('/assets/bg/login.svg')] w-full h-full rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
