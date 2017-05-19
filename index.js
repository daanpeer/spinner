module.exports = (callback, speed) => {
  const chars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  let currentChar = 0

  return setInterval(() => {
    if (currentChar === chars.length) {
      currentChar = 0
    }

    callback(chars[currentChar])
    currentChar++
  }, speed)
}
