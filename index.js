(function () {
    'use strict';
    var vm = require('vm');
    var fs = require('fs');

    module.exports = () => {
        var frak = fs.readFileSync('./assets/frak-stable.min.js');
        var Wayfinder2D = fs.readFileSync('./assets/Wayfinder2D.min.js');
        var Wayfinder3D = fs.readFileSync('./assets/Wayfinder3D.min.js');
        var WayfinderUI = fs.readFileSync('./assets/WayfinderUI.min.js');
        var BasicUI = fs.readFileSync('./assets/BasicUI.min.js');


        var context = { 
            frak: frak, 
            Wayfinder2D: Wayfinder2D, 
            Wayfinder3D: Wayfinder3D,
            WayfinderUI: WayfinderUI,
            BasicUI: BasicUI
        };
        return context;
    };
})();