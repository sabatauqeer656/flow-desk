import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
export async function refreshToken(req, res) {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res.status(401).json({ error: "refresh Token required" });
  jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid Token" });
    console.log("token validated ");
    const payload = { userId: user._id };
    const newAccessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1min",
    });
    res.clearCookie("acessToken");
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 1000,
    });
    console.log("REFRESH TOKEN GIVEN");
    return res.json({ success: true, msg: "success" });
  });
}
