import React from 'react'
import Banner from '../components/Bannner'
import Experince from '../components/Experince'
import Popular from '../components/Popular'
import Resturent from '../components/Resturent'
import Category from '../components/Category'
import Cheaf from '../components/Cheaf'
import Comment from '../components/Comment'
import Email from '../components/Email'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Experince/>
      <Popular/>
      <Resturent/>
      <Category/>
      <Cheaf/>
      <Comment/>
      <Email/>
    </div>
  )
}

export default Home
