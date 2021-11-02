const position = ["|", "/", "-", "|", "\\", "-", "|", "\n"];
let duration = 100;
const spinner = function (el, duration) {
  for (const e of el) {
    duration += 300;
    setTimeout(() => {
      process.stdout.write(`\r${e}   `);
    }, duration);
  }
};
spinner(position, duration);
