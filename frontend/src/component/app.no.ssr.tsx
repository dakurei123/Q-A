import dynamic from 'next/dynamic'
import React from 'react'

const DynamicHeader = dynamic(() => import('./app.editor'), {
  loading: () => <MyEditor/>,
})
 
export default function Home() {
  return <DynamicHeader />
}