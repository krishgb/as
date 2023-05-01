import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

import './Page.css'

function Page() {
  return (
    <div className='page-container'>
        <Sidebar />
        <Main />
    </div>
  )
}

export default Page