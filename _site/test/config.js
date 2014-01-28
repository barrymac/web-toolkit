function requireConfig(){
    var config = {
        baseUrl: 'grunt/js/',
        paths: {
            jquery: '../../static/lib/jquery-2.0.3',
            mocha: '../../test/libraries/mocha',
            chai: '../../test/libraries/chai',
            runner: '../../test/runner',
            specs: '../../test/specs/'
        },
        urlArgs: 'v=' + new Date().getTime() //cache bust
    };

//    only set up this is run through karma instead of mocha directly
    if (window.__karma__){
        var tests = [];
        for (var file in window.__karma__.files) {
            if (/Spec\.js$/.test(file)) {
                tests.push(file);
            }
        }
        config.baseUrl = 'base/' + config.baseUrl;
        config.deps = tests;
        config.callback = window.__karma__.start;
    }
    return config;
}



define('setup', function() {
    mocha.setup('bdd');
    mocha.setup({ignoreLeaks: true}); //otherwise mocha complains about jquery and moment being globals
});

define('setup-chai',['chai'], function(chai) { //dont think this is being used yet
    window.chai = chai;
    window.assert = chai.assert;
    window.expect = chai.expect;
    window.to = chai.to;
    window.should = chai.should();

});

requirejs.config(requireConfig());
require(['setup']);
require(['setup-chai']);

window.turnOffAnimation = function(selector){
    var offTime = '10ms'; //can't be zero as we still need the 'end' events to fire.
    if (selector){
        $("<style type='text/css' class='turnOffAnimation'> body " + selector + "{ transition-duration:" + offTime + "!important;-webkit-transition-duration:" + offTime + "!important; -webkit-animation-duration: " + offTime + "!important;animation-duration:" + offTime + "!important;} </style>").appendTo("head");
    } else {
        $('.turnOffAnimation').remove();
    }
};