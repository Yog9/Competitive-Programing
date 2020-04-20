function fiboEvenSum(n) {
    const fib = [1, 1, 2];
    let sumEven = fib[2];
    function fibonacci(n) {
      if (n <= 1) return fib[n];
      else if (fib[n]) return fib[n];
      else {
        fib[n] = fibonacci(n - 1) + fibonacci(n - 2);
        if (fib[n] % 2 == 0) sumEven += fib[n];
        return fib[n];
      }
    }
    fibonacci(n);
    return sumEven;
  }