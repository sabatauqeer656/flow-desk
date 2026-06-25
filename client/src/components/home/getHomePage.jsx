import React from 'react'
import { getHomePage } from '../../services/api.js'

 function GetHomePage() {
    const handleHome = async()=>{
    await getHomePage()
  return null}
    
}

export default GetHomePage