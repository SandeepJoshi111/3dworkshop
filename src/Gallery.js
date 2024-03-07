import React, { useState } from 'react';
import Img1 from './assets/1. Room.png';
import Img2 from './assets/12.Lipstick.png';
import Img3 from './assets/13.Cream.png';
import Img4 from './assets/14.Black Water.png';
import Img5 from './assets/15.Burger.png';
import Img6 from './assets/16. Momo Drish.png';
import Img7 from './assets/16. Momo.png';
import Img8 from './assets/17.Headphone White.png';
import Img9 from './assets/18.Airpods.png';
import Img10 from './assets/22.Chess.png';
import Img11 from './assets/8.Victoria.png';
import Img12 from './assets/Borsa Green (Front View).png';
import Img13 from './assets/PastryFocus.png';
import Img14 from './assets/rocket.png';
import Img15 from './assets/White Black.png';
import './Gallery.css'

import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {

    let data = [
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc:Img8,
        },
        {
            id:9,
            imgSrc:Img9,
        },
        {
            id:10,
            imgSrc:Img10,
        },
        {
            id:11,
            imgSrc:Img11,
        },
        {
            id:12,
            imgSrc:Img12,
        },
        {
            id:13,
            imgSrc:Img13,
        },
        {
            id:14,
            imgSrc:Img14,
        },
        {
            id:15,
            imgSrc:Img15,
        },

    ]
    const [model,setModel] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('');
    const getImg=(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
   <>
   <div className={model?"model open":"model"}>   
        <img className='temp' src={tempimgSrc} />
        <CloseIcon className='close-icon' onClick={()=> setModel(false)}/>
    </div>
    <div className='gallery'>
        {data.map((item,index)=>{
            return(
                <div className='pics' key = {index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width:'100%'}}/>
                </div>
            )
        })}
    </div>
   </>
  );
}


export default Gallery