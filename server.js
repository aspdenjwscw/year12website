const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let users = [];

// Load existing users
if (fs.existsSync("users.json")) {
  users = JSON.parse(fs.readFileSync("users.json"));
}

// Register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const existing = users.find(u => u.username === username);
  if (existing) return res.send("Username already taken");

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  res.send("Registered successfully");
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.send("Invalid username");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.send("Invalid password");

  res.send(`Welcome, ${username}!`);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
