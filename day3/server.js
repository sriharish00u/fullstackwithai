const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://admin:admin123@ac-bpye3dx-shard-00-00.dgkjwsa.mongodb.net:27017,ac-bpye3dx-shard-00-01.dgkjwsa.mongodb.net:27017,ac-bpye3dx-shard-00-02.dgkjwsa.mongodb.net:27017/studentsDB?ssl=true&replicaSet=atlas-zoy5ys-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const Student = require("./models/Student");

// CREATE
app.post("/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// READ
app.get("/students", async (req, res) => {
  const students = await Student.find({ isDeleted: false });
  res.json(students);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// SOFT DELETE
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, {
    isDeleted: true
  });
  res.json({ message: "Soft deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

