var options = {
    strings: ["studio","Creativity &","Trendings..."],
    stringsElement: null,
    typeSpeed: 100,
    startDelay: 1200,
    backSpeed: 100,
    backDelay: 150,
    loop: true,
    loopCount: false,
    showCursor: false,
    cursorChar: '|',
    attr: null,
    contentType: 'html',
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
}

var typed = new Typed('#change', options);
