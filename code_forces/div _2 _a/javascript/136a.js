// var print = this.print || require("lol-io").print;
// var write = this.write || require("lol-io").write;
// var readline = this.readline || require("lol-io").readline;
var n = readline();
var a = [];
var output=[];
var x;
a = readline()
.split(" ")
.map((a) => parseInt(a));
for(var i=1;i<=n;i++){
   x= a.indexOf(i)
   output.push(x+1)
}
print(output.join(" "))
