import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userid) => {
  const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // cannot be accessed by client side, prevents XSS attacks
    secure: process.env.NODE_ENV === "production", // only send cookie over HTTPS
    sameSite: "strict", // prevents an attack called CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
