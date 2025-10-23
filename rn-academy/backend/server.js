import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data/enrollments.json";

app.post("/api/enroll", (req, res) => {
  const enrollment = req.body;
  let data = [];

  if (fs.existsSync(DATA_FILE)) {
    const json = fs.readFileSync(DATA_FILE);
    data = JSON.parse(json);
  }

  data.push(enrollment);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.status(200).json({ message: "Enrollment saved successfully" });
});

app.get("/api/enroll", (req, res) => {
  if (fs.existsSync(DATA_FILE)) {
    const json = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(json));
  } else {
    res.json([]);
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));