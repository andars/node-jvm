/*
 node-jvm
 Copyright (c) 2013 Yaroslav Gaponov <yaroslav.gaponov@gmail.com>
*/

var util = require("util");

var out = module.exports = function() {
    if (this instanceof out) {        
    } else {
        return new out();
    }
};

out.getClassName = function() {
    return "java/io/PrintStream";
}
 
out.prototype["print"] = function() {
    process.stdout.write.apply(process.stdout, arguments);
};

out.prototype["println"] = function() {
    console.log.apply(null, arguments);
//    console.log("\n");
};

out.prototype["format"] = function(fmt, args) {
    console.log(util.format.apply(null, [fmt].concat(args)));
}
