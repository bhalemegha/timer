const timer = function(arr) {
  if (arr.length === 0) {
    return;
  }
  arr.sort();
  arr.forEach(element => {
    if (!isNaN(parseInt(element)) && parseInt(element) !== 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (Number(element) * 1000));
    }
  });
}

timer(process.argv.slice(2));