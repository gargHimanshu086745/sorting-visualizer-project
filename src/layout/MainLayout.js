import React from 'react'
import Navbar from '../components/Navbar'

function MainLayout({ children }) {
  return (
    <div className='Mainlayout'>

      <Navbar></Navbar>
      <div className='sidebar-admin'>

        <div className='sidebar-children-admin'>{children}</div>
        <div>
          <div>AdminLayout</div>
          <div>AdminLayout</div>
          <div>AdminLayout</div>
          <div>AdminLayout</div>
        </div>

      </div>
    </div>
  )
}

export default MainLayout