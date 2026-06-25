import mongoose from "mongoose";
const TodoListSchema = new mongoose.Schema({
  TodoListDescription: { type: String, required: true, maxLength: 30 },
  userId: { type: String, required: true },
});
const TodoList = mongoose.model("TodoList", TodoListSchema);
export default TodoList;
