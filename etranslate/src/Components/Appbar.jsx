import React, { Component } from "react";
import "./Appbar.css";
import $ from "jquery";
import jQuery from "jquery";
class Appbar extends Component {
  componentDidMount() {
    jQuery(document).ready(function () {
      $(".dismiss, .overlay").on("click", function () {
        $(".sidebar").removeClass("active");
        $(".overlay").removeClass("active");
      });

      $(".open-menu").on("click", function (e) {
        e.preventDefault();
        $(".sidebar").addClass("active");
        $(".overlay").addClass("active");
        // close opened sub-menus
        $(".collapse.show").toggleClass("show");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
      });

      $("a.scroll-link").on("click", function (e) {
        e.preventDefault();
        scroll_to($(this), 0);
      });
  
      function scroll_to(clicked_link, nav_height) {
        var element_class = clicked_link.attr("href").replace("#", ".");
        var scroll_to = 0;
        if (element_class != ".top-content") {
          element_class += "-container";
          scroll_to = $(element_class).offset().top - nav_height;
        }
        if ($(window).scrollTop() != scroll_to) {
          $("html, body").stop().animate({ scrollTop: scroll_to }, 1000);
        }
      }
    });
    $('.to-top a').on('click', function(e) {
      e.preventDefault();
      if($(window).scrollTop() != 0) {
          $('html, body').stop().animate({scrollTop: 0}, 1000);
      }
  });

  $('a.btn-customized-dark').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').removeClass('light');
});
 
$('a.btn-customized-light').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').addClass('light');
});
  }


  render() {
    return (
      <div>
        <div class="wrapper">
          <nav class="sidebar">
            <div class="dismiss">
              <i class="fas fa-arrow-left"></i>
            </div>

            <div class="logo">
              <h3>
                <a href="index.html">Bootstrap 4 Template with Sidebar Menu</a>
              </h3>
            </div>

            <ul class="list-unstyled menu-elements">
              <li class="active">
                <a class="scroll-link" href="#top-content">
                  <i class="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-1">
                  <i class="fas fa-cog"></i> What we do
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-2">
                  <i class="fas fa-user"></i> About us
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-5">
                  <i class="fas fa-pencil-alt"></i> Portfolio
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-6">
                  <i class="fas fa-envelope"></i> Contact us
                </a>
              </li>
              <li>
                <a
                  href="#otherSections"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                  role="button"
                  aria-controls="otherSections"
                >
                  <i class="fas fa-sync"></i>Other sections
                </a>
                <ul class="collapse list-unstyled" id="otherSections">
                  <li>
                    <a class="scroll-link" href="#section-3">
                      Our projects
                    </a>
                  </li>
                  <li>
                    <a class="scroll-link" href="#section-4">
                      We think that...
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="to-top">
              <a
                class="btn btn-primary btn-customized-3"
                href="#"
                role="button"
              >
                <i class="fas fa-arrow-up"></i> Top
              </a>
            </div>

            <div class="dark-light-buttons">
              <a
                class="btn btn-primary btn-customized-4 btn-customized-dark"
                href="#"
                role="button"
              >
                Dark
              </a>
              <a
                class="btn btn-primary btn-customized-4 btn-customized-light"
                href="#"
                role="button"
              >
                Light
              </a>
            </div>
          </nav>

          <div class="overlay"></div>

          <div class="content">
            <a
              class="btn btn-primary btn-customized open-menu"
              href="#"
              role="button"
            >
              <i class="fas fa-align-left"></i> <span>Menu</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Appbar;
