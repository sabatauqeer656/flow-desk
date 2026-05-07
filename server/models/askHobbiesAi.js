// Movies model Schema for asking ai about hobbies
import mongoose from "mongoose";
const hobbiesSchema = new mongoose.Schema({
  hobbiesInquiry: { type: String, required: true },
});
const AskHobbies = mongoose.model("AskHobbiesAi", hobbiesSchema);
export default AskHobbies;
