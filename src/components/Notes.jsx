import React from 'react'
import "./Notes.css"
import img1 from "./Images/icon-1.png";
import img2 from "./Images/icon-2.png";
import img3 from "./Images/icon-3.png";
import img4 from "./Images/icon-4.png";
import img5 from "./Images/icon-5.png";
import img6 from "./Images/icon-6.png";
import img7 from "./Images/icon-7.png";
import img8 from "./Images/icon-8.png";

function Notes() {
  return (
    <>
     <div class="container" id='notes'>

<h1 class="heading">Notes</h1>

<div class="box-container">

    <div class="box">
        <img src={img1} alt=""/>
        <h3>HTML 5</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={img2} alt=""/>
        <h3>CSS 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={img3} alt=""/>
        <h3>JavaScript</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={img4} alt=""/>
        <h3>SASS</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={img5} alt=""/>
        <h3>JQuery</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={img6} alt=""/>
        <h3>React.js</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        <a href="#" class="btn">read more</a>
    </div>

    

</div>

</div> 
    </>
  )
}

export default Notes
