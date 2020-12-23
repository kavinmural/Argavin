$(window).on("load", function() {
    $(".loader-wrapper").delay(800).fadeOut(1500);
});

$(document).ready(function() {

/* Smooth Scrolling Nav */
    /*
    // Select all links with hashes
    $('a[href*="#"]')
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
    }); */

    /* Animations */
    var typed = new Typed('.type-animation', {
        strings: [
            "Software Developer",
            "Computer Science",
            "UI/UX Design"
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });

    // Scroll Magic
    var Controller = new ScrollMagic.Controller();

    var about_section = new ScrollMagic.Scene({
        triggerElement: '.about-text-box'
    })
    .setClassToggle(".about-text-box", "display-item")
    .addTo(Controller)

    var about_section = new ScrollMagic.Scene({
        triggerElement: '.about-text-box'
    })
    .setClassToggle(".about-text-box", "animate__slideInRight")
    .addTo(Controller)

    var projects_section = new ScrollMagic.Scene({
        triggerElement: '.proj-box'
    })
    .setClassToggle(".proj-box", "display-item")
    .addTo(Controller)

    var projects_section = new ScrollMagic.Scene({
        triggerElement: '.proj-box'
    })
    .setClassToggle(".proj-box", "animate__fadeInRight")
    .addTo(Controller)

    var contact_section = new ScrollMagic.Scene({
        triggerElement: '.socials'
    })
    .setClassToggle(".socials", "display-item")
    .addTo(Controller)

    var contact_section = new ScrollMagic.Scene({
        triggerElement: '.socials'
    })
    .setClassToggle(".socials", "animate__fadeIn")
    .addTo(Controller)
});