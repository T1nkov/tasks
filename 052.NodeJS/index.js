const express = require("express");
const {
  getAllData,
  getId,
  updateDatabyId,
  deleteElementById,
} = require("./service");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  try {
    const allData = getAllData();
    res.status(200).send(allData);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const get = getId(id);
    res.status(200).send(get);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const fil = updateDatabyId(id, label, category, priority);
    res.status(200).send(fil);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const filter = deleteElementById(id);
    res.status(200).send(filter);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("server started");
});
