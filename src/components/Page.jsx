import React from 'react'
import './Page.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Page = () => {
  const navigate = useNavigate();

  function handelClick()
  {
    navigate('/review');
  }
  return (
    <div>
      <div id='page1'>
<h1>See Your C<span>
  <svg class="c-bttn__morph" viewBox="0 0 64 64" aria-hidden="false" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>DevLens — Code Review Icon</title>


    <path d="M20 18c-3 0-4 2-4 5v4c0 2-1 3-3 3h-2v4h2c2 0 3 1 3 3v4c0 3 1 5 4 5" 
          stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M44 18c3 0 4 2 4 5v4c0 2 1 3 3 3h2v4h-2c-2 0-3 1-3 3v4c0 3-1 5-4 5" 
          stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>

    <circle cx="30" cy="30" r="7" stroke="#fff" stroke-width="2" fill="none"/>
    <line x1="35" y1="35" x2="40" y2="40" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  </svg>
</span>de</h1>


        <h1>
            Like Never Before
        </h1>
        <p>We empower developers and tech teams with cutting-edge AI code review,<br /> guiding projects from the first commit to large-scale deployment — with expertise in:</p>
        <div id="page1-something">
            <h4>Code Quality & Optimization</h4>
            <h4>Developer Experience</h4> 
            <h4>and</h4>
            <h4>Secure & Scalable Product Design</h4>
        </div>
  <div id="button-div">
      <button className="review-btn" onClick={handelClick}>

        <span className="btn-text">Let's Review !</span>
      </button>
    </div>


        <div id="moving-div">
    <div id="blur-left"></div>
    
    <div class="move">
    <img src="https://api.iconify.design/mdi:table-large.svg" alt="Matrix Grid" />
    <img src="https://api.iconify.design/mdi:plus-thick.svg" alt="Matrix Addition" />
    <img src="https://api.iconify.design/mdi:minus-thick.svg" alt="Matrix Subtraction" />
    <img src="https://api.iconify.design/mdi:close-thick.svg" alt="Matrix Multiplication" />
    <img src="https://api.iconify.design/mdi:sigma-lower.svg" alt="Determinant" />
    <img src="https://api.iconify.design/tabler:arrows-transfer-up.svg" alt="Transpose" />
    <img src="https://api.iconify.design/tabler:math-function.svg" alt="Inverse" />
    <img src="https://api.iconify.design/mdi:calculator-variant.svg" alt="Calculator" />
</div>

<div class="move">
    
    <img src="https://api.iconify.design/mdi:matrix.svg" alt="Matrix Symbol" />
    <img src="https://api.iconify.design/mdi:format-columns.svg" alt="Column Ops" />

    <img src="https://api.iconify.design/mdi:lambda.svg" alt="Eigenvalues" />
    <img src="https://api.iconify.design/mdi:alpha-t-box.svg" alt="Transpose T" />
</div>

    <div id="blur-right"></div>
</div>


      </div>
    
    </div>
  )
}

export default Page
