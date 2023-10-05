import React from 'react'
import '../Css/HomePage.css'
import Footer from './Footer'

export default function HomePage() {
  return (
    <>
    <div className="home-page">
      <div className="home-main">
        <h1 className="home-title">Story Circle </h1>
        <p className="home-text">Establish or Discover Your Community.</p>
      </div>
      <Footer/>
    </div>
    </>
    )
}