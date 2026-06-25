import User from "../../models/userModel.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
export async function loginUser(req, res) {
  const { userEmail, userPassword } = req.body;

  if (!userEmail || !userPassword) {
    return res
      .status(400)
      .json({ success: false, message: "please fill fields correctly" });
    ``;
  }

  try {
    const isUser = await User.findOne({
      email: userEmail,
    });

    const isCorrectPassoword = await bcrypt.compare(
      userPassword,
      isUser.password,
    );
    if (!isCorrectPassoword) {
      return res
        .status(404)
        .json({ success: false, message: "incorrect password" });
    }

    const payload = {
      userId: isUser._id,
    };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1min",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
      expiresIn: "2h",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 2 * 60 * 60 * 1000,
    });
    return res.status(200).json({ success: true, message: "user logged in" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: error.message });
  }
}
