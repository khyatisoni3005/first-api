// 7
// const http = require("http");
// function datacontrol(req, resp) {
//     resp.write("<h1>helo</h1>")
//     resp.end();
// }
// http.createServer(datacontrol).listen(4590)


// 8
// let colors = require("colors")
// console.log("helo".gray);


let MathService = require("./math.js")
console.log(MathService.sum(21, 21));
console.log(MathService.multiply(210, 21));

