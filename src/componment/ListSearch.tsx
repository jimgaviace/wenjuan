import React, { FC } from 'react'
import { Input } from 'antd';
import type { ChangeEvent } from 'react';

const { Search } = Input;

const ListSearch: FC = () => {
  const [value, setValue] = React.useState<string>('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSearch(value: string) {

  }

  return (
    <div>
      <Search 
        placeholder='输入关键字' 
        size='large'
        allowClear
        value={value}
        onSearch={handleSearch} 
        onChange={handleChange}
        style={{ width: '260px' }}>
      </Search>
    </div>
  )
}

export default ListSearch