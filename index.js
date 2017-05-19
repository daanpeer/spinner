module.exports = (callback, speed) => {
  const chars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  let currentChar = 0

  return setInterval(() => {
    if (currentChar === chars.length) {
      currentChar = 0
    }

    callBack(chars[currentChar])
    currentChar++
  }, speed)
}
