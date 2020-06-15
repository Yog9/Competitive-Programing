// var print = this.print || require("lol-io").print;
// var write = this.write || require("lol-io").write;
// var readline = this.readline || require("lol-io").readline;
var a = readline();
var h = "hello";
var j = 0,
  count = 0;
var len_a = a.length;
for (var i = 0; i < len_a; i++) {
  if (h[j] === a[i]) {
    j++;
    count++;
  }
}
if (count == 5 && len_a >= 5) print("YES");
else print("NO");
