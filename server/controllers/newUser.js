import User from "../models/userModel.js";
import bcrypt from "bcrypt";

//create new user
export async function createNewUser(req, res) {
  const { newUserEmail, plainPassword, newUsername } = req.body;

  if (!newUserEmail || !plainPassword || !newUsername) {
    return res
      .status(400)
      .json({ success: false, message: "please fill fields correctly" });
  }
  try {
    const isOldUser = await User.findOne({
      email: newUserEmail,
    });

    if (isOldUser) {
      return res
        .status(409)
        .json({ success: false, message: "this email is already in use" });
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(plainPassword, saltRounds);

    const newUser = await User.create({
      email: newUserEmail,
      username: newUsername,
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      message: "created new user",
      newUser: newUser.username,
      userId: newUser._id,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
