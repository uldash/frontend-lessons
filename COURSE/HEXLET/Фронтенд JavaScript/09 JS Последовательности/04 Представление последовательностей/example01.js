function sum(n) {
    return n === 0 ? 0 : n + sum(n - 1)
  }
  
  console.time("run")
  sum(1000)
  console.timeEnd("run")