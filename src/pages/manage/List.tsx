import React, { FC, useState }from 'react'
import QuestionCard from '../../componment/QusetioneCard'
import styles from './Common.module.scss'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import ListSearch from '../../componment/ListSearch'

const { Title } = Typography

const rawQuestionList = [
  { 
    id:'q1', 
    title:'问卷1', 
    isPublished:false, 
    isStar:false, 
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
  {
    id:'q4', 
    title:'问卷4', 
    isPublished:false, 
    isStar:false, 
    answerCount: 9, 
    createAt:'3月14日 13:23'
  }
]
const List: FC = () => {
  useTitle('小脾问卷 - 我的问卷')

  const [questionList, setQusetionList] = useState(rawQuestionList)
  
  return (
  <>
    <div className={styles.header}>
      <div className={styles.left}>
        <Title level={3}>我的问卷</Title>
      </div>
      <div className={styles.right}>
        <ListSearch />
      </div>
      <div className={styles.content}>
        {questionList.map(
          q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          }
        )}
      </div>
      <div className={styles.footer}>loadMore... 上划加载更多</div>
    </div>
  </>
  )
}

export default List