const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

//Routes//
const {
  createTodo,
  getAllTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("./handlers/todo");

app.post("/todos", createTodo);
app.get("/todos", getAllTodo);
app.get("/todos/:id", getTodo);
app.put("/todos/:id", updateTodo);
app.delete("/todos/:id", deleteTodo);

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
