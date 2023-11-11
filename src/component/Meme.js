import { useState } from "react";
import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme">
      <div className="form">
        <input
          className="form_input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form_input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form_btn" onClick={getMemeImage}>
          Get a new Meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme_img" alt="meme" />
        <h2 className="meme_text top ">{meme.topText} </h2>
        <h2 className="meme_text bottom ">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
