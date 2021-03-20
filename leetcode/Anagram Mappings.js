//https://heip.github.io/LeetCodePremium/problems/find-anagram-mappings.html

function anagramMappings(a, b) {
  let B = {};
  for (let i = 0; i < b.length; i++) {
    B[b[i]] = i;
  }
  for (let i = 0; i < a.length; i++) {
    b[i] = B[a[i]];
  }
  console.log(b)
  //return b;
}
anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]);
