function fibonacci(n, series = [0, 1]) {
    if (n <= 1) return series.slice(0, n + 1);
    if (series.length - 1 === n) return series;
    
    const nextValue = series[series.length - 1] + series[series.length - 2];
    return fibonacci(n, [...series, nextValue]);
  }

// Jangan hapus kode di bawah ini!
export default fibonacci;
