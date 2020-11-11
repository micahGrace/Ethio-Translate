import React, { Component } from 'react';
import img5 from '../static/images/big/slide1.jpg';
import img4 from '../static/images/big/slide2.jpg';
import img2 from '../static/images/big/slide3.jpg';
// import {Carousel} from 'bootstrap'; 
import { Carousel, Button } from "react-bootstrap";
import './CarouselHome.css';
import $ from 'jquery';

class CarouselHome extends Component {
    componentDidMount(){
    // $('#carouselItem').ready(function(){
    //     $("#para").slideUp(500);

    // })

  
    
    }
    render() {
        return (
            <div>
             <Carousel id="carouselContainer">
                    

             <Carousel.Item>
                        <img
                        id="imgOverlay"
                        className="d-block w-100 animated fadeIn"
                        src={img5}
                        alt="First slide"
                        style={{width:"40px", height:"500px", animateDelay:"2s"}}
                        />
                        <Carousel.Caption class="toggleCaption" id="carouselItem">
                            <h3 class="animated fadeInDown"  style={{animateDelay: "1s"}} id="header">This is a place holder Header</h3>
                         
                            <p class="animated fadeInUp" id="para" style={{animateDelay: "2s"}}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                       
                            <Button  className="animated fadeInUp" id="button" style={{animateDelay: "0s"}}>   
                            Explore
                            </Button> 
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item id="carouselItem">
                        <img id="imgOverlay"
                        className="d-block w-100 animated fadeIn"
                        src={img4}
                        alt="Second slide"
                        style={{width:"40px", height:"500px", animateDelay:"2s"}}
                        />
                        <Carousel.Caption class="toggleCaption" id="carouselItem">
                            <h3 class="animated fadeInDown"  style={{animateDelay: "1s"}} id="header">This is a place holder Header</h3>
                            
                            <p class="animated fadeInUp" id="para" style={{animateDelay: "2s"}}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                       
                            <Button  className="animated fadeInUp" id="button" style={{animateDelay: "0s"}}>   
                            Contribute
                            </Button> 
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item id="carouselItem">
                        <img
                        id="imgOverlay"
                        className="d-block w-100 animated fadeIn"
                        src={img2}
                        alt="Third slide"
                        style={{width:"40px", height:"500px",animateDelay:"2s"}}
                        />
                        <Carousel.Caption class="toggleCaption" id="carouselItem">
                            <h3 class="animated fadeInDown"  id="header" style={{animateDelay: "1s"}}>This is a place holder Header</h3>
                            
                            <p class="animated fadeInUp" id="para" style={{animateDelay: "2s"}}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                       
                            <Button  className="animated fadeInUp" id="button" style={{animateDelay: "0s"}}>   
                            Translate
                            </Button> 
                        </Carousel.Caption> 
                        </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}



export default CarouselHome;