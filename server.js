// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const example_page = require("./routes/example");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from Express!" });
// });

app.use("/", example_page);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});