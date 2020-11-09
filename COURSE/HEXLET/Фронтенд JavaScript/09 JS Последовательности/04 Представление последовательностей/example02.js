function sum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
      sum += i
    }
  
    return sum
  }
  
  console.time("run")
  sum(1000)
  console.timeEnd("run")