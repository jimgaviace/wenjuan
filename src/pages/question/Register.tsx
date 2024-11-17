import React, { FC } from 'react'
import { Button, Form, Input, message, Typography, Space } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../../router'

const { Title } = Typography

const Register: FC = () => {

  const onFinish = (values: any) => {

  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>
            注册新用户
          </Title>
        </Space>
      </div>
      <div>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
          <Form.Item label='用户名' name='username' rules={[{ required: true, message: '请输入用户名' }, { type:'string', min: 3, max:20, message: '用户名长度不能小于3' },{ pattern: /^[a-zA-Z0-9_-]{3,20}$/, message: '用户名格式不正确' }]}>
            <Input />
          </Form.Item>
        </Form>
        
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item 
            label='密码' 
            name='password' 
            rules={[{ required: true, message: '请输入密码' },
            { type:'string', min: 6, max:20, message: '密码长度不能小于6' },
                      ]}>
              <Input.Password />
            </Form.Item>
        </Form>

        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item 
            label='确认密码' 
            name='confirm'
            dependencies={['password']}
            rules={[
              { required: true, message: '请输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'));
                },
              }),
            ]
            }
            >
            
            <Input />
          </Form.Item>
        </Form>

        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label='昵称' name='nickname'>
            <Input />
          </Form.Item>

          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type='primary' htmlType='submit'>
                注册
              </Button>
              <Link to={LOGIN_PATHNAME}>已有账号，请登录</Link>
            </Space>
          </Form.Item>
        </Form>
        
        </Form>
      </div>
    </div>
  )
}

export default Register