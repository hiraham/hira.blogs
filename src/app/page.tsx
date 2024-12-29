import AutherCard from '@/components/AutherCard'
import Navbar from '@/components/Navbar'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import React from 'react'
import Mega from '@/components/Mega'
const home = () => {
  return (
    <div>
      
       <Navbar/>
       <Feature/>
       <Mega/>
       <AutherCard/>
      
       
     
       <Footer/>
    </div>
  )
}

export default home
