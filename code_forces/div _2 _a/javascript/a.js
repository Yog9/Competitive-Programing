var print = this.print || require("lol-io").print;
var write = this.write || require("lol-io").write;
var readline = this.readline || require("lol-io").readline;
var n = readline();
var i=0;
while (i < n) {
  a = readline()
    .split(" ")
    .map((a) => parseInt(a));
  print(a[0]+a[1])
  i++;
}
