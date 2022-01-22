var controller = new ScrollMagic.Controller();

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.6, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle(".about-block1", "reveal") // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.6, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle(".about-block2", "reveal") // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.6, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle(".about-block3", "reveal") // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);