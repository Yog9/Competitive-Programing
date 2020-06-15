// var print = this.print || require("lol-io").print;
// var write = this.write || require("lol-io").write;
// var readline = this.readline || require("lol-io").readline;
var n = readline();
function SumOfDigit(n) {
  var r = 0,
    sum = 0;
  while (n > 0) {
    r = n % 10;
    n = Math.floor(n / 10);
    sum += r;
  }
  return sum;
}
var count = 0;
while (n >= 10) {
  n = SumOfDigit(n);
  count++;
}
print(count);
