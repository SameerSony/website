import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ImageGallery from './components/ImageGallery';
import bgVideo from './video/background_video.mp4';





function App() {
  return (
    <div className="App">
     
      <div>
          <Header /> 
          <video autoPlay loop muted className='video' >
          <source src={bgVideo} type='video/mp4' />
          </video>
          
          
           </div>
      
      
      
      
      <MainContent />
      <ImageGallery />
      <Footer />
      
    </div>
  );
}

export default App;
