import React, { FC, useEffect } from 'react'
import { Button, Form, Input, message, Typography, Space, Checkbox } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'
import { LOGIN_PATHNAME, REGISTER_PATHNAME } from '../../router'
import { useNavigate, Link } from 'react-router-dom'

const { Title } = Typography

const USERNAME_KEY ='USERNAME'
const PASSWORD_KEY = 'PASSWORD'

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

function removeUser() {
  localStorage.removeItem(USERNAME_KEY),
  localStorage.removeItem(PASSWORD_KEY)
}

function getUser() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}

const Login: FC = () => {

  const navigate = useNavigate()

  const [form] = Form.useForm()

  useEffect(() => {
    const { username, password } = getUser()
    form.setFieldsValue({
      username,
      password,
      remember: true
    })
  },[])

  const onFinish = (values: any) => {
    console.log(values);
    const { username, password, remember } = values

    if (values.remember) {
      rememberUser(username, password)
    } else {
      removeUser()
  }}

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2} onClick={() => navigate(LOGIN_PATHNAME)}>
            用户登录
          </Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span:6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{remember: true }}
          onFinish={onFinish}
        >
        </Form>
        <Form.Item 
          label="用户名"
          name='username'
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="密码"
          name='password'
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }} name='remember' valuePropName='checked'>
          <Checkbox>记住我</Checkbox>
          <Space>
            <Button type='primary' htmlType='submit'>登录</Button>
            <Link to={REGISTER_PATHNAME }>没有账号？去注册</Link>
          </Space>
        </Form.Item>
      </div>
    </div>
  )
}

export default Login