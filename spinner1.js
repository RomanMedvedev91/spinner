process.stdout.write("hello from spinner1.js... \rheyyy\n");

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 400);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1000);
setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1300);
setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1600);
setTimeout(() => {
  process.stdout.write("\r|\n");
}, 1900);
