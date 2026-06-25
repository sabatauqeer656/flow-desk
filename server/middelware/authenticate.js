import jwt from "jsonwebtoken";
function authenticateToken(req, res, next) {
  const accessToken = req.cookies.accessToken;
  console.log("Cookies received by server:", req.cookies);
  if (!accessToken) {
    return res.status(401).json({ error: "Access Denied" });
  }
  jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid Token" });
    console.log("token validated ");

    req.user = user;
    next();
  });
}

export default authenticateToken;
