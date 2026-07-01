import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5051;

app.use(cors());
app.use(express.json());

const todos = [
  { id: 1, title: "Create frontend Docker image" },
  { id: 2, title: "Create backend REST API" },
  { id: 3, title: "Deploy services to Amazon ECS" },
];

app.get("/", (req, res) => {
  res.send("Backend service is running");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});