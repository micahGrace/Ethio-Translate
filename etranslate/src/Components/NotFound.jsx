import React from 'react';
import './NotFoundd.css';


function NotFound(props) {
    return (
      <div className="page-container">
        
{/* <div class="preloader">
    <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
    </div>
</div> */}
<div class="error-box">
    <div class="error-body text-center">
        <h1 class="error-title">404</h1>
        <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
        <p class="text-muted mb-4 mt-4">YOU SEEM TO BE TRYING TO FIND YOUR WAY HOME</p>
        <a href="/" class="btn btn-info btn-rounded waves-effect waves-light mb-4">Back to home</a>
    </div>
</div>

      </div>
    )
}

export default NotFound;