import React, {FC} from 'react'
import { Outlet, useNavigate,useLocation } from 'react-router-dom'
import { Button, Space, Divider } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './ManageLayout.module.scss'

const ManageLayout: FC = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction='vertical'>
          <Button type='primary' size='large' icon={<PlusOutlined />}>
            创建问卷
          </Button>
          <Divider />
          <Button type={pathname === '/manages/list' ? 'default' : 'text'} size='large' icon={<BarsOutlined />} onClick={() => navigate('/manages/list')}>
            我的问卷
          </Button>
          <Button type={pathname === '/manages/star' ? 'default' : 'text'} size='large' icon={<StarOutlined />} onClick={() => navigate('/manages/star')}>
            星标问卷
          </Button>
          <Button type={pathname === '/manages/trash' ? 'default' : 'text'} size='large' icon={<DeleteOutlined />} onClick={() => navigate('/manages/trash')}>
            回收站
          </Button>
        </Space>
        
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout