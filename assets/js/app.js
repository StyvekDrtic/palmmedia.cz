


// SMOOTH SCROLLING



$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



// WOW init



new WOW().init();



// MENU



$(".whatWeDo").click(function() {
  $(".regMenu").css("opacity", "0");
  $(".whatWeDoMenu").css("z-index", "8");
  $(".whatWeDoMenu").css("opacity", "1");
  //console.log("hfgdfghfgjfkjjhkgfjhffgey");
});

$(".specializedServices").click(function() {
  $(".regMenu").css("opacity", "0");
  $(".servicesMenu").css("z-index", "8");
  $(".servicesMenu").css("opacity", "1");
  //console.log("hedasdasdy");
});

$(".closeButton").click(function(event) {
  event.preventDefault();

  $(".regMenu").css("opacity", "1");
  $(".submenu").css("z-index", "4");
  $(".submenu").css("opacity", "0");

  //console.log("hey");

  $(".mobileMenuSection").css("opacity", "0");
  $(".mobileMenuSection").css("z-index", "-1000");
});

$(".mobileMenu").click(function() {
  $(".mobileMenuSection").css("z-index", "1000");
  $(".mobileMenuSection").css("opacity", "1");

  $(".closeButton").removeClass("fadeInRight animated").addClass("fadeInRight" + ' animated closeButton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass().addClass("closeButton");
  });

  $(".mobileMenuSectionLi").removeClass("fadeInDown animated").addClass("animated" + ' fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass().addClass("mobileMenuSectionLi");
  });
});

$(".mobileMenuSection li a").click(function() {
  $(".regMenu").css("opacity", "1");
  $(".submenu").css("z-index", "4");
  $(".submenu").css("opacity", "0");

  $(".mobileMenuSection").css("opacity", "0");
  $(".mobileMenuSection").css("z-index", "-1000");
});

// LOADING


if ($(window).width() < 1024 && $(window).width() > 450) {
  $(".slider").animate({ scrollLeft: ($(".slider ul").width() - $(".slider").width())/2}, 1500, "swing");
}

$(document).ready(function() {

  setTimeout(
    function() {
      $("header .palm").addClass("animated tada");

      setTimeout(
        function() {
          $(".completedProjects .heading h1").addClass("animated fadeInUp");
          $(".completedProjects .heading p").addClass("animated fadeIn");

          $(".jumbotronPart1 h1").addClass("animated fadeInUp");
          $(".jumbotronPart1 .descriptionJumb").addClass("animated fadeIn");

          setTimeout(
            function() {
              $(".slider").addClass("animated fadeInUp");

              $(".completedProjects .ontherebound").addClass("animated fadeInUp");


              setTimeout(
                function() {
                  $(".completedProjects .simekostav").addClass("animated fadeInUp");

              setTimeout(
                function() {
                  $(".completedProjects .protiProudu").addClass("animated fadeInUp");


                  setTimeout(
                    function() {
                      $(".completedProjects .davidKolar").addClass("animated fadeInUp");

                    setTimeout(
                      function() {
                        $(".completedProjects .lanistae").addClass("animated fadeInUp");

                        setTimeout(
                          function() {
                            $(".completedProjects .beunique").addClass("animated fadeInUp");

                            setTimeout(
                              function() {
                                $(".completedProjects .jezdeckaStaj").addClass("animated fadeInUp");

                                setTimeout(
                                  function() {

                                    if ($(window).width() >= 1024) {
                                      $(".slider").animate({ scrollLeft: $(".slider ul").width() - $(".slider").width()}, 2000, "swing");
                                      $(".slider").animate({ scrollLeft: ($(".slider ul").width() - $(".slider").width())/2}, 1500, "swing");
                                    }

                                  }, 1200);
                              }, 150);
                          }, 150);
                        }, 150);
                    }, 150);
                }, 150);
                }, 150);
            }, 300);
        }, 500);
    }, 500);
});
