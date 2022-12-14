import React from 'react';
import video1 from "../pics/video logo.mp4";

export default function Home() {
  return (
    <video autoPlay muted className="video" src={video1}/>
  )
}
