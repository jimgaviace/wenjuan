import React, { FC } from 'react'
import { useLinkClickHandler } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGES_PATHNAME } from '../../router'
import styles from './Home.module.scss'

const { Title, Paragraph, Text} = Typography

const Home: FC = () => {
  // //第三方hooks
  const nav = useNavigate()
  // //自定义hooks
  // function clickHandler() {
  //   nav('/login')
  // }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title level={1}>问卷调查  |  在线投票</Title>
        <Paragraph>已累计100份</Paragraph>
        <div>
          <Button type='primary' onClick={() => nav(MANAGES_PATHNAME)}>开始使用</Button>
        </div>
      </div>
    </div>

  )
}

export default Home