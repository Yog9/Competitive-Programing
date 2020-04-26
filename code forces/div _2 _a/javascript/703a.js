// var print = this.print || require("lol-io").print;
// var write = this.write || require("lol-io").write;
// var readline = this.readline || require("lol-io").readline;
var n = readline();
var a = [];
var i = 0;
var count_m = 0,
  count_c = 0;
while (i < n) {
  a = readline()
    .split(" ")
    .map((a) => parseInt(a));
  if (a[0] > a[1]) {
    count_m++;
  } else if (a[0] < a[1]) {
    count_c++;
  }
  i++;
}
if (count_m > count_c) print("Mishka");
else if (count_c > count_m) print("Chris");
else print("Friendship is magic!^^");
