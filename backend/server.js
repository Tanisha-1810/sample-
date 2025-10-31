import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Sample API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "backend", timestamp: new Date() });
});

app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Alice", course: "Azure Fundamentals" },
    { id: 2, name: "Bob", course: "Kubernetes Basics" },
    { id: 3, name: "Charlie", course: "DevOps CI/CD" }
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

