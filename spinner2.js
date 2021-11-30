const spinnerDance = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|    \n'];
let increment = 100;
for (let item of spinnerDance) {

  setTimeout(() => {
    process.stdout.write(item);
  }, increment, item);
  increment += 200;
}