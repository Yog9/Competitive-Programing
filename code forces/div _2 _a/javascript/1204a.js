// var print = this.print || require("lol-io").print;
// var write = this.write || require("lol-io").write;
// var readline = this.readline || require("lol-io").readline;
// Revisit Again
var n = readline();
var decimal;
function bin2dec(num) {
  return num
    .split("")
    .reverse()
    .reduce(function(x, y, i) {
      return y === "1" ? x + Math.pow(2, i) : x;
    }, 0);
}
decimal = bin2dec(n);
print(Math.ceil(Math.log(decimal) / Math.log(4)));
