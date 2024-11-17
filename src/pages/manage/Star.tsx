import React, { FC, useEffect, useState} from 'react'
import styles from './Common.module.scss'
import QuestionCard from '../../componment/QusetioneCard'
import { Typography, Empty } from 'antd'
import { useTitle } from 'ahooks'

const { Title } = Typography


const Star: FC = () => {
  useTitle('小脾问卷 - 星标问卷')

  const rawQuestionList = [
    { 
      id:'q1', 
      title:'问卷1', 
      isPublished:true, 
      isStar:true, 
      answerCount: 5, 
      createAt:'3月10日 13:23'
    },
    {
      id:'q2', 
      title:'问卷2', 
      isPublished:true, 
      isStar:true, 
      answerCount: 3, 
      createAt:'3月12日 13:23'
    },
    {
      id:'q3', 
      title:'问卷3', 
      isPublished:true, 
      isStar:true, 
      answerCount: 2, 
      createAt:'3月11日 13:23'
    },
  ]

  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          搜索
        </div>
      <div className={styles.content}>
      {questionList.length === 0 && <Empty description='暂无数据'/>}
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
        })}
      </div>
    </div>
    <div className={styles.footer}>
      分页
    </div>
    </div>
  )
}

export default Star