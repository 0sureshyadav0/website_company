$(
  (function () {
    // Navigation
    $(".site-navigation").affix({
      offset: {
        top: $(".hero").height(),
      },
    });

    var $window = $(window);
    function checkWidth() {
      var windowsize = $window.width();
      if (windowsize < 768) {
        $(".nav a").on("click", function () {
          $(".navbar-toggle").click(); //bootstrap 3.x by Richard
        });
      }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    // Highlight the top nav as scrolling occurs
    $("body").scrollspy({
      target: ".site-header",
      offset: 10,
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on("click", ".page-scroll a", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1000,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    //Counters
    if ($(".counter-start").length > 0) {
      $(".counter-start").each(function () {
        var stat_item = $(this),
          offset = stat_item.offset().top;
        $(window).scroll(function () {
          if (
            $(window).scrollTop() > offset - 1000 &&
            !stat_item.hasClass("counting")
          ) {
            stat_item.addClass("counting");
            stat_item.countTo();
          }
        });
      });
    }

    // Progress bar
    var $section = $(".section-skills");
    function loadDaBars() {
      $(".progress .progress-bar").progressbar({
        transition_delay: 500,
        display_text: "center",
      });
    }

    $(document).bind("scroll", function (ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        loadDaBars();
        // unbind event not to load scrolsl again
        $(document).unbind("scroll");
      }
    });

    //Team Carousel
    $("#services-carousel").carousel({ interval: false });

    // Carousel touch support
    if ($(".carousel-inner").length) {
      $(".carousel-inner").swipe({
        //Generic swipe handler for all directions
        swipeLeft: function (
          event,
          direction,
          distance,
          duration,
          fingerCount
        ) {
          $(this).parent().carousel("next");
        },
        swipeRight: function () {
          $(this).parent().carousel("prev");
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 50,
      });
    }

    // Slick.js
    $(".review-carousel").slick({
      nextArrow:
        '<button class="slick rectangle slick-next"><i class="fa fa-angle-right" aria-hidden="true"></button>',
      prevArrow:
        '<button class="slick rectangle slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></button>',
    });

    $(".clients-carousel").slick({
      arrows: false,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    //shuffle.js
    var shuffleme = (function ($) {
      "use strict";
      var $grid = $("#grid"), //locate what we want to sort
        $filterOptions = $(".portfolio-sorting li"), //locate the filter categories
        init = function () {
          // None of these need to be executed synchronously
          setTimeout(function () {
            listen();
            setupFilters();
          }, 100);

          // instantiate the plugin
          $grid.shuffle({
            itemSelector: '[class*="col-"]',
            group: Shuffle.ALL_ITEMS,
          });
        },
        // Set up button clicks
        setupFilters = function () {
          var $btns = $filterOptions.children();
          $btns.on("click", function (e) {
            e.preventDefault();
            var $this = $(this),
              isActive = $this.hasClass("active"),
              group = isActive ? "all" : $this.data("group");

            // Hide current label, show current label in title
            if (!isActive) {
              $(".portfolio-sorting li a").removeClass("active");
            }

            $this.toggleClass("active");

            // Filter elements
            $grid.shuffle("shuffle", group);
          });

          $btns = null;
        },
        // Re layout shuffle when images load. This is only needed
        // below 768 pixels because the .picture-item height is auto and therefore
        // the height of the picture-item is dependent on the image
        // I recommend using imagesloaded to determine when an image is loaded
        // but that doesn't support IE7
        listen = function () {
          var debouncedLayout = $.throttle(300, function () {
            $grid.shuffle("update");
          });

          // Get all images inside shuffle
          $grid.find("img").each(function () {
            var proxyImage;

            // Image already loaded
            if (this.complete && this.naturalWidth !== undefined) {
              return;
            }

            // If none of the checks above matched, simulate loading on detached element.
            proxyImage = new Image();
            $(proxyImage).on("load", function () {
              $(this).off("load");
              debouncedLayout();
            });

            proxyImage.src = this.src;
          });

          // Because this method doesn't seem to be perfect.
          setTimeout(function () {
            debouncedLayout();
          }, 500);
        };

      return {
        init: init,
      };
    })(jQuery);

    if ($("#grid").length > 0) {
      shuffleme.init(); //filter portfolio
    }
  })()
);

let darkElement = document.querySelector(".darkMode");
// let lightElement = document.querySelector(".lightMode");
let bodyElement = document.querySelector("body");
let bigRectangle = document.querySelector("div.big-rectangle");
let history = document.querySelector("section#history");
let services = document.querySelector("section#services");
let works = document.querySelector("section#works");
let clients = document.querySelector("section.section-clients");
let team = document.querySelector("section.section-team");
let blueBg = document.querySelector("div.blue-bg");
let reviews = document.querySelector("section.section-reviews");
let carousel = document.querySelector("#services-carousel");
let fluid = document.querySelector("#services.container-fluid");
let counter = document.querySelector("section.site-section.section-counters");
let skills = document.querySelector("section.site-section.section-skills");
let about = document.querySelector("section.site-section.section-about");
let hello = document.querySelector("section.site-section.section-hello");
let firstIndicator = document.querySelector(".col-sm-fifth.first");
let secondIndicator = document.querySelector(".col-sm-fifth.second");
let thirdIndicator = document.querySelector(".col-sm-fifth.third");
let fourthIndicator = document.querySelector(".col-sm-fifth.fourth");
let fifthIndicator = document.querySelector(".col-sm-fifth.fifth");
let socialMedia = document.querySelector("section.section-networks");
let navbar = document.querySelector(".navbar-collapse");
let hero = document.querySelector(".hero");
let primayNav = document.querySelector("nav#primary-navigation");
// let timeline = document.querySelectorAll("div.timeline-body");
// console.log(timeline);
darkElement.addEventListener("click", enableDarkMode);
// lightElement.addEventListener("click", enableLightMode);
var isDark = false;
function enableDarkMode() {
  if (!isDark) {
    darkElement.innerHTML = "light_mode";
    darkElement.classList.toggle("light");
    bodyElement.classList.toggle("isDark");
    bigRectangle.classList.toggle("isDark");
    history.classList.toggle("isDark");
    services.classList.toggle("isDark");
    works.classList.toggle("isDark");
    clients.classList.toggle("isDark");
    team.classList.toggle("isDark");
    blueBg.classList.toggle("isDark");
    reviews.classList.toggle("isDark");
    carousel.classList.toggle("isDark");
    fluid.classList.toggle("isDark");
    counter.classList.toggle("isDark");
    skills.classList.toggle("isDark");
    about.classList.toggle("isDark");
    hello.classList.toggle("isDark");
    firstIndicator.classList.toggle("isDark");
    secondIndicator.classList.toggle("isDark");
    thirdIndicator.classList.toggle("isDark");
    fourthIndicator.classList.toggle("isDark");
    fifthIndicator.classList.toggle("isDark");
    socialMedia.classList.toggle("isDark");
    navbar.classList.toggle("isDark");
    hero.classList.toggle("isDark");
    primayNav.classList.toggle("isDark");

    // timeline.classList.toggle("isDark");
    isDark = true;
  } else {
    darkElement.innerHTML = "dark_mode";
    darkElement.classList.remove("light");
    bodyElement.classList.remove("isDark");
    bigRectangle.classList.remove("isDark");
    history.classList.remove("isDark");
    services.classList.remove("isDark");
    works.classList.remove("isDark");
    clients.classList.remove("isDark");
    team.classList.remove("isDark");
    blueBg.classList.remove("isDark");
    reviews.classList.remove("isDark");
    carousel.classList.remove("isDark");
    fluid.classList.remove("isDark");
    counter.classList.remove("isDark");
    skills.classList.remove("isDark");
    about.classList.remove("isDark");
    hello.classList.remove("isDark");
    firstIndicator.classList.remove("isDark");
    secondIndicator.classList.remove("isDark");
    thirdIndicator.classList.remove("isDark");
    fourthIndicator.classList.remove("isDark");
    fifthIndicator.classList.remove("isDark");
    socialMedia.classList.remove("isDark");
    navbar.classList.remove("isDark");
    hero.classList.remove("isDark");
    primayNav.classList.remove("isDark");
    // timeline.classList.remove("isDark");
    isDark = false;
  }
}

let theme = document.getElementById("theme");
theme.addEventListener("change", getSelectedTheme);
function getSelectedTheme() {
  let value = theme.options[theme.selectedIndex].value;
  let text = theme.options[theme.selectedIndex].text;

  if (value == "red") {
    document.querySelector(":root").classList.toggle("red");
    document.querySelector(":root").classList.remove("yellow");
    document.querySelector(":root").classList.remove("green");
    document.querySelector(":root").classList.remove("purple");
    document.querySelector(":root").classList.remove("blue");
    document.querySelector(":root").classList.remove("lightgreen");
  } else if (value == "yellow") {
    document.querySelector(":root").classList.toggle("yellow");
    document.querySelector(":root").classList.remove("red");
    document.querySelector(":root").classList.remove("green");
    document.querySelector(":root").classList.remove("purple");
    document.querySelector(":root").classList.remove("blue");
    document.querySelector(":root").classList.remove("lightgreen");
  } else if (value == "green") {
    document.querySelector(":root").classList.toggle("green");
    document.querySelector(":root").classList.remove("purple");
    document.querySelector(":root").classList.remove("blue");
    document.querySelector(":root").classList.remove("red");
    document.querySelector(":root").classList.remove("yellow");
    document.querySelector(":root").classList.remove("lightgreen");
  } else if (value == "purple") {
    document.querySelector(":root").classList.toggle("purple");
    document.querySelector(":root").classList.remove("blue");
    document.querySelector(":root").classList.remove("red");
    document.querySelector(":root").classList.remove("yellow");
    document.querySelector(":root").classList.remove("green");
    document.querySelector(":root").classList.remove("lightgreen");
  } else if (value == "lightgreen") {
    document.querySelector(":root").classList.toggle("lightgreen");
    document.querySelector(":root").classList.remove("blue");
    document.querySelector(":root").classList.remove("red");
    document.querySelector(":root").classList.remove("yellow");
    document.querySelector(":root").classList.remove("green");
    document.querySelector(":root").classList.remove("purple");
  } else {
    document.querySelector(":root").classList.toggle("blue");
    document.querySelector(":root").classList.remove("red");
    document.querySelector(":root").classList.remove("yellow");
    document.querySelector(":root").classList.remove("green");
    document.querySelector(":root").classList.remove("purple");
    document.querySelector(":root").classList.remove("lightgreen");
  }
}

setTimeout(() => {
  document.querySelector("#theme").style.visibility = "visible";
}, 10000);
