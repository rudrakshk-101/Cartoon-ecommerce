import {useNavigate}  from 'react-router-dom'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const navigateTo = useNavigate();
  let xyz = async (vendorId) => {
   if(!vendorId) navigateTo('/login');
  }
  useEffect(()=> {
    const vendorId = localStorage.getItem('vendorId');
    xyz(vendorId);
  },[])
  return (
    <div>

    </div>
  )
}

export default Dashboard
