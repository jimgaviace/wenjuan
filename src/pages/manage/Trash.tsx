import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Table, Tag, Button, Space, Modal  } from 'antd'
import styles from './Common.module.scss'
import { ExceptionOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal

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
    isStar:false, 
    answerCount: 3, 
    createAt:'3月12日 13:23'
  },
  {
    id:'q3', 
    title:'问卷3', 
    isPublished:true, 
    isStar:false, 
    answerCount: 2, 
    createAt:'3月11日 13:23'
  },
]

const Trash: FC = () => {
  
  useTitle('小脾问卷 - 星标问卷')

  const [questionList, setQuestionList] = useState(rawQuestionList)

  const [selectedIds, setSelectedIds] = useState<string[]>([])

  function del() {
    confirm({
      title: '确定要彻底删除吗？',
      icon: <ExceptionOutlined />,
      content: '删除后不可恢复',
      onOk:() => alert(`删除 ${JSON.stringify(selectedIds)}`)
    })
  }
  const tableColumns = [
    {
      title: '问卷名称',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (text: boolean) => {
        return text ? <Tag color='processing'>已发布</Tag> : <Tag color='red'>未发布</Tag>
      }
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
    }
  ]

  const TableElem = (
    <>
      <div style={{marginBottom: '16px'}}>
        <Space>
          <Button type='primary' danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
          <Button type='primary' disabled={selectedIds.length === 0}>恢复
          </Button>
        </Space>
      </div>
      <Table 
        dataSource={questionList} 
        columns={tableColumns} 
        pagination={false}
        rowKey={q =>q ._id}
        rowSelection={{
          type: 'checkbox',
          onChange:(selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as string[])
          }
        }}
      >  
      </Table>
    </>
  )

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          搜索
        </div>
      </div>
      <div className={styles.content}>
      {questionList.length === 0 && <Empty description='暂无数据'/>}
      {questionList.length > 0 && TableElem }
      </div>
    </div>
  )
}

export default Trash