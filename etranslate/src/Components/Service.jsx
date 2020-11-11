import React, { Component } from 'react';
import $ from 'jquery';
import { render } from 'react-dom';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faHeart, faInfinity, faLanguage} from '@fortawesome/free-solid-svg-icons';
class Service extends Component{
    constructor(props){
        super(props);


    }


    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

      render(){
    return(
        <div data-aos="fade-in"
        data-aos-anchor-placement="top-bottom">
            <section class="page-section " id="services"  
     >
            <div class="container"  data-aos="fade-up">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider my-4" />
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas  fa-4x fa-gem text-primary mb-4"><FontAwesomeIcon icon={faLanguage} style={{color:"#5cb874"}}/></i>
                            <h3 class="h4 mb-2">Translation</h3>
                            <p class="text-muted mb-0">ETH Translate can translates between English and Tigrinya
                            text. Specifically, its functions include: Saving Users translate history, Favorite and also 
                            enable users to contribute.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center"  data-aos="fade-down">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"><FontAwesomeIcon icon={faInfinity} style={{color:"#5cb874"}}/></i>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">ETH Translate can translates between English and Tigrinya
                            text. Specifically, its functions include: Saving Users translate history, Favorite and also 
                            enable users to contribute.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center"  data-aos="fade-up">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-globe text-primary mb-4"><FontAwesomeIcon icon={faEnvelope} style={{color:"#5cb874"}}/></i>
                            <h3 class="h4 mb-2">Ready to Publish</h3>
                            <p class="text-muted mb-0">ETH Translate can translates between English and Tigrinya
                            text. Specifically, its functions include: Saving Users translate history, Favorite and also 
                            enable users to contribute.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center"  data-aos="fade-down"
>
                        <div class="mt-5">
                            <i class="fas fa-4x fa-heart text-primary mb-4"><FontAwesomeIcon icon={faHeart} style={{color:"#5cb874"}}/></i>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">ETH Translate can translates between English and Tigrinya
                            text. Specifically, its functions include: Saving Users translate history, Favorite and also 
                            enable users to contribute.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
}
export default Service;