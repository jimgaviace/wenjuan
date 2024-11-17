import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import { EditOutlined, LineChartOutlined, StarOutlined, CopyOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'

const { confirm } = Modal

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard:FC<PropsType> = (props: PropsType) => {
  
  const navigate = useNavigate()

  const { _id, title, createdAt, answerCount, isPublished, isStar } = props

  function duplicate() {
    message.info('复制成功')
  }

  function deleteQuestion() {
    confirm({
      title: '确定删除吗？',
      icon: <ExclamationCircleOutlined />,
      content: '删除后不可恢复',
      onOk() {
        // TODO: 删除接口
      message.info('删除成功')
      }
    })

  }

  return (
  <>
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red'}} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷:{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>

      <Divider style={{ margin: '12px' }}/>
      <div className={styles['button-container']}>
        <div className={styles.left}>

          <Space>
            <Button 
              type='primary' 
              size='small' 
              icon={<EditOutlined />} 
              onClick={() => navigate(`/question/edit/${_id}`)}>
                编辑按钮
            </Button>
            <Button 
              type='primary' 
              size='small' 
              icon={<LineChartOutlined />} 
              onClick={() => navigate(`/question/chart/${_id}`)} disabled={!isPublished} >
                数据统计
            </Button>
          </Space>

        </div>
        <div className={styles.right}>
          <Space>
            <Button 
              type='text' 
              icon={<StarOutlined />} 
              size='small'>
                {isStar ? '取消标星' : '标星'}
            </Button>
            <Popconfirm title="确定要复制该问卷吗？" okText='确定' cancelText='取消' onConfirm={duplicate}>
              <Button 
                type='text' 
                icon={<CopyOutlined />} 
                size='small'>
                复制
              </Button>
            </Popconfirm>

            <Button 
              type='text' 
              icon={<DeleteOutlined />} 
              size='small' 
              onClick={deleteQuestion}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  </>
  )
}

export default QuestionCard