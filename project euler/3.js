function largestPrimeFactor(number) {
    let prime_no = 2,
      max = 1;
    while (prime_no <= number) {
      if (number % prime_no == 0) {
        max = prime_no;
        number = number / prime_no;
      } else prime_no++;
    }
    return max;
  }