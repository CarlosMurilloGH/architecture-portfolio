import React from 'react';
import "./Home.css";
import image1 from "../media/ejemplo1.jpg";
import image2 from "../media/ejemplo2.jpg";
import image3 from "../media/ejemplo3.jpg";



function Home() {
  return (

<div class="container">
  <div class="row" >
    <div class="col-6 col-sm-3">
        <img src={image1} className="img-thumbnail" alt="asda" />
    </div>

    <div class="col-6 col-sm-3">        
        <img src={image2} className="img-thumbnail" alt="asda" />
    </div>

    <div class="col-6 col-sm-3">        
        <img src={image3} className="img-thumbnail" alt="asda" />
    </div>
    <div class="col-6 col-sm-3">        
        <img src={image1} className="img-thumbnail" alt="asda" />
    </div>

    <div class="w-100"></div>

    <div class="col-6 col-sm-3">        
        <img src={image3} className="img-thumbnail" alt="asda" />
    </div>
    <div class="col-6 col-sm-3">        
        <img src={image1} className="img-thumbnail" alt="asda" />
    </div>
    <div class="col-6 col-sm-3">
        <img src={image1} className="img-thumbnail" alt="asda" />
    </div>
    
    <div class="col-6 col-sm-3">        
        <img src={image2} className="img-thumbnail" alt="asda" />
    </div>
  </div>
</div>

  )
}

export default Home