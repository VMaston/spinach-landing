var controller = new ScrollMagic.Controller();

document.querySelectorAll('.about-block').forEach(elem => {

    new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.6,
        offset: 50 // move trigger to center of element
    })
        .setClassToggle(elem, "reveal")
        .reverse(false)
        //.addIndicators()
        .addTo(controller)

});