const express = require("express");

const app = express();
app.get("/contact", (req, res) => {
  res.send("cd");
});
app.get("/about", (req, res) => {
  res.send("cd");
});
app.get("/", (req, res) => {
  const arr = [
    1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 3, 4, 4, 4, 2, 1,
  ];
  const uniqa = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniq.includes(arr[i])) uniq.push(arr[i]);
  }
  res.send(uniqa);
});

app.listen(3000, () => {
  console.log("server is started");
});