import { useState } from 'react'
import ImgCarousel from '../components/ImgCarousel'
import NavBar from '../components/NavBar'
import Posts from '../components/Posts'
import ScrollToTop from '../components/ScrollToTop'
import img1 from '../images/pexels-negative-space-160107.jpg'
import Footer from '../components/Footer'
import './home.css'
const Home = () => {

    return (
        <div className="homeBg" >
          <NavBar></NavBar> 
          <ImgCarousel img1={img1}></ImgCarousel>
          <Posts all={true}></Posts>
          
          <ScrollToTop></ScrollToTop>
          <br></br>
          <Footer></Footer>
          
         
        </div>
    )
}

export default Home
