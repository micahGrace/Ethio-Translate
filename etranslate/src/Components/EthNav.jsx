import React, { Component } from "react";
import $ from "jquery";
import jQuery from "jquery";
import "./EthNavStyle.css";
import Icon from "../static/google.svg";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faArrowLeft,faHome, faEnvelope, faUsers, faHandshake } from "@fortawesome/free-solid-svg-icons";


class EthNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  componentDidMount() {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("navbar").style.padding = "12px 10px";
        document.getElementById("logo").style.fontSize = "17px";
      } else {
        document.getElementById("navbar").style.padding = "8px 10px";
        document.getElementById("logo").style.fontSize = "17px";
      }
    }
  }


  
  componentWillMount() {
    jQuery(document).ready(function () {
      $(".dismiss, .overlay").on("click", function () {
        $(".sidebar").removeClass("active");
        $(".overlay").removeClass("active");
      });

      $("#open-menu").on("click", function (e) {
        e.preventDefault();
        $(".sidebar").addClass("active");
        $(".overlay").addClass("active");
        // close opened sub-menus
        $(".collapse.show").toggleClass("show");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
      });

      /* other code */
    });
  }
  render() {
    const show = this.state.menu ? "show" : "";
    return (
      <div>
        <div class="pos-f-t">
          <nav
            class="navbar navbar-expand-lg justify-content-between navbar-light bg-light"
            id="navbar"
          >
            <span class="navbar-toggler-icon" id="open-menu"></span>
            <a href="#" class="navbar-brand mr-auto" id="logo">
              <img src={Icon} height="22" alt="CoolBrand" />
              <span>Translate</span>
            </a>

            <button
              onClick={this.toggleMenu}
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              id="mobileNav"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"  class="hidden-{screen size}"></span>
            </button>

            <div
              id="navlink"
              // class="collapse navbar-collapse"
              className={"collapse navbar-collapse " + show}
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Community <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <div className="nav pull-right">
                  <Button class="btn" id="buttonLink">
                    Sign In
                  </Button>
                  <Button class="btn" id="buttonLink">
                    Sign Up
                  </Button>
                </div>
              </ul>
            </div>
          </nav>
          {/* side navbar */}

          <div id="wrapper"></div>
          <nav class="sidebar" id="sidebar">
            <div class="dismiss">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div class="logo" id="sidelogo">
              <h3>Eth Translate</h3>
            </div>

            <ul class="list-unstyled menu-elements">
              <li class="active">
                <a class="nav-link" href="#top-content">
                <i><FontAwesomeIcon icon={faHome}/></i>Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="#section-1">
                  <i><FontAwesomeIcon icon={faUsers}/></i>Community
                </a>
              </li>
              <li>
                <a class="nav-link" href="#section-2">
                <i><FontAwesomeIcon icon={faHandshake}/></i>Services
                </a>
              </li>
              <li>
                <a class="nav-link" href="#section-5">
                <i><FontAwesomeIcon icon={faEnvelope}/></i>Contact
                </a>
              </li>
              <li>
                <a class="nav-link" href="#section-6">
                <i><FontAwesomeIcon icon={faAddressCard}/></i>About Us
                </a>
              </li>
            </ul>
          </nav>
          {/* end of side nav */}
          <div class="overlay" id="overlay"></div>
        </div>
      </div>
    );
  }
}

export default EthNav;
