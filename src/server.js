const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));

// app.get("/", (req, res) => {
//   res.send("Server Response Success");
// });

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
