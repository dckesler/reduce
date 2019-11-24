function flatten(arr) {
  return arr.reduce((prev, current) => {
    return Array.isArray(current)
      ? [...prev, ...flatten(current)]
      : [...prev, current]
  }, []);
}
