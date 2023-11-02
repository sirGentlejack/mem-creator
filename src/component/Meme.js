import { useState } from "react";
import React from "react";
import memeData from "../memeData";

export default function Meme() {
const [meme, setMeme] = useState({
  topText : "",
  bottomText : "",
  randomImage : "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = useState(memeData)


function getMemeImage(){
    const memeArray = allMemeImages.data.memes
    const randomNumber =Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    setMeme(prevMeme =>({
       ...prevMeme,
       randomImage: url
    }))
}

  return (
    <div className="meme">
      <div className="form">
        <input className="form_input" type="text" placeholder="first text" />
        <input className="form_input" type="text" placeholder="second text" />
        <button className="form_btn" onClick={getMemeImage}>
          Get a new Meme image
        </button>
      </div>
      <img src={meme.randomImage} className="meme_img" alt="meme"/>
    </div>
  );
}
