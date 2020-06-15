// var print = this.print || require("lol-io").print;
// var write = this.write || require("lol-io").write;
// var readline = this.readline || require("lol-io").readline;
var n = readline();
var a = [4, 7, 44, 47, 74, 444, 447, 474, 477, 744, 747, 774];
var flag = false;
for (var i = 0; i < a.length; i++) {
  if (n % a[i] === 0) flag = true;
}
if (flag === true) {
  print("YES");
} else print("NO");
