module.exports = function (callback, speed) {
  var chars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  var currentChar = 0;

  callback(chars[currentChar]);
  currentChar++;

  return setInterval(function () {
    if (currentChar === chars.length) {
      currentChar = 0;
    }

    callback(chars[currentChar]);
    currentChar++;
  }, speed);
};
