var print = this.print || require("lol-io").print;
var write = this.write || require("lol-io").write;
var readline = this.readline || require("lol-io").readline;
var t = readline();
var a = [];
var i = 0;
while (i < t) {
    a = readline().split(" ").map((a) => parseInt(a));
    var ans = 0;
    for (var j = 0; j < a[0]; j++) {
        ans = j + Math.ceil(a[1]/(j+1))
        if (ans <= a[0]) {
            print('YES');
            break;
        }
    }
    if (ans > a[0]) print("NO");
    i++;
}