var compact2string = require("../");
var bops = require("bops");

var iphost = compact2string(bops.from("0A0A0A05FF80", "hex"));

console.log(iphost);