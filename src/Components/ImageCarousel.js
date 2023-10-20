import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import * as Styles from "../styles/aboutPageStyles.module.css";

function ImageCarousel() {

  const templateImageData = [
    {"original": "https://images.unsplash.com/photo-1611743503489-09f50e0be8e4?auto=format&fit=crop&q=80&w=1859&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "thumbnail": "https://images.unsplash.com/photo-1611743503489-09f50e0be8e4?auto=format&fit=crop&q=80&w=1859&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ] 
  const [images, setImages] = useState([]);

  const dataset = async () =>{
    const url = "https://script.google.com/macros/s/AKfycbx49pzQY2TzHYmy3ZSmYwjdWKed1LYDmkzoYL3jxmFBmGdtc9mAqcq92bbCnnuLnymE/exec";
    await axios.get(url).then((res)=>{
      console.log(res.data);
      setImages(res.data);
    })
  }
  
  useEffect(()=>{
    dataset();
  }, [])

  return (
    <>
      {images.length!==0 && <div id={Styles.carousel} style={{padding: "2rem"}}>
        <ImageGallery items={images} showThumbnails={false} showBullets={true} autoPlay={true} showFullscreenButton={false}/>
      </div>}
      {images.length===0 && <div id={Styles.carousel} style={{padding: "2rem"}}>
        <ImageGallery items={templateImageData} showThumbnails={false} showBullets={true}  autoPlay={true} showFullscreenButton={false}/>
      </div>}
    </>
  )
}

export default ImageCarousel