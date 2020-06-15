var print = this.print || require("lol-io").print;
var write = this.write || require("lol-io").write;
var readline = this.readline || require("lol-io").readline;
let n = readline();
let a = readline()
  .split(" ")
  .map((a) => parseInt(a));
let sum = a.reduce((x, y) => x + y, 0);
let x = Math.floor(sum / 2);
let final_sum = 0;
let count = 0;
let new_arr = a.sort((t, b) => {
  return t - b;
});
for (let i = n - 1; i >= 0; i--) {
  final_sum += new_arr[i];
  count++;
  if (final_sum > x) {
    print(count);
    break;
  }
}
