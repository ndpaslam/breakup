// fitur lucu: kucing nge-"meow" random
setInterval(() => {
  if (Math.random() > 0.85) { // 15% kemungkinan
    console.log("meow~ 🐱");
  }
}, 12000);