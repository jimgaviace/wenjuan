import { useState } from 'react'
import './App.css'
import List from './pages/manage/List'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'

function App() {

  return (
    <>
      <RouterProvider router={routerConfig} />
    </>
  )
}

export default App
