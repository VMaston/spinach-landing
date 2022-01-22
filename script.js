var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.6,
    offset: 50 // move trigger to center of element
})
    .setClassToggle(".about-block1", "reveal")
    .reverse(false)
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.6,
    offset: 50
})
    .setClassToggle(".about-block2", "reveal")
    .reverse(false)
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.6,
    offset: 50
})
    .setClassToggle(".about-block3", "reveal")
    .reverse(false)
    //.addIndicators()
    .addTo(controller);