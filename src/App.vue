<script setup>
  import profile from "./profile";

  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'

  // section import
  import sectionHeaders from './components/section-headers.vue';
  import sectionHero from './components/section-hero.vue';
  import sectionNewsletter from "./components/section-newsletter.vue";
  import sectionAbout from './components/section-about.vue';
  import sectionfact from "./components/section-fact.vue";
  import sectionServices from './components/section-services.vue';
  import sectionCalltoaction from './components/section-calltoaction.vue';
  import sectionContact from './components/section-contact.vue';
  import sectionClientaviliation  from './components/section-clientaviliation.vue';
  import sectionTeam from "./components/section-team/index.vue";
</script>

<template>
  <sectionHeaders></sectionHeaders>
  <sectionHero></sectionHero>
  <sectionNewsletter></sectionNewsletter>
  <sectionAbout
    founded="2018"
  ></sectionAbout>
  <sectionfact></sectionfact>
  <sectionServices></sectionServices>
  <sectionCalltoaction></sectionCalltoaction>
  <sectionClientaviliation
    color="#338275"
    :data_endpoint="data_endpoint"
  ></sectionClientaviliation>

  <sectionTeam
    :data_endpoint="data_endpoint"
  ></sectionTeam>
  

  <sectionContact></sectionContact>
</template>

<script>
  export default{
    data:function(){
      return {
        data_endpoint: profile.data_endpoint
      }
    },
    mounted(){
      AOS.init()

      /**
      * Template Name: Regna - v2.2.1
      * Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
      * Author: BootstrapMade.com
      * License: https://bootstrapmade.com/license/
      */
      !(function($) {
        "use strict";

        // Header fixed and Back to top button
        $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
            $('#header').addClass('header-fixed');
          } else {
            $('.back-to-top').fadeOut('slow');
            $('#header').removeClass('header-fixed');
          }
        });

        $('.back-to-top').click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 1500, 'easeInOutExpo');
          return false;
        });

        // Initiate superfish on nav menu
        $('.nav-menu').superfish({
          animation: {
            opacity: 'show'
          },
          speed: 400
        });

        // Mobile Navigation
        if ($('#nav-menu-container').length) {
          var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
          });
          $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
          });
          $('body').append($mobile_nav);
          $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
          $('body').append('<div id="mobile-body-overly"></div>');
          $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

          $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
          });

          $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
          });

          $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
              }
            }
          });
        } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
          $("#mobile-nav, #mobile-nav-toggle").hide();
        }
        // Smooth scroll for the navigation menu and links with .scrollto classes
        var scrolltoOffset = $('#header').outerHeight() - 21;
        $(document).on('click', '.nav-menu a, #mobile-nav a, .scrollto', function(e) {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
              e.preventDefault();

              var scrollto = target.offset().top - scrolltoOffset;

              $('html, body').animate({
                scrollTop: scrollto
              }, 1500, 'easeInOutExpo');

              if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
              }

              if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
              }
              return false;
            }
          }
        });

        // Activate smooth scroll on page load with hash links in the url
        $(document).ready(function() {
          if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
              var scrollto = $(initial_nav).offset().top - scrolltoOffset;
              $('html, body').animate({
                scrollTop: scrollto
              }, 1500, 'easeInOutExpo');
            }
          }
        });

        // Navigation active state on scroll
        var nav_sections = $('section');
        var main_nav = $('.nav-menu, #mobile-nav');

        $(window).on('scroll', function() {
          var cur_pos = $(this).scrollTop() + 200;

          nav_sections.each(function() {
            var top = $(this).offset().top,
              bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('menu-active');
              }
              main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
            }
            if (cur_pos < 300) {
              $(".nav-menu li:first").addClass('menu-active');
            }
          });
        });

        // Porfolio isotope and filter
        $(window).on('load', function() {
          var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
          });

          $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
              filter: $(this).data('filter')
            });
            aos_init();
          });
        });

        // Portfolio details carousel
        $(".portfolio-details-carousel").owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          items: 1
        });

        // Init AOS
        function aos_init() {
          AOS.init({
            duration: 1000,
            once: true
          });
        }
        $(window).on('load', function() {
          aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function() {
          $('.venobox').venobox();
        });

        // jQuery counterUp
        $('[data-toggle="counter-up"]').counterUp({
          delay: 10,
          time: 1000
        });

      })(jQuery);
    }
  }
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
