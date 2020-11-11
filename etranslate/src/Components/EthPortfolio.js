import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import './Portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {img1} from '../static/images/big/img1.jpg';
import {img2} from '../static/images/big/img2.jpg';
import {img3} from '../static/images/big/img3.jpg';
import {img4} from '../static/images/big/img4.jpg';
import {img5} from '../static/images/big/img5.jpg';
// import {img6} from '../static/images/big/img6.jpg';

class EthPortfolio extends Component {

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

 
    render() {
        return (             
      <div class="container">
      <section id="portfolio" class="portfolio" data-aos='fade-up'>
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> 

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img1.jpg')}  class="img-fluid" style={{width:"100%", height:"100%"}} alt=""
              data-aos="flip-right"
              />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" >
            <div class="portfolio-wrap" id="portfolio-wrap-one">
              <img src={require('../static/images/big/img2.jpg')} style={{width:"100%", height:"100%"}} class="img-fluid" alt="this is an alternative"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img3.jpg')} style={{width:"100%", height:"100%"}} class="img-fluid" alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap" >
              <img src={require('../static/images/big/img5.jpg')} style={{width:"100%", height:"100%"}} class="img-fluid"  alt=""
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img6.jpg')} style={{width:"100%", height:"100%"}} class="img-fluid" alt=""
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img3.jpg')} class="img-fluid" style={{width:"100%", height:"100%"}} alt=""
              data-aos="fade-out"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img1.jpg')} style={{width:"100%", height:"100%"}} class="img-fluid" alt=""
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img4.jpg')} class="img-fluid" style={{width:"100%", height:"100%"}} alt=""
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={require('../static/images/big/img5.jpg')} style={{width:"100%", height:"100%"}} class="img-fluid" alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
</section>
      </div>
  
            
        );
    }
}

export default EthPortfolio;