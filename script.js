function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = [1, 2, 3, 4];
      resolve(arr);
    }, 3000);
  });
}

manipulateData()
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter((num) => num % 2 === 0);
        document.getElementById("output").innerText = `${evenNumbers.join(
          ","
        )}`;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").innerText = `${multipliedNumbers.join(
          ","
        )}`;
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    document.getElementById("output").innerText = `Error: ${error}`;
  });
