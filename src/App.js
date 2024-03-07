import React  from 'react';
import Gallery from './Gallery';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
function App() {
  return (
    <>
    <header>
    
      <a className='logo' href='/'> 3D Workshop</a>
      <a className='insta' target='blank' href='https://www.instagram.com/3dwork_shop/'><InstagramIcon style={{ fontSize: '3rem' }}/></a>
    </header>
    <div className='content'>
    <p>Welcome to a captivating showcase of 3D models crafted with the powerful tools of Blender. In this digital gallery, we invite you to immerse yourself in a world where imagination knows no bounds and creativity takes shape in three dimensions. </p>
    <div className='container'>

      <a className='joruney' href='/journey'>Our Journey</a>
    </div>
    <h1 className='name'> Gallery</h1>
    <Gallery/>
    </div>
    </>
  );
}

export default App;
