import React from 'react'
import MainLayout from '../layout/MainLayout'
// import AdminLayout from '../layout/AdminLayout'
import { Link } from "react-router-dom";
function Admin() {
  return (
    <div>
      <MainLayout>
        {/* <AdminLayout> */}
        <li><Link to="#">USERS</Link></li>
        <li><Link to="#">ROLES</Link></li>
        <li><Link to="#">ATCC</Link></li>
        <li><Link to="#">ANPR</Link></li>
        <li><Link to="#">CCTV</Link></li>
        <li><Link to="#">ECB</Link></li>
        {/* </AdminLayout> */}

      </MainLayout>
    </div>
  )
}

export default Admin