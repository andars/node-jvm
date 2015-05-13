/*
 node-jvm
 Copyright (c) 2013 Yaroslav Gaponov <yaroslav.gaponov@gmail.com>
*/

var util = require("util");

var System = module.exports = function() {
    if (this instanceof System) {
    } else {
        return new System();
    }
}

System.getClassName = function() {
    return "java/lang/System";
}
 

System["exit"] = function() {
    process.exit();
}

System["out"] = {
    "print": function() {
        console.log.apply(null, arguments);
    },
    "println": function() {
        console.log.apply(null, arguments);
        //console.log("\n");
    },
    "format": function(fmt, args) {
        console.log(util.format.apply(null, [fmt].concat(args)));
    }
}

System["currentTimeMillis"] = function() {
    return new Date().getTime();
}    




